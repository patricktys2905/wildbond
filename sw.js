// Wildbond offline support, build d5ecc436d5. site.js fills in ART (path → size) and VERSION.
const ART={"art/floor.jpg":96167}, VERSION='d5ecc436d5';
const PAGE='wb-page', FILES='wb-art', FONTS='wb-fonts';
const scope=new URL(self.registration.scope);
const abs=p=>new URL(p,scope).href;

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(PAGE).then(c=>c.add(new Request(abs('index.html'),{cache:'reload'}))).then(()=>self.skipWaiting()));
});

// download any art that is missing or changed size, a few at a time so the game stays responsive
async function syncArt(){
  const c=await caches.open(FILES), want=new Set();
  const paths=Object.keys(ART);
  let i=0;
  const worker=async()=>{
    while(i<paths.length){
      const p=paths[i++], url=abs(p);want.add(url);
      const hit=await c.match(url);
      if(hit&&hit.headers.get('x-size')===String(ART[p]))continue;
      try{
        const r=await fetch(url,{cache:'reload'});
        if(r.ok)await c.put(url,await tagged(r,ART[p]));
      }catch(err){/* offline or flaky: try again next visit */}
    }
  };
  await Promise.all([worker(),worker(),worker(),worker()]);
  for(const k of await c.keys())if(!want.has(k.url))await c.delete(k);
}
async function tagged(r,size){
  const h=new Headers(r.headers);h.set('x-size',String(size));
  return new Response(await r.blob(),{status:200,headers:h});
}

self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
// the page asks for a sync on every load; one run at a time
let syncing=null;
self.addEventListener('message',e=>{
  if(e.data!=='sync')return;
  syncing=syncing||syncArt().finally(()=>{syncing=null});
  e.waitUntil(syncing);
});

// videos ask for byte ranges (iPhones insist), so slice the cached file to match
async function ranged(req,res){
  const m=/bytes=(\d+)-(\d*)/.exec(req.headers.get('range')||'');
  if(!m)return res;
  const buf=await res.arrayBuffer(), start=+m[1], end=m[2]?Math.min(+m[2],buf.byteLength-1):buf.byteLength-1;
  return new Response(buf.slice(start,end+1),{status:206,headers:{
    'Content-Type':res.headers.get('Content-Type')||'video/mp4','Content-Range':`bytes ${start}-${end}/${buf.byteLength}`,
    'Content-Length':String(end-start+1),'Accept-Ranges':'bytes'}});
}

self.addEventListener('fetch',e=>{
  const req=e.request;if(req.method!=='GET')return;
  const url=new URL(req.url);
  // the page: newest from the network when online, the saved copy when not
  if(req.mode==='navigate'&&url.origin===scope.origin){
    e.respondWith(fetch(req).then(r=>{if(r.ok){const cp=r.clone();caches.open(PAGE).then(c=>c.put(abs('index.html'),cp))}return r})
      .catch(()=>caches.match(abs('index.html'),{cacheName:PAGE})));
    return;
  }
  // art: saved copy first, otherwise fetch and keep it
  if(url.origin===scope.origin&&url.pathname.startsWith(scope.pathname+'art/')){
    const key=url.origin+url.pathname;
    e.respondWith(caches.open(FILES).then(async c=>{
      let hit=await c.match(key);
      if(!hit){
        const r=await fetch(key);
        const p=url.pathname.slice(scope.pathname.length);
        if(!r.ok||!(p in ART))return r;
        hit=await tagged(r,ART[p]);await c.put(key,hit.clone());
      }
      return ranged(req,hit);
    }));
    return;
  }
  // Google fonts: saved copy, refreshed in the background
  if(url.hostname==='fonts.googleapis.com'||url.hostname==='fonts.gstatic.com'){
    e.respondWith(caches.open(FONTS).then(async c=>{
      const hit=await c.match(req);
      const net=fetch(req).then(r=>{if(r.ok||r.type==='opaque')c.put(req,r.clone());return r}).catch(()=>hit);
      return hit||net;
    }));
  }
});

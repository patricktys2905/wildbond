// Wildbond offline support, build 01014d1c8e. site.js fills in ART (path → size) and VERSION.
const ART={"art/ashcub-1.jpg":52839,"art/ashcub-1.webp":51620,"art/ashcub-2.jpg":66344,"art/ashcub-2.webp":62590,"art/ashcub-3.jpg":74503,"art/ashcub-3.webp":71774,"art/barkcub-1.jpg":56886,"art/barkcub-1.webp":58180,"art/barkcub-2.jpg":63228,"art/barkcub-2.webp":59982,"art/barkcub-3.jpg":70403,"art/barkcub-3.webp":61354,"art/bg.jpg":152100,"art/briarchick-1.jpg":64261,"art/briarchick-1.webp":56528,"art/briarchick-2.jpg":74344,"art/briarchick-2.webp":64916,"art/briarchick-3.jpg":72041,"art/briarchick-3.webp":63338,"art/cinderbull-1.jpg":47867,"art/cinderbull-1.webp":46494,"art/cinderbull-2.jpg":72526,"art/cinderbull-2.webp":64354,"art/cinderbull-3.jpg":90628,"art/cinderbull-3.webp":81782,"art/cinderwhelp-1.jpg":56692,"art/cinderwhelp-1.webp":57696,"art/cinderwhelp-2.jpg":77626,"art/cinderwhelp-2.webp":68018,"art/cinderwhelp-3.jpg":72889,"art/cinderwhelp-3.webp":60520,"art/cragshell-1.jpg":57866,"art/cragshell-1.webp":51492,"art/cragshell-2.jpg":63667,"art/cragshell-2.webp":54784,"art/cragshell-3.jpg":64270,"art/cragshell-3.webp":56984,"art/flickerling-1.jpg":64405,"art/flickerling-1.webp":61890,"art/flickerling-2.jpg":68331,"art/flickerling-2.webp":71358,"art/flickerling-3.jpg":84302,"art/flickerling-3.webp":68110,"art/floor.jpg":96167,"art/glimmeel-1.jpg":61368,"art/glimmeel-1.webp":51162,"art/glimmeel-2.jpg":69148,"art/glimmeel-2.webp":55642,"art/glimmeel-3.jpg":71858,"art/glimmeel-3.webp":68148,"art/gloomwing-1.jpg":45022,"art/gloomwing-1.webp":47436,"art/gloomwing-2.jpg":52590,"art/gloomwing-2.webp":42048,"art/gloomwing-3.jpg":60021,"art/gloomwing-3.webp":53864,"art/griffling-1.jpg":57718,"art/griffling-1.webp":58330,"art/griffling-2.jpg":65616,"art/griffling-2.webp":63744,"art/griffling-3.jpg":73748,"art/griffling-3.webp":80882,"art/ironcalf-1.jpg":57727,"art/ironcalf-1.webp":57176,"art/ironcalf-2.jpg":69178,"art/ironcalf-2.webp":59468,"art/ironcalf-3.jpg":76219,"art/ironcalf-3.webp":62352,"art/lumikirin-1.jpg":62083,"art/lumikirin-1.webp":68924,"art/lumikirin-2.jpg":73899,"art/lumikirin-2.webp":75742,"art/lumikirin-3.jpg":70300,"art/lumikirin-3.webp":74380,"art/mossfawn-1.jpg":46658,"art/mossfawn-1.webp":41878,"art/mossfawn-2.jpg":68051,"art/mossfawn-2.webp":61080,"art/mossfawn-3.jpg":72482,"art/mossfawn-3.webp":68640,"art/nightglare-1.jpg":41670,"art/nightglare-1.webp":38904,"art/nightglare-2.jpg":59116,"art/nightglare-2.webp":52094,"art/nightglare-3.jpg":70344,"art/nightglare-3.webp":60714,"art/pebblegarg-1.jpg":47159,"art/pebblegarg-1.webp":45352,"art/pebblegarg-2.jpg":56104,"art/pebblegarg-2.webp":52058,"art/pebblegarg-3.jpg":70342,"art/pebblegarg-3.webp":64672,"art/quartzfoal-1.jpg":49852,"art/quartzfoal-1.webp":47440,"art/quartzfoal-2.jpg":63093,"art/quartzfoal-2.webp":56492,"art/quartzfoal-3.jpg":67109,"art/quartzfoal-3.webp":62124,"art/quillhawk-1.jpg":57149,"art/quillhawk-1.webp":69158,"art/quillhawk-2.jpg":69757,"art/quillhawk-2.webp":66634,"art/quillhawk-3.jpg":74637,"art/quillhawk-3.webp":71012,"art/rockling-1.jpg":53306,"art/rockling-1.webp":53478,"art/rockling-2.jpg":78782,"art/rockling-2.webp":69228,"art/rockling-3.jpg":69205,"art/rockling-3.webp":62318,"art/rootling-1.jpg":70125,"art/rootling-1.webp":71352,"art/rootling-2.jpg":97882,"art/rootling-2.webp":81812,"art/rootling-3.jpg":85147,"art/rootling-3.webp":73232,"art/salamite-1.jpg":54606,"art/salamite-1.webp":53064,"art/salamite-2.jpg":64017,"art/salamite-2.webp":57468,"art/salamite-3.jpg":73941,"art/salamite-3.webp":61792,"art/shadefoal-1.jpg":39299,"art/shadefoal-1.webp":36000,"art/shadefoal-2.jpg":64899,"art/shadefoal-2.webp":57464,"art/shadefoal-3.jpg":66565,"art/shadefoal-3.webp":57572,"art/shadeprowl-1.jpg":39156,"art/shadeprowl-1.webp":34000,"art/shadeprowl-2.jpg":48259,"art/shadeprowl-2.webp":42374,"art/shadeprowl-3.jpg":55686,"art/shadeprowl-3.webp":46132,"art/spinelet-1.jpg":60924,"art/spinelet-1.webp":53522,"art/spinelet-2.jpg":74089,"art/spinelet-2.webp":64456,"art/spinelet-3.jpg":84216,"art/spinelet-3.webp":70476,"art/sproutwolf-1.jpg":56680,"art/sproutwolf-1.webp":51694,"art/sproutwolf-2.jpg":61839,"art/sproutwolf-2.webp":56772,"art/sproutwolf-3.jpg":71762,"art/sproutwolf-3.webp":69598,"art/trillwing-1.jpg":53275,"art/trillwing-1.webp":54612,"art/trillwing-2.jpg":66171,"art/trillwing-2.webp":64240,"art/trillwing-3.jpg":66248,"art/trillwing-3.webp":67932,"art/vinesnake-1.jpg":62340,"art/vinesnake-1.webp":53180,"art/vinesnake-2.jpg":103523,"art/vinesnake-2.webp":86444,"art/vinesnake-3.jpg":73331,"art/vinesnake-3.webp":59250,"art/voltdrake-1.jpg":62324,"art/voltdrake-1.webp":54788,"art/voltdrake-2.jpg":77787,"art/voltdrake-2.webp":64608,"art/voltdrake-3.jpg":77233,"art/voltdrake-3.webp":65878,"art/voltgrub-1.jpg":59153,"art/voltgrub-1.webp":55514,"art/voltgrub-2.jpg":73321,"art/voltgrub-2.webp":67802,"art/voltgrub-3.jpg":77442,"art/voltgrub-3.webp":73344,"art/wispkit-1.jpg":55439,"art/wispkit-1.webp":52878,"art/wispkit-2.jpg":65407,"art/wispkit-2.webp":58702,"art/wispkit-3.jpg":65198,"art/wispkit-3.webp":70572,"art/zephyrling-1.jpg":54441,"art/zephyrling-1.webp":61552,"art/zephyrling-2.jpg":73003,"art/zephyrling-2.webp":63600,"art/zephyrling-3.jpg":73788,"art/zephyrling-3.webp":65218}, VERSION='01014d1c8e';
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

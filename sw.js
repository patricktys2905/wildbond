// Wildbond offline support, build 73ebba8622. site.js fills in ART (path → size) and VERSION.
const ART={"art/ashcub-1.jpg":52839,"art/ashcub-1.webp":53930,"art/ashcub-2.jpg":66344,"art/ashcub-2.webp":62608,"art/ashcub-3.jpg":74503,"art/ashcub-3.webp":72722,"art/barkcub-1.jpg":56886,"art/barkcub-1.webp":58442,"art/barkcub-2.jpg":63228,"art/barkcub-2.webp":59710,"art/barkcub-3.jpg":70403,"art/barkcub-3.webp":64816,"art/bg.jpg":136756,"art/bossalpha-1.jpg":56847,"art/bossalpha-1.webp":46442,"art/bossruin-1.jpg":75320,"art/bossruin-1.webp":69038,"art/bossthorn-1.jpg":65116,"art/bossthorn-1.webp":52786,"art/briarchick-1.jpg":64261,"art/briarchick-1.webp":59524,"art/briarchick-2.jpg":74344,"art/briarchick-2.webp":65904,"art/briarchick-3.jpg":72041,"art/briarchick-3.webp":67712,"art/cinderbull-1.jpg":47867,"art/cinderbull-1.webp":45926,"art/cinderbull-2.jpg":72526,"art/cinderbull-2.webp":65594,"art/cinderbull-3.jpg":90628,"art/cinderbull-3.webp":83388,"art/cinderwhelp-1.jpg":56692,"art/cinderwhelp-1.webp":58564,"art/cinderwhelp-2.jpg":64709,"art/cinderwhelp-2.webp":60856,"art/cinderwhelp-3.jpg":51002,"art/cinderwhelp-3.webp":44628,"art/clip-scene-cinderwhelp-wispkit.mp4":1686283,"art/clip-scene-gloomwing-shadeprowl.mp4":1740854,"art/clip-scene-griffling-ashcub.mp4":1647863,"art/clip-scene-lumikirin-cragshell.mp4":1757271,"art/cover-festival.jpg":71840,"art/cover-title.jpg":87010,"art/cragshell-1.jpg":57866,"art/cragshell-1.webp":51798,"art/cragshell-2.jpg":63667,"art/cragshell-2.webp":54692,"art/cragshell-3.jpg":64270,"art/cragshell-3.webp":59416,"art/flickerling-1.jpg":64405,"art/flickerling-1.webp":69122,"art/flickerling-2.jpg":68331,"art/flickerling-2.webp":75056,"art/flickerling-3.jpg":84302,"art/flickerling-3.webp":74590,"art/floor.jpg":167983,"art/glimmeel-1.jpg":61368,"art/glimmeel-1.webp":56848,"art/glimmeel-2.jpg":69148,"art/glimmeel-2.webp":57928,"art/glimmeel-3.jpg":71858,"art/glimmeel-3.webp":70172,"art/gloomwing-1.jpg":45022,"art/gloomwing-1.webp":47598,"art/gloomwing-2.jpg":52590,"art/gloomwing-2.webp":42488,"art/gloomwing-3.jpg":60021,"art/gloomwing-3.webp":54952,"art/griffling-1.jpg":57718,"art/griffling-1.webp":57264,"art/griffling-2.jpg":65616,"art/griffling-2.webp":65082,"art/griffling-3.jpg":73748,"art/griffling-3.webp":81716,"art/ironcalf-1.jpg":57727,"art/ironcalf-1.webp":56458,"art/ironcalf-2.jpg":69178,"art/ironcalf-2.webp":58802,"art/ironcalf-3.jpg":76219,"art/ironcalf-3.webp":69690,"art/lumikirin-1.jpg":62083,"art/lumikirin-1.webp":68702,"art/lumikirin-2.jpg":73899,"art/lumikirin-2.webp":78844,"art/lumikirin-3.jpg":70300,"art/lumikirin-3.webp":88226,"art/mossfawn-1.jpg":46658,"art/mossfawn-1.webp":42600,"art/mossfawn-2.jpg":68051,"art/mossfawn-2.webp":62812,"art/mossfawn-3.jpg":72482,"art/mossfawn-3.webp":72922,"art/nightglare-1.jpg":41670,"art/nightglare-1.webp":37732,"art/nightglare-2.jpg":59116,"art/nightglare-2.webp":53758,"art/nightglare-3.jpg":70344,"art/nightglare-3.webp":64772,"art/pebblegarg-1.jpg":47159,"art/pebblegarg-1.webp":45300,"art/pebblegarg-2.jpg":56104,"art/pebblegarg-2.webp":51704,"art/pebblegarg-3.jpg":70342,"art/pebblegarg-3.webp":73892,"art/quartzfoal-1.jpg":49852,"art/quartzfoal-1.webp":49534,"art/quartzfoal-2.jpg":63093,"art/quartzfoal-2.webp":58914,"art/quartzfoal-3.jpg":67109,"art/quartzfoal-3.webp":63742,"art/quillhawk-1.jpg":57149,"art/quillhawk-1.webp":71598,"art/quillhawk-2.jpg":69757,"art/quillhawk-2.webp":71636,"art/quillhawk-3.jpg":74637,"art/quillhawk-3.webp":79170,"art/rockling-1.jpg":53306,"art/rockling-1.webp":53060,"art/rockling-2.jpg":78782,"art/rockling-2.webp":70452,"art/rockling-3.jpg":69205,"art/rockling-3.webp":65364,"art/rootling-1.jpg":70125,"art/rootling-1.webp":73098,"art/rootling-2.jpg":97882,"art/rootling-2.webp":84610,"art/rootling-3.jpg":85147,"art/rootling-3.webp":74368,"art/salamite-1.jpg":54606,"art/salamite-1.webp":54884,"art/salamite-2.jpg":64017,"art/salamite-2.webp":59082,"art/salamite-3.jpg":73941,"art/salamite-3.webp":66852,"art/scene-cinderwhelp-wispkit.jpg":103159,"art/scene-gloomwing-shadeprowl.jpg":96814,"art/scene-griffling-ashcub.jpg":99324,"art/scene-lumikirin-cragshell.jpg":128038,"art/shadefoal-1.jpg":39299,"art/shadefoal-1.webp":36390,"art/shadefoal-2.jpg":64899,"art/shadefoal-2.webp":60118,"art/shadefoal-3.jpg":66565,"art/shadefoal-3.webp":55608,"art/shadeprowl-1.jpg":39156,"art/shadeprowl-1.webp":34774,"art/shadeprowl-2.jpg":48259,"art/shadeprowl-2.webp":43844,"art/shadeprowl-3.jpg":55686,"art/shadeprowl-3.webp":49062,"art/spinelet-1.jpg":60924,"art/spinelet-1.webp":56144,"art/spinelet-2.jpg":74089,"art/spinelet-2.webp":68488,"art/spinelet-3.jpg":84216,"art/spinelet-3.webp":73826,"art/sproutwolf-1.jpg":56680,"art/sproutwolf-1.webp":51584,"art/sproutwolf-2.jpg":61839,"art/sproutwolf-2.webp":58698,"art/sproutwolf-3.jpg":71762,"art/sproutwolf-3.webp":71522,"art/trillwing-1.jpg":53275,"art/trillwing-1.webp":60072,"art/trillwing-2.jpg":66171,"art/trillwing-2.webp":66948,"art/trillwing-3.jpg":66248,"art/trillwing-3.webp":74222,"art/vinesnake-1.jpg":62340,"art/vinesnake-1.webp":56486,"art/vinesnake-2.jpg":63878,"art/vinesnake-2.webp":65256,"art/vinesnake-3.jpg":73331,"art/vinesnake-3.webp":59904,"art/voltdrake-1.jpg":62324,"art/voltdrake-1.webp":58360,"art/voltdrake-2.jpg":67995,"art/voltdrake-2.webp":62550,"art/voltdrake-3.jpg":74851,"art/voltdrake-3.webp":78034,"art/voltgrub-1.jpg":59153,"art/voltgrub-1.webp":56180,"art/voltgrub-2.jpg":73321,"art/voltgrub-2.webp":69460,"art/voltgrub-3.jpg":77442,"art/voltgrub-3.webp":77946,"art/wispkit-1.jpg":55439,"art/wispkit-1.webp":59832,"art/wispkit-2.jpg":65407,"art/wispkit-2.webp":62112,"art/wispkit-3.jpg":65198,"art/wispkit-3.webp":76104,"art/zephyrling-1.jpg":54441,"art/zephyrling-1.webp":67016,"art/zephyrling-2.jpg":60896,"art/zephyrling-2.webp":66608,"art/zephyrling-3.jpg":73788,"art/zephyrling-3.webp":74194}, VERSION='73ebba8622';
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

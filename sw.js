// Codex Finance v0.7 TEST – bare appfiler caches. Aldri lagring av økonomidata i SW.
const CACHE = 'codex-finance-static-v0.7.0';
const ASSETS = ['./','./index.html','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./icons/apple-touch-icon-180.png'];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));
});
self.addEventListener('activate',event=>{
  event.waitUntil((async()=>{
    const keys=await caches.keys();
    await Promise.all(keys.filter(k=>k.startsWith('codex-finance-static-')&&k!==CACHE).map(k=>caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener('message',event=>{if(event.data?.type==='SKIP_WAITING')self.skipWaiting()});
self.addEventListener('fetch',event=>{
  const req=event.request;
  if(req.method!=='GET')return;
  const url=new URL(req.url);
  if(url.origin!==self.location.origin)return;
  if(req.mode==='navigate'){
    event.respondWith((async()=>{
      try {
        const result=await fetch(req);
        if(result.ok){const cache=await caches.open(CACHE);await cache.put('./index.html',result.clone())}
        return result;
      }catch{
        const cache=await caches.open(CACHE);
        return await cache.match('./index.html') || Response.error();
      }
    })());
    return;
  }
  event.respondWith(caches.match(req).then(cached=>cached||fetch(req)));
});

/* Hotel Ambica Palace — shared behaviour for every page */
const LISTING = "https://www.booking.com/hotel/in/ambica-palace-aiims-delhi-local-id-allow.en-gb.html?aid=356980&label=gog235jc-10CAsobEIoYW1iaWNhLXBhbGFjZS1haWltcy1kZWxoaS1sb2NhbC1pZC1hbGxvd0gzWANobIgBAZgBM7gBB8gBDNgBA-gBAfgBAYgCAagCAbgCop6N2AbAAgHSAiRmODhkZjNhNy02MmQzLTQ5ZWUtODhiOS05ZGVmZWUwMmE3ZjfYAgHgAgE&sid=bd74d8b8aef050c0282e0c1646c54907&all_sr_blocks=826431902_407383852_2_42_0&checkin=2026-11-23&checkout=2026-11-24&dest_id=-2106102&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=826431902_407383852_2_42_0&hpos=1&matching_block_id=826431902_407383852_2_42_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=826431902_407383852_2_42_0__344250&srepoch=1795379007&srpvid=bafcf704aa11c543324cfaf67fa3b3ff&type=total&ucfs=1&";

/* Photo catalogue (files live in /img). cat = exterior | lobby | room | bath */
const IMG = {
  "ext-wide":["Hotel Ambica Palace entrance at night with illuminated sign","exterior","Hotel entrance, lit up at night"],
  "ext-close":["Illuminated Ambica Palace sign above the glass reception front","exterior","The illuminated hotel sign"],
  "ext-entrance":["Hotel entrance steps with green mat and glass reception windows","exterior","Entrance & reception frontage"],
  "lobby-reception":["Reception lobby with carved wooden desk, leather sofa and marble floor","lobby","Reception lobby"],
  "lobby-petals":["Reception desk with a brass bowl of rose petals in the foreground","lobby","Welcome with rose petals"],
  "corridor-staircase":["Corridor with wrought-iron staircase and framed artwork","lobby","Corridor & staircase"],
  "bathroom":["Private bathroom with glass shower, mirror and stone vanity","bath","Private bathroom with glass shower"],
  "room-modern":["Modern double room with beige headboard, AC, TV and desk","room","Modern double room"],
  "room-classic-tv":["Double room with carved wooden bed, sofa, TV and air-conditioning","room","Double room with sofa and TV"],
  "room-red":["Spacious room with double bed, red cushions, desk and wall-mounted TV","room","Room with desk and wall-mounted TV"],
  "room-deluxe-sofa":["Deluxe room with double bed, cream sofa, coffee table and flowers","room","Deluxe room with seating"],
  "room-deluxe-wood":["Deluxe room with wooden bed, upholstered sofa and wall lamps","room","Deluxe room, wooden furnishings"],
  "room-deluxe-front":["Deluxe room, front view of the double bed with side tables","room","Deluxe room, front view"],
  "room-family":["Large family room with two beds and a seating area","room","Family room with two beds"]
};
const src = k => `img/${k}.jpg`;
const ROOMS = [
  {id:"dlx", name:"Deluxe Double Room", guests:2, bed:"1 large double bed", size:"Up to 2 adults", tags:["AC","Free Wi-Fi","TV","Sofa seating","Attached bath","Geyser"], best:"Couples and guests who like extra seating space", photos:["room-deluxe-sofa","room-deluxe-wood","room-deluxe-front"]},
  {id:"cls", name:"Classic Double Room", guests:2, bed:"1 double bed", size:"Up to 2 adults", tags:["AC","Free Wi-Fi","TV","Work desk","Attached bath","Geyser"], best:"Solo travellers, business guests, short hospital visits", photos:["room-modern","room-classic-tv","room-red"]},
  {id:"fam", name:"Family Room", guests:3, bed:"Two beds (extra bedding on request)", size:"3 guests", tags:["AC","Free Wi-Fi","TV","Seating area","Attached bath","Longer stays"], best:"Families, patient and attendants, extended treatment stays", photos:["room-family"]}
];
const AMEN = [
  ["M12 6v6l4 2","24-hour front desk","Check in or ask for help at any hour, useful for late arrivals and hospital schedules."],
  ["M5 12.55a11 11 0 0 1 14 0M8.5 16a6 6 0 0 1 7 0M12 20h.01","Free Wi-Fi","Stay connected in every room."],
  ["M3 7h18v10H3zM7 21h10","Air-conditioned rooms","Cool, quiet rooms with TV, geyser and an attached bathroom with bidet and toiletries."],
  ["M4 20V8l8-5 8 5v12M9 20v-6h6v6","Concierge & ATM","Help with cabs, directions and local needs; an ATM is available."],
  ["M3 17h2l1-5h12l1 5h2M7 17a2 2 0 1 0 0 .01M17 17a2 2 0 1 0 0 .01","Free parking","Complimentary parking for guests, subject to availability."],
  ["M6 3h12v6a6 6 0 0 1-12 0zM12 15v6M8 21h8","Restaurant & terrace","On-site dining and a terrace to unwind. Free bikes for local rides."]
];
const NEAR = [
  ["Safdarjung Hospital","about 8 min on foot","0.6 km"],
  ["AIIMS (All India Institute of Medical Sciences)","about 15 min on foot","~1.2 km"],
  ["Sarojini Nagar Market","shopping & street food","~16 min walk"],
  ["Dilli Haat INA","crafts & regional cuisine","~0.9 km"],
  ["Hauz Khas Village","cafes, lake, heritage","~14 min walk"],
  ["Lodhi Gardens","green city escape","~4 km"],
  ["Gandhi Smriti","heritage museum","~5 km"],
  ["Indira Gandhi Int’l Airport","by taxi or Airport Express","~14 km"]
];

const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const set = (s,h) => { const e=$(s); if(e) e.innerHTML=h; };
$$("[data-listing]").forEach(a => a.href = LISTING);
set("#yr", new Date().getFullYear());

/* ---------- Photos ---------- */
const photo = (k,cls="") => `<img class="${cls}" src="${src(k)}" alt="${IMG[k][0]}" loading="lazy" decoding="async">`;
const HERO = ["ext-wide","room-deluxe-sofa","lobby-petals","bathroom","lobby-reception"];
set("#gallery", HERO.map(k=>`<a class="shot" role="listitem" href="${src(k)}" data-lb="hero" data-k="${k}" aria-label="Open photo: ${IMG[k][2]}"><figure style="position:absolute;inset:0;margin:0">${photo(k)}<figcaption>${IMG[k][2]}</figcaption></figure></a>`).join(""));
set("#about-photo", photo("ext-entrance")); set("#svc-photo", photo("lobby-reception")); set("#loc-photo", photo("ext-close"));

/* full gallery page */
const GCATS=[["all","All photos"],["exterior","Exterior"],["lobby","Lobby & corridors"],["room","Rooms"],["bath","Bathroom"]];
set("#gfilters", GCATS.map(([c,l],i)=>`<button aria-pressed="${i===0}" data-c="${c}">${l}</button>`).join(""));
set("#photos", Object.keys(IMG).map(k=>`<a class="ph rv" href="${src(k)}" data-lb="grid" data-k="${k}" data-c="${IMG[k][1]}" aria-label="Open photo: ${IMG[k][2]}">${photo(k)}<span>${IMG[k][2]}</span></a>`).join(""));
$$("#gfilters button").forEach(b=>b.addEventListener("click",()=>{
  $$("#gfilters button").forEach(x=>x.setAttribute("aria-pressed",x===b));
  $$("#photos .ph").forEach(p=>p.hidden = !(b.dataset.c==="all"||p.dataset.c===b.dataset.c));
}));

/* ---------- Rooms ---------- */
set("#rooms-grid", ROOMS.map(r=>`
  <article class="room rv" data-g="${r.guests}">
    <a class="pic" href="${src(r.photos[0])}" data-lb="room-${r.id}" data-k="${r.photos[0]}" aria-label="Open photos of ${r.name}">${photo(r.photos[0])}<span class="count">${r.photos.length} photo${r.photos.length>1?"s":""}</span></a>
    ${r.photos.slice(1).map(k=>`<a hidden href="${src(k)}" data-lb="room-${r.id}" data-k="${k}"></a>`).join("")}
    <div class="body"><h3>${r.name}</h3>
      <div class="meta"><span>🛏 ${r.bed}</span><span>👥 ${r.size}</span></div>
      <p style="font-size:.9rem;color:var(--muted)">Best for: ${r.best}</p>
      <ul class="tags">${r.tags.map(t=>`<li>${t}</li>`).join("")}</ul>
      <a class="btn btn-ink" href="book.html">Enquire about this room</a>
    </div></article>`).join(""));
set("#cmp", ROOMS.map(r=>`<tr><td><b>${r.name}</b></td><td>${r.bed}</td><td>${r.size}</td><td>${r.best}</td></tr>`).join(""));
$$(".filters button").forEach(b=>b.addEventListener("click",()=>{
  $$(".filters button").forEach(x=>x.setAttribute("aria-pressed",x===b));
  const f=b.dataset.f;
  $$(".room").forEach(c=>{ const g=+c.dataset.g; c.hidden = !(f==="all"||(f==="2"&&g<=2)||(f==="3"&&g>=3)); });
}));

/* ---------- Lightbox ---------- */
(function(){
  const lb=document.createElement("div"); lb.className="lb"; lb.hidden=true; lb.setAttribute("role","dialog"); lb.setAttribute("aria-modal","true"); lb.setAttribute("aria-label","Photo viewer");
  lb.innerHTML=`<button class="lb-x" aria-label="Close">✕</button><button class="lb-p" aria-label="Previous photo">‹</button><figure><img alt=""><figcaption></figcaption></figure><button class="lb-n" aria-label="Next photo">›</button>`;
  document.body.appendChild(lb);
  const im=lb.querySelector("img"), cap=lb.querySelector("figcaption"); let list=[], i=0, last=null;
  const show=n=>{ i=(n+list.length)%list.length; const k=list[i].dataset.k; im.src=src(k); im.alt=IMG[k][0]; cap.textContent=`${IMG[k][2]} · ${i+1} / ${list.length}`; lb.classList.toggle("single",list.length<2); };
  const close=()=>{ lb.classList.remove("on"); setTimeout(()=>{lb.hidden=true;im.removeAttribute("src");},200); document.body.style.overflow=""; if(last) last.focus(); };
  document.addEventListener("click",e=>{
    const a=e.target.closest("[data-lb]"); if(!a) return; e.preventDefault();
    list=$$(`[data-lb="${a.dataset.lb}"]`).filter(x=>!(x.classList.contains("ph")&&x.hidden)); last=a;
    show(list.indexOf(a)); lb.hidden=false; document.body.style.overflow="hidden"; requestAnimationFrame(()=>lb.classList.add("on")); lb.querySelector(".lb-x").focus();
  });
  lb.querySelector(".lb-x").onclick=close; lb.querySelector(".lb-p").onclick=()=>show(i-1); lb.querySelector(".lb-n").onclick=()=>show(i+1);
  lb.addEventListener("click",e=>{ if(e.target===lb) close(); });
  document.addEventListener("keydown",e=>{ if(lb.hidden) return; if(e.key==="Escape") close(); if(e.key==="ArrowLeft") show(i-1); if(e.key==="ArrowRight") show(i+1); });
  let x0=null; lb.addEventListener("touchstart",e=>x0=e.touches[0].clientX,{passive:true});
  lb.addEventListener("touchend",e=>{ if(x0===null) return; const d=e.changedTouches[0].clientX-x0; if(Math.abs(d)>50) show(i+(d<0?1:-1)); x0=null; });
})();

/* ---------- Amenities / nearby ---------- */
set("#amen", AMEN.map(([d,t,p])=>`<div class="card rv"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg><h3>${t}</h3><p>${p}</p></div>`).join(""));
set("#near", NEAR.map(([n,s,d])=>`<li><div><b>${n}</b><small>${s}</small></div><span class="d">${d}</span></li>`).join(""));

/* ---------- Booking widget (book.html) ---------- */
if($("#form")){
  $("#room").innerHTML = ROOMS.map(r=>`<option value="${r.id}">${r.name} (${r.size})</option>`).join("");
  try{ const q=new URLSearchParams(location.search).get("room"); if(q && ROOMS.some(r=>r.id===q)) $("#room").value=q; }catch(e){}
  const iso = d => new Date(d.getTime()-d.getTimezoneOffset()*6e4).toISOString().slice(0,10);
  const today=new Date(), tmr=new Date(Date.now()+864e5), cin=$("#cin"), cout=$("#cout");
  cin.min=iso(today); cin.value=iso(today); cout.min=iso(tmr); cout.value=iso(tmr);
  const state={adults:2,rms:1}, lim={adults:[1,8],rms:[1,4]};
  $$(".stepper button").forEach(b=>b.addEventListener("click",()=>{
    const k=b.dataset.s,[lo,hi]=lim[k];
    state[k]=Math.min(hi,Math.max(lo,state[k]+ +b.dataset.d)); $("#"+k).textContent=state[k];
    if(state.adults<state.rms){state.adults=state.rms;$("#adults").textContent=state.adults;}
    update();
  }));
  const fmt=s=>new Date(s+"T00:00").toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"});
  const nights=()=>Math.round((new Date(cout.value)-new Date(cin.value))/864e5);
  function listingUrl(){
    const u=new URL(LISTING);
    u.searchParams.set("checkin",cin.value); u.searchParams.set("checkout",cout.value);
    u.searchParams.set("group_adults",state.adults); u.searchParams.set("req_adults",state.adults); u.searchParams.set("no_rooms",state.rms);
    return u.toString();
  }
  function update(){
    if(cin.value && (!cout.value || cout.value<=cin.value)) cout.value=iso(new Date(new Date(cin.value).getTime()+864e5));
    cout.min = cin.value ? iso(new Date(new Date(cin.value).getTime()+864e5)) : iso(tmr);
    const r=ROOMS.find(x=>x.id===$("#room").value), n=nights();
    $("#s-dates").textContent=`${fmt(cin.value)} → ${fmt(cout.value)}`;
    $("#s-nights").textContent=n>0?n:"—";
    $("#s-guests").textContent=`${state.adults} adult${state.adults>1?"s":""} · ${state.rms} room${state.rms>1?"s":""}`;
    $("#s-room").textContent=r.name;
    $("#listingBtn").href=listingUrl();
  }
  [cin,cout,$("#room")].forEach(e=>e.addEventListener("change",update));
  update();
  $("#form").addEventListener("submit",e=>{
    e.preventDefault(); const err=$("#err"); err.textContent="";
    if(!cin.value||!cout.value||nights()<1){err.textContent="Please choose a check-out date after check-in.";return;}
    if(cin.value<iso(today)){err.textContent="Check-in can’t be in the past.";return;}
    update(); const nm=$("#name").value.trim();
    $("#status").textContent=`${nm?nm+", your":"Your"} stay summary is ready: ${nights()} night${nights()>1?"s":""} at Hotel Ambica Palace. Tap “Book on Booking.com” to confirm live rates and availability.`;
  });
  $("#copy").addEventListener("click",async()=>{
    const r=ROOMS.find(x=>x.id===$("#room").value);
    const t=`Enquiry — Hotel Ambica Palace, Safdarjung Enclave\nName: ${$("#name").value||"-"}\nCheck-in: ${fmt(cin.value)}\nCheck-out: ${fmt(cout.value)}\nGuests: ${state.adults} adult(s), ${state.rms} room(s)\nRoom: ${r.name}\nNotes: ${$("#note").value||"-"}`;
    try{ await navigator.clipboard.writeText(t); $("#status").textContent="Enquiry text copied. Paste it into a message to the hotel."; }
    catch{ $("#status").textContent="Couldn’t copy automatically. Please select and copy the details."; }
  });
}

/* ---------- Menu + reveal ---------- */
const mb=$("#menuBtn"), lk=$("#links");
mb.addEventListener("click",()=>{const o=lk.classList.toggle("open");mb.setAttribute("aria-expanded",o);});
lk.addEventListener("click",e=>{if(e.target.tagName==="A"){lk.classList.remove("open");mb.setAttribute("aria-expanded",false);}});
if("IntersectionObserver" in window){
  const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target);}}),{threshold:.12,rootMargin:"0px 0px -40px 0px"});
  $$(".rv").forEach(el=>io.observe(el));
} else $$(".rv").forEach(el=>el.classList.add("in"));

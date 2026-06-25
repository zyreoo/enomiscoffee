const nav=document.getElementById('nav'),totop=document.getElementById('totop');
function onScroll(){const y=window.scrollY||document.documentElement.scrollTop||0;nav.classList.toggle('scrolled',y>20);totop.classList.toggle('show',y>700);}
addEventListener('scroll',onScroll,{passive:true});
totop.onclick=()=>scrollTo({top:0,behavior:'smooth'});

const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){
  const el=e.target,sibs=[...el.parentElement.children].filter(c=>c.classList.contains('reveal')),i=sibs.indexOf(el);
  el.style.transitionDelay=(Math.max(0,i)*90)+'ms';el.classList.add('in');io.unobserve(el);
}})},{threshold:.16});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
setTimeout(()=>document.querySelectorAll('.reveal:not(.in)').forEach(el=>el.classList.add('in')),2200);

// ===== CAROUSEL (INFINITE + AUTOPLAY) =====
(function(){
  const wrap=document.querySelector('.car-wrap');
  if(!wrap) return;
  const track=wrap.querySelector('.car-track');
  const prevBtn=wrap.querySelector('.car-prev');
  const nextBtn=wrap.querySelector('.car-next');
  const dotsEl=document.querySelector('.car-dots');

  const origCards=[...track.querySelectorAll('.car-card')];
  const N=origCards.length;

  // Prepend clones (clone[0]..clone[N-1] in order before real cards)
  [...origCards].reverse().forEach(c=>{
    const cl=c.cloneNode(true);cl.setAttribute('aria-hidden','true');
    track.insertBefore(cl,track.firstChild);
  });
  // Append clones
  origCards.forEach(c=>{
    const cl=c.cloneNode(true);cl.setAttribute('aria-hidden','true');
    track.appendChild(cl);
  });

  // all[0..N-1]=prepend clones, all[N..2N-1]=real, all[2N..3N-1]=append clones
  const all=[...track.querySelectorAll('.car-card')];
  let curIdx=N;

  // Build dots for originals
  origCards.forEach((_,i)=>{
    const d=document.createElement('button');
    d.className='car-dot'+(i===0?' active':'');
    d.setAttribute('aria-label','Slide '+(i+1));
    d.addEventListener('click',()=>nav(N+i,true));
    dotsEl.appendChild(d);
  });
  const dots=[...dotsEl.querySelectorAll('.car-dot')];

  function cardOffset(idx){return all[idx]?all[idx].offsetLeft-8:0;}

  function setDot(idx){
    const ri=((idx-N)%N+N)%N;
    dots.forEach((d,i)=>d.classList.toggle('active',i===ri));
  }

  function silentJump(idx){
    track.style.scrollSnapType='none';
    track.style.scrollBehavior='auto';
    track.scrollLeft=cardOffset(idx);
    curIdx=idx;
    setDot(idx);
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      track.style.scrollSnapType='';
      track.style.scrollBehavior='';
    }));
  }

  function nav(idx,animate=true){
    curIdx=idx;setDot(idx);
    if(!animate){silentJump(idx);return;}
    track.scrollTo({left:cardOffset(idx),behavior:'smooth'});
  }

  // Init at first real card
  requestAnimationFrame(()=>silentJump(N));

  nextBtn.addEventListener('click',()=>{
    const nxt=curIdx+1;
    nav(nxt);
    if(nxt>=2*N) setTimeout(()=>silentJump(N),430);
  });

  prevBtn.addEventListener('click',()=>{
    const prv=curIdx-1;
    nav(prv);
    if(prv<N) setTimeout(()=>silentJump(2*N-1),430);
  });

  // Autoplay
  let auto=setInterval(()=>nextBtn.click(),4000);
  const stopAuto=()=>clearInterval(auto);
  const startAuto=()=>{stopAuto();auto=setInterval(()=>nextBtn.click(),4000);};
  track.addEventListener('mouseenter',stopAuto);
  track.addEventListener('mouseleave',startAuto);

})();

// ===== TAB FILTER (meniu.html) =====
(function(){
  const tabs=[...document.querySelectorAll('.tab-btn')];
  const mcards=[...document.querySelectorAll('.mcard')];
  if(!tabs.length) return;
  function filter(cat){
    tabs.forEach(t=>t.classList.toggle('active',t.dataset.cat===cat));
    mcards.forEach(c=>c.classList.toggle('hidden',cat!=='all'&&c.dataset.cat!==cat));
  }
  tabs.forEach(t=>t.addEventListener('click',()=>filter(t.dataset.cat)));
})();
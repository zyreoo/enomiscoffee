const nav=document.getElementById('nav'),totop=document.getElementById('totop');
function onScroll(){const y=window.scrollY||document.documentElement.scrollTop||0;nav.classList.toggle('scrolled',y>20);totop.classList.toggle('show',y>700);}
addEventListener('scroll',onScroll,{passive:true});
totop.onclick=()=>scrollTo({top:0,behavior:'smooth'});

const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){
  const el=e.target,sibs=[...el.parentElement.children].filter(c=>c.classList.contains('reveal')),i=sibs.indexOf(el);
  el.style.transitionDelay=(Math.max(0,i)*90)+'ms';el.classList.add('in');io.unobserve(el);
}})},{threshold:.16});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
// safety net so nothing stays hidden if scroll/IO can't be observed
setTimeout(()=>document.querySelectorAll('.reveal:not(.in)').forEach(el=>el.classList.add('in')),2200);
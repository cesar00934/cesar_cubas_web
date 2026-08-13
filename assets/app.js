(()=>{
  const menu=document.querySelector('[data-menu]');
  const nav=document.querySelector('.nav');
  if(menu&&nav){menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});}
  const obs=('IntersectionObserver'in window)?new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}}),{threshold:.08}):null;
  document.querySelectorAll('.reveal').forEach(el=>obs?obs.observe(el):el.classList.add('visible'));
  const form=document.querySelector('[data-whatsapp-form]');
  if(form){form.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(form);const n=data.get('nombre')||'Hola';const servicio=data.get('servicio')||'un proyecto';const plazo=data.get('plazo')||'por definir';const detalle=data.get('detalle')||'Quiero recibir información y una cotización.';const msg=`Hola César, soy ${n}. Quiero conversar sobre ${servicio}. Plazo aproximado: ${plazo}. Detalles: ${detalle}`;window.open(`https://wa.me/51992111057?text=${encodeURIComponent(msg)}`,'_blank','noopener,noreferrer');});}
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
})();

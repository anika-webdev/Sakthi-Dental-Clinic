
document.addEventListener("DOMContentLoaded",()=>{
  const menu=document.querySelector(".menu-toggle"), nav=document.querySelector(".nav");
  if(menu&&nav){menu.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",open)})}
  document.querySelectorAll(".faq-question").forEach(btn=>btn.addEventListener("click",()=>btn.parentElement.classList.toggle("open")));
  const slides=[...document.querySelectorAll(".testimonial")], prev=document.querySelector(".slider-btn.prev"), next=document.querySelector(".slider-btn.next");
  let idx=0;
  const show=i=>slides.forEach((s,n)=>s.classList.toggle("active",n===i));
  if(slides.length){prev?.addEventListener("click",()=>{idx=(idx-1+slides.length)%slides.length;show(idx)});next?.addEventListener("click",()=>{idx=(idx+1)%slides.length;show(idx)});setInterval(()=>{idx=(idx+1)%slides.length;show(idx)},6000)}
  const form=document.querySelector("#contactForm");
  if(form){form.addEventListener("submit",e=>{e.preventDefault(); if(!form.checkValidity()){form.reportValidity();return} const msg=document.querySelector(".form-message"); if(msg) msg.textContent="Thank you! Your message has been recorded for this demo. The clinic can connect this form to email/CRM when backend access is added."; form.reset();})}
  const year=document.querySelector("[data-year]"); if(year) year.textContent=new Date().getFullYear();
});

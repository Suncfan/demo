(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function c(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=c(t);fetch(t.href,o)}})();window.onload=()=>{let u=document.querySelector(".search-two"),r=document.querySelector("#search-hide");const c=document.querySelector(".hide");let i=u.offsetTop;document.onscroll=()=>{self.pageYOffset>=i?(r.style.top=0+"px",c.style.display="block"):(r.style.top=-60+"px",c.style.display="none")},c.onclick=()=>{self.pageYOffset>0&&window.scrollTo(0,0)};const t=localStorage.name;if(localStorage.username){let s=document.querySelector("#nickname");s.innerHTML=`你好！${t}`,s.href="#"}const o=document.querySelector(".hot-text-box");setInterval(()=>{let s=o.offsetTop;o.style.top=s-20+"px",s<=-60&&(o.style.top=0)},3e3)};const a=document.querySelector(".banner-box img"),d=document.querySelector(".banner"),f=document.querySelector(".banner .btn"),g=document.querySelector(".before"),y=document.querySelector(".after");let h=document.querySelectorAll(".status a");const[b,L,S,v,q]=[...h],n=[b,L,S,v,q],l=["./img/banner/1.jpg","./img/banner/2.jpg","./img/banner/3.jpg","./img/banner/4.jpg","./img/banner/5.jpg"];let e=0;n[e].classList.add("select");let m=()=>{e++,e>l.length-1?(e=0,n[l.length-1].classList.remove("select")):e<l.length&&n[e-1].classList.remove("select"),a.src=l[e],n[e].classList.add("select")},p=setInterval(m,2e3);d.onmouseover=()=>{f.style.opacity="1",clearInterval(p)};d.onmouseout=()=>{f.style.opacity="0",p=setInterval(m,2e3)};g.onclick=()=>{e++,e>l.length-1?(e=0,n[l.length-1].classList.remove("select")):e<l.length&&n[e-1].classList.remove("select"),a.src=l[e],n[e].classList.add("select")};y.onclick=()=>{e--,e<0?(e=l.length-1,n[0].classList.remove("select")):e>=0&&n[e+1].classList.remove("select"),a.src=l[e],n[e].classList.add("select")};
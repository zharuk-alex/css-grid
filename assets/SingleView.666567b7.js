import{T as e,L as t}from"./list.24cf424e.js";import{_ as r,r as a,o as s,c as i,d as c,w as m,h as l,i as p,F as _,e as u}from"./index.340880a2.js";const d={components:{...e,...t},computed:{itemId(){return this.$route.params.id},component(){if(this.$route.name=="template:single")return Object.keys(e)[this.itemId-1];if(this.$route.name=="lesson:single")return Object.keys(t)[this.itemId-1]}}};function f(h,k,g,x,$,o){const n=a("router-link");return s(),i(_,null,[c(n,{class:"router-link",to:"/"},{default:m(()=>[u("home")]),_:1}),(s(),l(p(o.component)))],64)}const v=r(d,[["render",f]]);export{v as default};
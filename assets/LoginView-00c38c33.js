import{e as v,f as h,r as g,o as w,c as E,a as e,z as T,i as l,g as V,u as x,b,F as I,v as d,B as y,C as L,n as S,q as k,A as D,_ as U}from"./index-828dac57.js";const n=i=>(y("data-v-17695215"),i=i(),L(),i),B={class:"container"},R={class:"row justify-content-center"},A=n(()=>e("h1",{class:"h3 mb-3 font-weight-normal"},"歡迎登入",-1)),N={class:"col-8"},O=["onSubmit"],$={class:"form-floating mb-3"},q=n(()=>e("label",{for:"username"},"Email address",-1)),C={class:"form-floating"},M=n(()=>e("label",{for:"password"},"Password",-1)),P=n(()=>e("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"}," 登入 ",-1)),F=n(()=>e("p",{class:"mt-5 mb-3 text-muted"},"© 2023 ~ ∞ - 六角學院",-1)),H={class:"text-center"},K=v({__name:"LoginView",setup(i){const{VITE_URL:p,VITE_TOKEN:u,VITE_TEXT:_}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"tuhacrt",VITE_TOKEN:"loginToken",VITE_TEXT:"Environment is in production build",BASE_URL:"/Hexschool_Vue_Week7/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},a={username:"",password:""},r=h(!1),m=async()=>{var s;const c=`${p}/admin/signin`;r.value=!0;try{const t=await S.post(c,a),{token:o,expired:f}=t.data;r.value=!1,document.cookie=`${u}=${o}; expires=${new Date(f)};`,k.push("/admin/products")}catch(t){t instanceof D&&alert((s=t.response)==null?void 0:s.data.message)}};return(c,s)=>{const t=g("Loading");return w(),E(I,null,[e("div",B,[e("div",R,[A,e("div",N,[e("form",{id:"form",class:"form-signin",onSubmit:T(m,["prevent"])},[e("div",$,[l(e("input",{id:"username","onUpdate:modelValue":s[0]||(s[0]=o=>a.username=o),type:"email",class:"form-control",placeholder:"example@example.com",required:"",autofocus:""},null,512),[[d,a.username]]),q]),e("div",C,[l(e("input",{id:"password","onUpdate:modelValue":s[1]||(s[1]=o=>a.password=o),type:"password",class:"form-control",placeholder:"password",required:""},null,512),[[d,a.password]]),M]),P],40,O)])]),F,e("div",H,[e("p",null,V(x(_)),1)])]),b(t,{active:r.value,"onUpdate:active":s[2]||(s[2]=o=>r.value=o),"can-cancel":!0,"is-full-page":!0},null,8,["active"])],64)}}});const j=U(K,[["__scopeId","data-v-17695215"]]);export{j as default};
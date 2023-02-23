import{e as V,t as N,f as w,G as L,g as R,M as I,o as f,c as b,a as e,j as m,v,u as c,E as A,l as B,r as P,F as E,m as S,i as H,b as g,h as _,n as C,A as $,x as O}from"./index-01b01b67.js";import{a as j,f as D}from"./index-46f27a72.js";import{_ as F}from"./DeleteModal.vue_vue_type_script_setup_true_lang-dfd4c3b8.js";import{_ as X}from"./PaginationComponent.vue_vue_type_style_index_0_lang-6aff4358.js";const q={class:"modal-dialog modal-xl",role:"document"},z={class:"modal-content bcoupon-0"},G=e("div",{class:"modal-header bg-dark text-white"},[e("h5",{id:"exampleModalLabel",class:"modal-title"},[e("span",null,"新增優惠券")]),e("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),K={class:"modal-body"},W={class:"mb-3"},J=e("label",{for:"title"},"標題",-1),Q={class:"mb-3"},Y=e("label",{for:"coupon_code"},"優惠碼",-1),Z={class:"mb-3"},ee=e("label",{for:"due_date"},"到期日",-1),te={class:"mb-3"},oe=e("label",{for:"price"},"折扣百分比",-1),se={class:"mb-3"},ae={class:"form-check"},ne=e("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),le={class:"modal-footer"},ie=e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1),de=V({__name:"CouponModal",props:{tempCoupon:null},emits:["update-coupon"],setup(k,{expose:p,emit:h}){const t=N(k,"tempCoupon"),u=w(""),r=w("");let d;return L(()=>{t.value.due_date=j(r.value)}),L(()=>{r.value=D(t.value.due_date||Date.now()/1e3).replace(/\//ig,"-")}),R(()=>{d=new I(u.value,{keyboard:!1,backdrop:!1})}),p({showModal:()=>d==null?void 0:d.show(),hideModal:()=>d==null?void 0:d.hide()}),(y,n)=>(f(),b("div",{id:"couponModal",ref_key:"couponModalRef",ref:u,class:"modal fade",tabindex:"-1",role:"dialog","aria-labelledby":"couponModalLabel","aria-hidden":"true"},[e("div",q,[e("div",z,[G,e("div",K,[e("div",W,[J,m(e("input",{id:"title","onUpdate:modelValue":n[0]||(n[0]=o=>c(t).title=o),type:"text",class:"form-control",placeholder:"請輸入標題"},null,512),[[v,c(t).title]])]),e("div",Q,[Y,m(e("input",{id:"coupon_code","onUpdate:modelValue":n[1]||(n[1]=o=>c(t).code=o),type:"text",class:"form-control",placeholder:"請輸入優惠碼"},null,512),[[v,c(t).code]])]),e("div",Z,[ee,m(e("input",{id:"due_date","onUpdate:modelValue":n[2]||(n[2]=o=>r.value=o),type:"date",class:"form-control"},null,512),[[v,r.value]])]),e("div",te,[oe,m(e("input",{id:"price","onUpdate:modelValue":n[3]||(n[3]=o=>c(t).percent=o),type:"number",class:"form-control",min:"0",placeholder:"請輸入折扣百分比"},null,512),[[v,c(t).percent,void 0,{number:!0}]])]),e("div",se,[e("div",ae,[m(e("input",{id:"is_enabled","onUpdate:modelValue":n[4]||(n[4]=o=>c(t).is_enabled=o),class:"form-check-input",type:"checkbox","true-value":1,"false-value":0},null,512),[[A,c(t).is_enabled]]),ne])])]),e("div",le,[ie,e("button",{type:"button",class:"btn btn-primary",onClick:n[5]||(n[5]=o=>y.$emit("update-coupon",c(t)))}," 修改付款狀態 ")])])])],512))}}),ce={class:"container"},re={class:"text-end mt-4"},ue={class:"table mt-4"},pe=e("thead",null,[e("tr",null,[e("th",{width:"120"},"名稱"),e("th",null,"折扣百分比"),e("th",{width:"120"},"到期日"),e("th",{width:"100"},"是否啟用"),e("th",{width:"120"},"編輯")])],-1),me={key:0},_e={class:"text-end"},fe={class:"btn-group"},be=["onClick"],he=["onClick"],ve={class:"d-flex justify-content-center"},ge={class:"text-center"},ke=V({__name:"AdminCouponsView",setup(k){const{VITE_URL:p,VITE_PATH:h,VITE_TEXT:M}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"tuhacrt",VITE_TOKEN:"loginToken",VITE_TEXT:"Environment is in production build",BASE_URL:"/Hexschool_Vue_Week7/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},t=B({coupons:[],pagination:{},tempCoupon:{},isNew:!1,isLoading:!1}),u=w(),r=w(),d=async(o=t.pagination.current_page||1)=>{var i;const l=`${p}/api/${h}/admin/coupons/?page=${o}`;t.isLoading=!0;try{const a=await C.get(l);t.isLoading=!1,t.coupons=a.data.coupons,t.pagination=a.data.pagination}catch(a){t.isLoading=!1,a instanceof $&&alert((i=a.response)==null?void 0:i.data.message)}};R(()=>{d()});const x=()=>{const o=`${p}/api/${h}/admin/coupon`,l=t.isNew?o:`${o}/${t.tempCoupon.id}`;return{method:t.isNew?"post":"put",url:l}},T=async()=>{var i,a;const{method:o,url:l}=x();t.isLoading=!0;try{await C[o](l,{data:t.tempCoupon}),(i=u.value)==null||i.hideModal(),d()}catch(s){t.isLoading=!1,s instanceof $&&alert((a=s.response)==null?void 0:a.data.message)}},y=async()=>{var l,i;const o=`${p}/api/${h}/admin/coupon/${t.tempCoupon.id}`;t.isLoading=!0;try{await C.delete(o),(l=r.value)==null||l.hideModal(),d()}catch(a){t.isLoading=!1,a instanceof $&&alert((i=a.response)==null?void 0:i.data.message)}},n=(o,l={})=>{var i,a,s;switch(o){case"new":t.tempCoupon={},t.isNew=!0,(i=u.value)==null||i.showModal();break;case"edit":t.tempCoupon={...l},t.isNew=!1,(a=u.value)==null||a.showModal();break;case"delete":t.tempCoupon={...l},(s=r.value)==null||s.showModal();break}};return(o,l)=>{var a;const i=P("Loading");return f(),b(E,null,[e("div",ce,[e("div",re,[e("button",{class:"btn btn-primary",onClick:l[0]||(l[0]=s=>n("new"))}," 建立新的優惠券 ")]),e("table",ue,[pe,(a=t.coupons)!=null&&a.length?(f(),b("tbody",me,[(f(!0),b(E,null,S(t.coupons,s=>(f(),b("tr",{key:s.id},[e("td",null,_(s.title),1),e("td",null,_(s.percent),1),e("td",_e,_(c(D)(s==null?void 0:s.due_date)),1),e("td",null,[e("span",{class:O({"text-success":s.is_enabled})},_(s.is_enabled?"啟用":"未啟用"),3)]),e("td",null,[e("div",fe,[e("button",{class:"btn btn-outline-primary btn-sm",onClick:U=>n("edit",s)}," 編輯 ",8,be),e("button",{class:"btn btn-outline-danger btn-sm",onClick:U=>n("delete",s)}," 刪除 ",8,he)])])]))),128))])):H("",!0)]),e("div",ve,[g(X,{ref:"paginationComponentRef",pagination:t.pagination,onChangePage:d},null,8,["pagination"])]),e("div",ge,[e("p",null,_(c(M)),1)])]),g(de,{ref_key:"couponModalRef",ref:u,"temp-coupon":t.tempCoupon,"is-new":t.isNew,onUpdateCoupon:T},null,8,["temp-coupon","is-new"]),g(F,{ref_key:"deleteModalRef",ref:r,"delete-item":t.tempCoupon,onDeleteItem:y},null,8,["delete-item"]),g(i,{active:t.isLoading,"onUpdate:active":l[1]||(l[1]=s=>t.isLoading=s),"can-cancel":!0,"is-full-page":!0},null,8,["active"])],64)}}});export{ke as default};

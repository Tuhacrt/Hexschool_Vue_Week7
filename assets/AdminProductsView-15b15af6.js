import{e as L,t as N,f as M,g as T,M as I,o as u,c as p,a as t,h,u as l,F as P,m as E,j as m,v as _,D as A,l as D,r as B,i as S,b as w,n as U,A as V,x as H}from"./index-ffe0db42.js";import{_ as O}from"./DeleteModal.vue_vue_type_script_setup_true_lang-4aaa6229.js";import{_ as j}from"./PaginationComponent.vue_vue_type_style_index_0_lang-30623594.js";const z={class:"modal-dialog modal-xl"},F={class:"modal-content"},X={class:"modal-header bg-dark text-white"},q={id:"productModalLabel",class:"modal-title"},K={class:"modal-body"},W={class:"row"},G={key:0,class:"col-sm-4"},J={class:"mb-3"},Q=t("label",{for:"imageUrl",class:"form-label"},"輸入圖片網址",-1),Y=["onUpdate:modelValue"],Z=["src"],tt={key:0},et={key:1},ot={key:1},st={class:"col-sm-8"},lt={class:"mb-3"},nt=t("label",{for:"title",class:"form-label"},"標題",-1),at={class:"row"},it={class:"mb-3 col-md-6"},dt=t("label",{for:"category",class:"form-label"},"分類",-1),rt={class:"mb-3 col-md-6"},ct=t("label",{for:"price",class:"form-label"},"單位",-1),ut={class:"row"},pt={class:"mb-3 col-md-6"},mt=t("label",{for:"origin_price",class:"form-label"},"原價",-1),_t={class:"mb-3 col-md-6"},bt=t("label",{for:"price",class:"form-label"},"售價",-1),ht=t("hr",null,null,-1),ft={class:"mb-3"},gt=t("label",{for:"description",class:"form-label"},"產品描述",-1),vt={class:"mb-3"},yt=t("label",{for:"content",class:"form-label"},"說明內容",-1),wt={class:"mb-3"},kt={class:"form-check"},$t=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),xt={class:"modal-footer"},Ut=L({__name:"ProductModal",props:{tempProduct:null,isNew:{type:Boolean}},emits:["update-product"],setup(k,{expose:g,emit:y}){const e=N(k,"tempProduct"),b=M("");let r;T(()=>{r=new I(b.value,{keyboard:!1,backdrop:!1})});const f=()=>{e.value.imagesUrl=[""]},$=()=>r==null?void 0:r.show(),v=()=>r==null?void 0:r.hide();return g({showModal:$,hideModal:v}),(x,s)=>{var d,a,i,n;return u(),p("div",{id:"productModal",ref_key:"productModalRef",ref:b,class:"modal fade border-0",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},[t("div",z,[t("div",F,[t("div",X,[t("h5",q,[t("span",null,h(k.isNew?"新增產品":"編輯產品"),1)]),t("button",{type:"button",class:"btn-close btn-close-white","aria-label":"Close",onClick:v})]),t("div",K,[t("div",W,[Array.isArray((d=l(e))==null?void 0:d.imagesUrl)?(u(),p("div",G,[(u(!0),p(P,null,E((a=l(e))==null?void 0:a.imagesUrl,(o,c)=>(u(),p("div",{key:c},[t("div",J,[Q,m(t("input",{"onUpdate:modelValue":R=>l(e).imagesUrl[c]=R,type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,8,Y),[[_,l(e).imagesUrl[c]]])]),t("img",{class:"img-fluid mb-2",src:o},null,8,Z)]))),128)),((n=l(e))==null?void 0:n.imagesUrl[((i=l(e))==null?void 0:i.imagesUrl.length)-1])!==""?(u(),p("div",tt,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:s[0]||(s[0]=o=>{var c;return(c=l(e))==null?void 0:c.imagesUrl.push("")})}," 新增圖片 ")])):(u(),p("div",et,[t("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:s[1]||(s[1]=o=>{var c;return(c=l(e))==null?void 0:c.imagesUrl.pop()})}," 刪除圖片 ")]))])):(u(),p("div",ot,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:f}," 新增圖片 ")])),t("div",st,[t("div",lt,[nt,m(t("input",{id:"title","onUpdate:modelValue":s[2]||(s[2]=o=>l(e).title=o),type:"text",class:"form-control",placeholder:"請輸入標題"},null,512),[[_,l(e).title]])]),t("div",at,[t("div",it,[dt,m(t("input",{id:"category","onUpdate:modelValue":s[3]||(s[3]=o=>l(e).category=o),type:"text",class:"form-control",placeholder:"請輸入分類"},null,512),[[_,l(e).category]])]),t("div",rt,[ct,m(t("input",{id:"unit","onUpdate:modelValue":s[4]||(s[4]=o=>l(e).unit=o),type:"text",class:"form-control",placeholder:"請輸入單位"},null,512),[[_,l(e).unit]])])]),t("div",ut,[t("div",pt,[mt,m(t("input",{id:"origin_price","onUpdate:modelValue":s[5]||(s[5]=o=>l(e).origin_price=o),type:"number",min:"0",class:"form-control",placeholder:"請輸入原價"},null,512),[[_,l(e).origin_price,void 0,{number:!0}]])]),t("div",_t,[bt,m(t("input",{id:"price","onUpdate:modelValue":s[6]||(s[6]=o=>l(e).price=o),type:"number",min:"0",class:"form-control",placeholder:"請輸入售價"},null,512),[[_,l(e).price,void 0,{number:!0}]])])]),ht,t("div",ft,[gt,m(t("textarea",{id:"description","onUpdate:modelValue":s[7]||(s[7]=o=>l(e).description=o),type:"text",class:"form-control",placeholder:"請輸入產品描述"},null,512),[[_,l(e).description]])]),t("div",vt,[yt,m(t("textarea",{id:"description","onUpdate:modelValue":s[8]||(s[8]=o=>l(e).content=o),type:"text",class:"form-control",placeholder:"請輸入說明內容"},null,512),[[_,l(e).content]])]),t("div",wt,[t("div",kt,[m(t("input",{id:"is_enabled","onUpdate:modelValue":s[9]||(s[9]=o=>l(e).is_enabled=o),class:"form-check-input",type:"checkbox","true-value":1,"false-value":0},null,512),[[A,l(e).is_enabled]]),$t])])])])]),t("div",xt,[t("button",{type:"button",class:"btn btn-outline-secondary",onClick:v}," 取消 "),t("button",{type:"button",class:"btn btn-primary",onClick:s[10]||(s[10]=o=>x.$emit("update-product",l(e)))}," 確認 ")])])])],512)}}}),Vt={class:"container"},Mt={class:"text-end mt-4"},Pt={class:"table mt-4"},Ct=t("thead",null,[t("tr",null,[t("th",{width:"120"},"分類"),t("th",null,"產品名稱"),t("th",{width:"120"},"原價"),t("th",{width:"120"},"售價"),t("th",{width:"100"},"是否啟用"),t("th",{width:"120"},"編輯")])],-1),Lt={key:0},Tt={class:"text-end"},Et={class:"text-end"},Rt={class:"btn-group"},Nt=["onClick"],It=["onClick"],At={class:"d-flex justify-content-center"},Dt={class:"text-center"},Ot=L({__name:"AdminProductsView",setup(k){const{VITE_URL:g,VITE_PATH:y,VITE_TEXT:C}={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"tuhacrt",VITE_TOKEN:"loginToken",VITE_TEXT:"Environment is in production build",BASE_URL:"/Hexschool_Vue_Week7/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},e=D({products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}),b=M(),r=M(),f=async(d=e.pagination.current_page||1)=>{var i;const a=`${g}/api/${y}/admin/products/?page=${d}`;e.isLoading=!0;try{const n=await U.get(a);e.isLoading=!1,e.products=n.data.products,e.pagination=n.data.pagination}catch(n){e.isLoading=!1,n instanceof V&&alert((i=n.response)==null?void 0:i.data.message)}};T(()=>{f()});const $=()=>{const d=`${g}/api/${y}/admin/product`,a=e.isNew?d:`${d}/${e.tempProduct.id}`;return{method:e.isNew?"post":"put",url:a}},v=async()=>{var i,n;const{method:d,url:a}=$();e.isLoading=!0;try{await U[d](a,{data:e.tempProduct}),(i=b.value)==null||i.hideModal(),f()}catch(o){o instanceof V&&alert((n=o.response)==null?void 0:n.data.message)}},x=async()=>{var a,i;const d=`${g}/api/${y}/admin/product/${e.tempProduct.id}`;e.isLoading=!0;try{await U.delete(d),(a=r.value)==null||a.hideModal(),f()}catch(n){e.isLoading=!1,n instanceof V&&alert((i=n.response)==null?void 0:i.data.message)}},s=(d,a={})=>{var i,n,o;switch(d){case"new":e.tempProduct={imagesUrl:[]},e.isNew=!0,(i=b.value)==null||i.showModal();break;case"edit":e.tempProduct={...a},e.isNew=!1,(n=b.value)==null||n.showModal();break;case"delete":e.tempProduct={...a},(o=r.value)==null||o.showModal();break}};return(d,a)=>{var n;const i=B("Loading");return u(),p(P,null,[t("div",Vt,[t("div",Mt,[t("button",{class:"btn btn-primary",onClick:a[0]||(a[0]=o=>s("new"))}," 建立新的產品 ")]),t("table",Pt,[Ct,(n=e.products)!=null&&n.length?(u(),p("tbody",Lt,[(u(!0),p(P,null,E(e.products,o=>(u(),p("tr",{key:o.id},[t("td",null,h(o.category),1),t("td",null,h(o.title),1),t("td",Tt,h(o.origin_price),1),t("td",Et,h(o.price),1),t("td",null,[t("span",{class:H({"text-success":o.is_enabled})},h(o.is_enabled?"啟用":"未啟用"),3)]),t("td",null,[t("div",Rt,[t("button",{class:"btn btn-outline-primary btn-sm",onClick:c=>s("edit",o)}," 編輯 ",8,Nt),t("button",{class:"btn btn-outline-danger btn-sm",onClick:c=>s("delete",o)}," 刪除 ",8,It)])])]))),128))])):S("",!0)]),t("div",At,[w(j,{ref:"paginationComponentRef",pagination:e.pagination,onChangePage:f},null,8,["pagination"])]),t("div",Dt,[t("p",null,h(l(C)),1)])]),w(Ut,{ref_key:"productModalRef",ref:b,"temp-product":e.tempProduct,"is-new":e.isNew,onUpdateProduct:v},null,8,["temp-product","is-new"]),w(O,{ref_key:"deleteModalRef",ref:r,"delete-item":e.tempProduct,onDeleteItem:x},null,8,["delete-item"]),w(i,{active:e.isLoading,"onUpdate:active":a[1]||(a[1]=o=>e.isLoading=o),"can-cancel":!0,"is-full-page":!0},null,8,["active"])],64)}}});export{Ot as default};

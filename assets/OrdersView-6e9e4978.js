import{Y as C,x as p,R as v,_ as M,k as u,l as i,S as m,T as e,$ as n,U as d,V as P,X as h,W as y,a2 as x,a0 as V,a3 as w,a1 as b}from"./index-d9918ef7.js";import{a as S}from"./authStore-d4cb779f.js";import{b as T,v as N}from"./runtime-dom.esm-bundler-7546e377.js";import{D,P as F}from"./PaginationComponent-680379f0.js";const{VITE_APP_URL:g,VITE_APP_PATH:f}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"int-hexschool",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},U=C("productStore",{state:()=>({orders:[],pagination:{}}),actions:{getOrders(o=1){p.get(`${g}/api/${f}/admin/orders?page=${o}`).then(t=>{this.orders=t.data.orders,this.pagination=t.data.pagination}).catch(t=>{alert(t.response.data.message)})},updateOrder(o){p.put(`${g}/api/${f}/admin/order/${o.id}`,{data:o}).then(t=>{alert(t.data.message),this.getOrders()}).catch(t=>{alert(t.response.data.message)})},deleteOrder(o){p.delete(`${g}/api/${f}/admin/order/${o}`).then(t=>{alert(t.data.message),this.getOrders()}).catch(t=>{alert(t.response.data.message)})},deleteAllOrders(){p.delete(`${g}/api/${f}/admin/orders/all`).then(o=>{alert(o.data.message),this.getOrders()}).catch(o=>{alert(o.response.data.message)})}}}),$={name:"orderModal",props:["order"],data(){return{modal:null,tempOrder:{products:{},user:{}}}},watch:{order:{handler(){this.tempOrder=JSON.parse(JSON.stringify(this.order))},deep:!0}},methods:{openModal(){this.modal.show()},closeModal(){this.modal.hide()},...v(U,["updateOrder"])},mounted(){this.modal=new window.bootstrap.Modal(document.getElementById("orderModal"))}},L={class:"modal fade",id:"orderModal",tabindex:"-1","aria-labelledby":"orderModalLabel","aria-hidden":"true"},q={class:"modal-dialog modal-lg"},B={class:"modal-content rounded-0"},I={class:"modal-header rounded-0 bg-secondary text-white"},R={class:"modal-title",id:"orderModalLabel"},J=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),j={class:"modal-body"},H={class:"mb-3"},z=e("p",null,"訂購人",-1),W={class:"mb-3 d-flex justify-content-between"},X=e("label",{for:"orderUserName",class:"form-label"},"姓名",-1),Y=e("label",{for:"orderUserEmail",class:"form-label"},"Email",-1),G=e("label",{for:"orderUserTel",class:"form-label"},"電話",-1),K=e("label",{for:"orderUserAddress",class:"form-label"},"地址",-1),Q=e("hr",null,null,-1),Z={class:"mb-3"},ee=e("p",null,"訂購商品",-1),se={class:"table text-center align-middle"},te=e("thead",null,[e("tr",null,[e("th"),e("th",null,"商品名稱"),e("th",null,"數量"),e("th",null,"單價"),e("th",null,"小計")])],-1),oe={type:"button",class:"btn"},le=e("td",{colspan:"4",class:"text-end"},"總計:",-1),re={class:"mb-3"},de=e("label",{for:"orderMessage",class:"form-label"},"顧客留言",-1),ne=["value"],ae={class:"mb-3 d-flex justify-content-between align-items-center"},ie={class:"mb-0"},me={class:"d-flex align-items-center"},ue=e("p",{class:"mb-0",style:{"min-width":"100px"}},"訂單狀態:",-1),ce=e("option",{value:"0"},"已成立",-1),_e=e("option",{value:"1"},"未處理",-1),pe=e("option",{value:"2"},"已出貨",-1),he=e("option",{value:"3"},"已完成",-1),be=[ce,_e,pe,he],ge={class:"mb-0"},fe=e("hr",null,null,-1),Oe={class:"mb-3"},ve=e("label",{for:"messages",class:"form-label"},"店家留言",-1),ye={class:"modal-footer"},Ue=e("button",{type:"button",class:"btn btn-outline-primary","data-bs-dismiss":"modal"}," 取消 ",-1);function Ve(o,t,E,A,s,k){const c=u("VField"),_=u("ErrorMessage"),O=u("iconify-icon"),r=u("VForm");return i(),m("div",L,[e("div",q,[e("div",B,[e("div",I,[e("h5",R,"訂單編號: "+n(s.tempOrder.id),1),J]),e("div",j,[d(r,{onSubmit:o.submit},{default:P(({errors:a})=>[e("div",H,[z,e("div",W,[e("div",null,[X,d(c,{name:"orderUserName",modelValue:s.tempOrder.user.name,"onUpdate:modelValue":t[0]||(t[0]=l=>s.tempOrder.user.name=l),type:"text",class:h(["form-control",{"is-invalid":a.orderUserName,"is-valid":!a.orderUserName&&s.tempOrder.user.name}]),id:"orderUserName",rules:"required"},null,8,["modelValue","class"]),d(_,{name:"orderUserName"})]),e("div",null,[Y,d(c,{name:"orderUserEmail",modelValue:s.tempOrder.user.email,"onUpdate:modelValue":t[1]||(t[1]=l=>s.tempOrder.user.email=l),type:"text",class:h(["form-control",{"is-invalid":a.orderUserEmail,"is-valid":!a.orderUserEmail&&s.tempOrder.user.email}]),id:"orderUserEmail",rules:"email|required"},null,8,["modelValue","class"]),d(_,{name:"orderUserEmail"})]),e("div",null,[G,d(c,{name:"orderUserTel",modelValue:s.tempOrder.user.tel,"onUpdate:modelValue":t[2]||(t[2]=l=>s.tempOrder.user.tel=l),type:"text",class:h(["form-control",{"is-invalid":a.orderUserTel,"is-valid":!a.orderUserTel&&s.tempOrder.user.tel}]),id:"orderUserTel",rules:"numeric|required"},null,8,["modelValue","class"]),d(_,{name:"orderUserTel"})])]),K,d(c,{name:"orderUserAddress",modelValue:s.tempOrder.user.address,"onUpdate:modelValue":t[3]||(t[3]=l=>s.tempOrder.user.address=l),type:"text",class:h(["form-control",{"is-invalid":a.orderUserAddress,"is-valid":!a.orderUserAddress&&s.tempOrder.user.address}]),id:"orderUserAddress",rules:"required"},null,8,["modelValue","class"]),d(_,{name:"orderUserAddress"})]),Q,e("div",Z,[ee,e("table",se,[te,e("tbody",null,[(i(!0),m(y,null,x(s.tempOrder.products,l=>(i(),m("tr",{key:l.id},[e("td",null,[e("button",oe,[d(O,{icon:"material-symbols:delete-outline-sharp",class:"text-primary"})])]),e("td",null,n(l.product.title),1),e("td",null,n(l.qty),1),e("td",null,n(l.product.price),1),e("td",null,n(l.total),1)]))),128))]),e("tfoot",null,[e("tr",null,[le,e("td",null,n(s.tempOrder.total),1)])])])]),e("div",re,[de,e("textarea",{name:"orderMessage",id:"orderMessage",class:"form-control",disabled:"",value:s.tempOrder.message},null,8,ne)]),e("div",ae,[e("div",null,[e("p",ie,"總數量: "+n(s.tempOrder.num),1)]),e("div",me,[ue,V(e("select",{"onUpdate:modelValue":t[4]||(t[4]=l=>s.tempOrder.status=l),class:"form-select",default:"0","aria-label":"Default select example"},be,512),[[T,s.tempOrder.status]])]),e("p",ge,"付款狀態: "+n(s.tempOrder.is_paid?"已付款":"未付款"),1)]),fe,e("div",Oe,[ve,V(e("textarea",{"onUpdate:modelValue":t[5]||(t[5]=l=>s.tempOrder.messages=l),class:"form-control",id:"messages",rows:"3"},null,512),[[N,s.tempOrder.messages]])])]),_:1},8,["onSubmit"])]),e("div",ye,[Ue,e("button",{type:"button",class:"btn btn-secondary",onClick:t[6]||(t[6]=a=>{o.updateOrder(s.tempOrder),this.closeModal()})},"修改")])])])])}const Me=M($,[["render",Ve]]);const xe={name:"OrdersView",data(){return{order:{},message:"",delFunc:null}},computed:{...w(U,["orders","pagination"])},methods:{changePage(o){this.getOrders(o)},...v(U,["getOrders","deleteOrder"]),...v(S,["checkAuth"])},mounted(){this.checkAuth(),this.getOrders()},components:{orderModal:Me,DelConfirmModal:D,PaginationComponent:F}},Ee={class:"container"},Ae=e("h1",null,"訂單管理",-1),ke={class:"table align-middle"},Ce=e("thead",null,[e("tr",null,[e("th",null,"訂單編號"),e("th",null,"訂單成立日期"),e("th",null,"訂購人"),e("th",null,"價格"),e("th",null,"狀態"),e("th",null,"編輯")])],-1),Pe={key:0},we={key:1},Se={key:2},Te={key:3},Ne=["onClick"],De=["onClick"];function Fe(o,t,E,A,s,k){const c=u("PaginationComponent"),_=u("orderModal"),O=u("DelConfirmModal");return i(),m(y,null,[e("div",Ee,[Ae,e("table",ke,[Ce,e("tbody",null,[(i(!0),m(y,null,x(o.orders,r=>(i(),m("tr",{key:r.id},[e("th",null,n(r.id),1),e("td",null,n(r.create_at),1),e("td",null,n(r.user.name),1),e("td",null,n(r.total),1),r.status==0?(i(),m("td",Pe,"已成立 ")):b("",!0),r.status==1?(i(),m("td",we,"未處理")):b("",!0),r.status==2?(i(),m("td",Se,"已出貨")):b("",!0),r.status==3?(i(),m("td",Te,"已完成")):b("",!0),e("td",null,[e("button",{type:"button",class:"btn btn-secondary me-3",onClick:a=>{this.$refs.orderModal.openModal(),this.order=JSON.parse(JSON.stringify(r))}},"編輯",8,Ne),e("button",{type:"button",class:"btn btn-outline-primary",onClick:a=>{this.$refs.delModal.openModal(),s.message=`確定要刪除訂單編號為${r.id}的訂單嗎?`,s.delFunc=o.deleteOrder.bind(this,r.id)}},"刪除",8,De)])]))),128))])]),d(c,{pages:o.pagination},null,8,["pages"])]),d(_,{ref:"orderModal",order:s.order},null,8,["order"]),d(O,{ref:"delModal",message:s.message,delFunc:s.delFunc},null,8,["message","delFunc"])],64)}const Ie=M(xe,[["render",Fe]]);export{Ie as default};
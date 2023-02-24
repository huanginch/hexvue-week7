import{d as f,a as u,_ as V,m as g,r as l,o as v,c as P,b as t,e as a,w as b,F as x,n as p}from"./index-9fd1a623.js";const{VITE_APP_URL:L}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"int-hexschool",BASE_URL:"/hexvue-week7/",MODE:"production",DEV:!1,PROD:!0},k=f("authStore",{state:()=>({isLogged:!1}),actions:{checkAuth(){const n=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");u.defaults.headers.common.Authorization=n,u.post(`${L}/api/user/check`).then(()=>{this.isLogged=!0}).catch(()=>{this.isLogged=!1})}}}),{VITE_APP_URL:A}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"int-hexschool",BASE_URL:"/hexvue-week7/",MODE:"production",DEV:!1,PROD:!0},E={name:"LoginView",data(){return{username:"",password:""}},methods:{signIn(n,e){this.isLoading=!0,this.$http.post(`${A}/admin/signin`,{username:n,password:e}).then(i=>{const{token:c,expired:s}=i.data;document.cookie=`hexToken=${c}; expired=${new Date(s)};`,this.$swal.fire({icon:"success",title:"登入成功",showConfirmButton:!1,timer:1500}),this.checkAuth(),this.$router.push("/admin/products")}).catch(i=>{this.$swal.fire({icon:"error",title:"很不幸的...",text:i.response.data.message})})},...g(k,["checkAuth"])}},T={class:"container text-center mt-5"},U=t("h1",{class:"mb-5"},"Welcome to WineWorld",-1),I={class:"row"},R={class:"col-12 col-md-8 col-lg-6 mx-auto"},$=t("label",{for:"username",class:"mb-2"},"帳號",-1),D=t("label",{for:"pwd",class:"mb-2"},"密碼",-1),y=t("button",{type:"submit",class:"btn btn-primary mt-3 text-white"}," 登入 ",-1);function B(n,e,i,c,s,h){const d=l("VField"),m=l("error-message"),_=l("VForm"),w=l("MyLoading");return v(),P(x,null,[t("div",T,[U,t("div",I,[t("div",R,[a(_,{onSubmit:e[2]||(e[2]=o=>h.signIn(s.username,s.password)),class:"mb-5"},{default:b(({errors:o})=>[$,a(d,{id:"username",name:"username",type:"email",class:p(["form-control mb-3",{"is-invalid":o.username,"is-valid":!o.username&&s.username}]),rules:"email|required",placeholder:"請輸入帳號/Email",modelValue:s.username,"onUpdate:modelValue":e[0]||(e[0]=r=>s.username=r)},null,8,["class","modelValue"]),a(m,{name:"username",class:"invalid-feedback mb-3"}),D,a(d,{id:"pwd",name:"pwd",type:"password",class:p(["form-control mb-3",{"is-invalid":o.pwd,"is-valid":!o.pwd&&s.password}]),rules:"required",placeholder:"請輸入密碼",modelValue:s.password,"onUpdate:modelValue":e[1]||(e[1]=r=>s.password=r)},null,8,["class","modelValue"]),a(m,{name:"pwd",class:"invalid-feedback"}),y]),_:1})])])]),a(w,{active:n.isLoading,"onUpdate:active":e[3]||(e[3]=o=>n.isLoading=o)},null,8,["active"])],64)}const S=V(E,[["render",B]]);export{S as default};

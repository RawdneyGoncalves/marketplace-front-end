import{_ as p,g as o,J as c,A as n,t as _,z as r,B as f,M as v}from"./ckMI5CHP.js";const b={data(){return{credentials:{email:"",password:""}}},methods:{async submit(){try{await this.$store.dispatch("user/login",this.credentials),this.$router.push("/")}catch(l){console.error("Login failed",l)}}}};function w(l,e,V,x,t,i){const a=o("v-text-field"),d=o("v-btn"),m=o("v-form"),u=o("v-container");return _(),c(u,null,{default:n(()=>[r(m,{onSubmit:v(i.submit,["prevent"])},{default:n(()=>[r(a,{modelValue:t.credentials.email,"onUpdate:modelValue":e[0]||(e[0]=s=>t.credentials.email=s),label:"Email",type:"email",required:""},null,8,["modelValue"]),r(a,{modelValue:t.credentials.password,"onUpdate:modelValue":e[1]||(e[1]=s=>t.credentials.password=s),label:"Password",type:"password",required:""},null,8,["modelValue"]),r(d,{type:"submit",color:"primary"},{default:n(()=>e[2]||(e[2]=[f("Login")])),_:1})]),_:1},8,["onSubmit"])]),_:1})}const g=p(b,[["render",w]]);export{g as default};
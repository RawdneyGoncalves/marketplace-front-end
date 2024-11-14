import{_ as f,g as n,J as c,A as i,t as _,z as l,B as V,M as h}from"./ckMI5CHP.js";const v={data(){return{user:{name:"",phone:"",address:""},profilePicture:null}},async mounted(){try{const o=await this.$axios.get("/profile");this.user=o.data}catch(o){console.error("Failed to load profile",o)}},methods:{async submit(){const o=new FormData;o.append("name",this.user.name),o.append("phone",this.user.phone),o.append("address",this.user.address),this.profilePicture&&o.append("profile_picture",this.profilePicture);try{await this.$axios.put("/profile",o),this.$store.dispatch("user/getProfile")}catch(e){console.error("Error updating profile",e)}}}};function b(o,e,P,x,r,u){const s=n("v-text-field"),a=n("v-file-input"),p=n("v-btn"),d=n("v-form"),m=n("v-container");return _(),c(m,null,{default:i(()=>[l(d,{onSubmit:h(u.submit,["prevent"])},{default:i(()=>[l(s,{modelValue:r.user.name,"onUpdate:modelValue":e[0]||(e[0]=t=>r.user.name=t),label:"Full Name",required:""},null,8,["modelValue"]),l(s,{modelValue:r.user.phone,"onUpdate:modelValue":e[1]||(e[1]=t=>r.user.phone=t),label:"Phone",required:""},null,8,["modelValue"]),l(s,{modelValue:r.user.address,"onUpdate:modelValue":e[2]||(e[2]=t=>r.user.address=t),label:"Address",required:""},null,8,["modelValue"]),l(a,{modelValue:r.profilePicture,"onUpdate:modelValue":e[3]||(e[3]=t=>r.profilePicture=t),label:"Profile Picture",accept:"image/*"},null,8,["modelValue"]),l(p,{type:"submit",color:"primary"},{default:i(()=>e[4]||(e[4]=[V("Update Profile")])),_:1})]),_:1},8,["onSubmit"])]),_:1})}const g=f(v,[["render",b]]);export{g as default};

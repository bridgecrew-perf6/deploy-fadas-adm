(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{5633:function(e,a,t){"use strict";t("68ea")},"68ea":function(e,a,t){},a0e8:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("q-card",{staticClass:"shadow-10 q-pa-xl  Container",class:{"bg-grey-10":e.darkOn}},[t("p",[e._v("Digite o seu email cadastrado para recuperar a senha")]),t("q-input",{attrs:{filled:"",type:"mail",label:"email",color:"purple","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please type something"}]},model:{value:e.mail,callback:function(a){e.mail=a},expression:"mail"}}),t("div",{staticClass:" row justify-between"},[t("q-btn",{attrs:{color:"purple",icon:"mail",label:"Enviar email"},on:{click:function(a){return e.send(e.mail)}}}),t("router-link",{staticClass:"voltar",attrs:{to:"/auth/login"}},[t("q-btn",{attrs:{flat:"",color:"purple text-bold"}},[e._v("\n        voltar\n      ")])],1)],1)],1)},i=[],r={created(){let e=JSON.parse(localStorage.getItem("isDark"));this.darkOn=e||!1,this.$q.dark.set(this.darkOn)},data(){return{mail:"",darkOn:!1}},methods:{send(e){""!==this.mail?this.$firebase.auth().sendPasswordResetEmail(e).then((()=>{this.$q.notify({type:"positive",message:"Verifique seu email, enviamos um link para sua caixa de entrada"})})).catch((e=>{e.message;this.$q.notify({type:"negative",message:"Ocorreu um erro ao enviarmos o email"})})):this.$q.notify({type:"warning",message:"Para recuperar, você precisa inserir seu email"})}}},n=r,l=(t("5633"),t("2877")),o=t("f09f"),c=t("27f9"),u=t("9c40"),p=t("eebe"),m=t.n(p),d=Object(l["a"])(n,s,i,!1,null,"736a28e6",null);a["default"]=d.exports;m()(d,"components",{QCard:o["a"],QInput:c["a"],QBtn:u["a"]})}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{"1bf9":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{ref:"container",staticClass:"q-pa-md"},[o("div",{staticClass:"row q-mt-md q-col-gutter-md"},[0==e.depoimentosRejeitados.length?o("div",{staticClass:"text-center text-grey-8",staticStyle:{margin:"auto"}},[o("p",[e._v("Sem depoimentos rejeitados")]),o("lottie-vue-player",{staticStyle:{height:"calc(100vh - 116px)",width:"100%"},attrs:{src:"animations/empty.json"}})],1):e._e(),e._l(e.depoimentosRejeitados,(function(t,a){return o("q-intersection",{key:a,ref:"intersection",refInFor:!0,staticClass:"height-intersection col-12 col-lg-4 col-md-6 ",attrs:{once:"",transition:"scale"}},[o("q-card",{staticClass:"q-pa-md   "},[o("div",{staticClass:"row justify-between"},[o("div",[o("q-icon",{attrs:{name:"person",color:"purple",size:"sm"}}),o("span",[e._v(" "+e._s(t.no_depoente))])],1),o("span",[e._v(e._s(t.dt_depoimento))])]),o("div",[o("q-icon",{attrs:{name:"phone",color:"purple",size:"sm"}}),o("span",{staticClass:"text-weight-light"},[e._v(e._s(t.nu_telDepoente))])],1),o("br"),o("p",{staticClass:"text-grey-9 bg-grey-3 q-pa-md rounded-borders message",class:[{"white--dark":e.dark},{"bg--dark":e.dark}]},[e._v("\n          "+e._s(t.msg_depoimento)+"\n        ")]),o("q-card-section",{staticClass:"row "},[o("q-rating",{attrs:{size:"2em",max:5,color:"yellow-9",readonly:"",value:t.md_pontuacao}})],1),o("q-card-section",{staticClass:"q-gutter-md"},[o("q-btn",{attrs:{disable:"",rounded:"",color:"negative",label:"Rejeitado","icon-right":"do_disturb"}}),o("q-btn",{attrs:{flat:"",color:"grey-7",label:"Mover para aprovados","icon-right":"thumb_up"},on:{click:function(o){return e.onAceitar(a,t.id)}}})],1)],1)],1)}))],2)])},s=[],i=o("ded3"),n=o.n(i),c=o("2f62"),d=o("260b");o("e71f");const r=d["a"].firestore;var l={data(){return{depoimentosRejeitados:[]}},computed:n()(n()({},Object(c["d"])({userUid:e=>e.acompanhantes.userId})),{},{dark(){return this.$q.dark.isActive}}),methods:{setOnAprovados(e,t){r().collection("acompanhante").doc(this.userUid).collection("feedback").doc("depoimentos").collection("aprovados").doc(e).set(n()({},t),{merge:!0})},removeOfRejeitados(e,t){r().collection("acompanhante").doc(this.userUid).collection("feedback").doc("depoimentos").collection("rejeitados").doc(t).delete().then((()=>{this.$q.notify({type:"info",message:"Depoimento movido para aba de aprovados "}),setTimeout((()=>{this.depoimentosRejeitados.splice(e,1)}),1750)}))},onAceitar(e,t){r().collection("acompanhante").doc(this.userUid).collection("feedback").doc("depoimentos").collection("rejeitados").doc(t).get().then((e=>{this.setOnAprovados(t,e.data())})).then((()=>{this.removeOfRejeitados(e,t)}))}},created(){r().collection("acompanhante").doc(this.userUid).collection("feedback").doc("depoimentos").collection("rejeitados").orderBy("dt_depoimento","desc").get().then((e=>{e.forEach((e=>{const t=n()(n()({},e.data()),{},{id:e.id});this.depoimentosRejeitados.push(t)}))}))}},p=l,m=(o("eadd"),o("2877")),u=o("ad56"),h=o("f09f"),f=o("0016"),v=o("a370"),b=o("daf4"),g=o("9c40"),_=o("eebe"),q=o.n(_),j=Object(m["a"])(p,a,s,!1,null,null,null);t["default"]=j.exports;q()(j,"components",{QIntersection:u["a"],QCard:h["a"],QIcon:f["a"],QCardSection:v["a"],QRating:b["a"],QBtn:g["a"]})},"419b":function(e,t,o){},eadd:function(e,t,o){"use strict";o("419b")}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[27],{"3d5f":function(e,t,s){"use strict";s("4248")},4248:function(e,t,s){},f5a0:function(e,t,s){"use strict";s.r(t);var l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row  q-pa-md q-pb-xl"},[null===e.numberAlbuns&&0===e.albuns.length?s("div",{staticClass:"col-12 row q-col-gutter-sm"},e._l(10,(function(t){return s("div",{key:t,staticClass:"container-album col-4 col-md-3 col-lg-2 relative-position",class:{"expanded-container":e.expanded}},[s("q-skeleton",{staticClass:"album d-block"})],1)})),0):e._e(),0===e.albuns.length?s("div",{staticClass:"col-12"},[s("lottie-vue-player",{staticClass:"bg-grey-1",staticStyle:{height:"calc(100vh - 116px)"},attrs:{src:"https://assets6.lottiefiles.com/packages/lf20_olr9dg5b.json"}})],1):e._e(),s("div",{staticClass:"col-12  w-100 row justify-between items-center q-px-sm"},[s("div",[s("q-toggle",{staticClass:"col",attrs:{color:"purple",value:!e.isDisabled,label:"ordenar"},on:{input:function(t){e.isDisabled=!e.isDisabled}}})],1),s("div",[e.isDisabled?e._e():s("q-btn",{staticClass:"col",attrs:{label:"Salvar",color:"green",size:"sm"},on:{click:e.handleOrderAlbuns}})],1)]),s("draggable",e._b({staticClass:"col-12 q-col-gutter-md row ",attrs:{disabled:e.isDisabled},on:{click:e.handleOrderAlbuns},model:{value:e.albuns,callback:function(t){e.albuns=t},expression:"albuns"}},"draggable",e.dragOptions,!1),e._l(e.albuns,(function(t){return s("div",{key:t.albumId,staticClass:"container-album  col-4 col-md-3 col-lg-2 relative-position",class:{"expanded-container":e.expanded}},[s("q-img",{staticClass:"album d-block",attrs:{src:t.im_album,"spinner-color":"purple"},on:{click:function(s){return e.$emit("changeRoute",{albumId:t.albumId,album:t})}}}),s("div",{staticClass:"absolute-bottom text-subtitle2 text-center bg-black text-white q-ml-md album-title",staticStyle:{opacity:"0.6"}},[s("div",[e._v("\n          "+e._s(t.no_album)+"\n        ")])]),s("q-btn",{staticClass:"absolute-top-right",staticStyle:{top:"25px",right:"10px"},attrs:{icon:"more_vert",color:"grey-10",size:"md",round:""},on:{click:function(s){return e.openEditAlbum(t)}}})],1)})),0),s("q-page-sticky",{staticStyle:{"z-index":"2"},attrs:{position:"bottom-right",offset:[18,18]}},[s("q-btn",{attrs:{fab:"",icon:"add",color:"accent"},on:{click:function(t){e.isOpen=!0}}})],1),s("DialogAlbum",{attrs:{isOpen:e.isOpen,isEdit:!1},on:{addAlbum:function(t){return e.addAlbum(t)},closeDialog:e.closeDialog}}),s("DialogAlbum",{attrs:{album:e.selectedAlbum,isOpen:e.dialogEditAlbum,isEdit:!0},on:{closeDialog:e.closeDialog}})],1)},a=[],i=s("ded3"),n=s.n(i),o=(s("ddb0"),s("e6cf"),s("b76a")),c=s.n(o),r=s("2f62"),d={props:["expanded"],data(){return{album:"",tab:"fotos",isOpen:!1,dialogEditAlbum:!1,selectedAlbum:null,isDisabled:!0,newOrder:[]}},computed:n()(n()({},Object(r["d"])({userUid:e=>e.acompanhantes.userId,albuns:e=>e.fotosEvideos.albuns,numberAlbuns:e=>e.fotosEvideos.numberAlbuns})),{},{albuns:{get(){return this.$store.state.fotosEvideos.albuns},set(e){this.$store.commit("fotosEvideos/handleOrderAlbuns",e),this.newOrder=[...e]}},dragOptions(){return{animation:200,group:"description",disabled:!1,ghostClass:"ghost"}}}),methods:n()(n()({handleOrderAlbuns(){this.$firebase.firestore().collection("acompanhante").doc(this.userUid).collection("albuns").orderBy("nu_sequencia").get().then((()=>{0!==this.newOrder.length?this.newOrder.forEach(((e,t)=>{console.log(`indice:${t} nome:${e.no_album} seq:${e.nu_sequencia}`),this.$firebase.firestore().collection("acompanhante").doc(this.userUid).collection("albuns").doc(e.albumId).set({nu_sequencia:t},{merge:!0}).then((()=>{this.newOrder.length-1==t&&this.$q.notify({type:"positive",message:"Ordem alterada com sucesso"})})).catch((e=>{console.error(e),this.$q.notify({type:"negative",message:"Erro ao reordenar as fotos"})}))})):this.$q.notify({type:"info",message:"altere a ordem para poder salvar"})}))}},Object(r["b"])({getAlbunsAction:"fotosEvideos/getAlbunsAction"})),{},{sendFile(){},addAlbum(e){nuSequencia=this.albuns.length,this.albuns.push(e),this.closeDialog()},closeDialog(){this.isOpen=!1,this.dialogEditAlbum=!1},openEditAlbum(e){this.selectedAlbum=e,this.dialogEditAlbum=!0}}),components:{draggable:c.a,DialogAlbum:()=>Promise.all([s.e(0),s.e(36)]).then(s.bind(null,"abf9"))},created(){if(0===this.userUid||null===this.userUid){let e=this.$firebase.auth().currentUser.uid;this.$firebase.firestore().collection("auth").doc(e).get().then((e=>{this.getAlbunsAction(e.data().id_acompanhante)}))}else this.getAlbunsAction(this.userUid)}},u=d,b=(s("3d5f"),s("2877")),m=s("293e"),g=s("9564"),h=s("9c40"),p=s("068f"),f=s("de5e"),A=s("eebe"),v=s.n(A),q=Object(b["a"])(u,l,a,!1,null,null,null);t["default"]=q.exports;v()(q,"components",{QSkeleton:m["a"],QToggle:g["a"],QBtn:h["a"],QImg:p["a"],QPageSticky:f["a"]})}}]);
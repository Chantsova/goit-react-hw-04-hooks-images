(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a.n(n),r=a(17),i=a.n(r),o=(a(25),a(8)),s=a(3),l=(a(26),a(27),a(18)),u=a.n(l),d=a(0);function j(e){var t=e.onSubmit,a=Object(n.useState)(""),c=Object(s.a)(a,2),r=c[0],i=c[1];return Object(d.jsx)("header",{className:"Searchbar",children:Object(d.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),""===r.trim())return u.a.Notify.warning("Please, input target text in the searching field");t(r),i("")},className:"SearchForm",children:[Object(d.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(d.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(d.jsx)("input",{className:"SearchForm-input",type:"text",name:"inputName",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:r,onChange:function(e){i(e.currentTarget.value.toLowerCase())}})]})})}a(30),a(31);var b=function(e){var t=e.id,a=e.webformatURL,n=e.largeImageURL,c=e.handleSelectImage;return Object(d.jsx)("li",{className:"ImageGalleryItem",onClick:function(){return c(n)},children:Object(d.jsx)("img",{src:a,alt:t,className:"ImageGalleryItem-image"})})};a(32);function m(e){var t=e.selectedImage,a=e.handleCloseModal;Object(n.useEffect)((function(){var e=function(e){"Escape"===e.code&&a()};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[a,t]);return Object(d.jsx)("div",{className:"Overlay",onClick:function(e){e.currentTarget===e.target&&a()},children:Object(d.jsx)("div",{className:"Modal",children:Object(d.jsx)("img",{src:t,alt:"pixabay_img"})})})}function h(e){var t=e.status,a=e.error,c=e.images,r=Object(n.useState)(null),i=Object(s.a)(r,2),o=i[0],l=i[1],u=function(e){l(e)};return Object(d.jsxs)(d.Fragment,{children:["rejected"===t&&Object(d.jsx)("h1",{className:"error",children:a.message}),"resolved"===t&&Object(d.jsx)("ul",{className:"ImageGallery",children:c.map((function(e){var t=e.id,a=e.webformatURL,n=e.largeImageURL;return Object(d.jsx)(b,{id:t,webformatURL:a,largeImageURL:n,handleSelectImage:u},a)}))}),o&&Object(d.jsx)(m,{selectedImage:o,handleCloseModal:function(){l(null)}})]})}a(33);var f=function(e){return Object(d.jsxs)("svg",{id:"goo-loader",width:e.width,height:e.height,"aria-label":e.label,children:[Object(d.jsxs)("filter",{id:"fancy-goo",children:[Object(d.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"6",result:"blur"}),Object(d.jsx)("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",result:"goo"}),Object(d.jsx)("feComposite",{in:"SourceGraphic",in2:"goo",operator:"atop"})]}),Object(d.jsxs)("g",{filter:"url(#fancy-goo)",children:[Object(d.jsx)("animateTransform",{id:"mainAnim",attributeName:"transform",attributeType:"XML",type:"rotate",from:"0 50 50",to:"359 50 50",dur:"1.2s",repeatCount:"indefinite"}),Object(d.jsx)("circle",{cx:"50%",cy:"40",r:e.radius,fill:e.color,children:Object(d.jsx)("animate",{id:"cAnim1",attributeType:"XML",attributeName:"cy",dur:"0.6s",begin:"0;cAnim1.end+0.2s",calcMode:"spline",values:"40;20;40",keyTimes:"0;0.3;1",keySplines:"0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1"})}),Object(d.jsx)("circle",{cx:"50%",cy:"60",r:e.radius,fill:e.secondaryColor,children:Object(d.jsx)("animate",{id:"cAnim2",attributeType:"XML",attributeName:"cy",dur:"0.6s",begin:"0.4s;cAnim2.end+0.2s",calcMode:"spline",values:"60;80;60",keyTimes:"0;0.3;1",keySplines:"0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1"})})]})]})};f.defaultProps={width:80,height:90,color:"rgba(86, 140, 240, 1)",radius:11,secondaryColor:"rgba(46, 58, 80, 1)",label:"audio-loading"};var g=f,O=function(e){var t=e.onLoading,a=e.newImages,n=e.handleLoadMore;return Object(d.jsxs)("div",{className:"Button__container",children:[12===a&&!1===t&&Object(d.jsx)("button",{className:"Button",type:"button",onClick:n,children:"Load more"}),!0===t&&Object(d.jsx)("div",{className:"loader",children:Object(d.jsx)(g,{})})]})},p=a(19),x=a.n(p),v=a(20),y=function(e,t){return x.a.get("https://pixabay.com/api/",{params:{key:"22538110-4c245d53289541016fd72dadc",q:e,image_type:"photo",orientation:"horizontal",per_page:12,page:t}}).then((function(t){return 0!==t.data.totalHits?t.data.hits:Promise.reject(new Error('There are no images with name "'.concat(e,'"')))}))},S=y;function w(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),i=Object(s.a)(r,2),l=i[0],u=i[1],b=Object(n.useState)(null),m=Object(s.a)(b,2),f=m[0],g=m[1],p=Object(n.useState)("idle"),x=Object(s.a)(p,2),v=x[0],y=x[1],w=Object(n.useState)(1),N=Object(s.a)(w,2),L=N[0],I=N[1],k=Object(n.useState)(null),C=Object(s.a)(k,2),M=C[0],T=C[1],E=Object(n.useState)(!1),F=Object(s.a)(E,2),R=F[0],G=F[1];Object(n.useEffect)((function(){var e=function(){1!==L&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})};""!==a&&(G(!0),S(a,L).then((function(e){u((function(t){return[].concat(Object(o.a)(t),Object(o.a)(e))})),T(e.length),y("resolved")})).then(e).catch((function(e){g(e),y("rejected")})).finally((function(){return G(!1)})))}),[a,L]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j,{onSubmit:function(e){c(e),I(1),u([]),T(null)}}),Object(d.jsx)("div",{className:"content",children:Object(d.jsx)(h,{inputName:a,error:f,images:l,status:v})}),Object(d.jsx)(O,{handleLoadMore:function(){I(L+1),G(!0)},onLoading:R,status:v,newImages:M})]})}y.propTypes={page:a.n(v).a.number.isRequired},i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.9c57ea65.chunk.js.map
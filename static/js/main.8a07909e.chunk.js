(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),o=a(4),s=a.n(o),c=(a(29),a(9)),i=(a(30),a(31),a(22)),l=a.n(i),u=a(0);function d(e){var t=e.onSubmit,a=Object(n.useState)(""),r=Object(c.a)(a,2),o=r[0],s=r[1];return Object(u.jsx)("header",{className:"Searchbar",children:Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===o.trim()&&l.a.Notify.warning("Please, input target text in the searching field"),t(o),s("")},className:"SearchForm",children:[Object(u.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(u.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(u.jsx)("input",{className:"SearchForm-input",type:"text",name:"inputName",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:o,onChange:function(e){s(e.currentTarget.value.toLowerCase())}})]})})}var m=a(13),h=a(6),j=a(7),g=a(10),b=a(8),p=(a(34),a(35),a(61)),f=function(e){var t=e.images,a=e.onSelect;return t.map((function(e){var t=e.id,n=e.webformatURL,r=e.largeImageURL;return Object(u.jsx)("li",{className:"ImageGalleryItem",onClick:function(){return a(r)},children:Object(u.jsx)("img",{src:n,alt:t,className:"ImageGalleryItem-image"})},Object(p.a)())}))},O=function(e){return Object(u.jsxs)("svg",{id:"goo-loader",width:e.width,height:e.height,"aria-label":e.label,children:[Object(u.jsxs)("filter",{id:"fancy-goo",children:[Object(u.jsx)("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"6",result:"blur"}),Object(u.jsx)("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",result:"goo"}),Object(u.jsx)("feComposite",{in:"SourceGraphic",in2:"goo",operator:"atop"})]}),Object(u.jsxs)("g",{filter:"url(#fancy-goo)",children:[Object(u.jsx)("animateTransform",{id:"mainAnim",attributeName:"transform",attributeType:"XML",type:"rotate",from:"0 50 50",to:"359 50 50",dur:"1.2s",repeatCount:"indefinite"}),Object(u.jsx)("circle",{cx:"50%",cy:"40",r:e.radius,fill:e.color,children:Object(u.jsx)("animate",{id:"cAnim1",attributeType:"XML",attributeName:"cy",dur:"0.6s",begin:"0;cAnim1.end+0.2s",calcMode:"spline",values:"40;20;40",keyTimes:"0;0.3;1",keySplines:"0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1"})}),Object(u.jsx)("circle",{cx:"50%",cy:"60",r:e.radius,fill:e.secondaryColor,children:Object(u.jsx)("animate",{id:"cAnim2",attributeType:"XML",attributeName:"cy",dur:"0.6s",begin:"0.4s;cAnim2.end+0.2s",calcMode:"spline",values:"60;80;60",keyTimes:"0;0.3;1",keySplines:"0.09, 0.45, 0.16, 1;0.09, 0.45, 0.16, 1"})})]})]})};O.defaultProps={width:80,height:90,color:"rgba(86, 140, 240, 1)",radius:11,secondaryColor:"rgba(46, 58, 80, 1)",label:"audio-loading"};var y=O,v=(a(36),document.querySelector("#modal-root")),x=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.handleCloseModal()},e.handleKeyDown=function(t){"Escape"===t.code&&e.props.handleCloseModal()},e.handleOverlayClick=function(t){t.currentTarget===t.target&&e.props.handleCloseModal()},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(u.jsx)("div",{className:"Overlay",onClick:this.handleOverlayClick,children:Object(u.jsx)("div",{className:"Modal",children:Object(u.jsx)("img",{src:this.props.selectedImage,alt:"pixabay_img"})})}),v)}}]),a}(n.Component),w=(a(37),function(e){var t=e.onLoading,a=e.newImages,n=e.handleLoadMore;return Object(u.jsxs)("div",{className:"Button__container",children:[12===a&&!1===t&&Object(u.jsx)("button",{className:"Button",type:"button",onClick:n,children:"Load more"}),!0===t&&Object(u.jsx)("div",{className:"loader",children:Object(u.jsx)(y,{})})]})}),S=a(23),N=a.n(S),I=a(24),k=function(e,t){return N.a.get("https://pixabay.com/api/",{params:{key:"22538110-4c245d53289541016fd72dadc",q:e,image_type:"photo",orientation:"horizontal",per_page:12,page:t}}).then((function(t){return 0!==t.data.totalHits?t.data.hits:Promise.reject(new Error('There are no images with name "'.concat(e,'"')))}))},C=k;k.propTypes={page:a.n(I).a.number.isRequired};var L=function(e){Object(g.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:null,error:null,status:"idle",selectedImage:null,page:1,newImages:null,onLoading:!1},e.handleSelectImage=function(t){e.setState({selectedImage:t})},e.handleCloseModal=function(){e.setState({selectedImage:null})},e.handleLoadMore=function(){e.setState((function(e){return{page:e.page+1}})),e.setState({onLoading:!0})},e}return Object(j.a)(a,[{key:"smoothScroll",value:function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"componentDidUpdate",value:function(e,t){var a=this,n=e.inputName,r=this.props.inputName;n!==r&&(this.setState({status:"pending",page:1,images:null,newImages:null}),C(r,1).then((function(e){a.setState({images:e,status:"resolved",newImages:e.length})})).catch((function(e){return a.setState({error:e,status:"rejected"})}))),t.page!==this.state.page&&1!==this.state.page&&(this.setState({newImages:null}),C(r,this.state.page).then((function(e){a.setState({images:[].concat(Object(m.a)(t.images),Object(m.a)(e)),status:"resolved",newImages:e.length,onLoading:!1})})).then(this.smoothScroll).catch((function(e){return a.setState({error:e,status:"rejected"})})))}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.status,n=e.selectedImage,r=e.onLoading,o=e.newImages;return Object(u.jsxs)(u.Fragment,{children:["pending"===a&&Object(u.jsx)("div",{className:"loader",children:Object(u.jsx)(y,{})}),"rejected"===a&&Object(u.jsx)("h1",{className:"error",children:this.state.error.message}),"resolved"===a&&Object(u.jsx)("ul",{className:"ImageGallery",children:Object(u.jsx)(f,{images:t,onSelect:this.handleSelectImage})}),Object(u.jsx)(w,{handleLoadMore:this.handleLoadMore,onLoading:r,status:a,newImages:o}),n&&Object(u.jsx)(x,{selectedImage:n,handleCloseModal:this.handleCloseModal})]})}}]),a}(n.Component);function M(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),a=t[0],r=t[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d,{onSubmit:function(e){r(e)}}),Object(u.jsx)("div",{className:"content",children:Object(u.jsx)(L,{inputName:a})})]})}s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(M,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.8a07909e.chunk.js.map
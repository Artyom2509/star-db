(this["webpackJsonpstar-db"]=this["webpackJsonpstar-db"]||[]).push([[0],{19:function(e,t,n){},30:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),c=n.n(a),s=n(23),i=n.n(s),o=n(6),l=n(7),u=n(11),j=n(10),d=n(13),h=(n(30),function(){return Object(r.jsxs)("div",{className:"header d-flex",children:[Object(r.jsx)("h3",{children:Object(r.jsx)(d.b,{to:"/",children:"Star DB"})}),Object(r.jsxs)("ul",{className:"d-flex",children:[Object(r.jsx)("li",{children:Object(r.jsx)(d.b,{to:"/people/",children:"People"})}),Object(r.jsx)("li",{children:Object(r.jsx)(d.b,{to:"/planets/",children:"Planets"})}),Object(r.jsx)("li",{children:Object(r.jsx)(d.b,{to:"/starships/",children:"Starships"})})]})]})}),p=n(5),b=n.n(p),m=n(14),f=function(){function e(){var t=this;Object(o.a)(this,e),this._apiBase="https://swapi.dev/api/",this._imgBase="https://starwars-visualguide.com/assets/img/",this.getResource=function(){var e=Object(m.a)(b.a.mark((function e(n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t._apiBase).concat(n),{mode:"cors"});case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("Couldn't not Fetch ".concat(n," - recieved ").concat(r.status));case 5:return e.next=7,r.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllPeople=Object(m.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("people/");case 2:return n=e.sent,e.abrupt("return",n.results.map(t._transformPerson));case 4:case"end":return e.stop()}}),e)}))),this.getAllPlanets=Object(m.a)(b.a.mark((function e(){var n,r,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("planets/");case 2:return n=e.sent,r=["Tatooine"],a=n.results.filter((function(e){return!r.includes(e.name)})),e.abrupt("return",a.map(t._transformPlanet));case 6:case"end":return e.stop()}}),e)}))),this.getAllStarships=Object(m.a)(b.a.mark((function e(){var n,r,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("starships/");case 2:return n=e.sent,r=["CR90 corvette","Imperial I-class Star Destroyer","GR-75 medium transport"],a=n.results.filter((function(e){return!r.includes(e.model)})),e.abrupt("return",a.map(t._transformStarship));case 6:case"end":return e.stop()}}),e)}))),this.getOneStarship=function(){var e=Object(m.a)(b.a.mark((function e(n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("starships/".concat(n,"/"));case 2:return r=e.sent,e.abrupt("return",t._transformStarship(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getOnePlanet=function(){var e=Object(m.a)(b.a.mark((function e(n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("planets/".concat(n,"/"));case 2:return r=e.sent,e.abrupt("return",t._transformPlanet(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getOnePeople=function(){var e=Object(m.a)(b.a.mark((function e(n){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("people/".concat(n,"/"));case 2:return r=e.sent,e.abrupt("return",t._transformPerson(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformPlanet=function(e){return{id:t._extract(e),name:e.name,image:"".concat(t._imgBase,"planets/").concat(t._extract(e),".jpg"),population:e.population,rotationPeriod:e.rotation_period,diameter:e.diameter}},this._transformPerson=function(e){return{id:t._extract(e),name:e.name,image:"".concat(t._imgBase,"characters/").concat(t._extract(e),".jpg"),gender:e.gender,birthYear:e.birth_year,eyeColor:e.eye_color}},this._transformStarship=function(e){return{id:t._extract(e),name:e.name,image:"".concat(t._imgBase,"starships/").concat(t._extract(e),".jpg"),model:e.model,manufacturer:e.manufacturer,costInCredits:e.cost_in_credits,length:e.length,crew:e.crew,passengers:e.passengers,cargoCapacity:e.cargoCapacity}}}return Object(l.a)(e,[{key:"_extract",value:function(e){return e.url.match(/\/([0-9]*)\/$/)[1]}}]),e}(),O=(n(37),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)("div",{className:"loadingio-spinner-double-ring-go0n4ggjvd",children:Object(r.jsxs)("div",{className:"ldio-uhg0nkdn2jg",children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{children:Object(r.jsx)("div",{})}),Object(r.jsx)("div",{children:Object(r.jsx)("div",{})})]})})}}]),n}(a.Component)),x=function(e){var t=e.planet,n=t.id,a=t.name,s=t.population,i=t.rotationPeriod,o=t.diameter,l=n?Object(r.jsx)("img",{className:"planet-image",alt:"alt",src:"https://starwars-visualguide.com/assets/img/planets/".concat(n,".jpg")}):"";return Object(r.jsxs)(c.a.Fragment,{children:[l,Object(r.jsxs)("div",{children:[Object(r.jsx)("h4",{children:a}),Object(r.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(r.jsxs)("li",{className:"list-group-item",children:[Object(r.jsx)("span",{className:"term",children:"Population"}),Object(r.jsx)("span",{children:s})]}),Object(r.jsxs)("li",{className:"list-group-item",children:[Object(r.jsx)("span",{className:"term",children:"Rotation Period"}),Object(r.jsx)("span",{children:i})]}),Object(r.jsxs)("li",{className:"list-group-item",children:[Object(r.jsx)("span",{className:"term",children:"Diameter"}),Object(r.jsx)("span",{children:o})]})]})]})]})},g=(n(38),function(){return Object(r.jsxs)("div",{className:"error-indicator",children:[Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABcVBMVEUAAACUMUKVNESUNUaTNEWTNEWTNUWUNEWUNEWUNEWTNEWUNEWUNEWVNEWVNESUNUeWMkOUNUWVNEWUNEWTM0aVNUSSN0mVNUaUNEWUNEWUNEWVNESSNESWLUuUNESUNEWUNEafQECUNEaUNUWXNEaUMkaUNEWVNUaVM0SUNEWUM0WdO06UM0SVM0WSNkeVNUCUNEWUNEWVNEaUNESTMUWVMkSXOEiUNEWUNUSVNUSVK0CUNEWVNEWQN0OUNEaVNESUNEWAQED/AACUNEWZM02UNEaTNUaVM0SVNUaUNEaTNESSN0mUNEWUNUaZMzOUNEWVM0WUNEWTNkWUNEWVNEaXLkaUNEWUNEWXOUKUNEWVM0WUNkWSMkeUNEWUNUWUNEWUNEWVNUSUM0aTNUaTMkSUNEaUNESUNEWUNESPMECUNEWUNkOUNEWTNESUNUaTNEWZM0CUNEWVNEaUNUWVNUWSNUSUNEWUNEWTNESUNEUAAAAeSPByAAAAeXRSTlMAH155k63H4fjr07qiiWwrLn7O45pSDh2N3vuvMRGK97AIde4sTOJqeP2pDaTaLxjIwYRPGikg7FZlDNK2F8aoegQB2wpYhzxbko4c9j4Fnn3zNNS7FsuyG/FzUT3+jF3lwm5XR2Lya3AQ+ibqU6WmFNZx6TBESqdASVNu+gAAAAFiS0dEAIgFHUgAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiCRwPAQ3scZC+AAACoUlEQVRYw6WX+WPSMBTH6z11OhXva4hnFR0MdBsymGzshLmjKEMZG7svd3jmv7fJo23SJDQl35+S9/I+TV7SHIYh16nTZ86eO3+h6+Kly91XrvYY4XTt+g3EKnLz1m3V6Dt37yGR7j94qBL+6HEvkioaiHgSe4raKvqsbfzzFyhIXS/bxL8yA+NtvX4j635cJdzW23fC+L6E1yTZn0qnU/1JCaH3vSD+Q8T1Dww6xsEBMWGIj898dL3ZYc88nOWjc/mRT1x8Ier6R8dox9goByiKEjDuus0J1jNhqgAmPfcUWFLT0ykoTSkAZkqeu4wNs2To2VlcLisAPnteM4MNc1CZI+k1AwE9dpP5Bfu7MYQWiWURmnoVq0KKC/Me50vGBXzFc4MLVbvbxLIEbZZIBQ+n1mqao3ryzYn/jmv15WKxYSG0Qkyr0GSVVFbsUqS5hrVcFw2FXbBpbFqH8joupyXr2QXM1BkzTN7GJkKbGzChQYAt1pwswNIulyFJhWQQwPLZt9kp2pbFO0nc2fXZS3t0/F5JFu9M4yTn2T/w4g/2hcH0J34I/IdH4Ds6lHydBiREDczj+MlJ/NhECoDgfbg9oLCrCah0Ev+TAvyy5yMfUt2/KcAfhBqGjrQBYYfQ9APCJjHvB4SdRg4QdiHxAFjKrS0L1LDkgL8cAH6mGmOrhukB/M6tbRuEt3d1wI5KFmP4jKqwI3PPBUsBUCUta6zRORe2FABWw85tM8Ia11oA37auLsnB0gHAPdps+bupBPAOVz5RagDneOenShFAXzA6yQF7xVHXP249KyoHW0utQC/o8RAA4T2Rumh2BqCvusFDEFx1mct2sIZEfehLKMcLr/v6Dw5D+8lj6D+69J99hvbDE0vz6Uuk9/gGKT3//wOKqXrHYMfrIgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wOS0yOFQxNTowMToxMyswMjowMIL/AEkAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDktMjhUMTU6MDE6MTMrMDI6MDDzorj1AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg==",alt:"error icon"}),Object(r.jsx)("span",{className:"boom",children:"BOOM!"}),Object(r.jsx)("span",{children:"something has gone terribly wrong"}),Object(r.jsx)("span",{children:"(but we already sent droids to fix it)"})]})}),N=(n(39),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).swapiService=new f,e.state={planet:{},loading:!0,error:!1},e.onPlanetLoaded=function(t){e.setState({planet:t,loading:!1})},e.onError=function(t){e.setState({error:!0,loading:!1})},e.updatePlanet=function(){var t=Math.floor(30*Math.random())+1;if([22,23,24,27,20,26,13,25,29,30,28,1].includes(t))return e.updatePlanet(),!1;e.swapiService.getOnePlanet(t).then(e.onPlanetLoaded).catch(e.onError)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.updateInterval,n=e.updateTimeout;this.startTimeout=setTimeout(this.updatePlanet,n),this.interval=setInterval(this.updatePlanet,t)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval),clearTimeout(this.startTimeout)}},{key:"render",value:function(){var e=this.state,t=e.planet,n=e.loading,a=e.error,c=!(n&&a),s=n?Object(r.jsx)(O,{}):null,i=a?Object(r.jsx)(g,{}):null,o=c?Object(r.jsx)(x,{planet:t}):null;return Object(r.jsxs)("div",{className:"random-planet jumbotron rounded",children:[s,i||o]})}}]),n}(a.Component));N.defaultProps={updateInterval:6e3,updateTimeout:1e3};var A=N,v=(n(40),n(2)),U=(n(41),function(e){var t=e.left,n=e.right;return Object(r.jsxs)("div",{className:"row mb2",children:[Object(r.jsx)("div",{className:"col-md-6",children:t}),Object(r.jsx)("div",{className:"col-md-6",children:n})]})}),E=(n(19),n(4)),S=(n(42),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={item:null,isLoaded:!1},e.updateItem=function(){var t=e.props,n=t.itemId,r=t.getData;n&&r(n).then((function(t){e.setState({item:t,isLoaded:!0})}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({isLoaded:!0}),e.updateItem()}),500)}},{key:"componentDidUpdate",value:function(e){var t=this;this.props.itemId===e.itemId&&this.props.getData===e.getData||setTimeout((function(){t.updateItem(),t.setState({isLoaded:!1})}),300)}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,n=e.item;if(!n)return Object(r.jsx)("span",{className:"item-details",children:"Select a item from a list"});if(!t)return Object(r.jsx)("div",{className:"item-details card",children:Object(r.jsx)("div",{className:"card-body",children:Object(r.jsx)(O,{})})});var a=n.name,s=n.image;return Object(r.jsxs)("div",{className:"item-details card",children:[Object(r.jsx)("img",{className:"item-image",alt:"alt",src:s}),Object(r.jsxs)("div",{className:"card-body",children:[Object(r.jsx)("h4",{children:a}),Object(r.jsx)("ul",{className:"list-group list-group-flush",children:c.a.Children.map(this.props.children,(function(e){return c.a.cloneElement(e,{item:n})}))})]})]})}}]),n}(a.Component)),W=function(e){var t=e.item,n=e.field,a=e.label;return Object(r.jsxs)("li",{className:"list-group-item",children:[Object(r.jsx)("span",{className:"term",children:a}),Object(r.jsx)("span",{children:t[n]})]})},y=(n(43),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={hasError:!1},e}return Object(l.a)(n,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)(g,{}):this.props.children}}]),n}(a.Component)),w=O,M=function(e){return function(t){Object(u.a)(a,t);var n=Object(j.a)(a);function a(){var e;Object(o.a)(this,a);for(var t=arguments.length,r=new Array(t),c=0;c<t;c++)r[c]=arguments[c];return(e=n.call.apply(n,[this].concat(r))).state={data:null,loading:!0,error:!1},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.getData!==e.getData&&this.update()}},{key:"componentDidMount",value:function(){this.update()}},{key:"update",value:function(){var e=this;this.setState({loading:!0,error:!1}),this.props.getData().then((function(t){e.setState({data:t,loading:!1})})).catch((function(){e.setState({error:!0})}))}},{key:"render",value:function(){var t=this.state,n=t.data,a=t.loading,c=t.error;return a?Object(r.jsx)(w,{}):c?Object(r.jsx)(g,{}):Object(r.jsx)(y,{children:Object(r.jsx)(e,Object(E.a)(Object(E.a)({},this.props),{},{data:n}))})}}]),a}(a.Component)},P=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return t.reduceRight((function(e,t){return t(e)}),e)}},k=function(e){return function(t){return function(n){return Object(r.jsx)(t,Object(E.a)(Object(E.a)({},n),{},{children:e}))}}},T=c.a.createContext(),C=T.Provider,D=T.Consumer,I=function(e){return function(t){return function(n){return Object(r.jsx)(D,{children:function(a){var c=e(a);return Object(r.jsx)(t,Object(E.a)(Object(E.a)({},n),c))}})}}},B=I((function(e){return{getData:e.getOnePeople}}))((function(e){return Object(r.jsxs)(S,Object(E.a)(Object(E.a)({},e),{},{children:[Object(r.jsx)(W,{field:"gender",label:"Gender"}),Object(r.jsx)(W,{field:"birthYear",label:"Birth Year"}),Object(r.jsx)(W,{field:"eyeColor",label:"Eye color"})]}))})),R=I((function(e){return{getData:e.getOnePlanet}}))((function(e){return Object(r.jsxs)(S,Object(E.a)(Object(E.a)({},e),{},{children:[Object(r.jsx)(W,{field:"population",label:"Population"}),Object(r.jsx)(W,{field:"rotationPeriod",label:"Rotation period"}),Object(r.jsx)(W,{field:"diameter",label:"Diameter"})]}))})),V=I((function(e){return{getData:e.getOneStarship}}))((function(e){return Object(r.jsxs)(S,Object(E.a)(Object(E.a)({},e),{},{children:[Object(r.jsx)(W,{field:"model",label:"Model"}),Object(r.jsx)(W,{field:"length",label:"Length"}),Object(r.jsx)(W,{field:"costInCredits",label:"Cost"})]}))})),F=(n(44),function(e){var t=e.data,n=e.onItemSelected,a=e.children,c=t.map((function(e){var t=e.id,c=a(e);return Object(r.jsx)("li",{className:"list-group-item",onClick:function(){return n(t)},children:c},t)}));return Object(r.jsx)("ul",{className:"item-list list-group",children:c})});F.defaultProps={onItemSelected:function(){}};var L=F,G=function(e){var t=e.name;return Object(r.jsx)("span",{children:t})},_=P(I((function(e){return{getData:e.getAllPeople}})),M,k(G))(L),Q=P(I((function(e){return{getData:e.getAllPlanets}})),M,k(G))(L),K=P(I((function(e){return{getData:e.getAllStarships}})),M,k((function(e){var t=e.name,n=e.model;return Object(r.jsxs)("span",{children:[t," \xa0",Object(r.jsxs)("span",{className:"grayColor",children:["\xa0",n]})]})})))(L),Z=Object(v.f)((function(e){var t=e.history,n=e.match.params.id;return Object(r.jsx)(U,{left:Object(r.jsx)(_,{onItemSelected:function(e){return t.push(e)}}),right:Object(r.jsx)(B,{itemId:n})})})),H=Object(v.f)((function(e){var t=e.history,n=e.match.params.id;return Object(r.jsx)(U,{left:Object(r.jsx)(Q,{onItemSelected:function(e){return t.push(e)}}),right:Object(r.jsx)(R,{itemId:n})})})),X=Object(v.f)((function(e){var t=e.history;return Object(r.jsx)(K,{onItemSelected:function(e){return t.push(e)}})})),J=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={showRandomPlanet:!0,swapiService:new f},e.toggleRandomPlanet=function(){e.setState((function(e){return{showRandomPlanet:!e.showRandomPlanet}}))},e.onItemSelected=function(t){e.setState({selectedPerson:t})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.showRandomPlanet,n=e.swapiService,a=t?Object(r.jsx)(y,{children:Object(r.jsx)(A,{updateInterval:5e3})}):null;return Object(r.jsx)(y,{children:Object(r.jsx)(C,{value:n,children:Object(r.jsx)(d.a,{children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(h,{}),a,Object(r.jsx)("div",{className:"mb2 button-row",children:Object(r.jsx)("button",{className:"toggle-planet btn btn-warning btn-lg",onClick:this.toggleRandomPlanet,children:"Toggle Random Planet"})}),Object(r.jsxs)(v.c,{children:[Object(r.jsx)(v.a,{path:"/",exact:!0,render:function(){return Object(r.jsx)("h2",{children:"Welcome to StarDB"})}}),Object(r.jsx)(v.a,{path:"/people/:id?",component:Z}),Object(r.jsx)(v.a,{path:"/planets/:id?",component:H}),Object(r.jsx)(v.a,{path:"/starships",exact:!0,component:X}),Object(r.jsx)(v.a,{path:"/starships/:id",render:function(e){var t=e.match.params.id;return Object(r.jsx)(V,{itemId:t})}}),Object(r.jsx)(v.a,{render:function(){return Object(r.jsx)("h1",{children:"404 - Page not found"})}})]})]})})})})}}]),n}(a.Component);i.a.render(Object(r.jsx)(J,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.4f2eba59.chunk.js.map
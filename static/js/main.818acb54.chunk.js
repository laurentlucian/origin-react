(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(34)},30:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),i=a.n(o),s=(a(14),a(2)),l=a(3),c=a(5),u=a(4),m=a(6),h=a(36),d=a(35),p=a(37),b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={burger:!1},a.handleMenu=function(){var e=a.state.burger;a.setState({burger:!e})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar is-black",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("button",{className:"navbar-burger burger","aria-label":"menu","aria-expanded":"false",onClick:this.handleMenu,style:{border:"none",backgroundColor:"black",outline:"none"}},r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}))),r.a.createElement("div",{className:"navbar-menu ".concat(this.state.burger?"is-active":"")},r.a.createElement("div",{className:"navbar-start"},r.a.createElement(p.a,{to:"/",className:"navbar-item",onClick:this.handleMenu},"Home"),r.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},r.a.createElement("div",{className:"navbar-item navbar-link"},"Projects"),r.a.createElement("div",{className:"navbar-dropdown"},r.a.createElement(p.a,{to:"/todo",className:"navbar-item",onClick:this.handleMenu},"To Do"),r.a.createElement(p.a,{to:"/counter",className:"navbar-item",onClick:this.handleMenu},"Hello"),r.a.createElement(p.a,{to:"/weather",className:"navbar-item",onClick:this.handleMenu},"Weather"),r.a.createElement(p.a,{to:"/photos",className:"navbar-item",onClick:this.handleMenu},"Photos"))))))}}]),t}(n.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"Laurent Lucian"))))}}]),t}(n.Component),y=a(18),g=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={text:"",list:[],error:!1},a.onChange=function(e){var t=e.target.value;a.setState({text:t,error:!1})},a.onAdd=function(){if(""!==a.state.text){var e=a.state.text,t=Object(y.a)(a.state.list);t.push(e),localStorage.setItem("list",JSON.stringify(t)),a.setState({list:t,text:""})}else a.setState({error:!0})},a.onDelete=function(e){return function(){var t=a.state.list;t.splice(e,1),localStorage.removeItem("list"),localStorage.setItem("list",JSON.stringify(t)),a.setState(t)}},a.onClear=function(){a.setState({list:[]}),localStorage.clear()},a.handleKeyPress=function(e){if("Enter"===e.key)return a.onAdd()},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("list");e&&this.setState({list:JSON.parse(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement("div",{className:"column is-half",style:{display:"flex",margin:"0 auto",justifyContent:"center",flexDirection:"column"}},r.a.createElement("div",{className:"box field is-grouped",style:{margin:"0 auto"}},r.a.createElement("div",{className:"control "},r.a.createElement("input",{className:"input ".concat(this.state.error?"is-danger":""),type:"text",value:this.state.text,onChange:this.onChange,placeholder:"ToDo",onKeyPress:this.handleKeyPress})),r.a.createElement("div",{className:"control"},r.a.createElement("button",{onClick:this.onAdd,className:"button is-".concat(this.state.error?"danger":"primary")},"Submit")),r.a.createElement("button",{className:"button is-warning",onClick:this.onClear},"Clear"))),this.state.list.map(function(t,a){return r.a.createElement("div",{key:a,className:"tags has-addons",style:{margin:"0 auto",minWidth:"50%",justifyContent:"center"}},r.a.createElement("span",{className:"tag is-medium",style:{minWidth:"200px"}},r.a.createElement("ul",null,t)),r.a.createElement("button",{className:"tag is-delete is-medium",onClick:e.onDelete(a),style:{border:"none"}}))})))}}]),t}(n.Component),v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={hello:[],bye:!1,render:!1},a.handleIncrement=function(){var e=a.state.hello;e.push({hello:"Hello",color:!1}),a.setState({hello:e,bye:!1})},a.handleDelete=function(){a.setState({hello:[],bye:!0})},a.boxColor=function(e){var t=a.state.hello;console.log(t[e]),t[e].color=!t[e].color,a.setState({hello:t})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"formatCount",value:function(){var e=this.state.hello;return this.state.bye?"Goodbye":0===e.length?"Hello!":e.length+" hey(s)"}},{key:"render",value:function(){for(var e=this,t=[],a=0;a<this.state.count;a++)t.push("Hey");return r.a.createElement("div",{className:"container box",style:{maxWidth:600,marginTop:25}},r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement("span",{className:"is-size-4"},this.formatCount()),r.a.createElement("button",{className:"button is-primary box",onClick:this.handleIncrement,onKeyDown:this.handleIncrement},0===this.state.hello.length?"Say Hello":"Again?"),r.a.createElement("div",{style:{display:"flex",maxWidth:550,flexWrap:"wrap",justifyContent:"center",maxHeight:450,overflow:"scroll"}},this.state.hello.map(function(t,a){return r.a.createElement("h1",{className:"box",style:{margin:"5px",backgroundColor:"".concat(!0===e.state.hello[a].color?"red":"")},key:a,onClick:function(t){return e.boxColor(a)}},t.hello)})),0!==this.state.hello.length&&r.a.createElement("div",{style:{marginTop:10}},r.a.createElement("button",{className:"button is-primary box",onClick:this.handleDelete},"Bye"))))}}]),t}(n.Component),E=a(17),x=a(11),N=a(10);x.b.add(N.e,N.c,N.b,N.a,N.f,N.d);var j=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t,a=this.props.payload.Day.Icon,n=this.props.payload;return r.a.createElement("div",{className:"tile is-parent"},r.a.createElement("article",{className:"tile is-child box",style:{textAlign:"center"}},r.a.createElement("div",{className:"subtitle"},(t=n.Date,new Date(t.slice(0,10)).toLocaleDateString("en-US",{weekday:"long",timeZone:"UTC"}))),r.a.createElement("div",{className:"content"},function(e){return new Date(e.slice(0,10)).toLocaleDateString("en-US",{month:"long",year:"numeric",day:"numeric",timeZone:"UTC"})}(n.Date)),r.a.createElement(E.a,{className:"fa-3x",icon:(e=a,e<5?"sun":e>=5&&e<=11?"cloud-sun":e>=12&&e<=18?"umbrella":void 0)}),r.a.createElement("div",{className:"content",style:{marginTop:15}},n.Temperature.Minimum.Value," - ",n.Temperature.Maximum.Value)))}}]),t}(n.Component),S=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={isLoaded:!1,APIdata:[],error:null},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(this.props.cityKey,"?apikey=LsuOctlx0NZKQYh0XelQp37nqbms3lA5&language=en-us&details=false&metric=false")).then(function(e){return e.json()}).then(function(t){return e.setState({isLoaded:!0,APIdata:t})}).catch(function(t){return e.setState({error:t,isLoaded:!1})})}},{key:"render",value:function(){return!1===this.state.isLoaded&&null===this.state.error?r.a.createElement("p",null,"Fetching your weather..."):null!=this.state.error?r.a.createElement("p",null,"Something unexpected but expected occurred, please try again tomorrow (error when fetching weather data)"):r.a.createElement("div",{className:"box",style:{marginBottom:"20px"}},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"tile is-ancestor"},this.state.APIdata.DailyForecasts.map(function(e){return r.a.createElement(j,{key:e.Date,payload:e})}))))}}]),t}(n.Component),C=function(e){return r.a.createElement("form",{className:"field is-grouped",onSubmit:e.onSubmit},r.a.createElement("input",{className:"input is-medium ".concat(e.error?"is-danger":""),placeholder:e.placeholder,value:e.text,onChange:e.onChange}),r.a.createElement("button",{className:"button is-medium ".concat(e.error?"is-danger":""),onClick:e.onSubmit,type:"submit",style:{marginLeft:15}},"Search"))},O=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={text:"",error:!1},a.onChange=function(e){var t=e.target.value;a.setState({text:t,error:!1})},a.onSubmit=function(e){if(e.preventDefault(),""!==a.state.text){var t=a.state.text;a.props.onSubmit(t),a.setState({text:""})}else a.setState({error:!0})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(C,{placeholder:this.props.placeholder,text:this.state.text,onChange:this.onChange,onSubmit:this.onSubmit,error:this.state.error})}}]),t}(r.a.Component),k=function(e){return e.suggestions.slice(0,5).map(function(t){var a=t.city,n=t.state,o=t.rank;return r.a.createElement("li",{className:"dropdownitem",onClick:function(){return e.handleClick(a)},key:o},a,", ",n)})},w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={cityKey:[],cityName:"",isLoaded:!1,error:null,errorBox:!1,text:"",suggestions:[],newSuggestions:[]},a.onSubmit=function(e){if(e&&e.preventDefault(),""===a.state.text)return a.setState({errorBox:!0});a.setState({cityName:a.state.text,isLoaded:!1,error:null,text:"",errorBox:!1},a.getKey)},a.handleClick=function(e){a.setState({text:e},a.onSubmit)},a.onChange=function(e){var t=e.target.value;a.setState({text:t,errorBox:!1},a.getSuggestion)},a.getSuggestion=function(){var e=a.state.suggestions,t=a.state.text,n=e.filter(function(e){var a=RegExp(t,"gi");return e.city.match(a)});a.setState({newSuggestions:n})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"getKey",value:function(){var e=this;fetch("https://dataservice.accuweather.com/locations/v1/cities/search?apikey=LsuOctlx0NZKQYh0XelQp37nqbms3lA5&q="+this.state.cityName).then(function(e){return e.json()}).then(function(t){return e.setState({cityKey:t[0].Key,isLoaded:!0})}).catch(function(t){return e.setState({error:t})})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json").then(function(e){return e.json()}).then(function(t){return e.setState({suggestions:t})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"container",style:{margin:"20px auto",width:"700px"}},r.a.createElement("div",{className:"box",style:{maxHeight:"85px"}},r.a.createElement(C,{placeholder:"City",text:this.state.text,onChange:this.onChange,onSubmit:this.onSubmit,error:this.state.errorBox}),""!==this.state.text&&0!==this.state.newSuggestions.length?r.a.createElement("div",{className:"dropdown"},r.a.createElement(k,{suggestions:this.state.newSuggestions,handleClick:this.handleClick})):"")),this.state.error&&r.a.createElement("p",null,"Did you type the name of the city correctly? (error when fetching the search results)"),!this.state.isLoaded&&""!==this.state.cityName&&!this.state.error&&r.a.createElement("p",null,"Fetching City"),this.state.isLoaded&&r.a.createElement(S,{cityKey:this.state.cityKey}))}}]),t}(n.Component),D=function(e){var t=function(){};return e.item.map(function(e){return r.a.createElement("div",{className:"photo-item"},r.a.createElement("img",{key:e.id,src:e.urls.small,alt:e.description,onClick:t}))})},L="https://api.unsplash.com/search/photos?client_id=80686907d57006afe0be942506b8812817d84389a7ca9089734480eec48ab764&query=",A=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={json:[],loading:!1,isLoaded:!1,error:null},a.onSubmit=function(e){a.setState({loading:!0}),fetch(L+e).then(function(e){return e.json()}).then(function(e){return a.setState({json:e,isLoaded:!0,loading:!1})}).catch(function(e){return a.setState({error:e})})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container",style:{marginTop:20,width:500}},r.a.createElement("div",{className:"box"},r.a.createElement(O,{placeholder:"Photo",onSubmit:this.onSubmit}))),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:"photo-grid"},this.state.loading&&"Loading...",this.state.error&&!this.state.loading&&"Error, try again!",this.state.isLoaded&&!this.state.loading&&r.a.createElement(D,{item:this.state.json.results})))))}}]),t}(n.Component),K=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",position:"absolute",minHeight:"100vh",width:"100vw"}},r.a.createElement("div",{style:{flexGrow:1}},r.a.createElement(h.a,{basename:"/react-training"},r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(d.a,{path:"/",component:f,exact:!0}),r.a.createElement(d.a,{path:"/todo",component:g}),r.a.createElement(d.a,{path:"/counter",component:v}),r.a.createElement(d.a,{path:"/weather",component:w}),r.a.createElement(d.a,{path:"/photos",component:A})))),r.a.createElement("footer",{className:"footer",style:{height:"100px"}},r.a.createElement("div",{className:"content has-text-centered"},r.a.createElement("p",null,r.a.createElement("strong",null,"Taught")," by"," ",r.a.createElement("a",{href:"http://pierreandreis.com/#!/about"},"Pierre Andreis")),r.a.createElement("p",null,r.a.createElement("strong",null,"Made")," by"," Laurent Lucian"))))}}]),t}(r.a.Component);a(30),a(32);i.a.render(r.a.createElement(K,null),document.getElementById("root"))}},[[20,2,1]]]);
//# sourceMappingURL=main.818acb54.chunk.js.map
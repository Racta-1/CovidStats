(this.webpackJsonpcovid_19=this.webpackJsonpcovid_19||[]).push([[0],{41:function(a,e,n){},42:function(a,e,n){},68:function(a,e,n){"use strict";n.r(e);var t=n(1),i=n(0),s=n.n(i),r=n(30),c=n.n(r),o=n(34),l=(n(41),n(9)),d=n(10),u=n(12),h=n(11),b=n(71),j=(n(19),n(42),n(72)),m=n(69),p=n(32),g=n(73),x=n(70),O=n.p+"static/media/covid19.87883867.png",S=n(31),y=n.n(S),C=function(a){Object(u.a)(n,a);var e=Object(h.a)(n);function n(){var a;Object(l.a)(this,n);for(var t=arguments.length,i=new Array(t),s=0;s<t;s++)i[s]=arguments[s];return(a=e.call.apply(e,[this].concat(i))).state={info:[],country:["All","Afghanistan","Africa","Albania","Algeria","Andorra","Angola","Anguilla","Antigua-and-Barbuda","Argentina","Armenia","Aruba","Asia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia-and-Herzegovina","Botswana","Brazil","British-Virgin-Islands","Brunei-","Bulgaria","Burkina-Faso","Burundi","Cabo-Verde","Cambodia","Cameroon","Canada","CAR","Caribbean-Netherlands","Cayman-Islands","Chad","Channel-Islands","Chile","China","Colombia","Comoros","Congo","Costa-Rica","Croatia","Cuba","Cura&ccedil;ao","Cyprus","Czechia","Denmark","Diamond-Princess","Diamond-Princess-","Djibouti","Dominica","Dominican-Republic","DRC","Ecuador","Egypt","El-Salvador","Equatorial-Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Europe","Faeroe-Islands","Falkland-Islands","Fiji","Finland","France","French-Guiana","French-Polynesia","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hong-Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle-of-Man","Israel","Italy","Ivory-Coast","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","MS-Zaandam","MS-Zaandam-","Myanmar","Namibia","Nepal","Netherlands","New-Caledonia","New-Zealand","Nicaragua","Niger","Nigeria","North-America","North-Macedonia","Norway","Oman","Oceania","Pakistan","Palestine","Panama","Papua-New-Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto-Rico","Qatar","R&eacute;union","Romania","Russia","Rwanda","S.-Korea","Saint-Kitts-and-Nevis","Saint-Lucia","Saint-Martin","Saint-Pierre-Miquelon","San-Marino","Sao-Tome-and-Principe","Saudi-Arabia","Senegal","Serbia","Seychelles","Sierra-Leone","Singapore","Sint-Maarten","Slovakia","Slovenia","Somalia","South-Africa","South-America","South-Sudan","Spain","Sri-Lanka","St.-Barth","St.-Vincent-Grenadines","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Trinidad-and-Tobago","Tunisia","Turkey","Turks-and-Caicos","U.S.-Virgin-Islands","UAE","Uganda","UK","Ukraine","Uruguay","USA","Uzbekistan","Vatican-City","Venezuela","Vietnam","Western-Sahara","Yemen","Zambia","Zimbabwe"],selectedCountry:null},a.onInputChange=function(e){a.setState({selectedCountry:e.target.value})},a.listData=function(){var e=a.state.selectedCountry;y.a.get("https://covid-193.p.rapidapi.com/statistics?country=".concat(e),{headers:{"x-rapidapi-key":"8c896413c0msh5b94573c829464ep19e019jsnb748311900da","x-rapidapi-host":"covid-193.p.rapidapi.com"}}).then((function(e){a.setState({info:e.data.response})})).catch((function(a){console.log(a)}))},a.onFormSubmit=function(e){e.preventDefault(),a.listData()},a}return Object(d.a)(n,[{key:"render",value:function(){var a=this.state,e=a.info,n=a.country;return Object(t.jsxs)("div",{children:[Object(t.jsxs)("h1",{className:"display-2 text-white text-center font-weight-bold mb-5 mt-3",children:["Covid Statistics",Object(t.jsx)("img",{className:"img-fluid ml-4",width:"60",height:"60",src:O,alt:"Covid Logo"})]}),Object(t.jsx)(j.a,{className:"mb-5",onSubmit:this.onFormSubmit,children:Object(t.jsxs)(j.a.Group,{as:m.a,children:[Object(t.jsx)(p.a,{sm:{span:7,offset:2},children:Object(t.jsxs)(j.a.Control,{as:"select",size:"lg",custom:!0,onChange:this.onInputChange,defaultValue:"DEFAULT",children:[Object(t.jsx)("option",{value:"DEFAULT",disabled:!0,children:"Select Country"}),n.map((function(a){return Object(t.jsx)("option",{value:a,children:a},a)}))]})}),Object(t.jsx)(p.a,{sm:3,className:"mx-auto",children:Object(t.jsx)(g.a,{className:"btn-lg",type:"submit",children:"Check"})})]})}),Object(t.jsxs)(x.a,{className:"mt-5 bg-white shadow",children:[Object(t.jsxs)(m.a,{children:[Object(t.jsx)(p.a,{sm:6,children:Object(t.jsx)("h1",{className:"mb-5 p-3 bg-back text-white text-center rounded shadow",children:"Country"})}),Object(t.jsx)(p.a,{sm:6,children:Object(t.jsx)("h1",{className:"mb-5 p-3 bg-back text-white text-center rounded shadow",children:"Cases"})})]}),e.map((function(a){return Object(t.jsxs)(m.a,{children:[Object(t.jsx)(p.a,{sm:6,children:Object(t.jsx)("h2",{className:"mt-5 mb-5 p-5 bg-primary text-white text-center display-2 rounded shadow",children:Object(t.jsx)("span",{children:a.country})})}),Object(t.jsx)(p.a,{sm:6,children:Object(t.jsx)(m.a,{children:Object(t.jsxs)(p.a,{children:[Object(t.jsxs)("small",{className:"bg-primary text-white font-weight-bold p-2 rounded",children:["Population:",Object(t.jsx)("span",{className:"ml-5",children:null==a.population?a.population=0:a.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})]}),Object(t.jsx)("hr",{}),Object(t.jsxs)("h4",{children:["Active :",Object(t.jsx)("span",{className:"ml-5",children:null==a.cases.active?a.cases.active=0:a.cases.active.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})]}),Object(t.jsx)("hr",{}),Object(t.jsxs)("h4",{children:["Critical :",Object(t.jsx)("span",{className:"ml-5",children:null==a.cases.critical?a.cases.critical=0:a.cases.critical.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})]}),Object(t.jsx)("hr",{}),Object(t.jsxs)("h4",{children:["New :",Object(t.jsx)("span",{className:"ml-5",children:null==a.cases.new?a.cases.new=0:a.cases.new.toString().substring(1).replace(/\B(?=(\d{3})+(?!\d))/g,",")})]}),Object(t.jsx)("hr",{}),Object(t.jsxs)("h4",{children:["Recovered :",Object(t.jsx)("span",{className:"ml-5",children:null==a.cases.recovered?a.cases.recovered=0:a.cases.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})]}),Object(t.jsx)("hr",{}),Object(t.jsxs)("h4",{children:["Deaths :",Object(t.jsx)("span",{className:"ml-5",children:null==a.deaths.total?a.deaths.total=0:a.deaths.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})]}),Object(t.jsx)("hr",{}),Object(t.jsxs)("h2",{className:"text-right",children:["Total :",Object(t.jsx)("span",{className:"ml-5",children:a.cases.total.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")})]})]})})})]},a.country)}))]})]})}}]),n}(i.Component),v=function(a){Object(u.a)(n,a);var e=Object(h.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(t.jsx)(b.a,{fluid:!0,children:Object(t.jsx)(C,{})})}}]),n}(i.Component),f=function(a){a&&a instanceof Function&&n.e(3).then(n.bind(null,74)).then((function(e){var n=e.getCLS,t=e.getFID,i=e.getFCP,s=e.getLCP,r=e.getTTFB;n(a),t(a),i(a),s(a),r(a)}))};c.a.render(Object(t.jsx)(s.a.StrictMode,{children:Object(t.jsx)(o.a,{children:Object(t.jsx)(v,{})})}),document.getElementById("root")),f()}},[[68,1,2]]]);
//# sourceMappingURL=main.8a8a05dd.chunk.js.map
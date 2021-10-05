(this["webpackJsonpejercicio-2"]=this["webpackJsonpejercicio-2"]||[]).push([[0],{13:function(e,a,c){},15:function(e,a,c){},24:function(e,a,c){},31:function(e,a,c){},32:function(e,a,c){"use strict";c.r(a);var t=c(1),r=c(17),s=c.n(r),n=(c(13),c(10)),i=(c(24),c(2)),l={getCharacters:function(){return fetch("https://rickandmortyapi.com/api/character").then((function(e){return e.json()})).then((function(e){return e.results.map((function(e){return{name:e.name,species:e.species,id:e.id,image:e.image,status:e.status,planet:e.origin.name,episode:e.episode}}))}))}},o={get:function(e,a){var c=localStorage.getItem(e);return null===c?a:JSON.parse(c)},set:function(e,a){var c=JSON.stringify(a);localStorage.setItem(e,c)},remove:function(e){localStorage.removeItem(e)},clear:function(){localStorage.clear()}},h=(c(15),c(8)),m=c(0),j=function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(h.b,{to:"./characters/".concat(e.character.id),className:"link",children:[Object(m.jsx)("img",{src:e.character.image,alt:"personaje",className:"main__form--section--list--item--image image"}),Object(m.jsx)("h2",{className:"main__form--section--list--item--name name",alt:"nombre",title:"nombre",children:e.character.name}),Object(m.jsx)("h3",{className:"main__form--section--list--item--species species",alt:"especie",title:"especie",children:e.character.species})]})})},d=function(e){var a=e.data.map((function(e){return Object(m.jsx)("li",{className:"main__form--section--list--item item",children:Object(m.jsx)(j,{character:e})},e.id)}));return Object(m.jsx)("ul",{className:"main__form--section--list list",children:a})},u=function(e){return Object(m.jsxs)("div",{className:"main__form--container",children:[Object(m.jsx)("input",{type:"text",placeholder:"Search",className:"main__form--container--text",value:e.searchName,onChange:e.handleSearchName}),Object(m.jsx)("label",{className:"main__form--container--label",children:"Filter by species:"}),Object(m.jsxs)("select",{name:"select",className:"main__form--container--select",value:e.CharactersSearchpecies,onChange:e.handleCharactersSearchpecies,children:[Object(m.jsx)("option",{className:"main__form--container--select--option",value:"All",children:"All"}),Object(m.jsx)("option",{className:"main__form--container--select--option",value:"Human",children:"Human"}),Object(m.jsx)("option",{className:"main__form--container--select--option",value:"Alien",children:"Alien"})]})]})},b=(c(31),function(e){return void 0===e.character?Object(m.jsxs)("p",{className:"characterNotFound",children:[Object(m.jsx)("h1",{className:"characterNotFound__title",children:"\xa1WUBBA LUBBA DUB DUB!"}),Object(m.jsx)("h2",{className:"characterNotFound__text",children:"CHARACTER NOT FOUND"}),Object(m.jsx)("strong",{className:"characterNotFound__strong",children:"*BURP*"}),Object(m.jsx)(h.b,{to:"",children:Object(m.jsx)("button",{className:"characterNotFound__button",children:"GO BACK"})})]}):Object(m.jsxs)("article",{className:"articleDetail",children:[Object(m.jsx)("img",{src:e.character.image,alt:"Foto de ".concat(e.character.name),title:"Foto de ".concat(e.character.name),className:"articleDetail__img"}),Object(m.jsxs)("ul",{className:"articleDetail__list",children:[Object(m.jsxs)("li",{className:"articleDetail__list--name",children:["Name: ",e.character.name]}),Object(m.jsxs)("li",{className:"articleDetail__list--item",children:["Planet: ",e.character.planet]}),Object(m.jsxs)("li",{className:"articleDetail__list--item",children:["Species: ",e.character.species]}),Object(m.jsxs)("li",{className:"articleDetail__list--item",children:["Status: ",e.character.status]}),Object(m.jsxs)("li",{className:"articleDetail__list--item",children:["Episodes: ",e.character.episode.length]})]})]})}),_=function(e){return Object(m.jsxs)("form",{className:"main__form",children:[Object(m.jsx)(u,{searchName:e.searchName,handleSearchName:e.handleSearchName,CharactersSearchpecies:e.CharactersSearchpecies,handleCharactersSearchpecies:e.handleCharactersSearchpecies}),Object(m.jsx)("section",{className:"main__form--section",children:Object(m.jsx)(d,{data:e.data})})]})};var O=function(){var e=Object(t.useState)([]),a=Object(n.a)(e,2),c=a[0],r=a[1],s=Object(t.useState)(""),h=Object(n.a)(s,2),j=h[0],O=h[1],p=Object(t.useState)("All"),f=Object(n.a)(p,2),x=f[0],N=f[1],g=Object(i.f)("/characters/:id");Object(t.useEffect)((function(){o.get("characters",[]).length>0?r(o.get("characters",[])):l.getCharacters().then((function(e){r(e),o.set("characters",e)}))}),[j]);var S=null!==g?g.params.id:"",C=c.find((function(e){return e.id===parseInt(S)}));console.log(C);var v=c.filter((function(e){return"All"===x||e.species===x})).filter((function(e){return e.name.toLocaleLowerCase().includes(j.toLocaleLowerCase())}));return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("header",{className:"header",children:Object(m.jsx)("img",{className:"header__img",src:"https://help.redbubble.com/hc/article_attachments/360002309526/Rick_and_Morty_-_logo__English_.png",alt:"Rick and Morty"})}),Object(m.jsxs)("main",{className:"main",children:[Object(m.jsx)(i.c,{}),Object(m.jsx)(i.a,{path:"/characters/:id",children:Object(m.jsx)("section",{className:"sectionDetail",children:Object(m.jsx)(b,{character:C})})}),Object(m.jsx)(i.a,{exact:!0,path:"/",children:Object(m.jsx)(_,{searchName:j,handleSearchName:function(e){O(e.currentTarget.value)},CharactersSearchpecies:x,handleCharactersSearchpecies:function(e){N(e.currentTarget.value)},CharactersList:d,CharactersSearch:u,data:v})}),Object(m.jsx)(i.c,{})]}),Object(m.jsx)("footer",{className:"footer",children:Object(m.jsx)("small",{className:"footer__small",children:"Claudia Stein para Adalab \xa9 2021"})})]})};s.a.render(Object(m.jsx)(h.a,{children:Object(m.jsx)(O,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.f3d01657.chunk.js.map
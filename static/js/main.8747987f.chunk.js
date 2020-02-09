(this.webpackJsonprickmorty=this.webpackJsonprickmorty||[]).push([[0],{40:function(n,e,t){n.exports=t(58)},54:function(n,e,t){},58:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t.n(r),i=t(27),o=t.n(i),c=t(9),l=t(37),u=t(16),d=t(4),m=t(5),s=t(28),p=t.n(s);function v(){var n=Object(d.a)(["\n  border: 1px solid #a0a0a0;\n  width: 100%;\n  font-size: 30px;\n  line-height: 35px;\n  padding: 21px 25px;\n  margin-bottom: 30px;\n"]);return v=function(){return n},n}var f=m.b.input(v()),g=function(n){var e=n.onChange;return a.a.createElement(f,{onChange:function(n){return e(n.target.value)}})},h=(t(54),t(13)),b=t(12),y=t.n(b);function x(){var n=Object(d.a)(["\n  mutation SetPartyPersonMutation($person: SetPerson) {\n    setPartyPerson(person: $person) @client\n  }\n"]);return x=function(){return n},n}function w(){var n=Object(d.a)(["\n  query CharactersQuery($filter: FilterCharacter) {\n    characters(filter: $filter) {\n      results {\n        id\n        name\n        image\n      }\n    }\n  }\n"]);return w=function(){return n},n}function C(){var n=Object(d.a)(["\n  query PartyQuery {\n    party @client {\n      rick {\n        id\n        name\n        image\n      }\n      morty {\n        id\n        name\n        image\n      }\n    }\n  }\n"]);return C=function(){return n},n}var j=y()(C()),O=y()(w()),k=y()(x()),E=t(39),P=function(n){var e=n.width,t=void 0===e?30:e,r=n.height,i=void 0===r?30:r,o=n.opacity,c=void 0===o?.75:o,l=n.background,u=void 0===l?"white":l,d=n.iconColor,m=void 0===d?"#000":d,s=n.onClick,p=Object(E.a)(n,["width","height","opacity","background","iconColor","onClick"]);return a.a.createElement("svg",Object.assign({width:t,height:i,viewBox:"0 0 30 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:s},p),a.a.createElement("path",{d:"M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15Z",fill:u,fillOpacity:c}),a.a.createElement("path",{d:"M20 11.0071L18.9929 10L15 13.9929L11.0071 10L10 11.0071L13.9929 15L10 18.9929L11.0071 20L15 16.0071L18.9929 20L20 18.9929L16.0071 15L20 11.0071Z",fill:m}))};function L(){var n=Object(d.a)(["\n  position: absolute;\n  bottom: 15px;\n  color: #fff;\n  display: block;\n  width: 100%;\n  font-size: 24px;\n  line-height: 28px;\n  text-align: center;\n  text-transform: uppercase;\n"]);return L=function(){return n},n}function S(){var n=Object(d.a)(["\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  cursor: pointer;\n"]);return S=function(){return n},n}function _(){var n=Object(d.a)(["\n  position: relative;\n  display: block;\n  width: 100%;\n  height: 100%;\n  background: #dadada;\n  cursor: pointer;\n\n  ","\n"]);return _=function(){return n},n}function I(){var n=Object(d.a)(["\n  width: 100%;\n  max-width: 200px;\n  height: 220px;\n  padding: 10px;\n"]);return I=function(){return n},n}var U=m.b.div(I()),z=m.b.div(_(),(function(n){return n.imgUrl&&"\n    background-image: url(".concat(n.imgUrl,");\n    background-size: cover;\n  ")})),D=Object(m.b)(P)(S()),F=m.b.span(L()),M=function(n){var e=n.imgUrl,t=n.onRemove,r=n.children,i=n.isPersonType,o=n.setPerson;return a.a.createElement(U,null,a.a.createElement(z,{imgUrl:e,onClick:o},t&&a.a.createElement(D,{onClick:function(n){n.stopPropagation(),t&&t()}}),i&&!e&&a.a.createElement(F,null,r)))};function R(){var n=Object(d.a)(["\n  text-align: center;\n  padding: 10px 0;\n  color: red;\n"]);return R=function(){return n},n}function $(){var n=Object(d.a)(["\n  text-align: center;\n  padding: 10px 0;\n"]);return $=function(){return n},n}function q(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin-left: -10px;\n  margin-right: -10px;\n"]);return q=function(){return n},n}var Q=m.b.div(q()),B=m.b.div($()),T=m.b.div(R()),J=function(n){var e,t=n.value,i=n.onRemove,o=n.removed,c=Object(h.b)(O,{variables:{filter:{name:t}}}),l=c.data,d=c.loading,m=c.error,s=Object(h.a)(k),p=Object(u.a)(s,1)[0],v=Object(r.useCallback)((function(n){n&&p({variables:{person:n}})}),[p]);if(m)return a.a.createElement(T,null,"\xaf\\_(\u30c4)_/\xaf - Ooops. Something went wrong!");var f=null===l||void 0===l?void 0:null===(e=l.characters)||void 0===e?void 0:e.results,g=null===f||void 0===f?void 0:f.filter((function(n){return!o.some((function(e){return e===(null===n||void 0===n?void 0:n.id)}))&&null!==n}));return d?a.a.createElement(B,null,"Loading..."):a.a.createElement(Q,null,g&&g.map((function(n){return a.a.createElement(M,{key:null===n||void 0===n?void 0:n.id,imgUrl:null===n||void 0===n?void 0:n.image,onRemove:function(){return i(null===n||void 0===n?void 0:n.id)},setPerson:function(){return v(n)},person:n})})))};function W(){var n=Object(d.a)(["\n  font-size: 30px;\n  line-height: 35px;\n  font-weight: bold;\n  margin-bottom: 5px;\n  text-align: center;\n  text-transform: uppercase;\n"]);return W=function(){return n},n}function Z(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return Z=function(){return n},n}function G(){var n=Object(d.a)(["\n  max-width: 390px;\n  padding-top: 100px;\n  width: 100%;\n  margin: 0 auto;\n"]);return G=function(){return n},n}var A=m.b.div(G()),H=m.b.div(Z()),K=m.b.div(W()),N=function(){var n,e,t=Object(h.b)(j).data,r=null===t||void 0===t?void 0:null===(n=t.party)||void 0===n?void 0:n.rick,i=null===t||void 0===t?void 0:null===(e=t.party)||void 0===e?void 0:e.morty;return a.a.createElement(A,null,a.a.createElement(K,null,"Party"),a.a.createElement(H,null,a.a.createElement(M,{id:null===r||void 0===r?void 0:r.id,imgUrl:null===r||void 0===r?void 0:r.image,isPersonType:!0},"Rick"),a.a.createElement(M,{id:null===i||void 0===i?void 0:i.id,imgUrl:null===i||void 0===i?void 0:i.image,isPersonType:!0},"Morty")))};function V(){var n=Object(d.a)(["\n  max-width: 800px;\n  width: 100%;\n  margin: 0 auto;\n  padding-top: 150px;\n  min-height: 700px;\n  display: flex;\n  flex-direction: column;\n"]);return V=function(){return n},n}var X=m.b.div(V()),Y=function(){var n=Object(r.useState)(""),e=Object(u.a)(n,2),t=e[0],i=e[1],o=Object(r.useState)([]),c=Object(u.a)(o,2),d=c[0],m=c[1],s=p()((function(n){return i(n)}),300);return a.a.createElement(X,null,a.a.createElement(g,{onChange:s}),t&&t.length>2?a.a.createElement(J,{value:t,removed:d,onRemove:function(n){var e=Object(l.a)(d);e.push(n),m(e)}}):null,a.a.createElement(N,null))};function nn(){var n=Object(d.a)(["\n  body {\n    margin: 0;\n    font-family: 'Roboto', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n* {\n    box-sizing: border-box;\n  }\n"]);return nn=function(){return n},n}var en=Object(m.a)(nn());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var tn=t(14),rn=t(36),an={Mutation:{setPartyPerson:function(n,e,t){var r,a,i=e.person,o=t.cache,c=o.readQuery({query:j}),l=i.name.toLowerCase().includes("rick"),u=i.name.toLowerCase().includes("morty");return o.writeData({data:{party:{rick:l?{id:i.id,name:i.name,image:i.image,__typename:"Character"}:null===c||void 0===c?void 0:null===(r=c.party)||void 0===r?void 0:r.rick,morty:u?{id:i.id,name:i.name,image:i.image,__typename:"Character"}:null===c||void 0===c?void 0:null===(a=c.party)||void 0===a?void 0:a.morty,__typename:"Party"}}}),i}}};function on(){var n=Object(d.a)(["\n  directive @client on FIELD\n\n  type Characters {\n    info: Info\n    results: [Character]\n  }\n\n  input GetCharactersInput {\n    filter: FilterCharacter\n    page: Int\n  }\n\n  input FilterCharacter {\n    name: String\n    status: String\n    species: String\n    type: String\n    gender: String\n  }\n\n  type Character {\n    id: ID\n    name: String\n    image: String\n  }\n\n  input SetPerson {\n    id: ID\n    name: String\n    image: String\n  }\n\n  type Info {\n    count: Int\n    pages: Int\n    next: Int\n    prev: Int\n  }\n\n  type Party {\n    rick: Character\n    morty: Character\n  }\n\n  type Query {\n    characters(filter: FilterCharacter): Characters\n    party: Party\n  }\n\n  type Mutation {\n    setPartyPerson(person: SetPerson): Character\n  }\n"]);return on=function(){return n},n}var cn=y()(on()),ln=new tn.a({}),un=new rn.a({uri:"https://rickandmortyapi.com/graphql",cache:ln,resolvers:an,typeDefs:cn});ln.writeData({data:{party:{rick:{id:null,name:null,image:null,__typename:"Character"},morty:{id:null,name:null,image:null,__typename:"Character"},__typename:"Party"}}}),o.a.render(a.a.createElement(r.Fragment,null,a.a.createElement(en,null),a.a.createElement(c.a,{client:un},a.a.createElement(Y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.8747987f.chunk.js.map
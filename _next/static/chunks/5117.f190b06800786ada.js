"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5117],{5672:function(n,r,o){var e=o(3980),t={colour:e.string,disabled:e.bool,disabledColour:e.string,fixColour:e.string,hoverColour:(0,e.oneOfType)([e.bool,e.string]),onClick:e.func,size:(0,e.oneOfType)([e.number,e.string])};r.Z=t},5638:function(n,r,o){var e=o(7328),t=o(6670),i=o(6297),u=o(2228),l=o(2322),s=(o(2784),o(5545));function a(){var n=(0,u.Z)(["\n        height: ","px;\n        width: ","px;\n      "]);return a=function(){return n},n}function c(){var n=(0,u.Z)(["\n          transform: scale(",") ",";\n        "]);return c=function(){return n},n}function C(){var n=(0,u.Z)(["\n      cursor: pointer;\n    "]);return C=function(){return n},n}function d(){var n=(0,u.Z)(["\n  ","\n\n  path {\n    fill: ",";\n    stroke: ",";\n    transition: fill 0.2s ease;\n\n    ","\n  }\n\n  &:hover {\n    path {\n      fill: ",";\n    }\n  }\n\n  ","\n"]);return d=function(){return n},n}var f="default",v="hover",b=function(n,r){var o=r.colour,e=r.context,t=r.disabled,i=r.disabledColour,u=r.hoverColour,l=r.theme,s=l.ICONS,a=l.THEME_COLOUR,c=e?a.context:o||s.defaultIconColour;return n===f?t&&i?i:t?s.disabledIconColour:c:n===v&&u?(!0===u&&(u=s.hoverIconColour),t&&i?i:t?s.disabledIconColour:u||s.hoverIconColour||c):t?i||s.disabledIconColour:c},h=s.ZP.svg.withConfig({componentId:"sc-b0a149c7-0"})(d(),(function(n){var r=n.size;if("number"===typeof r)return(0,s.iv)(a(),r,r)}),(function(n){return b(f,n)}),(function(n){return n.stroke}),(function(n){var r=n.scale,o=n.translate;return r&&(0,s.iv)(c(),r,o||"")}),(function(n){return b(v,n)}),(function(n){var r=n.onClick,o=n.disabled;return r&&!o&&(0,s.iv)(C())}));r.Z=function(n){var r=n.children,o=n.colour,u=n.disabled,s=n.disabledColour,a=n.hoverColour,c=n.onClick,C=n.size,d=n.stroke,f=n.translate,v=(0,i.Z)(n,["children","colour","disabled","disabledColour","hoverColour","onClick","size","stroke","translate"]),b=v.mainSize,k="";if("string"===typeof C)switch(C){case"xs":k=12;break;case"sm":k=16;break;case"lg":k=24;break;case"xl":k=32;break;default:k=20}else k=C||20;var p=1;return b&&k!==b&&(p=Number(k/b)),(0,l.jsx)(h,(0,t.Z)((0,e.Z)({colour:o,disabled:u,disabledColour:s,hoverColour:a,onClick:c,scale:p,size:k,stroke:d,translate:f,xmlns:"http://www.w3.org/2000/svg"},v),{children:r}))}},5117:function(n,r,o){o.r(r);var e=o(7328),t=o(6670),i=o(2322),u=(o(2784),o(5672)),l=o(5638),s=function(n){return(0,i.jsx)(l.Z,(0,t.Z)((0,e.Z)({},n),{mainSize:20,children:(0,i.jsx)("path",{d:"M18.5293 8.06066L15.7207 5.43934C15.4193 5.15804 15.0105 5 14.5843 5H5.60714C4.71953 5 4 5.67156 4 6.5V17.5C4 18.3284 4.71953 19 5.60714 19H17.3929C18.2805 19 19 18.3284 19 17.5V9.12131C19 8.72349 18.8307 8.34196 18.5293 8.06066ZM11.5 17C10.3165 17 9.35714 16.1046 9.35714 15C9.35714 13.8954 10.3165 13 11.5 13C12.6835 13 13.6429 13.8954 13.6429 15C13.6429 16.1046 12.6835 17 11.5 17ZM14.7143 7.48375V10.625C14.7143 10.8321 14.5344 11 14.3125 11H6.54464C6.32276 11 6.14286 10.8321 6.14286 10.625V7.375C6.14286 7.16791 6.32276 7 6.54464 7H14.196C14.3026 7 14.4047 7.0395 14.4801 7.10984L14.5966 7.21859C14.6339 7.25341 14.6635 7.29475 14.6837 7.34024C14.7039 7.38574 14.7143 7.4345 14.7143 7.48375Z"})}))};s.propTypes=u.Z,r.default=s}}]);
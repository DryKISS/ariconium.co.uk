"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2121],{5672:function(n,r,o){var e=o(3980),t={colour:e.string,disabled:e.bool,disabledColour:e.string,fixColour:e.string,hoverColour:(0,e.oneOfType)([e.bool,e.string]),onClick:e.func,size:(0,e.oneOfType)([e.number,e.string])};r.Z=t},5638:function(n,r,o){var e=o(7328),t=o(6670),i=o(6297),l=o(2228),u=o(2322),s=(o(2784),o(5545));function a(){var n=(0,l.Z)(["\n        height: ","px;\n        width: ","px;\n      "]);return a=function(){return n},n}function c(){var n=(0,l.Z)(["\n          transform: scale(",") ",";\n        "]);return c=function(){return n},n}function f(){var n=(0,l.Z)(["\n      cursor: pointer;\n    "]);return f=function(){return n},n}function d(){var n=(0,l.Z)(["\n  ","\n\n  path {\n    fill: ",";\n    stroke: ",";\n    transition: fill 0.2s ease;\n\n    ","\n  }\n\n  &:hover {\n    path {\n      fill: ",";\n    }\n  }\n\n  ","\n"]);return d=function(){return n},n}var C="default",v="hover",h=function(n,r){var o=r.colour,e=r.context,t=r.disabled,i=r.disabledColour,l=r.hoverColour,u=r.theme,s=u.ICONS,a=u.THEME_COLOUR,c=e?a.context:o||s.defaultIconColour;return n===C?t&&i?i:t?s.disabledIconColour:c:n===v&&l?(!0===l&&(l=s.hoverIconColour),t&&i?i:t?s.disabledIconColour:l||s.hoverIconColour||c):t?i||s.disabledIconColour:c},b=s.ZP.svg.withConfig({componentId:"sc-b0a149c7-0"})(d(),(function(n){var r=n.size;if("number"===typeof r)return(0,s.iv)(a(),r,r)}),(function(n){return h(C,n)}),(function(n){return n.stroke}),(function(n){var r=n.scale,o=n.translate;return r&&(0,s.iv)(c(),r,o||"")}),(function(n){return h(v,n)}),(function(n){var r=n.onClick,o=n.disabled;return r&&!o&&(0,s.iv)(f())}));r.Z=function(n){var r=n.children,o=n.colour,l=n.disabled,s=n.disabledColour,a=n.hoverColour,c=n.onClick,f=n.size,d=n.stroke,C=n.translate,v=(0,i.Z)(n,["children","colour","disabled","disabledColour","hoverColour","onClick","size","stroke","translate"]),h=v.mainSize,k="";if("string"===typeof f)switch(f){case"xs":k=12;break;case"sm":k=16;break;case"lg":k=24;break;case"xl":k=32;break;default:k=20}else k=f||20;var p=1;return h&&k!==h&&(p=Number(k/h)),(0,u.jsx)(b,(0,t.Z)((0,e.Z)({colour:o,disabled:l,disabledColour:s,hoverColour:a,onClick:c,scale:p,size:k,stroke:d,translate:C,xmlns:"http://www.w3.org/2000/svg"},v),{children:r}))}},2121:function(n,r,o){o.r(r);var e=o(7328),t=o(6670),i=o(2322),l=(o(2784),o(5672)),u=o(5638),s=function(n){return(0,i.jsx)(u.Z,(0,t.Z)((0,e.Z)({},n),{mainSize:20,children:(0,i.jsx)("path",{d:"M10.0795 0.376925L5.90906 4.54693H1.125C0.503438 4.54693 0 5.05036 0 5.67193V12.4219C0 13.043 0.503438 13.5469 1.125 13.5469H5.90906L10.0795 17.7165C10.7841 18.421 12 17.926 12 16.921V1.17286C12 0.166456 10.7831 -0.3262 10.0795 0.376925ZM15.8545 5.44317C15.3117 5.14646 14.6269 5.34193 14.3259 5.88614C14.0264 6.43036 14.2247 7.11427 14.7689 7.41474C15.3741 7.74755 15.75 8.37286 15.75 9.04692C15.75 9.72099 15.3741 10.3463 14.7694 10.6786C14.2252 10.9791 14.0269 11.663 14.3264 12.2072C14.6278 12.7538 15.3131 12.9479 15.855 12.6502C17.1783 11.9213 18.0005 10.5408 18.0005 9.04646C18.0005 7.55208 17.1783 6.17208 15.8545 5.44317Z",fill:"white"})}))};s.propTypes=l.Z,r.default=s}}]);
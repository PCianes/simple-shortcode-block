!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";var r=n(4),o=n.n(r),l=wp.i18n.__,s=wp.editor.PlainText,c=wp.components.Dashicon,i=function(e){var t=e.attributes.shortcode,n=e.className,r=e.setAttributes;return wp.element.createElement("div",{className:o()(n,"ssb-shortcode-input")},wp.element.createElement("label",{className:"ssb-shortcode-label"},wp.element.createElement(c,{icon:"shortcode"}),l("Shortcode","simple-shortcode-block")),wp.element.createElement(s,{className:"input-control",value:t,placeholder:l("Write here your [shortcode]"),onChange:function(e){return r({shortcode:e})}}))};t.a=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);n.n(r),n(3)},function(e,t){wp.i18n.setLocaleData({"":{}},"simple-shortcode-block")},function(e,t,n){"use strict";var r=n(0),o=n(5),l=n(7),s=n(8),c=(n.n(s),wp.i18n.__),i=wp.blocks.registerBlockType,a=wp.components.ServerSideRender;i("simple-shortcode-block/shortcode",{title:c("Dynamic Shortcode","simple-shortcode-block"),description:c("A simple block to render a shortcode in a dynamic way.","simple-shortcode-block"),icon:{background:"rgba(41, 170, 227)",src:"shortcode"},category:"widgets",supports:{html:!1},edit:function(e){var t=e.attributes,n=e.className,s=e.setAttributes;e.isSelected;return wp.element.createElement("div",{className:n},wp.element.createElement(r.a,{attributes:t,className:n,setAttributes:s}),wp.element.createElement(a,{block:"simple-shortcode-block/shortcode",attributes:t}),wp.element.createElement(l.a,Object.assign({setAttributes:s},e)),wp.element.createElement(o.a,Object.assign({setAttributes:s},e)))},save:function(){return null}})},function(e,t,n){var r,o;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var s=n.apply(null,r);s&&e.push(s)}else if("object"===o)for(var c in r)l.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}var l={}.hasOwnProperty;"undefined"!==typeof e&&e.exports?(n.default=n,e.exports=n):(r=[],void 0!==(o=function(){return n}.apply(t,r))&&(e.exports=o))}()},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=n(0),c=n(6),i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=wp.i18n.__,u=wp.element.Component,p=wp.editor.InspectorControls,f=wp.components,b=f.PanelBody,m=f.PanelRow,h=f.SelectControl,y=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),i(t,[{key:"render",value:function(){var e=this.props,t=e.attributes,n=e.className,r=e.setAttributes,o=t.selectPlugin,l=[{value:0,label:a("Select the plugin of the shortcode","simple-shortcode-block")}];return Object.keys(ssb_plugins_register_styles).map(function(e){l.push({value:e,label:e.split("-").join(" ").toUpperCase()})}),wp.element.createElement(p,null,wp.element.createElement(b,null,wp.element.createElement(s.a,{attributes:t,className:n,setAttributes:r})),wp.element.createElement(b,null,wp.element.createElement(m,null,wp.element.createElement("p",null,a("Do not you see what you expected? If the plugin of your shortcode not load styles in the backend first try to save and refresh this page. If the problem persists try with the following:","simple-shortcode-block"))),wp.element.createElement(h,{label:a("1.- Select the plugin of your shortcode:","simple-shortcode-block"),value:o,options:l,onChange:function(e){return r({selectPlugin:e})}}),wp.element.createElement(m,null,wp.element.createElement("p",null,a("2.-Try to load CSS & JS by manually selecting them:","simple-shortcode-block")))),wp.element.createElement(b,{title:a("CSS styles","simple-shortcode-block"),initialOpen:!1},wp.element.createElement(m,null,wp.element.createElement("p",null,a("Try to load styles by manually selecting one or more:","simple-shortcode-block"))),wp.element.createElement(c.a,Object.assign({setAttributes:r},this.props))))}}]),t}(u);t.a=y},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=wp.element.Component,i=wp.components.ToggleControl,a=[];Object.keys(ssb_plugins_register_styles).map(function(e){a[e]=ssb_plugins_register_styles[e]});var u=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),s(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.attributes,r=t.setAttributes,o=n.shortcode,l=n.selectPlugin,s=n.checkedStyles,c=[];return(c=!!a[l]&&a[l])&&c.map(function(t){var l=void 0;return l="undefined"==typeof s||"undefined"==typeof o?[]:s.split(","),wp.element.createElement(i,{id:t.name,key:t.name,label:t.name,value:l.indexOf(t.src)>=0,checked:l.indexOf(t.src)>=0,onChange:function(o){!o||l.indexOf(t.src)>=0?l=l.filter(function(e){return e!==t.src}):l.push(t.src),r(1==l.length?{checkedStyles:l[0]}:{checkedStyles:l.join()}),e.setState({attributes:n})}})})}}]),t}(c);t.a=u},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=wp.element.Component,i=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),s(t,[{key:"render",value:function(){var e=this.props.attributes,t=e.checkedStyles,n=void 0,r=void 0;return"undefined"==typeof t||""==t?r=!1:(n=t.split(","),r=!0),r&&n.map(function(e){if(""!=e)return wp.element.createElement("link",{key:e,rel:"stylesheet",type:"text/css",href:e})})}}]),t}(c);t.a=i},function(e,t){}]);
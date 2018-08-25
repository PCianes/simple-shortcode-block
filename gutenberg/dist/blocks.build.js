!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";var r=n(4),o=n.n(r),s=wp.i18n.__,i=wp.editor.PlainText,l=wp.components.Dashicon,c=function(e){var t=e.attributes.shortcode,n=e.className,r=e.setAttributes;return wp.element.createElement("div",{className:o()(n,"ssb-shortcode-input")},wp.element.createElement("label",{className:"ssb-shortcode-label"},wp.element.createElement(l,{icon:"shortcode"}),s("Shortcode","simple-shortcode-block")),wp.element.createElement(i,{className:"input-control",value:t,placeholder:s("Write here your [shortcode]"),onChange:function(e){return r({shortcode:e})}}))};t.a=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(2);n.n(r),n(3)},function(e,t){wp.i18n.setLocaleData({"":{}},"simple-shortcode-block")},function(e,t,n){"use strict";var r=n(0),o=n(5),s=n(8),i=n(9),l=n(10),c=(n.n(l),wp.i18n.__),a=wp.blocks.registerBlockType,u=wp.components.ServerSideRender;a("simple-shortcode-block/shortcode",{title:c("Dynamic Shortcode","simple-shortcode-block"),description:c("A simple block to render a shortcode in a dynamic way.","simple-shortcode-block"),icon:{background:"rgba(41, 170, 227)",src:"shortcode"},category:"widgets",supports:{html:!1},edit:function(e){var t=e.attributes,n=e.className,l=e.setAttributes;e.isSelected;return wp.element.createElement("div",{className:n},wp.element.createElement(r.a,{attributes:t,className:n,setAttributes:l}),wp.element.createElement(u,{block:"simple-shortcode-block/shortcode",attributes:t}),wp.element.createElement(s.a,Object.assign({setAttributes:l},e)),wp.element.createElement(i.a,Object.assign({setAttributes:l},e)),wp.element.createElement(o.a,Object.assign({setAttributes:l},e)))},save:function(){return null}})},function(e,t,n){var r,o;!function(){"use strict";function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=n.apply(null,r);i&&e.push(i)}else if("object"===o)for(var l in r)s.call(r,l)&&r[l]&&e.push(l)}}return e.join(" ")}var s={}.hasOwnProperty;"undefined"!==typeof e&&e.exports?(n.default=n,e.exports=n):(r=[],void 0!==(o=function(){return n}.apply(t,r))&&(e.exports=o))}()},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(0),l=n(6),c=n(7),a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=wp.i18n.__,p=wp.element.Component,f=wp.editor.InspectorControls,b=wp.components,m=b.PanelBody,h=b.PanelRow,y=b.SelectControl,d=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),a(t,[{key:"render",value:function(){var e=this.props,t=e.attributes,n=e.className,r=e.setAttributes,o=t.selectPlugin,s=[{value:0,label:u("Select the plugin of the shortcode","simple-shortcode-block")}];return Object.keys(ssb_plugins_register_styles).map(function(e){s.push({value:e,label:e.split("-").join(" ").toUpperCase()})}),wp.element.createElement(f,null,wp.element.createElement(m,null,wp.element.createElement(i.a,{attributes:t,className:n,setAttributes:r})),wp.element.createElement(m,null,wp.element.createElement(h,null,wp.element.createElement("p",null,u("Do not you see what you expected? If the plugin of your shortcode not load styles in the backend first try to save and refresh this page. If the problem persists try with the following:","simple-shortcode-block"))),wp.element.createElement(h,null,wp.element.createElement("p",{class:"ssb-blue"},u("1.- Select the plugin of your shortcode:","simple-shortcode-block"))),wp.element.createElement(y,{value:o,options:s,onChange:function(e){return r({selectPlugin:e})}}),wp.element.createElement(h,null,wp.element.createElement("p",{class:"ssb-blue"},u("2.-Try to load CSS & JS by manually selecting them:","simple-shortcode-block")))),wp.element.createElement(m,{title:u("CSS styles","simple-shortcode-block"),initialOpen:!1},wp.element.createElement(h,null,wp.element.createElement("p",null,u("Try to load styles by manually selecting one or more:","simple-shortcode-block"))),wp.element.createElement(l.a,Object.assign({setAttributes:r},this.props))),wp.element.createElement(m,{title:u("JS scripts","simple-shortcode-block"),initialOpen:!1},wp.element.createElement(h,null,wp.element.createElement("p",null,u("Try to load scripts by manually selecting one or more:","simple-shortcode-block"))),wp.element.createElement(c.a,Object.assign({setAttributes:r},this.props))),wp.element.createElement(m,null,wp.element.createElement(h,null,wp.element.createElement("p",{class:"ssb-blue"},u("3.-Save and manual refresh this page.","simple-shortcode-block")))))}}]),t}(p);t.a=d},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=wp.element.Component,c=wp.components.ToggleControl,a=[];Object.keys(ssb_plugins_register_styles).map(function(e){a[e]=ssb_plugins_register_styles[e]});var u=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),i(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.attributes,r=t.setAttributes,o=n.shortcode,s=n.selectPlugin,i=n.checkedStyles,l=[];return(l=!!a[s]&&a[s])&&l.map(function(t){var s=void 0;return s="undefined"==typeof i||"undefined"==typeof o?[]:i.split(","),wp.element.createElement(c,{id:t.name,key:t.name,label:t.name,value:s.indexOf(t.src)>=0,checked:s.indexOf(t.src)>=0,onChange:function(o){!o||s.indexOf(t.src)>=0?s=s.filter(function(e){return e!==t.src}):s.push(t.src),r(1==s.length?{checkedStyles:s[0]}:{checkedStyles:s.join()}),e.setState({attributes:n})}})})}}]),t}(l);t.a=u},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=wp.element.Component,c=wp.components.ToggleControl,a=[];Object.keys(ssb_plugins_register_scripts).map(function(e){a[e]=ssb_plugins_register_scripts[e]});var u=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),i(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.attributes,r=t.setAttributes,o=n.shortcode,s=n.selectPlugin,i=n.checkedScripts,l=[];return(l=!!a[s]&&a[s])&&l.map(function(t){var s=void 0;return s="undefined"==typeof i||"undefined"==typeof o?[]:i.split(","),wp.element.createElement(c,{id:t.name,key:t.name,label:t.name,value:s.indexOf(t.src)>=0,checked:s.indexOf(t.src)>=0,onChange:function(o){!o||s.indexOf(t.src)>=0?s=s.filter(function(e){return e!==t.src}):s.push(t.src),r(1==s.length?{checkedScripts:s[0]}:{checkedScripts:s.join()}),e.setState({attributes:n})}})})}}]),t}(l);t.a=u},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=wp.element.Component,c=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),i(t,[{key:"render",value:function(){var e=this.props.attributes,t=e.checkedStyles,n=void 0,r=void 0;return"undefined"==typeof t||""==t?r=!1:(n=t.split(","),r=!0),r&&n.map(function(e){if(""!=e)return wp.element.createElement("link",{key:e,rel:"stylesheet",type:"text/css",href:e})})}}]),t}(l);t.a=c},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=wp.element.Component,c=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),i(t,[{key:"render",value:function(){var e=this.props.attributes,t=e.checkedScripts,n=void 0,r=void 0;return"undefined"==typeof t||""==t?r=!1:(n=t.split(","),r=!0),r&&n.map(function(e){if(""!=e)return wp.element.createElement("script",{key:e,type:"text/javascript/defer",src:e,async:!0,defer:!0})})}}]),t}(l);t.a=c},function(e,t){}]);
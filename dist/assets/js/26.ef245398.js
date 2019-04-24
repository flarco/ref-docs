(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{191:function(t,e,n){"use strict";n.r(e);var s=n(0),a=Object(s.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("hr"),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.tutorialspoint.com/nodejs/nodejs_npm.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.tutorialspoint.com/nodejs/nodejs_npm.htm"),n("OutboundLink")],1)]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),n("p",[n("a",{attrs:{href:"https://www.tutorialspoint.com/nodejs/nodejs_callbacks_concept.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.tutorialspoint.com/nodejs/nodejs_callbacks_concept.htm"),n("OutboundLink")],1)]),t._v(" "),t._m(10),t._v(" "),n("p",[t._v("Events are triggered based on something happing.\n"),n("a",{attrs:{href:"https://www.tutorialspoint.com/nodejs/nodejs_event_loop.htm",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.tutorialspoint.com/nodejs/nodejs_event_loop.htm"),n("OutboundLink")],1)]),t._v(" "),t._m(11),n("p",[t._v("Output:")]),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._m(18)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"nodejs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nodejs","aria-hidden":"true"}},[this._v("#")]),this._v(" NodeJS")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("# https://chocolatey.org/\nchoco install nodejs npm\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"modules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#modules","aria-hidden":"true"}},[this._v("#")]),this._v(" Modules")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Install")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("# use '-g' to install globally, instead of locally\nnpm install npm -g\n\nnpm install <Module Name>\nnpm install express\n# or\nnpm install express -g\n\n# in code, to use Module\nvar express = require('express');\n\n# to check list of installed packages\nnpm ls\nnpm ls -g\n\n# uninstall\nnpm uninstall npm\n\n# update\nnpm update express\n\n# search\nnpm search npm\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"creating-a-module"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-module","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating a module")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"callback"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#callback","aria-hidden":"true"}},[this._v("#")]),this._v(" Callback")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("What is callback? They are called at the end of the function.\nIn Node Application, any async function accepts a callback as a "),e("strong",[this._v("last parameter")]),this._v(" and the callback function accepts error as a "),e("strong",[this._v("first parameter")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-nodejs extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('var fs = require("fs");\n\nfs.readFile(\'input.txt\', function (err, data) {\n   if (err){\n      console.log(err.stack);\n      return;\n   }\n   console.log(data.toString());\n});\nconsole.log("Program Ended");\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#events","aria-hidden":"true"}},[this._v("#")]),this._v(" Events")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-nodejs extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("// Import events module\nvar events = require('events');\n// Create an eventEmitter object\nvar eventEmitter = new events.EventEmitter();\n\n// Create an event handler as follows\nvar connectHandler = function connected() {\n   console.log('connection succesful.');\n  \n   // Fire the data_received event\n   eventEmitter.emit('data_received');\n}\n\n// Bind the connection event with the handler\neventEmitter.on('connection', connectHandler);\n \n// Bind the data_received event with the anonymous function\neventEmitter.on('data_received', function(){\n   console.log('data received succesfully.');\n});\n\n// Fire the connection event\neventEmitter.emit('connection');\n\nconsole.log(\"Program Ended.\");\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("connection succesful.\ndata received succesfully.\nProgram Ended.\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"commons"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#commons","aria-hidden":"true"}},[this._v("#")]),this._v(" Commons")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-nodejs extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('/* Hello World! program in Node.js */\nconsole.log("Hello World!");\n\n// You can use underscore _ to get the last result\n> x + y\n30\n> var sum = _\nundefined\n> console.log(sum)\n30\n\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"loops"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#loops","aria-hidden":"true"}},[this._v("#")]),this._v(" Loops")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("WHILE")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-nodejs extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('do {\n  x++;\n  console.log("x: " + x);\n} while ( x < 5 );\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("FOR")])])}],!1,null,null,null);e.default=a.exports}}]);
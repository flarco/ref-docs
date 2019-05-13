(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{180:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("Reference for SAS.")]),t._v(" "),s("hr"),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),s("p",[s("a",{attrs:{href:"http://stackoverflow.com/questions/23649874/left-join-in-sas-using-proc-sql",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://stackoverflow.com/questions/23649874/left-join-in-sas-using-proc-sql"),s("OutboundLink")],1)]),t._v(" "),t._m(10),t._v(" "),s("p",[s("a",{attrs:{href:"https://communities.sas.com/t5/General-SAS-Programming/SAS-SQL-CASE-STATEMENT/td-p/129115",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://communities.sas.com/t5/General-SAS-Programming/SAS-SQL-CASE-STATEMENT/td-p/129115"),s("OutboundLink")],1)]),t._v(" "),t._m(11),t._v(" "),s("p",[s("a",{attrs:{href:"https://communities.sas.com/t5/SAS-Procedures/Filter-SAS-dataset-using-a-where-between-two-dates-in-data-step/td-p/142804",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://communities.sas.com/t5/SAS-Procedures/Filter-SAS-dataset-using-a-where-between-two-dates-in-data-step/td-p/142804"),s("OutboundLink")],1)]),t._v(" "),t._m(12),t._v(" "),s("p",[s("a",{attrs:{href:"https://communities.sas.com/t5/SAS-Procedures/to-date/td-p/207246",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://communities.sas.com/t5/SAS-Procedures/to-date/td-p/207246"),s("OutboundLink")],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"sas"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sas","aria-hidden":"true"}},[this._v("#")]),this._v(" SAS")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"proc-sql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#proc-sql","aria-hidden":"true"}},[this._v("#")]),this._v(" PROC SQL")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"metadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#metadata","aria-hidden":"true"}},[this._v("#")]),this._v(" Metadata")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Get list of datasets")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-sas extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sas"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Proc sql")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     select "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n     from sashelp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("vmember\n     where "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("libname")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SAPEng "')]),t._v(" and memname like "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BIC%"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("quit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"concatenation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#concatenation","aria-hidden":"true"}},[this._v("#")]),this._v(" Concatenation")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("CAT, CATS, CATT, CATX all perform concatenation, as long as you're on 9.1.3 or later (and CATQ on 9.2 or later); CAT does basic concatenation, CATS concatenates and strips spaces, CATT trims, and CATX concatenates with a delimiter.\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("proc")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sql")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" test "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" CATS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("year")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("month")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" ym "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" tbl"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nrun"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"functions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#functions","aria-hidden":"true"}},[this._v("#")]),this._v(" Functions")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"join"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#join","aria-hidden":"true"}},[this._v("#")]),this._v(" JOIN")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"case"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#case","aria-hidden":"true"}},[this._v("#")]),this._v(" CASE")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"between"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#between","aria-hidden":"true"}},[this._v("#")]),this._v(" BETWEEN")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"to-date"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#to-date","aria-hidden":"true"}},[this._v("#")]),this._v(" TO_DATE")])}],!1,null,null,null);e.default=r.exports}}]);
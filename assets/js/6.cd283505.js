(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{410:function(e,t,o){"use strict";o.r(t);var n={name:"demo-dialog",mixins:[o(114).a],methods:{openDemoDialog:function(){this.$dialogService.open("demo-dialog-second",{content:"Demo content data."}).then((function(e){console.log(e)}))}}},a=o(7),s=Object(a.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VclDialogWrapper",{attrs:{centered:"",scrollable:""},on:{backdrop:e.backdrop}},[o("div",{staticClass:"modal-header"},[o("h5",{staticClass:"modal-title"},[e._v("Modal title")]),e._v(" "),o("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(t){return e.close({id:e.id})}}},[o("span",[e._v("×")])])]),e._v(" "),o("div",{staticClass:"modal-body"},[e._v("\n    "+e._s(e.id)+"\n    Before getting started with Bootstrap’s modal component, be sure to read\n    the following as our menu options have recently changed. Modals are built\n    with HTML, CSS, and JavaScript. They’re positioned over everything else in\n    the document and remove scroll from the so that modal content scrolls\n    instead. Clicking on the modal “backdrop” will automatically close the\n    modal. Bootstrap only supports one modal window at a time. Nested modals\n    aren’t supported as we believe them to be poor user experiences. Modals\n    use position: fixed, which can sometimes be a bit particular about its\n    rendering. Whenever possible, place your modal HTML in a top-level\n    position to avoid potential interference from other elements. You’ll\n    likely run into issues when nesting a .modal within another fixed element.\n    Once again, due to position: fixed, there are some caveats with using\n    modals on mobile devices. See our browser support docs for details. Due to\n    how HTML5 defines its semantics, the autofocus HTML attribute has no\n    effect in Bootstrap modals. To achieve the same effect, use some custom\n    JavaScript:\n  ")]),e._v(" "),o("div",{staticClass:"modal-footer"},[o("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(t){return e.close({id:e.id})}}},[e._v("\n      Close\n    ")]),e._v(" "),o("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:e.openDemoDialog}},[e._v("\n      Launch second\n    ")])])])}),[],!1,null,null,null);t.default=s.exports}}]);
import { defineComponent as l, openBlock as o, createElementBlock as a, toDisplayString as u } from "vue";
const i = l({
  name: "ea-button"
}), c = /* @__PURE__ */ l({
  ...i,
  props: {
    label: null,
    size: null,
    color: null,
    type: null,
    round: { type: Boolean },
    disabled: { type: Boolean }
  },
  emits: ["click"],
  setup(t) {
    return (n, e) => (o(), a("button", {
      class: "my-button",
      onClick: e[0] || (e[0] = (r) => n.$emit("click"))
    }, u(t.label ?? "默认按钮"), 1));
  }
});
export {
  c as default
};

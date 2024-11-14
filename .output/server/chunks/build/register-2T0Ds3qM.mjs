import { resolveComponent, withCtx, createTextVNode, createVNode, withModifiers, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'pinia';
import 'vue-router';
import 'requrl';

const _sfc_main = {
  data() {
    return {
      userData: {
        email: "",
        password: "",
        name: "",
        phone: "",
        address: ""
      }
    };
  },
  methods: {
    async submit() {
      try {
        await this.$store.dispatch("user/register", this.userData);
        this.$router.push("/");
      } catch (error) {
        console.error("Registration failed", error);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_container = resolveComponent("v-container");
  const _component_v_form = resolveComponent("v-form");
  const _component_v_text_field = resolveComponent("v-text-field");
  const _component_v_btn = resolveComponent("v-btn");
  _push(ssrRenderComponent(_component_v_container, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_form, { onSubmit: $options.submit }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_text_field, {
                modelValue: $data.userData.email,
                "onUpdate:modelValue": ($event) => $data.userData.email = $event,
                label: "Email",
                type: "email",
                required: ""
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_text_field, {
                modelValue: $data.userData.password,
                "onUpdate:modelValue": ($event) => $data.userData.password = $event,
                label: "Password",
                type: "password",
                required: ""
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_text_field, {
                modelValue: $data.userData.name,
                "onUpdate:modelValue": ($event) => $data.userData.name = $event,
                label: "Full Name",
                required: ""
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_text_field, {
                modelValue: $data.userData.phone,
                "onUpdate:modelValue": ($event) => $data.userData.phone = $event,
                label: "Phone",
                required: ""
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_text_field, {
                modelValue: $data.userData.address,
                "onUpdate:modelValue": ($event) => $data.userData.address = $event,
                label: "Address",
                required: ""
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_btn, {
                type: "submit",
                color: "primary"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Register`);
                  } else {
                    return [
                      createTextVNode("Register")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_text_field, {
                  modelValue: $data.userData.email,
                  "onUpdate:modelValue": ($event) => $data.userData.email = $event,
                  label: "Email",
                  type: "email",
                  required: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_v_text_field, {
                  modelValue: $data.userData.password,
                  "onUpdate:modelValue": ($event) => $data.userData.password = $event,
                  label: "Password",
                  type: "password",
                  required: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_v_text_field, {
                  modelValue: $data.userData.name,
                  "onUpdate:modelValue": ($event) => $data.userData.name = $event,
                  label: "Full Name",
                  required: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_v_text_field, {
                  modelValue: $data.userData.phone,
                  "onUpdate:modelValue": ($event) => $data.userData.phone = $event,
                  label: "Phone",
                  required: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_v_text_field, {
                  modelValue: $data.userData.address,
                  "onUpdate:modelValue": ($event) => $data.userData.address = $event,
                  label: "Address",
                  required: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_v_btn, {
                  type: "submit",
                  color: "primary"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Register")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_form, {
            onSubmit: withModifiers($options.submit, ["prevent"])
          }, {
            default: withCtx(() => [
              createVNode(_component_v_text_field, {
                modelValue: $data.userData.email,
                "onUpdate:modelValue": ($event) => $data.userData.email = $event,
                label: "Email",
                type: "email",
                required: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_v_text_field, {
                modelValue: $data.userData.password,
                "onUpdate:modelValue": ($event) => $data.userData.password = $event,
                label: "Password",
                type: "password",
                required: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_v_text_field, {
                modelValue: $data.userData.name,
                "onUpdate:modelValue": ($event) => $data.userData.name = $event,
                label: "Full Name",
                required: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_v_text_field, {
                modelValue: $data.userData.phone,
                "onUpdate:modelValue": ($event) => $data.userData.phone = $event,
                label: "Phone",
                required: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_v_text_field, {
                modelValue: $data.userData.address,
                "onUpdate:modelValue": ($event) => $data.userData.address = $event,
                label: "Address",
                required: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_v_btn, {
                type: "submit",
                color: "primary"
              }, {
                default: withCtx(() => [
                  createTextVNode("Register")
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["onSubmit"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const register = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { register as default };
//# sourceMappingURL=register-2T0Ds3qM.mjs.map

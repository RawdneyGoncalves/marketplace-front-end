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
      user: {
        name: "",
        phone: "",
        address: ""
      },
      profilePicture: null
    };
  },
  async mounted() {
    try {
      const response = await this.$axios.get("/profile");
      this.user = response.data;
    } catch (error) {
      console.error("Failed to load profile", error);
    }
  },
  methods: {
    async submit() {
      const formData = new FormData();
      formData.append("name", this.user.name);
      formData.append("phone", this.user.phone);
      formData.append("address", this.user.address);
      if (this.profilePicture) {
        formData.append("profile_picture", this.profilePicture);
      }
      try {
        await this.$axios.put("/profile", formData);
        this.$store.dispatch("user/getProfile");
      } catch (error) {
        console.error("Error updating profile", error);
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_container = resolveComponent("v-container");
  const _component_v_form = resolveComponent("v-form");
  const _component_v_text_field = resolveComponent("v-text-field");
  const _component_v_file_input = resolveComponent("v-file-input");
  const _component_v_btn = resolveComponent("v-btn");
  _push(ssrRenderComponent(_component_v_container, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_form, { onSubmit: $options.submit }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_text_field, {
                modelValue: $data.user.name,
                "onUpdate:modelValue": ($event) => $data.user.name = $event,
                label: "Full Name",
                required: ""
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_text_field, {
                modelValue: $data.user.phone,
                "onUpdate:modelValue": ($event) => $data.user.phone = $event,
                label: "Phone",
                required: ""
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_text_field, {
                modelValue: $data.user.address,
                "onUpdate:modelValue": ($event) => $data.user.address = $event,
                label: "Address",
                required: ""
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_file_input, {
                modelValue: $data.profilePicture,
                "onUpdate:modelValue": ($event) => $data.profilePicture = $event,
                label: "Profile Picture",
                accept: "image/*"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_v_btn, {
                type: "submit",
                color: "primary"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Update Profile`);
                  } else {
                    return [
                      createTextVNode("Update Profile")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_text_field, {
                  modelValue: $data.user.name,
                  "onUpdate:modelValue": ($event) => $data.user.name = $event,
                  label: "Full Name",
                  required: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_v_text_field, {
                  modelValue: $data.user.phone,
                  "onUpdate:modelValue": ($event) => $data.user.phone = $event,
                  label: "Phone",
                  required: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_v_text_field, {
                  modelValue: $data.user.address,
                  "onUpdate:modelValue": ($event) => $data.user.address = $event,
                  label: "Address",
                  required: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_v_file_input, {
                  modelValue: $data.profilePicture,
                  "onUpdate:modelValue": ($event) => $data.profilePicture = $event,
                  label: "Profile Picture",
                  accept: "image/*"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_v_btn, {
                  type: "submit",
                  color: "primary"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Update Profile")
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
                modelValue: $data.user.name,
                "onUpdate:modelValue": ($event) => $data.user.name = $event,
                label: "Full Name",
                required: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_v_text_field, {
                modelValue: $data.user.phone,
                "onUpdate:modelValue": ($event) => $data.user.phone = $event,
                label: "Phone",
                required: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_v_text_field, {
                modelValue: $data.user.address,
                "onUpdate:modelValue": ($event) => $data.user.address = $event,
                label: "Address",
                required: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_v_file_input, {
                modelValue: $data.profilePicture,
                "onUpdate:modelValue": ($event) => $data.profilePicture = $event,
                label: "Profile Picture",
                accept: "image/*"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_v_btn, {
                type: "submit",
                color: "primary"
              }, {
                default: withCtx(() => [
                  createTextVNode("Update Profile")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const profile = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { profile as default };
//# sourceMappingURL=profile-D59XDbu8.mjs.map

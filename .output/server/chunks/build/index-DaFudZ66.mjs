import { useSSRContext, resolveComponent, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main$1 = {
  props: {
    product: Object
  },
  methods: {
    addToCart() {
      this.$store.dispatch("addToCart", {
        productId: this.product.id,
        quantity: 1
      });
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_img = resolveComponent("v-img");
  const _component_v_card_title = resolveComponent("v-card-title");
  const _component_v_card_subtitle = resolveComponent("v-card-subtitle");
  const _component_v_card_text = resolveComponent("v-card-text");
  const _component_v_btn = resolveComponent("v-btn");
  _push(ssrRenderComponent(_component_v_card, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_img, {
          src: $props.product.image,
          height: "200px"
        }, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_card_title, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate($props.product.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString($props.product.name), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_card_subtitle, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`$${ssrInterpolate($props.product.price)}`);
            } else {
              return [
                createTextVNode("$" + toDisplayString($props.product.price), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_card_text, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`${ssrInterpolate($props.product.description)}`);
            } else {
              return [
                createTextVNode(toDisplayString($props.product.description), 1)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_btn, { onClick: $options.addToCart }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Add to Cart`);
            } else {
              return [
                createTextVNode("Add to Cart")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_img, {
            src: $props.product.image,
            height: "200px"
          }, null, 8, ["src"]),
          createVNode(_component_v_card_title, null, {
            default: withCtx(() => [
              createTextVNode(toDisplayString($props.product.name), 1)
            ]),
            _: 1
          }),
          createVNode(_component_v_card_subtitle, null, {
            default: withCtx(() => [
              createTextVNode("$" + toDisplayString($props.product.price), 1)
            ]),
            _: 1
          }),
          createVNode(_component_v_card_text, null, {
            default: withCtx(() => [
              createTextVNode(toDisplayString($props.product.description), 1)
            ]),
            _: 1
          }),
          createVNode(_component_v_btn, { onClick: $options.addToCart }, {
            default: withCtx(() => [
              createTextVNode("Add to Cart")
            ]),
            _: 1
          }, 8, ["onClick"])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProductCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: { ProductCard: __nuxt_component_0 },
  data() {
    return { products: [] };
  },
  async mounted() {
    const response = await this.$axios.get("/products");
    this.products = response.data;
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_container = resolveComponent("v-container");
  const _component_v_row = resolveComponent("v-row");
  const _component_v_col = resolveComponent("v-col");
  const _component_ProductCard = __nuxt_component_0;
  _push(ssrRenderComponent(_component_v_container, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_row, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList($data.products, (product) => {
                _push3(ssrRenderComponent(_component_v_col, {
                  cols: "12",
                  sm: "6",
                  md: "4",
                  key: product.id
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_ProductCard, { product }, null, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(_component_ProductCard, { product }, null, 8, ["product"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList($data.products, (product) => {
                  return openBlock(), createBlock(_component_v_col, {
                    cols: "12",
                    sm: "6",
                    md: "4",
                    key: product.id
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_ProductCard, { product }, null, 8, ["product"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_row, null, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList($data.products, (product) => {
                return openBlock(), createBlock(_component_v_col, {
                  cols: "12",
                  sm: "6",
                  md: "4",
                  key: product.id
                }, {
                  default: withCtx(() => [
                    createVNode(_component_ProductCard, { product }, null, 8, ["product"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-DaFudZ66.mjs.map

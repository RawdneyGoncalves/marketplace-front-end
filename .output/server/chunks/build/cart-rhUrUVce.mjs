import { useSSRContext, resolveComponent, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
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
  computed: {
    cartItems() {
      return this.$store.state.cart.items;
    }
  },
  methods: {
    checkout() {
      this.$router.push({ name: "checkout" });
    },
    removeItemFromCart(productId) {
      this.$store.dispatch("cart/removeFromCart", productId);
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_card = resolveComponent("v-card");
  const _component_v_card_title = resolveComponent("v-card-title");
  const _component_v_avatar = resolveComponent("v-avatar");
  const _component_v_list = resolveComponent("v-list");
  const _component_v_list_item_group = resolveComponent("v-list-item-group");
  const _component_v_list_item = resolveComponent("v-list-item");
  const _component_v_list_item_content = resolveComponent("v-list-item-content");
  const _component_v_list_item_title = resolveComponent("v-list-item-title");
  const _component_v_list_item_subtitle = resolveComponent("v-list-item-subtitle");
  const _component_v_btn = resolveComponent("v-btn");
  const _component_v_icon = resolveComponent("v-icon");
  const _component_v_divider = resolveComponent("v-divider");
  const _component_v_card_actions = resolveComponent("v-card-actions");
  _push(ssrRenderComponent(_component_v_card, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_v_card_title, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_avatar, {
                size: "40",
                class: "mr-3"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<img src="https://via.placeholder.com/40" alt="Avatar"${_scopeId3}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: "https://via.placeholder.com/40",
                        alt: "Avatar"
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(` Carrinho de compras `);
            } else {
              return [
                createVNode(_component_v_avatar, {
                  size: "40",
                  class: "mr-3"
                }, {
                  default: withCtx(() => [
                    createVNode("img", {
                      src: "https://via.placeholder.com/40",
                      alt: "Avatar"
                    })
                  ]),
                  _: 1
                }),
                createTextVNode(" Carrinho de compras ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_list, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              if ($options.cartItems.length > 0) {
                _push3(ssrRenderComponent(_component_v_list_item_group, null, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<!--[-->`);
                      ssrRenderList($options.cartItems, (item) => {
                        _push4(ssrRenderComponent(_component_v_list_item, {
                          key: item.id
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_v_list_item_content, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_v_list_item_title, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`${ssrInterpolate(item.product.name)}`);
                                        } else {
                                          return [
                                            createTextVNode(toDisplayString(item.product.name), 1)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_list_item_subtitle, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Quantidade: ${ssrInterpolate(item.quantity)}`);
                                        } else {
                                          return [
                                            createTextVNode("Quantidade: " + toDisplayString(item.quantity), 1)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_v_btn, {
                                      onClick: ($event) => $options.removeItemFromCart(item.id),
                                      icon: "",
                                      color: "red"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_v_icon, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`mdi-delete`);
                                              } else {
                                                return [
                                                  createTextVNode("mdi-delete")
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_v_icon, null, {
                                              default: withCtx(() => [
                                                createTextVNode("mdi-delete")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_v_list_item_title, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.product.name), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_v_list_item_subtitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Quantidade: " + toDisplayString(item.quantity), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_v_btn, {
                                        onClick: ($event) => $options.removeItemFromCart(item.id),
                                        icon: "",
                                        color: "red"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_v_icon, null, {
                                            default: withCtx(() => [
                                              createTextVNode("mdi-delete")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_v_list_item_content, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_v_list_item_title, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.product.name), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_v_list_item_subtitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Quantidade: " + toDisplayString(item.quantity), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_v_btn, {
                                      onClick: ($event) => $options.removeItemFromCart(item.id),
                                      icon: "",
                                      color: "red"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(_component_v_icon, null, {
                                          default: withCtx(() => [
                                            createTextVNode("mdi-delete")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      });
                      _push4(`<!--]-->`);
                    } else {
                      return [
                        (openBlock(true), createBlock(Fragment, null, renderList($options.cartItems, (item) => {
                          return openBlock(), createBlock(_component_v_list_item, {
                            key: item.id
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_content, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_list_item_title, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.product.name), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_v_list_item_subtitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Quantidade: " + toDisplayString(item.quantity), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_v_btn, {
                                    onClick: ($event) => $options.removeItemFromCart(item.id),
                                    icon: "",
                                    color: "red"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_v_icon, null, {
                                        default: withCtx(() => [
                                          createTextVNode("mdi-delete")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                _push3(ssrRenderComponent(_component_v_list_item, null, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(_component_v_list_item_content, null, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`Nenhum item no carrinho`);
                          } else {
                            return [
                              createTextVNode("Nenhum item no carrinho")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(_component_v_list_item_content, null, {
                          default: withCtx(() => [
                            createTextVNode("Nenhum item no carrinho")
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              }
            } else {
              return [
                $options.cartItems.length > 0 ? (openBlock(), createBlock(_component_v_list_item_group, { key: 0 }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList($options.cartItems, (item) => {
                      return openBlock(), createBlock(_component_v_list_item, {
                        key: item.id
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_v_list_item_content, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_title, null, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.product.name), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_v_list_item_subtitle, null, {
                                default: withCtx(() => [
                                  createTextVNode("Quantidade: " + toDisplayString(item.quantity), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(_component_v_btn, {
                                onClick: ($event) => $options.removeItemFromCart(item.id),
                                icon: "",
                                color: "red"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_v_icon, null, {
                                    default: withCtx(() => [
                                      createTextVNode("mdi-delete")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
                    }), 128))
                  ]),
                  _: 1
                })) : (openBlock(), createBlock(_component_v_list_item, { key: 1 }, {
                  default: withCtx(() => [
                    createVNode(_component_v_list_item_content, null, {
                      default: withCtx(() => [
                        createTextVNode("Nenhum item no carrinho")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_divider, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_v_card_actions, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_v_btn, {
                onClick: $options.checkout,
                color: "primary",
                class: "ml-auto"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Finalizar compra`);
                  } else {
                    return [
                      createTextVNode("Finalizar compra")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_v_btn, {
                  onClick: $options.checkout,
                  color: "primary",
                  class: "ml-auto"
                }, {
                  default: withCtx(() => [
                    createTextVNode("Finalizar compra")
                  ]),
                  _: 1
                }, 8, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_v_card_title, null, {
            default: withCtx(() => [
              createVNode(_component_v_avatar, {
                size: "40",
                class: "mr-3"
              }, {
                default: withCtx(() => [
                  createVNode("img", {
                    src: "https://via.placeholder.com/40",
                    alt: "Avatar"
                  })
                ]),
                _: 1
              }),
              createTextVNode(" Carrinho de compras ")
            ]),
            _: 1
          }),
          createVNode(_component_v_list, null, {
            default: withCtx(() => [
              $options.cartItems.length > 0 ? (openBlock(), createBlock(_component_v_list_item_group, { key: 0 }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList($options.cartItems, (item) => {
                    return openBlock(), createBlock(_component_v_list_item, {
                      key: item.id
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_list_item_content, null, {
                          default: withCtx(() => [
                            createVNode(_component_v_list_item_title, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(item.product.name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_v_list_item_subtitle, null, {
                              default: withCtx(() => [
                                createTextVNode("Quantidade: " + toDisplayString(item.quantity), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_v_btn, {
                              onClick: ($event) => $options.removeItemFromCart(item.id),
                              icon: "",
                              color: "red"
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_v_icon, null, {
                                  default: withCtx(() => [
                                    createTextVNode("mdi-delete")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ]),
                _: 1
              })) : (openBlock(), createBlock(_component_v_list_item, { key: 1 }, {
                default: withCtx(() => [
                  createVNode(_component_v_list_item_content, null, {
                    default: withCtx(() => [
                      createTextVNode("Nenhum item no carrinho")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }))
            ]),
            _: 1
          }),
          createVNode(_component_v_divider),
          createVNode(_component_v_card_actions, null, {
            default: withCtx(() => [
              createVNode(_component_v_btn, {
                onClick: $options.checkout,
                color: "primary",
                class: "ml-auto"
              }, {
                default: withCtx(() => [
                  createTextVNode("Finalizar compra")
                ]),
                _: 1
              }, 8, ["onClick"])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CartSummary.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: { CartSummary: __nuxt_component_0 }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_v_container = resolveComponent("v-container");
  const _component_CartSummary = __nuxt_component_0;
  _push(ssrRenderComponent(_component_v_container, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_CartSummary, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_CartSummary)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cart = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { cart as default };
//# sourceMappingURL=cart-rhUrUVce.mjs.map

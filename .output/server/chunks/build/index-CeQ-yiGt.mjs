import { _ as __nuxt_component_0 } from './nuxt-layout-Bau4NBOH.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-gQID-DSZ.mjs';
import { ref, mergeProps, withCtx, createTextVNode, unref, createVNode, createBlock, openBlock, toDisplayString, Fragment, renderList, createCommentVNode, Transition, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { PencilIcon, TrashIcon, CheckIcon } from '@heroicons/vue/24/outline';
import { u as usePricing } from './usePricing-DvSKRqK0.mjs';
import './server.mjs';
import '../nitro/nitro.mjs';
import 'node:fs/promises';
import 'node:path';
import 'nodemailer';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'mongoose';
import 'node:url';
import 'jsonwebtoken';
import 'consola/core';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { pricingPlans, isLoading, error, deletePlan } = usePricing();
    const showDeleteModal = ref(false);
    const planToDelete = ref(null);
    const confirmDelete = (plan) => {
      planToDelete.value = plan;
      showDeleteModal.value = true;
    };
    const handleDelete = async () => {
      if (planToDelete.value) {
        await deletePlan(planToDelete.value._id);
        showDeleteModal.value = false;
        planToDelete.value = null;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "admin" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="min-h-screen bg-gray-50 p-8"${_scopeId}><div class="max-w-7xl mx-auto"${_scopeId}><div class="flex justify-between items-center mb-8"${_scopeId}><h1 class="text-3xl font-bold text-gray-900"${_scopeId}>Pricing Plans</h1>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/admin/pricing/create",
              class: "bg-gradient-to-r from-[#92A75A] to-[#7a8c4c] text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` + Add New Plan `);
                } else {
                  return [
                    createTextVNode(" + Add New Plan ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (unref(isLoading)) {
              _push2(`<div class="text-center py-12"${_scopeId}><div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#92A75A] mx-auto"${_scopeId}></div></div>`);
            } else if (unref(error)) {
              _push2(`<div class="bg-red-50 text-red-500 p-4 rounded-lg mb-6 shadow-md"${_scopeId}>${ssrInterpolate(unref(error))}</div>`);
            } else {
              _push2(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"${_scopeId}><!--[-->`);
              ssrRenderList(unref(pricingPlans), (plan) => {
                _push2(`<div class="relative bg-white rounded-xl shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl"${_scopeId}><div class="absolute top-4 right-4 flex space-x-3"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: `/admin/pricing/edit/${plan._id}`,
                  class: "text-gray-400 hover:text-gray-600"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(unref(PencilIcon), { class: "w-5 h-5" }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(unref(PencilIcon), { class: "w-5 h-5" })
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`<button class="text-gray-400 hover:text-red-500"${_scopeId}>`);
                _push2(ssrRenderComponent(unref(TrashIcon), { class: "w-5 h-5" }, null, _parent2, _scopeId));
                _push2(`</button></div><div class="mb-4 flex items-center space-x-2"${_scopeId}><span class="${ssrRenderClass([
                  "px-3 py-1 text-xs font-medium rounded-full",
                  plan.type === "free" ? "bg-gray-100 text-gray-600" : plan.type === "regular" ? "bg-blue-100 text-blue-600" : "bg-purple-100 text-purple-600"
                ])}"${_scopeId}>${ssrInterpolate(plan.type)}</span>`);
                if (plan.isPopular) {
                  _push2(`<span class="bg-yellow-100 text-yellow-600 px-3 py-1 text-xs font-medium rounded-full"${_scopeId}> \u2B50 Popular </span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><h3 class="text-2xl font-semibold text-gray-900 mb-2"${_scopeId}>${ssrInterpolate(plan.name)}</h3><div class="mb-4"${_scopeId}><span class="text-4xl font-extrabold text-gray-900"${_scopeId}>$${ssrInterpolate(plan.price)}</span><span class="text-gray-500"${_scopeId}> / ${ssrInterpolate(plan.plan)}</span></div><ul class="space-y-3 mb-6"${_scopeId}><!--[-->`);
                ssrRenderList(plan.features, (feature, index) => {
                  _push2(`<li class="flex items-center text-gray-600"${_scopeId}>`);
                  _push2(ssrRenderComponent(unref(CheckIcon), { class: "w-5 h-5 text-green-500 mr-2" }, null, _parent2, _scopeId));
                  _push2(` ${ssrInterpolate(feature)}</li>`);
                });
                _push2(`<!--]--></ul></div>`);
              });
              _push2(`<!--]--></div>`);
            }
            _push2(`</div>`);
            if (showDeleteModal.value) {
              _push2(`<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"${_scopeId}><div class="bg-white rounded-xl p-6 max-w-md w-full shadow-lg"${_scopeId}><h3 class="text-lg font-semibold mb-4"${_scopeId}>Confirm Delete</h3><p class="text-gray-600 mb-6"${_scopeId}> Are you sure you want to delete this pricing plan? This action cannot be undone. </p><div class="flex justify-end space-x-4"${_scopeId}><button class="px-4 py-2 text-gray-600 hover:text-gray-800"${_scopeId}> Cancel </button><button class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"${_scopeId}> Delete </button></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "min-h-screen bg-gray-50 p-8" }, [
                createVNode("div", { class: "max-w-7xl mx-auto" }, [
                  createVNode("div", { class: "flex justify-between items-center mb-8" }, [
                    createVNode("h1", { class: "text-3xl font-bold text-gray-900" }, "Pricing Plans"),
                    createVNode(_component_NuxtLink, {
                      to: "/admin/pricing/create",
                      class: "bg-gradient-to-r from-[#92A75A] to-[#7a8c4c] text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" + Add New Plan ")
                      ]),
                      _: 1
                    })
                  ]),
                  unref(isLoading) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "text-center py-12"
                  }, [
                    createVNode("div", { class: "animate-spin rounded-full h-12 w-12 border-b-2 border-[#92A75A] mx-auto" })
                  ])) : unref(error) ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "bg-red-50 text-red-500 p-4 rounded-lg mb-6 shadow-md"
                  }, toDisplayString(unref(error)), 1)) : (openBlock(), createBlock("div", {
                    key: 2,
                    class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(pricingPlans), (plan) => {
                      return openBlock(), createBlock("div", {
                        key: plan._id,
                        class: "relative bg-white rounded-xl shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl"
                      }, [
                        createVNode("div", { class: "absolute top-4 right-4 flex space-x-3" }, [
                          createVNode(_component_NuxtLink, {
                            to: `/admin/pricing/edit/${plan._id}`,
                            class: "text-gray-400 hover:text-gray-600"
                          }, {
                            default: withCtx(() => [
                              createVNode(unref(PencilIcon), { class: "w-5 h-5" })
                            ]),
                            _: 2
                          }, 1032, ["to"]),
                          createVNode("button", {
                            onClick: ($event) => confirmDelete(plan),
                            class: "text-gray-400 hover:text-red-500"
                          }, [
                            createVNode(unref(TrashIcon), { class: "w-5 h-5" })
                          ], 8, ["onClick"])
                        ]),
                        createVNode("div", { class: "mb-4 flex items-center space-x-2" }, [
                          createVNode("span", {
                            class: [
                              "px-3 py-1 text-xs font-medium rounded-full",
                              plan.type === "free" ? "bg-gray-100 text-gray-600" : plan.type === "regular" ? "bg-blue-100 text-blue-600" : "bg-purple-100 text-purple-600"
                            ]
                          }, toDisplayString(plan.type), 3),
                          plan.isPopular ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "bg-yellow-100 text-yellow-600 px-3 py-1 text-xs font-medium rounded-full"
                          }, " \u2B50 Popular ")) : createCommentVNode("", true)
                        ]),
                        createVNode("h3", { class: "text-2xl font-semibold text-gray-900 mb-2" }, toDisplayString(plan.name), 1),
                        createVNode("div", { class: "mb-4" }, [
                          createVNode("span", { class: "text-4xl font-extrabold text-gray-900" }, "$" + toDisplayString(plan.price), 1),
                          createVNode("span", { class: "text-gray-500" }, " / " + toDisplayString(plan.plan), 1)
                        ]),
                        createVNode("ul", { class: "space-y-3 mb-6" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(plan.features, (feature, index) => {
                            return openBlock(), createBlock("li", {
                              key: index,
                              class: "flex items-center text-gray-600"
                            }, [
                              createVNode(unref(CheckIcon), { class: "w-5 h-5 text-green-500 mr-2" }),
                              createTextVNode(" " + toDisplayString(feature), 1)
                            ]);
                          }), 128))
                        ])
                      ]);
                    }), 128))
                  ]))
                ]),
                createVNode(Transition, { name: "fade" }, {
                  default: withCtx(() => [
                    showDeleteModal.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
                    }, [
                      createVNode("div", { class: "bg-white rounded-xl p-6 max-w-md w-full shadow-lg" }, [
                        createVNode("h3", { class: "text-lg font-semibold mb-4" }, "Confirm Delete"),
                        createVNode("p", { class: "text-gray-600 mb-6" }, " Are you sure you want to delete this pricing plan? This action cannot be undone. "),
                        createVNode("div", { class: "flex justify-end space-x-4" }, [
                          createVNode("button", {
                            onClick: ($event) => showDeleteModal.value = false,
                            class: "px-4 py-2 text-gray-600 hover:text-gray-800"
                          }, " Cancel ", 8, ["onClick"]),
                          createVNode("button", {
                            onClick: handleDelete,
                            class: "px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                          }, " Delete ")
                        ])
                      ])
                    ])) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/pricing/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CeQ-yiGt.mjs.map

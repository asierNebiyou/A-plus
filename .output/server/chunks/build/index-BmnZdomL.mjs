import { _ as __nuxt_component_0 } from './nuxt-layout-Bau4NBOH.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-gQID-DSZ.mjs';
import { ref, mergeProps, withCtx, unref, createVNode, createTextVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, toDisplayString, Transition, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { PlusIcon, StarIcon, TrashIcon, MessageSquareIcon } from 'lucide-vue-next';
import { u as useTestimonial } from './useTestimonial-B-QJ7-uw.mjs';
import { u as useRouter } from './server.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import 'vue-router';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const showDeleteModal = ref(false);
    const planToDelete = ref(null);
    const { testimonialData, deleteTestimonial } = useTestimonial();
    useRouter();
    const confirmDelete = (plan) => {
      planToDelete.value = plan;
      showDeleteModal.value = true;
    };
    const handleDelete = async () => {
      if (planToDelete.value) {
        await deleteTestimonial(planToDelete.value);
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
            _push2(`<div class="p-6 bg-gray-50 min-h-screen" data-v-2f860aa5${_scopeId}><div class="max-w-7xl mx-auto" data-v-2f860aa5${_scopeId}><div class="mb-8 flex justify-between items-center" data-v-2f860aa5${_scopeId}><div data-v-2f860aa5${_scopeId}><h1 class="text-3xl font-bold text-gray-800" data-v-2f860aa5${_scopeId}>Testimonials</h1><p class="text-gray-600 mt-1" data-v-2f860aa5${_scopeId}>Manage your customer testimonials</p></div>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/admin/testimonials/create",
              class: "bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center gap-2 shadow-sm"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(PlusIcon), { class: "w-5 h-5" }, null, _parent3, _scopeId2));
                  _push3(` Add Testimonial `);
                } else {
                  return [
                    createVNode(unref(PlusIcon), { class: "w-5 h-5" }),
                    createTextVNode(" Add Testimonial ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-v-2f860aa5${_scopeId}><!--[-->`);
            ssrRenderList(unref(testimonialData), (testimonial) => {
              _push2(`<div class="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border border-gray-100" data-v-2f860aa5${_scopeId}><div class="p-6" data-v-2f860aa5${_scopeId}><div class="flex items-center mb-4" data-v-2f860aa5${_scopeId}><div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center" data-v-2f860aa5${_scopeId}><span class="text-blue-600 font-semibold text-lg" data-v-2f860aa5${_scopeId}>${ssrInterpolate(testimonial.name.charAt(0))}</span></div><div class="ml-4" data-v-2f860aa5${_scopeId}><h3 class="font-semibold text-gray-800" data-v-2f860aa5${_scopeId}>${ssrInterpolate(testimonial.name)}</h3><p class="text-sm text-gray-500" data-v-2f860aa5${_scopeId}>Customer</p></div></div><div class="mb-4" data-v-2f860aa5${_scopeId}><div class="flex mb-2" data-v-2f860aa5${_scopeId}><!--[-->`);
              ssrRenderList(5, (n) => {
                _push2(ssrRenderComponent(unref(StarIcon), {
                  class: "w-5 h-5 text-yellow-400",
                  key: n
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div><p class="text-gray-600 line-clamp-3" data-v-2f860aa5${_scopeId}>${ssrInterpolate(testimonial.testimonial)}</p></div><div class="flex justify-end gap-2 mt-4 pt-4 border-t border-gray-100" data-v-2f860aa5${_scopeId}><button class="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200" data-v-2f860aa5${_scopeId}>`);
              _push2(ssrRenderComponent(unref(TrashIcon), { class: "w-5 h-5 text-red-500" }, null, _parent2, _scopeId));
              _push2(`</button></div></div></div>`);
            });
            _push2(`<!--]--></div>`);
            if (unref(testimonialData).length === 0) {
              _push2(`<div class="text-center py-12 bg-white rounded-xl mt-6" data-v-2f860aa5${_scopeId}><div class="flex justify-center mb-4" data-v-2f860aa5${_scopeId}>`);
              _push2(ssrRenderComponent(unref(MessageSquareIcon), { class: "w-16 h-16 text-gray-300" }, null, _parent2, _scopeId));
              _push2(`</div><h3 class="text-lg font-medium text-gray-900" data-v-2f860aa5${_scopeId}>No testimonials yet</h3><p class="mt-1 text-gray-500" data-v-2f860aa5${_scopeId}> Get started by adding your first testimonial </p>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: "/admin/testimonials/create",
                class: "mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Add Testimonial `);
                  } else {
                    return [
                      createTextVNode(" Add Testimonial ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            if (unref(showDeleteModal)) {
              _push2(`<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4" data-v-2f860aa5${_scopeId}><div class="bg-white rounded-xl p-6 max-w-md w-full shadow-lg" data-v-2f860aa5${_scopeId}><h3 class="text-lg font-semibold mb-4" data-v-2f860aa5${_scopeId}>Confirm Delete</h3><p class="text-gray-600 mb-6" data-v-2f860aa5${_scopeId}> Are you sure you want to delete this Testimonial? This action cannot be undone. </p><div class="flex justify-end space-x-4" data-v-2f860aa5${_scopeId}><button class="px-4 py-2 text-gray-600 hover:text-gray-800" data-v-2f860aa5${_scopeId}> Cancel </button><button class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600" data-v-2f860aa5${_scopeId}> Delete </button></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "p-6 bg-gray-50 min-h-screen" }, [
                createVNode("div", { class: "max-w-7xl mx-auto" }, [
                  createVNode("div", { class: "mb-8 flex justify-between items-center" }, [
                    createVNode("div", null, [
                      createVNode("h1", { class: "text-3xl font-bold text-gray-800" }, "Testimonials"),
                      createVNode("p", { class: "text-gray-600 mt-1" }, "Manage your customer testimonials")
                    ]),
                    createVNode(_component_NuxtLink, {
                      to: "/admin/testimonials/create",
                      class: "bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center gap-2 shadow-sm"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(PlusIcon), { class: "w-5 h-5" }),
                        createTextVNode(" Add Testimonial ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(testimonialData), (testimonial) => {
                      return openBlock(), createBlock("div", {
                        key: testimonial._id,
                        class: "bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden border border-gray-100"
                      }, [
                        createVNode("div", { class: "p-6" }, [
                          createVNode("div", { class: "flex items-center mb-4" }, [
                            createVNode("div", { class: "w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center" }, [
                              createVNode("span", { class: "text-blue-600 font-semibold text-lg" }, toDisplayString(testimonial.name.charAt(0)), 1)
                            ]),
                            createVNode("div", { class: "ml-4" }, [
                              createVNode("h3", { class: "font-semibold text-gray-800" }, toDisplayString(testimonial.name), 1),
                              createVNode("p", { class: "text-sm text-gray-500" }, "Customer")
                            ])
                          ]),
                          createVNode("div", { class: "mb-4" }, [
                            createVNode("div", { class: "flex mb-2" }, [
                              (openBlock(), createBlock(Fragment, null, renderList(5, (n) => {
                                return createVNode(unref(StarIcon), {
                                  class: "w-5 h-5 text-yellow-400",
                                  key: n
                                });
                              }), 64))
                            ]),
                            createVNode("p", { class: "text-gray-600 line-clamp-3" }, toDisplayString(testimonial.testimonial), 1)
                          ]),
                          createVNode("div", { class: "flex justify-end gap-2 mt-4 pt-4 border-t border-gray-100" }, [
                            createVNode("button", {
                              onClick: ($event) => confirmDelete(testimonial._id),
                              class: "p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                            }, [
                              createVNode(unref(TrashIcon), { class: "w-5 h-5 text-red-500" })
                            ], 8, ["onClick"])
                          ])
                        ])
                      ]);
                    }), 128))
                  ]),
                  unref(testimonialData).length === 0 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "text-center py-12 bg-white rounded-xl mt-6"
                  }, [
                    createVNode("div", { class: "flex justify-center mb-4" }, [
                      createVNode(unref(MessageSquareIcon), { class: "w-16 h-16 text-gray-300" })
                    ]),
                    createVNode("h3", { class: "text-lg font-medium text-gray-900" }, "No testimonials yet"),
                    createVNode("p", { class: "mt-1 text-gray-500" }, " Get started by adding your first testimonial "),
                    createVNode(_component_NuxtLink, {
                      to: "/admin/testimonials/create",
                      class: "mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Add Testimonial ")
                      ]),
                      _: 1
                    })
                  ])) : createCommentVNode("", true)
                ]),
                createVNode(Transition, { name: "fade" }, {
                  default: withCtx(() => [
                    unref(showDeleteModal) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
                    }, [
                      createVNode("div", { class: "bg-white rounded-xl p-6 max-w-md w-full shadow-lg" }, [
                        createVNode("h3", { class: "text-lg font-semibold mb-4" }, "Confirm Delete"),
                        createVNode("p", { class: "text-gray-600 mb-6" }, " Are you sure you want to delete this Testimonial? This action cannot be undone. "),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/testimonials/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2f860aa5"]]);

export { index as default };
//# sourceMappingURL=index-BmnZdomL.mjs.map

import { _ as __nuxt_component_0 } from './nuxt-layout-Bau4NBOH.mjs';
import { _ as _sfc_main$1 } from './ConsultationModal-wRDXEfkV.mjs';
import { ref, withAsyncContext, computed, mergeProps, withCtx, unref, createVNode, resolveDynamicComponent, createTextVNode, Transition, createBlock, createCommentVNode, openBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderVNode, ssrInterpolate } from 'vue/server-renderer';
import { u as usePricing } from './usePricing-DvSKRqK0.mjs';
import { Users, Zap, CheckCircle } from 'lucide-vue-next';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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
import '@headlessui/vue';
import './useSubmittions-C77mNBA_.mjs';
import './useContact-DnieksL-.mjs';

const _sfc_main = {
  __name: "pricing",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { pricingPlans, fetchPlans } = usePricing();
    ref("monthly");
    const isYearly = ref(false);
    const isModalOpen = ref(false);
    const modalSource = ref("");
    const openModal = (source) => {
      modalSource.value = source;
      isModalOpen.value = true;
    };
    const closeModal = () => {
      isModalOpen.value = false;
    };
    [__temp, __restore] = withAsyncContext(() => fetchPlans()), await __temp, __restore();
    const pricingValues = computed(
      () => pricingPlans.value ? pricingPlans.value.filter(
        (plan) => plan.period === (isYearly.value ? "yearly" : "monthly")
      ) : []
    );
    const filteredPlans = (period) => {
      isYearly.value = period == "yearly" ? true : false;
      pricingValues.value = pricingPlans.value.filter(
        (plans) => plans.period == period
      );
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_ConsultationModal = _sfc_main$1;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "layout" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-4" data-v-4318d5bf${_scopeId}><div class="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" data-v-4318d5bf${_scopeId}></div><div class="absolute top-40 left-40 w-80 h-80 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" data-v-4318d5bf${_scopeId}></div><div class="px-4 sm:px-6 lg:px-8 relative" data-v-4318d5bf${_scopeId}><div class="text-center mb-8" data-v-4318d5bf${_scopeId}><h2 class="text-4xl md:text-5xl font-bold text-[#1E2755]" data-v-4318d5bf${_scopeId}> Simple, transparent pricing </h2><p class="text-xl text-gray-600" data-v-4318d5bf${_scopeId}> Choose the perfect plan for your needs </p></div><div class="flex justify-center mb-12" data-v-4318d5bf${_scopeId}><div class="relative flex items-center p-1 rounded-full bg-gray-200" data-v-4318d5bf${_scopeId}><button class="${ssrRenderClass(`relative px-6 py-2 text-sm font-medium transition-colors duration-200 ${!isYearly.value ? "text-white" : "text-gray-700"}`)}" data-v-4318d5bf${_scopeId}> Monthly `);
            if (!isYearly.value) {
              _push2(`<div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full -z-10" data-v-4318d5bf${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</button><button class="${ssrRenderClass(`relative px-6 py-2 text-sm font-medium transition-colors duration-200 ${isYearly.value ? "text-white" : "text-gray-700"}`)}" data-v-4318d5bf${_scopeId}> Yearly `);
            if (isYearly.value) {
              _push2(`<div class="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full -z-10" data-v-4318d5bf${_scopeId}></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</button></div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto" data-v-4318d5bf${_scopeId}><!--[-->`);
            ssrRenderList(unref(pricingValues), (plan, index) => {
              _push2(`<div class="relative flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300" data-v-4318d5bf${_scopeId}>`);
              if (plan.popular) {
                _push2(`<div class="absolute top-0 right-0 mt-4 mr-4" data-v-4318d5bf${_scopeId}><span class="inline-flex items-center px-3 py-1 text-xs font-medium leading-5 text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" data-v-4318d5bf${_scopeId}> Most Popular </span></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="p-8 flex-1" data-v-4318d5bf${_scopeId}><div class="${ssrRenderClass(`inline-flex p-4 rounded-2xl ${plan.isPopular ? "bg-[#92A75A]" : "bg-[#6171FE]"}  mb-6`)}" data-v-4318d5bf${_scopeId}>`);
              if (plan.isPopular) {
                _push2(`<div data-v-4318d5bf${_scopeId}>`);
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(Users)), { class: "w-6 h-6 text-white" }, null), _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<div data-v-4318d5bf${_scopeId}>`);
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(unref(Zap)), { class: "w-6 h-6 text-white" }, null), _parent2, _scopeId);
                _push2(`</div>`);
              }
              _push2(`</div><h3 class="text-2xl font-bold text-gray-900 mb-2" data-v-4318d5bf${_scopeId}>${ssrInterpolate(plan.name)}</h3><div class="mt-4 flex items-baseline" data-v-4318d5bf${_scopeId}><span class="text-4xl font-extrabold text-gray-900" data-v-4318d5bf${_scopeId}>${ssrInterpolate(plan.price)}</span><span class="ml-2 text-gray-500" data-v-4318d5bf${_scopeId}>/${ssrInterpolate(isYearly.value ? "year" : "month")}</span></div><ul class="mt-8 space-y-4" data-v-4318d5bf${_scopeId}><!--[-->`);
              ssrRenderList(plan.features, (feature, i) => {
                _push2(`<li class="flex items-center" data-v-4318d5bf${_scopeId}>`);
                _push2(ssrRenderComponent(unref(CheckCircle), { class: "flex-shrink-0 w-5 h-5 text-green-500 mr-3" }, null, _parent2, _scopeId));
                _push2(`<span class="text-gray-600" data-v-4318d5bf${_scopeId}>${ssrInterpolate(feature)}</span></li>`);
              });
              _push2(`<!--]--></ul></div><div class="p-6" data-v-4318d5bf${_scopeId}><button class="${ssrRenderClass(`w-full py-3 px-6 rounded-xl text-white font-medium 
                 ${plan.isPopular ? "bg-[#92A75A]" : "bg-[#6171FE]"} hover:opacity-90 transition-all duration-200
                transform hover:scale-[1.02] active:scale-[0.98]
                focus:outline-none focus:ring-2 focus:ring-offset-2`)}" data-v-4318d5bf${_scopeId}> Get Started </button></div></div>`);
            });
            _push2(`<!--]--></div></div></div>`);
            _push2(ssrRenderComponent(_component_ConsultationModal, {
              "is-open": isModalOpen.value,
              source: modalSource.value,
              onClose: closeModal
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-4" }, [
                createVNode("div", { class: "absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" }),
                createVNode("div", { class: "absolute top-40 left-40 w-80 h-80 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" }),
                createVNode("div", { class: "px-4 sm:px-6 lg:px-8 relative" }, [
                  createVNode("div", { class: "text-center mb-8" }, [
                    createVNode("h2", { class: "text-4xl md:text-5xl font-bold text-[#1E2755]" }, " Simple, transparent pricing "),
                    createVNode("p", { class: "text-xl text-gray-600" }, " Choose the perfect plan for your needs ")
                  ]),
                  createVNode("div", { class: "flex justify-center mb-12" }, [
                    createVNode("div", { class: "relative flex items-center p-1 rounded-full bg-gray-200" }, [
                      createVNode("button", {
                        onClick: ($event) => filteredPlans("monthly"),
                        class: `relative px-6 py-2 text-sm font-medium transition-colors duration-200 ${!isYearly.value ? "text-white" : "text-gray-700"}`
                      }, [
                        createTextVNode(" Monthly "),
                        createVNode(Transition, { name: "slide" }, {
                          default: withCtx(() => [
                            !isYearly.value ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full -z-10"
                            })) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })
                      ], 10, ["onClick"]),
                      createVNode("button", {
                        onClick: ($event) => filteredPlans("yearly"),
                        class: `relative px-6 py-2 text-sm font-medium transition-colors duration-200 ${isYearly.value ? "text-white" : "text-gray-700"}`
                      }, [
                        createTextVNode(" Yearly "),
                        createVNode(Transition, { name: "slide" }, {
                          default: withCtx(() => [
                            isYearly.value ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full -z-10"
                            })) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })
                      ], 10, ["onClick"])
                    ])
                  ]),
                  createVNode("div", { class: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(pricingValues), (plan, index) => {
                      return openBlock(), createBlock("div", {
                        key: plan.name,
                        class: "relative flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                      }, [
                        plan.popular ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "absolute top-0 right-0 mt-4 mr-4"
                        }, [
                          createVNode("span", { class: "inline-flex items-center px-3 py-1 text-xs font-medium leading-5 text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" }, " Most Popular ")
                        ])) : createCommentVNode("", true),
                        createVNode("div", { class: "p-8 flex-1" }, [
                          createVNode("div", {
                            class: `inline-flex p-4 rounded-2xl ${plan.isPopular ? "bg-[#92A75A]" : "bg-[#6171FE]"}  mb-6`
                          }, [
                            plan.isPopular ? (openBlock(), createBlock("div", { key: 0 }, [
                              (openBlock(), createBlock(resolveDynamicComponent(unref(Users)), { class: "w-6 h-6 text-white" }))
                            ])) : (openBlock(), createBlock("div", { key: 1 }, [
                              (openBlock(), createBlock(resolveDynamicComponent(unref(Zap)), { class: "w-6 h-6 text-white" }))
                            ]))
                          ], 2),
                          createVNode("h3", { class: "text-2xl font-bold text-gray-900 mb-2" }, toDisplayString(plan.name), 1),
                          createVNode("div", { class: "mt-4 flex items-baseline" }, [
                            createVNode("span", { class: "text-4xl font-extrabold text-gray-900" }, toDisplayString(plan.price), 1),
                            createVNode("span", { class: "ml-2 text-gray-500" }, "/" + toDisplayString(isYearly.value ? "year" : "month"), 1)
                          ]),
                          createVNode("ul", { class: "mt-8 space-y-4" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(plan.features, (feature, i) => {
                              return openBlock(), createBlock("li", {
                                key: i,
                                class: "flex items-center"
                              }, [
                                createVNode(unref(CheckCircle), { class: "flex-shrink-0 w-5 h-5 text-green-500 mr-3" }),
                                createVNode("span", { class: "text-gray-600" }, toDisplayString(feature), 1)
                              ]);
                            }), 128))
                          ])
                        ]),
                        createVNode("div", { class: "p-6" }, [
                          createVNode("button", {
                            onClick: ($event) => openModal(plan.name + "_" + plan.period),
                            class: `w-full py-3 px-6 rounded-xl text-white font-medium 
                 ${plan.isPopular ? "bg-[#92A75A]" : "bg-[#6171FE]"} hover:opacity-90 transition-all duration-200
                transform hover:scale-[1.02] active:scale-[0.98]
                focus:outline-none focus:ring-2 focus:ring-offset-2`
                          }, " Get Started ", 10, ["onClick"])
                        ])
                      ]);
                    }), 128))
                  ])
                ])
              ]),
              createVNode(_component_ConsultationModal, {
                "is-open": isModalOpen.value,
                source: modalSource.value,
                onClose: closeModal
              }, null, 8, ["is-open", "source"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pricing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pricing = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4318d5bf"]]);

export { pricing as default };
//# sourceMappingURL=pricing-11lOUsNL.mjs.map

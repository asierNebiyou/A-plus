import { _ as __nuxt_component_0 } from './nuxt-layout-Bau4NBOH.mjs';
import { _ as _sfc_main$1 } from './ConsultationModal-wRDXEfkV.mjs';
import { ref, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "Free-classes",
  __ssrInlineRender: true,
  setup(__props) {
    const isModalOpen = ref(false);
    const modalSource = ref("");
    const openModal = (source) => {
      modalSource.value = source;
      isModalOpen.value = true;
    };
    const closeModal = () => {
      isModalOpen.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_ConsultationModal = _sfc_main$1;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "layout" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="min-h-screen bg-gray-50"${_scopeId}><div class="bg-white"${_scopeId}><div class="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8"${_scopeId}><div class="text-center"${_scopeId}><h1 class="text-4xl font-bold text-[#1E2755] sm:text-5xl md:text-6xl"${_scopeId}> Start Learning Today with a <span class="text-[#92A75A]"${_scopeId}>Free Trial Class</span></h1><p class="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"${_scopeId}> Experience our personalized tutoring approach with a complimentary class. See how we can help your child excel in their studies. </p><div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8"${_scopeId}><button class="rounded-md bg-[#92A75A] px-8 py-3 text-base font-medium text-white hover:bg-[#1E2755]"${_scopeId}> Book Your Free Class </button></div></div></div></div><div class="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8"${_scopeId}><div class="grid grid-cols-1 gap-8 md:grid-cols-3"${_scopeId}><div class="rounded-lg bg-white p-8 shadow-sm"${_scopeId}><div class="text-green-600 mb-4"${_scopeId}></div><h3 class="text-xl font-semibold text-gray-900"${_scopeId}> Personalized Learning </h3><p class="mt-2 text-gray-500"${_scopeId}> Customized lesson plans tailored to your child&#39;s unique learning style and needs. </p></div><div class="rounded-lg bg-white p-8 shadow-sm"${_scopeId}><div class="text-green-600 mb-4"${_scopeId}></div><h3 class="text-xl font-semibold text-gray-900"${_scopeId}>Expert Tutoring</h3><p class="mt-2 text-gray-500"${_scopeId}> Learn from experienced educators who are passionate about student success. </p></div><div class="rounded-lg bg-white p-8 shadow-sm"${_scopeId}><div class="text-green-600 mb-4"${_scopeId}></div><h3 class="text-xl font-semibold text-gray-900"${_scopeId}> Flexible Schedule </h3><p class="mt-2 text-gray-500"${_scopeId}> Choose from various time slots that work best for your schedule. </p></div></div></div>`);
            _push2(ssrRenderComponent(_component_ConsultationModal, {
              "is-open": isModalOpen.value,
              source: modalSource.value,
              onClose: closeModal
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "min-h-screen bg-gray-50" }, [
                createVNode("div", { class: "bg-white" }, [
                  createVNode("div", { class: "max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8" }, [
                    createVNode("div", { class: "text-center" }, [
                      createVNode("h1", { class: "text-4xl font-bold text-[#1E2755] sm:text-5xl md:text-6xl" }, [
                        createTextVNode(" Start Learning Today with a "),
                        createVNode("span", { class: "text-[#92A75A]" }, "Free Trial Class")
                      ]),
                      createVNode("p", { class: "mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl" }, " Experience our personalized tutoring approach with a complimentary class. See how we can help your child excel in their studies. "),
                      createVNode("div", { class: "mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8" }, [
                        createVNode("button", {
                          onClick: ($event) => openModal("free-class-page"),
                          class: "rounded-md bg-[#92A75A] px-8 py-3 text-base font-medium text-white hover:bg-[#1E2755]"
                        }, " Book Your Free Class ", 8, ["onClick"])
                      ])
                    ])
                  ])
                ]),
                createVNode("div", { class: "max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "grid grid-cols-1 gap-8 md:grid-cols-3" }, [
                    createVNode("div", { class: "rounded-lg bg-white p-8 shadow-sm" }, [
                      createVNode("div", { class: "text-green-600 mb-4" }),
                      createVNode("h3", { class: "text-xl font-semibold text-gray-900" }, " Personalized Learning "),
                      createVNode("p", { class: "mt-2 text-gray-500" }, " Customized lesson plans tailored to your child's unique learning style and needs. ")
                    ]),
                    createVNode("div", { class: "rounded-lg bg-white p-8 shadow-sm" }, [
                      createVNode("div", { class: "text-green-600 mb-4" }),
                      createVNode("h3", { class: "text-xl font-semibold text-gray-900" }, "Expert Tutoring"),
                      createVNode("p", { class: "mt-2 text-gray-500" }, " Learn from experienced educators who are passionate about student success. ")
                    ]),
                    createVNode("div", { class: "rounded-lg bg-white p-8 shadow-sm" }, [
                      createVNode("div", { class: "text-green-600 mb-4" }),
                      createVNode("h3", { class: "text-xl font-semibold text-gray-900" }, " Flexible Schedule "),
                      createVNode("p", { class: "mt-2 text-gray-500" }, " Choose from various time slots that work best for your schedule. ")
                    ])
                  ])
                ]),
                createVNode(_component_ConsultationModal, {
                  "is-open": isModalOpen.value,
                  source: modalSource.value,
                  onClose: closeModal
                }, null, 8, ["is-open", "source"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Free-classes.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Free-classes-DSMlNti4.mjs.map

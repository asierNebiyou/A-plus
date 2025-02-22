import { _ as __nuxt_component_0 } from './nuxt-layout-Bau4NBOH.mjs';
import { ref, mergeProps, withCtx, unref, createVNode, createTextVNode, createBlock, openBlock, Fragment, renderList, toDisplayString, withModifiers, createCommentVNode, withDirectives, vModelText, vModelCheckbox, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
import { u as useConsultation } from './useSubmittions-C77mNBA_.mjs';
import { u as useTestimonial } from './useTestimonial-B-QJ7-uw.mjs';
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

const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const { addConsultation, loading, error } = useConsultation();
    useTestimonial();
    const source = ref("contact-form");
    const testimonials = ref([]);
    const currentIndex = ref(0);
    const formData = ref({
      name: "",
      email: "",
      phone: "",
      consent: false
    });
    const successMessage = ref("");
    const submitForm = async () => {
      successMessage.value = "";
      try {
        await addConsultation({
          ...formData.value,
          source: source.value
        });
        successMessage.value = "We'll be in touch soon!";
        formData.value = { name: "", email: "", phone: "" };
      } catch (err) {
        console.error(err);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "layout" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full bg-gradient-to-b from-gray-50 to-gray-100 mx-auto min-h-screen text-white flex items-center justify-center px-4" data-v-5016b128${_scopeId}><div class="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" data-v-5016b128${_scopeId}></div><div class="absolute top-40 left-40 w-80 h-80 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" data-v-5016b128${_scopeId}></div><div class="container mt-5 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8" data-v-5016b128${_scopeId}><div class="relative overflow-hidden" data-v-5016b128${_scopeId}><h1 class="text-3xl font-bold mb-4 pt-5 mt-7 text-[#2E3E5C]" data-v-5016b128${_scopeId}> People are Saying About <br data-v-5016b128${_scopeId}> A plus Tutoring. </h1><p class="mb-6 text-black" data-v-5016b128${_scopeId}> Empowering you to learn, grow, and succeed with the best tutoring at your fingertips. </p><div class="w-full h-35" data-v-5016b128${_scopeId}><div class="flex transition-transform duration-500 ease-in-out" style="${ssrRenderStyle({ transform: `translateX(-${currentIndex.value * 100}%)` })}" data-v-5016b128${_scopeId}><!--[-->`);
            ssrRenderList(testimonials.value, (testimonial, index) => {
              _push2(`<div class="w-full flex-shrink-0" data-v-5016b128${_scopeId}><blockquote class="border-l-4 border-primary pl-4 text-lg italic text-gray-600" data-v-5016b128${_scopeId}> &quot;${ssrInterpolate(testimonial.testimonial)}&quot; </blockquote><p class="mt-4 text-primary font-semibold text-gray-600" data-v-5016b128${_scopeId}> \u2014 ${ssrInterpolate(testimonial.name)}</p></div>`);
            });
            _push2(`<!--]--></div></div></div><div class="bg-gray-800 p-8 rounded-lg shadow-md" data-v-5016b128${_scopeId}><h2 class="text-2xl font-bold mb-4 text-center" data-v-5016b128${_scopeId}> Get Started With <br data-v-5016b128${_scopeId}>A plus Tutoring </h2><form data-v-5016b128${_scopeId}><input type="hidden"${ssrRenderAttr("value", source.value)} data-v-5016b128${_scopeId}><div class="mb-4" data-v-5016b128${_scopeId}><label for="name" class="block text-sm mb-2" data-v-5016b128${_scopeId}>Name</label><input type="text"${ssrRenderAttr("value", formData.value.name)} id="name" required class="w-full p-3 rounded border border-gray-600 bg-gray-700 text-white focus:outline-none focus:border-primary" placeholder="Enter your Name." data-v-5016b128${_scopeId}></div><div class="mb-4" data-v-5016b128${_scopeId}><label for="email" class="block text-sm mb-2" data-v-5016b128${_scopeId}>Email</label><input type="email"${ssrRenderAttr("value", formData.value.email)} id="email" required class="w-full p-3 rounded border border-gray-600 bg-gray-700 text-white focus:outline-none focus:border-primary" placeholder="Enter your Email." data-v-5016b128${_scopeId}></div><div class="mb-4" data-v-5016b128${_scopeId}><label for="phone" class="block text-sm mb-2" data-v-5016b128${_scopeId}>Phone Number</label><input type="tel"${ssrRenderAttr("value", formData.value.phone)} id="phone" required class="w-full p-3 rounded border border-gray-600 bg-gray-700 text-white focus:outline-none focus:border-primary" placeholder="Enter your phone Number." data-v-5016b128${_scopeId}></div><div class="mb-4 flex items-center" data-v-5016b128${_scopeId}><input type="checkbox" id="consent"${ssrIncludeBooleanAttr(Array.isArray(formData.value.consent) ? ssrLooseContain(formData.value.consent, null) : formData.value.consent) ? " checked" : ""} required class="mr-2" data-v-5016b128${_scopeId}><label for="consent" class="text-sm text-white" data-v-5016b128${_scopeId}> By providing my phone number and email, I consent to be contacted by A Plus Tutoring. </label></div><button type="submit"${ssrIncludeBooleanAttr(unref(loading) || !formData.value.consent) ? " disabled" : ""} class="w-full bg-[#92A75A] text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors disabled:bg-gray-600" data-v-5016b128${_scopeId}>${ssrInterpolate(unref(loading) ? "Submitting..." : "Request a Consultation")}</button>`);
            if (unref(error)) {
              _push2(`<p class="text-red-500 text-sm mt-2 text-center" data-v-5016b128${_scopeId}>${ssrInterpolate(unref(error))}</p>`);
            } else {
              _push2(`<!---->`);
            }
            if (successMessage.value) {
              _push2(`<p class="text-green-500 text-sm mt-2 text-center" data-v-5016b128${_scopeId}>${ssrInterpolate(successMessage.value)}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</form></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full bg-gradient-to-b from-gray-50 to-gray-100 mx-auto min-h-screen text-white flex items-center justify-center px-4" }, [
                createVNode("div", { class: "absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" }),
                createVNode("div", { class: "absolute top-40 left-40 w-80 h-80 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" }),
                createVNode("div", { class: "container mt-5 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8" }, [
                  createVNode("div", { class: "relative overflow-hidden" }, [
                    createVNode("h1", { class: "text-3xl font-bold mb-4 pt-5 mt-7 text-[#2E3E5C]" }, [
                      createTextVNode(" People are Saying About "),
                      createVNode("br"),
                      createTextVNode(" A plus Tutoring. ")
                    ]),
                    createVNode("p", { class: "mb-6 text-black" }, " Empowering you to learn, grow, and succeed with the best tutoring at your fingertips. "),
                    createVNode("div", { class: "w-full h-35" }, [
                      createVNode("div", {
                        class: "flex transition-transform duration-500 ease-in-out",
                        style: { transform: `translateX(-${currentIndex.value * 100}%)` }
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(testimonials.value, (testimonial, index) => {
                          return openBlock(), createBlock("div", {
                            key: index,
                            class: "w-full flex-shrink-0"
                          }, [
                            createVNode("blockquote", { class: "border-l-4 border-primary pl-4 text-lg italic text-gray-600" }, ' "' + toDisplayString(testimonial.testimonial) + '" ', 1),
                            createVNode("p", { class: "mt-4 text-primary font-semibold text-gray-600" }, " \u2014 " + toDisplayString(testimonial.name), 1)
                          ]);
                        }), 128))
                      ], 4)
                    ])
                  ]),
                  createVNode("div", { class: "bg-gray-800 p-8 rounded-lg shadow-md" }, [
                    createVNode("h2", { class: "text-2xl font-bold mb-4 text-center" }, [
                      createTextVNode(" Get Started With "),
                      createVNode("br"),
                      createTextVNode("A plus Tutoring ")
                    ]),
                    createVNode("form", {
                      onSubmit: withModifiers(submitForm, ["prevent"])
                    }, [
                      createVNode("input", {
                        type: "hidden",
                        value: source.value
                      }, null, 8, ["value"]),
                      createVNode("div", { class: "mb-4" }, [
                        createVNode("label", {
                          for: "name",
                          class: "block text-sm mb-2"
                        }, "Name"),
                        withDirectives(createVNode("input", {
                          type: "text",
                          "onUpdate:modelValue": ($event) => formData.value.name = $event,
                          id: "name",
                          required: "",
                          class: "w-full p-3 rounded border border-gray-600 bg-gray-700 text-white focus:outline-none focus:border-primary",
                          placeholder: "Enter your Name."
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, formData.value.name]
                        ])
                      ]),
                      createVNode("div", { class: "mb-4" }, [
                        createVNode("label", {
                          for: "email",
                          class: "block text-sm mb-2"
                        }, "Email"),
                        withDirectives(createVNode("input", {
                          type: "email",
                          "onUpdate:modelValue": ($event) => formData.value.email = $event,
                          id: "email",
                          required: "",
                          class: "w-full p-3 rounded border border-gray-600 bg-gray-700 text-white focus:outline-none focus:border-primary",
                          placeholder: "Enter your Email."
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, formData.value.email]
                        ])
                      ]),
                      createVNode("div", { class: "mb-4" }, [
                        createVNode("label", {
                          for: "phone",
                          class: "block text-sm mb-2"
                        }, "Phone Number"),
                        withDirectives(createVNode("input", {
                          type: "tel",
                          "onUpdate:modelValue": ($event) => formData.value.phone = $event,
                          id: "phone",
                          required: "",
                          class: "w-full p-3 rounded border border-gray-600 bg-gray-700 text-white focus:outline-none focus:border-primary",
                          placeholder: "Enter your phone Number."
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, formData.value.phone]
                        ])
                      ]),
                      createVNode("div", { class: "mb-4 flex items-center" }, [
                        withDirectives(createVNode("input", {
                          type: "checkbox",
                          id: "consent",
                          "onUpdate:modelValue": ($event) => formData.value.consent = $event,
                          required: "",
                          class: "mr-2"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelCheckbox, formData.value.consent]
                        ]),
                        createVNode("label", {
                          for: "consent",
                          class: "text-sm text-white"
                        }, " By providing my phone number and email, I consent to be contacted by A Plus Tutoring. ")
                      ]),
                      createVNode("button", {
                        type: "submit",
                        disabled: unref(loading) || !formData.value.consent,
                        class: "w-full bg-[#92A75A] text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors disabled:bg-gray-600"
                      }, toDisplayString(unref(loading) ? "Submitting..." : "Request a Consultation"), 9, ["disabled"]),
                      unref(error) ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "text-red-500 text-sm mt-2 text-center"
                      }, toDisplayString(unref(error)), 1)) : createCommentVNode("", true),
                      successMessage.value ? (openBlock(), createBlock("p", {
                        key: 1,
                        class: "text-green-500 text-sm mt-2 text-center"
                      }, toDisplayString(successMessage.value), 1)) : createCommentVNode("", true)
                    ], 32)
                  ])
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5016b128"]]);

export { contact as default };
//# sourceMappingURL=contact-BqouPRFK.mjs.map

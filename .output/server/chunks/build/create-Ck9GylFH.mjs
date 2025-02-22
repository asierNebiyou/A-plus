import { _ as __nuxt_component_0 } from './nuxt-layout-Bau4NBOH.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-gQID-DSZ.mjs';
import { ref, mergeProps, withCtx, unref, createTextVNode, createVNode, withModifiers, withDirectives, vModelText, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { u as useRouter } from './server.mjs';
import { u as useTestimonial } from './useTestimonial-B-QJ7-uw.mjs';
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
  __name: "create",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const { addTestimonial, isLoading } = useTestimonial();
    const form = ref({
      name: "",
      email: "",
      content: ""
    });
    const handleSubmit = async () => {
      await addTestimonial(form.value);
      router.push("/admin/testimonials");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "admin" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-4 max-w-2xl mx-auto"${_scopeId}><h1 class="text-2xl font-bold mb-4"${_scopeId}>Create New Testimonial</h1><form class="space-y-4"${_scopeId}><div${_scopeId}><label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>First name</label><input${ssrRenderAttr("value", unref(form).name)} type="text" id="first_name" class="bg-white bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required${_scopeId}></div><div${_scopeId}><label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>Email</label><input${ssrRenderAttr("value", unref(form).email)} type="email" id="email" class="bg-white bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John@j.com"${_scopeId}></div><div${_scopeId}><label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"${_scopeId}>Content</label><textarea required rows="4" class="bg-white bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"${_scopeId}>${ssrInterpolate(unref(form).testimonial)}</textarea></div><div class="flex gap-4"${_scopeId}><button type="submit"${ssrIncludeBooleanAttr(unref(isLoading)) ? " disabled" : ""} class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"${_scopeId}>${ssrInterpolate(unref(isLoading) ? "Saving ..." : "Submit")}</button>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/admin/testimonials",
              class: "bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Cancel `);
                } else {
                  return [
                    createTextVNode(" Cancel ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form></div>`);
          } else {
            return [
              createVNode("div", { class: "p-4 max-w-2xl mx-auto" }, [
                createVNode("h1", { class: "text-2xl font-bold mb-4" }, "Create New Testimonial"),
                createVNode("form", {
                  onSubmit: withModifiers(handleSubmit, ["prevent"]),
                  class: "space-y-4"
                }, [
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "first_name",
                      class: "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    }, "First name"),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => unref(form).name = $event,
                      type: "text",
                      id: "first_name",
                      class: "bg-white bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
                      placeholder: "John",
                      required: ""
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(form).name]
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", {
                      for: "email",
                      class: "block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    }, "Email"),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => unref(form).email = $event,
                      type: "email",
                      id: "email",
                      class: "bg-white bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",
                      placeholder: "John@j.com"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(form).email]
                    ])
                  ]),
                  createVNode("div", null, [
                    createVNode("label", { class: "block mb-2 text-sm font-medium text-gray-900 dark:text-white" }, "Content"),
                    withDirectives(createVNode("textarea", {
                      "onUpdate:modelValue": ($event) => unref(form).testimonial = $event,
                      required: "",
                      rows: "4",
                      class: "bg-white bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, unref(form).testimonial]
                    ])
                  ]),
                  createVNode("div", { class: "flex gap-4" }, [
                    createVNode("button", {
                      type: "submit",
                      disabled: unref(isLoading),
                      class: "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    }, toDisplayString(unref(isLoading) ? "Saving ..." : "Submit"), 9, ["disabled"]),
                    createVNode(_component_NuxtLink, {
                      to: "/admin/testimonials",
                      class: "bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Cancel ")
                      ]),
                      _: 1
                    })
                  ])
                ], 32)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/testimonials/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=create-Ck9GylFH.mjs.map

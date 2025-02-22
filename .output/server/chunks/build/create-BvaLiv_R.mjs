import { _ as __nuxt_component_0 } from './nuxt-layout-Bau4NBOH.mjs';
import { ref, mergeProps, withCtx, unref, createVNode, withModifiers, withDirectives, vModelText, vModelSelect, createBlock, openBlock, Fragment, renderList, createTextVNode, vModelCheckbox, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderList } from 'vue/server-renderer';
import { u as useRouter } from './server.mjs';
import { ArrowLeftIcon, XMarkIcon, PlusIcon } from '@heroicons/vue/24/outline';
import { u as usePricing } from './usePricing-DvSKRqK0.mjs';
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
    const { createPlan, isLoading } = usePricing();
    const form = ref({
      name: "",
      price: "",
      period: "monthly",
      type: "regular",
      features: [""],
      isPopular: false
    });
    const addFeature = () => {
      form.value.features.push("");
    };
    const removeFeature = (index) => {
      form.value.features.splice(index, 1);
    };
    const handleSubmit = async () => {
      try {
        const features = form.value.features.filter((f) => f.trim());
        const newPlan = await createPlan({
          ...form.value,
          features
        });
        router.push("/admin/pricing");
      } catch (error) {
        console.error("Failed to create plan:", error);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "admin" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="min-h-screen bg-gray-50 p-6"${_scopeId}><div class="max-w-3xl mx-auto"${_scopeId}><div class="flex items-center mb-6"${_scopeId}><button class="mr-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(ArrowLeftIcon), { class: "w-5 h-5 text-gray-600 hover:text-gray-800" }, null, _parent2, _scopeId));
            _push2(`</button><h1 class="text-2xl font-semibold text-gray-900"${_scopeId}>Create New Plan</h1></div><form class="bg-white rounded-lg shadow-sm p-6"${_scopeId}><div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2"${_scopeId}>Name</label><input${ssrRenderAttr("value", form.value.name)} type="text" class="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-[#92A75A] focus:border-[#92A75A]" required${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2"${_scopeId}>Price</label><div class="relative"${_scopeId}><span class="absolute left-3 top-3 text-gray-500"${_scopeId}>$</span><input${ssrRenderAttr("value", form.value.price)} type="number" step="0.01" class="w-full p-2.5 pl-7 border border-gray-200 rounded-lg focus:ring-[#92A75A] focus:border-[#92A75A]" required${_scopeId}></div></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2"${_scopeId}>Billing Period</label><select class="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-[#92A75A] focus:border-[#92A75A]"${_scopeId}><option value="monthly"${ssrIncludeBooleanAttr(Array.isArray(form.value.period) ? ssrLooseContain(form.value.period, "monthly") : ssrLooseEqual(form.value.period, "monthly")) ? " selected" : ""}${_scopeId}>Monthly</option><option value="yearly"${ssrIncludeBooleanAttr(Array.isArray(form.value.period) ? ssrLooseContain(form.value.period, "yearly") : ssrLooseEqual(form.value.period, "yearly")) ? " selected" : ""}${_scopeId}>Yearly</option></select></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2"${_scopeId}>Type</label><select class="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-[#92A75A] focus:border-[#92A75A]"${_scopeId}><option value="free"${ssrIncludeBooleanAttr(Array.isArray(form.value.type) ? ssrLooseContain(form.value.type, "free") : ssrLooseEqual(form.value.type, "free")) ? " selected" : ""}${_scopeId}>Free</option><option value="regular"${ssrIncludeBooleanAttr(Array.isArray(form.value.type) ? ssrLooseContain(form.value.type, "regular") : ssrLooseEqual(form.value.type, "regular")) ? " selected" : ""}${_scopeId}>Regular</option><option value="extended"${ssrIncludeBooleanAttr(Array.isArray(form.value.type) ? ssrLooseContain(form.value.type, "extended") : ssrLooseEqual(form.value.type, "extended")) ? " selected" : ""}${_scopeId}>Extended</option></select></div></div><div class="mb-6"${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2"${_scopeId}>Features</label><div class="space-y-3"${_scopeId}><!--[-->`);
            ssrRenderList(form.value.features, (feature, index) => {
              _push2(`<div class="flex items-center space-x-2"${_scopeId}><input${ssrRenderAttr("value", form.value.features[index])} type="text" class="flex-1 p-2.5 border border-gray-200 rounded-lg focus:ring-[#92A75A] focus:border-[#92A75A]"${_scopeId}><button type="button" class="text-red-500 hover:text-red-700"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(XMarkIcon), { class: "w-5 h-5" }, null, _parent2, _scopeId));
              _push2(`</button></div>`);
            });
            _push2(`<!--]--></div><button type="button" class="mt-3 text-[#92A75A] hover:text-[#7a8c4c] flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(PlusIcon), { class: "w-5 h-5 mr-1" }, null, _parent2, _scopeId));
            _push2(` Add Feature </button></div><div class="flex items-center mb-6"${_scopeId}><input${ssrIncludeBooleanAttr(Array.isArray(form.value.isPopular) ? ssrLooseContain(form.value.isPopular, null) : form.value.isPopular) ? " checked" : ""} type="checkbox" class="rounded border-gray-300 text-[#92A75A] focus:ring-[#92A75A]"${_scopeId}><label class="ml-2 text-sm text-gray-700"${_scopeId}>Mark as Popular Plan</label></div><div class="flex justify-end space-x-4"${_scopeId}><button type="button" class="px-4 py-2 text-gray-600 hover:text-gray-800"${_scopeId}> Cancel </button><button type="submit" class="bg-[#92A75A] text-white px-6 py-2 rounded-lg hover:bg-[#7a8c4c] transition-colors"${ssrIncludeBooleanAttr(unref(isLoading)) ? " disabled" : ""}${_scopeId}>`);
            if (unref(isLoading)) {
              _push2(`<span${_scopeId}>Creating...</span>`);
            } else {
              _push2(`<span${_scopeId}>Create Plan</span>`);
            }
            _push2(`</button></div></form></div></div>`);
          } else {
            return [
              createVNode("div", { class: "min-h-screen bg-gray-50 p-6" }, [
                createVNode("div", { class: "max-w-3xl mx-auto" }, [
                  createVNode("div", { class: "flex items-center mb-6" }, [
                    createVNode("button", {
                      onClick: ($event) => unref(router).back(),
                      class: "mr-4"
                    }, [
                      createVNode(unref(ArrowLeftIcon), { class: "w-5 h-5 text-gray-600 hover:text-gray-800" })
                    ], 8, ["onClick"]),
                    createVNode("h1", { class: "text-2xl font-semibold text-gray-900" }, "Create New Plan")
                  ]),
                  createVNode("form", {
                    onSubmit: withModifiers(handleSubmit, ["prevent"]),
                    class: "bg-white rounded-lg shadow-sm p-6"
                  }, [
                    createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6" }, [
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Name"),
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => form.value.name = $event,
                          type: "text",
                          class: "w-full p-2.5 border border-gray-200 rounded-lg focus:ring-[#92A75A] focus:border-[#92A75A]",
                          required: ""
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, form.value.name]
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Price"),
                        createVNode("div", { class: "relative" }, [
                          createVNode("span", { class: "absolute left-3 top-3 text-gray-500" }, "$"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => form.value.price = $event,
                            type: "number",
                            step: "0.01",
                            class: "w-full p-2.5 pl-7 border border-gray-200 rounded-lg focus:ring-[#92A75A] focus:border-[#92A75A]",
                            required: ""
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, form.value.price]
                          ])
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Billing Period"),
                        withDirectives(createVNode("select", {
                          "onUpdate:modelValue": ($event) => form.value.period = $event,
                          class: "w-full p-2.5 border border-gray-200 rounded-lg focus:ring-[#92A75A] focus:border-[#92A75A]"
                        }, [
                          createVNode("option", { value: "monthly" }, "Monthly"),
                          createVNode("option", { value: "yearly" }, "Yearly")
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, form.value.period]
                        ])
                      ]),
                      createVNode("div", null, [
                        createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Type"),
                        withDirectives(createVNode("select", {
                          "onUpdate:modelValue": ($event) => form.value.type = $event,
                          class: "w-full p-2.5 border border-gray-200 rounded-lg focus:ring-[#92A75A] focus:border-[#92A75A]"
                        }, [
                          createVNode("option", { value: "free" }, "Free"),
                          createVNode("option", { value: "regular" }, "Regular"),
                          createVNode("option", { value: "extended" }, "Extended")
                        ], 8, ["onUpdate:modelValue"]), [
                          [vModelSelect, form.value.type]
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "mb-6" }, [
                      createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Features"),
                      createVNode("div", { class: "space-y-3" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(form.value.features, (feature, index) => {
                          return openBlock(), createBlock("div", {
                            key: index,
                            class: "flex items-center space-x-2"
                          }, [
                            withDirectives(createVNode("input", {
                              "onUpdate:modelValue": ($event) => form.value.features[index] = $event,
                              type: "text",
                              class: "flex-1 p-2.5 border border-gray-200 rounded-lg focus:ring-[#92A75A] focus:border-[#92A75A]"
                            }, null, 8, ["onUpdate:modelValue"]), [
                              [vModelText, form.value.features[index]]
                            ]),
                            createVNode("button", {
                              onClick: ($event) => removeFeature(index),
                              type: "button",
                              class: "text-red-500 hover:text-red-700"
                            }, [
                              createVNode(unref(XMarkIcon), { class: "w-5 h-5" })
                            ], 8, ["onClick"])
                          ]);
                        }), 128))
                      ]),
                      createVNode("button", {
                        type: "button",
                        onClick: addFeature,
                        class: "mt-3 text-[#92A75A] hover:text-[#7a8c4c] flex items-center"
                      }, [
                        createVNode(unref(PlusIcon), { class: "w-5 h-5 mr-1" }),
                        createTextVNode(" Add Feature ")
                      ])
                    ]),
                    createVNode("div", { class: "flex items-center mb-6" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => form.value.isPopular = $event,
                        type: "checkbox",
                        class: "rounded border-gray-300 text-[#92A75A] focus:ring-[#92A75A]"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelCheckbox, form.value.isPopular]
                      ]),
                      createVNode("label", { class: "ml-2 text-sm text-gray-700" }, "Mark as Popular Plan")
                    ]),
                    createVNode("div", { class: "flex justify-end space-x-4" }, [
                      createVNode("button", {
                        type: "button",
                        onClick: ($event) => unref(router).back(),
                        class: "px-4 py-2 text-gray-600 hover:text-gray-800"
                      }, " Cancel ", 8, ["onClick"]),
                      createVNode("button", {
                        type: "submit",
                        class: "bg-[#92A75A] text-white px-6 py-2 rounded-lg hover:bg-[#7a8c4c] transition-colors",
                        disabled: unref(isLoading)
                      }, [
                        unref(isLoading) ? (openBlock(), createBlock("span", { key: 0 }, "Creating...")) : (openBlock(), createBlock("span", { key: 1 }, "Create Plan"))
                      ], 8, ["disabled"])
                    ])
                  ], 32)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/pricing/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=create-BvaLiv_R.mjs.map

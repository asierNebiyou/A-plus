import { _ as __nuxt_component_0 } from './nuxt-layout-Bau4NBOH.mjs';
import { ref, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, withModifiers, withDirectives, toDisplayString, vModelText, openBlock, Fragment, renderList, Teleport, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderTeleport } from 'vue/server-renderer';
import { u as useFaq } from './useFaq-CFEAJwic.mjs';
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
  __name: "faq",
  __ssrInlineRender: true,
  setup(__props) {
    const { faqs, addFaq, updateFaq, isLoading, error } = useFaq();
    const form = ref({ question: "", answer: "" });
    const isEditing = ref(false);
    const editingId = ref(null);
    const isConfirmingDelete = ref(false);
    const deleteId = ref(null);
    const handleSubmit = async () => {
      if (isEditing.value) {
        await updateFaq({ id: editingId.value, ...form.value });
      } else {
        await addFaq(form.value);
      }
      form.value = { question: "", answer: "" };
      isEditing.value = false;
    };
    const editFaq = (faq) => {
      form.value = { question: faq.question, answer: faq.answer };
      editingId.value = faq._id;
      isEditing.value = true;
    };
    const cancelEdit = () => {
      form.value = { question: "", answer: "" };
      isEditing.value = false;
    };
    const confirmDelete = (id) => {
      deleteId.value = id;
      isConfirmingDelete.value = true;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "admin" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6 max-w-4xl mx-auto"${_scopeId}><h1 class="text-3xl font-bold mb-6 text-gray-800"${_scopeId}>Manage FAQs</h1><form class="mb-6 bg-white p-4 rounded-lg shadow-md"${_scopeId}><h2 class="text-xl font-semibold mb-3"${_scopeId}>${ssrInterpolate(isEditing.value ? "Edit FAQ" : "Add New FAQ")}</h2><input${ssrRenderAttr("value", form.value.question)} placeholder="Enter Question" required class="border p-3 rounded-lg w-full mb-3 focus:ring-2 focus:ring-blue-500 outline-none"${_scopeId}><textarea placeholder="Enter Answer" required class="border p-3 rounded-lg w-full mb-3 focus:ring-2 focus:ring-blue-500 outline-none"${_scopeId}>${ssrInterpolate(form.value.answer)}</textarea><div class="flex gap-3"${_scopeId}><button class="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"${ssrIncludeBooleanAttr(unref(isLoading)) ? " disabled" : ""}${_scopeId}>${ssrInterpolate(unref(isLoading) ? "Saving..." : isEditing.value ? "Update FAQ" : "Add FAQ")}</button>`);
            if (isEditing.value) {
              _push2(`<button type="button" class="text-gray-600 px-5 py-2 border rounded-lg hover:bg-gray-100"${_scopeId}> Cancel </button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></form>`);
            if (unref(error)) {
              _push2(`<p class="text-red-500 mb-4"${_scopeId}>${ssrInterpolate(unref(error))}</p>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(isLoading)) {
              _push2(`<p class="text-gray-500"${_scopeId}>Loading FAQs...</p>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(faqs).length > 0) {
              _push2(`<div class="space-y-4"${_scopeId}><!--[-->`);
              ssrRenderList(unref(faqs), (faq) => {
                _push2(`<div class="bg-white p-4 rounded-lg shadow flex justify-between items-center"${_scopeId}><div${_scopeId}><h3 class="text-lg font-semibold text-gray-800"${_scopeId}>${ssrInterpolate(faq.question)}</h3><p class="text-gray-600"${_scopeId}>${ssrInterpolate(faq.answer)}</p></div><div class="flex gap-2"${_scopeId}><button class="text-blue-500 hover:text-blue-700 transition"${_scopeId}> \u270F\uFE0F Edit </button><button class="text-red-500 hover:text-red-700 transition"${_scopeId}> \u{1F5D1} Delete </button></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<p class="text-gray-500"${_scopeId}>No FAQs available.</p>`);
            }
            ssrRenderTeleport(_push2, (_push3) => {
              if (isConfirmingDelete.value) {
                _push3(`<div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"${_scopeId}><div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"${_scopeId}><h3 class="text-lg font-semibold text-gray-800"${_scopeId}>Are you sure?</h3><p class="text-gray-600"${_scopeId}>This action cannot be undone.</p><div class="mt-4 flex gap-3"${_scopeId}><button class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"${_scopeId}> Yes, Delete </button><button class="text-gray-600 px-4 py-2 border rounded-lg hover:bg-gray-100"${_scopeId}> Cancel </button></div></div></div>`);
              } else {
                _push3(`<!---->`);
              }
            }, "body", false, _parent2);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "p-6 max-w-4xl mx-auto" }, [
                createVNode("h1", { class: "text-3xl font-bold mb-6 text-gray-800" }, "Manage FAQs"),
                createVNode("form", {
                  onSubmit: withModifiers(handleSubmit, ["prevent"]),
                  class: "mb-6 bg-white p-4 rounded-lg shadow-md"
                }, [
                  createVNode("h2", { class: "text-xl font-semibold mb-3" }, toDisplayString(isEditing.value ? "Edit FAQ" : "Add New FAQ"), 1),
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => form.value.question = $event,
                    placeholder: "Enter Question",
                    required: "",
                    class: "border p-3 rounded-lg w-full mb-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, form.value.question]
                  ]),
                  withDirectives(createVNode("textarea", {
                    "onUpdate:modelValue": ($event) => form.value.answer = $event,
                    placeholder: "Enter Answer",
                    required: "",
                    class: "border p-3 rounded-lg w-full mb-3 focus:ring-2 focus:ring-blue-500 outline-none"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, form.value.answer]
                  ]),
                  createVNode("div", { class: "flex gap-3" }, [
                    createVNode("button", {
                      class: "bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition",
                      disabled: unref(isLoading)
                    }, toDisplayString(unref(isLoading) ? "Saving..." : isEditing.value ? "Update FAQ" : "Add FAQ"), 9, ["disabled"]),
                    isEditing.value ? (openBlock(), createBlock("button", {
                      key: 0,
                      type: "button",
                      onClick: cancelEdit,
                      class: "text-gray-600 px-5 py-2 border rounded-lg hover:bg-gray-100"
                    }, " Cancel ")) : createCommentVNode("", true)
                  ])
                ], 32),
                unref(error) ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: "text-red-500 mb-4"
                }, toDisplayString(unref(error)), 1)) : createCommentVNode("", true),
                unref(isLoading) ? (openBlock(), createBlock("p", {
                  key: 1,
                  class: "text-gray-500"
                }, "Loading FAQs...")) : createCommentVNode("", true),
                unref(faqs).length > 0 ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "space-y-4"
                }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(faqs), (faq) => {
                    return openBlock(), createBlock("div", {
                      key: faq._id,
                      class: "bg-white p-4 rounded-lg shadow flex justify-between items-center"
                    }, [
                      createVNode("div", null, [
                        createVNode("h3", { class: "text-lg font-semibold text-gray-800" }, toDisplayString(faq.question), 1),
                        createVNode("p", { class: "text-gray-600" }, toDisplayString(faq.answer), 1)
                      ]),
                      createVNode("div", { class: "flex gap-2" }, [
                        createVNode("button", {
                          onClick: ($event) => editFaq(faq),
                          class: "text-blue-500 hover:text-blue-700 transition"
                        }, " \u270F\uFE0F Edit ", 8, ["onClick"]),
                        createVNode("button", {
                          onClick: ($event) => confirmDelete(faq._id),
                          class: "text-red-500 hover:text-red-700 transition"
                        }, " \u{1F5D1} Delete ", 8, ["onClick"])
                      ])
                    ]);
                  }), 128))
                ])) : (openBlock(), createBlock("p", {
                  key: 3,
                  class: "text-gray-500"
                }, "No FAQs available.")),
                (openBlock(), createBlock(Teleport, { to: "body" }, [
                  isConfirmingDelete.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
                  }, [
                    createVNode("div", { class: "bg-white p-6 rounded-lg shadow-lg max-w-md w-full" }, [
                      createVNode("h3", { class: "text-lg font-semibold text-gray-800" }, "Are you sure?"),
                      createVNode("p", { class: "text-gray-600" }, "This action cannot be undone."),
                      createVNode("div", { class: "mt-4 flex gap-3" }, [
                        createVNode("button", {
                          onClick: _ctx.handdeleteleDelete,
                          class: "bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                        }, " Yes, Delete ", 8, ["onClick"]),
                        createVNode("button", {
                          onClick: ($event) => isConfirmingDelete.value = false,
                          class: "text-gray-600 px-4 py-2 border rounded-lg hover:bg-gray-100"
                        }, " Cancel ", 8, ["onClick"])
                      ])
                    ])
                  ])) : createCommentVNode("", true)
                ]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=faq-DnyTwTrb.mjs.map

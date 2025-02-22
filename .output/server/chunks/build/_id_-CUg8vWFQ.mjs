import { _ as __nuxt_component_0 } from './nuxt-layout-Bau4NBOH.mjs';
import { ref, resolveComponent, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, openBlock, withModifiers, withDirectives, vModelText, watch, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';
import { u as useRouter } from './server.mjs';
import { u as useBlog } from './useBlog-Dlx0axto.mjs';
import { marked } from 'marked';
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

const _sfc_main$1 = {
  __name: "MarkdownRenderer",
  __ssrInlineRender: true,
  props: {
    content: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const compiledMarkdown = ref("");
    watch(
      () => props.content,
      (newContent) => {
        compiledMarkdown.value = marked(newContent);
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "markdown-content" }, _attrs))} data-v-daeb6cd0>${(_a = compiledMarkdown.value) != null ? _a : ""}</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MarkdownRenderer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MarkdownRenderer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-daeb6cd0"]]);
const _sfc_main = {
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const { updatePost, isLoading } = useBlog();
    const form = ref({});
    const postId = router.currentRoute.value.params.id;
    const handleSubmit = async () => {
      try {
        await updatePost(postId, form.value);
        router.push("/admin/blog");
      } catch (err) {
        console.error("Failed to update post:", err);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_ArrowLeftIcon = resolveComponent("ArrowLeftIcon");
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "admin" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="min-h-screen bg-gray-50 p-6"${_scopeId}><div class="max-w-3xl mx-auto"${_scopeId}><div class="flex items-center mb-6"${_scopeId}><button class="mr-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_ArrowLeftIcon, { class: "w-5 h-5 text-gray-600 hover:text-gray-800" }, null, _parent2, _scopeId));
            _push2(`</button><h1 class="text-2xl font-semibold text-gray-900"${_scopeId}>Edit Post</h1></div>`);
            if (unref(isLoading)) {
              _push2(`<div class="text-center py-12"${_scopeId}><div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#92A75A] mx-auto"${_scopeId}></div></div>`);
            } else if (form.value) {
              _push2(`<form class="bg-white rounded-lg shadow-sm p-6"${_scopeId}><div class="mb-4"${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2"${_scopeId}>Title</label><input${ssrRenderAttr("value", form.value.title)} type="text" required class="w-full p-2.5 border border-gray-200 rounded-lg"${_scopeId}></div><div class="mb-4"${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2"${_scopeId}>Content (Markdown)</label><textarea rows="10" required class="w-full p-2.5 border border-gray-200 rounded-lg"${_scopeId}>${ssrInterpolate(form.value.content)}</textarea></div><button type="submit" class="bg-[#92A75A] text-white px-4 py-2 rounded-lg hover:bg-[#7a8c4c] transition-colors"${_scopeId}> Update Post </button></form>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<h2 class="mt-6 text-xl font-semibold"${_scopeId}>Preview</h2>`);
            _push2(ssrRenderComponent(MarkdownRenderer, {
              content: form.value.content
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "min-h-screen bg-gray-50 p-6" }, [
                createVNode("div", { class: "max-w-3xl mx-auto" }, [
                  createVNode("div", { class: "flex items-center mb-6" }, [
                    createVNode("button", {
                      onClick: ($event) => unref(router).back(),
                      class: "mr-4"
                    }, [
                      createVNode(_component_ArrowLeftIcon, { class: "w-5 h-5 text-gray-600 hover:text-gray-800" })
                    ], 8, ["onClick"]),
                    createVNode("h1", { class: "text-2xl font-semibold text-gray-900" }, "Edit Post")
                  ]),
                  unref(isLoading) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "text-center py-12"
                  }, [
                    createVNode("div", { class: "animate-spin rounded-full h-12 w-12 border-b-2 border-[#92A75A] mx-auto" })
                  ])) : form.value ? (openBlock(), createBlock("form", {
                    key: 1,
                    onSubmit: withModifiers(handleSubmit, ["prevent"]),
                    class: "bg-white rounded-lg shadow-sm p-6"
                  }, [
                    createVNode("div", { class: "mb-4" }, [
                      createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Title"),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => form.value.title = $event,
                        type: "text",
                        required: "",
                        class: "w-full p-2.5 border border-gray-200 rounded-lg"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, form.value.title]
                      ])
                    ]),
                    createVNode("div", { class: "mb-4" }, [
                      createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Content (Markdown)"),
                      withDirectives(createVNode("textarea", {
                        "onUpdate:modelValue": ($event) => form.value.content = $event,
                        rows: "10",
                        required: "",
                        class: "w-full p-2.5 border border-gray-200 rounded-lg"
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, form.value.content]
                      ])
                    ]),
                    createVNode("button", {
                      type: "submit",
                      class: "bg-[#92A75A] text-white px-4 py-2 rounded-lg hover:bg-[#7a8c4c] transition-colors"
                    }, " Update Post ")
                  ], 32)) : createCommentVNode("", true),
                  createVNode("h2", { class: "mt-6 text-xl font-semibold" }, "Preview"),
                  createVNode(MarkdownRenderer, {
                    content: form.value.content
                  }, null, 8, ["content"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/blog/edit/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_id_-CUg8vWFQ.mjs.map

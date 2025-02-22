import { ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { marked } from 'marked';
import { u as useBlog } from './useBlog-Dlx0axto.mjs';

const _sfc_main = {
  __name: "create",
  __ssrInlineRender: true,
  setup(__props) {
    const { loading } = useBlog();
    const showPreview = ref(false);
    const tagInput = ref("");
    const postData = ref({
      title: "",
      slug: "",
      content: "",
      tags: [],
      status: "draft"
    });
    const markdownActions = [
      { label: "B", markdown: "**Bold**" },
      { label: "I", markdown: "*Italic*" },
      { label: "H2", markdown: "## Heading" },
      { label: "Link", markdown: "[Link](url)" },
      { label: "Image", markdown: "![Alt text](image-url)" },
      { label: "Code", markdown: "```\ncode\n```" },
      { label: "Quote", markdown: "> Quote" },
      { label: "List", markdown: "- List item" }
    ];
    const markdownPreview = computed(() => {
      return marked(postData.value.content);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-4xl mx-auto p-6" }, _attrs))}><form class="space-y-6"><div><label class="block text-sm font-medium text-gray-700">Title</label><input${ssrRenderAttr("value", postData.value.title)} type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required></div><div><label class="block text-sm font-medium text-gray-700">Slug</label><input${ssrRenderAttr("value", postData.value.slug)} type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" required></div><div><label class="block text-sm font-medium text-gray-700">Tags</label><div class="flex flex-wrap gap-2"><input${ssrRenderAttr("value", tagInput.value)} type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" placeholder="Press enter to add tags"><div class="flex flex-wrap gap-2 mt-2"><!--[-->`);
      ssrRenderList(postData.value.tags, (tag) => {
        _push(`<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">${ssrInterpolate(tag)} <button type="button" class="ml-1 inline-flex items-center p-0.5 rounded-full text-indigo-400 hover:bg-indigo-200 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> \xD7 </button></span>`);
      });
      _push(`<!--]--></div></div></div><div><label class="block text-sm font-medium text-gray-700">Content</label><div class="mt-1 flex rounded-md shadow-sm"><div class="relative flex flex-1 flex-col"><div class="border-b border-gray-300 bg-gray-50 p-2 flex items-center space-x-2 rounded-t-md"><!--[-->`);
      ssrRenderList(markdownActions, (action, index) => {
        _push(`<button type="button" class="p-1 hover:bg-gray-200 rounded">${ssrInterpolate(action.label)}</button>`);
      });
      _push(`<!--]--></div><textarea rows="15" class="block w-full rounded-b-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500" required>${ssrInterpolate(postData.value.content)}</textarea></div></div></div>`);
      if (showPreview.value) {
        _push(`<div class="prose max-w-none mt-6 p-6 border rounded-md"><div>${(_a = markdownPreview.value) != null ? _a : ""}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex justify-between"><button type="button" class="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">${ssrInterpolate(showPreview.value ? "Hide Preview" : "Show Preview")}</button><div class="flex space-x-3"><button type="submit"${ssrIncludeBooleanAttr(unref(loading)) ? " disabled" : ""} class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">${ssrInterpolate(unref(loading) ? "Saving..." : "Save Post")}</button></div></div></form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/blog/create.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=create-CETRsAv8.mjs.map

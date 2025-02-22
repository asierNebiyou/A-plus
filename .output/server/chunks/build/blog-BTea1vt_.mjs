import { ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "blog",
  __ssrInlineRender: true,
  setup(__props) {
    const posts = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6" }, _attrs))}><h1 class="text-3xl font-bold text-primary">Blog Posts</h1><!--[-->`);
      ssrRenderList(posts.value, (post) => {
        _push(`<div class="mt-4 p-4 border rounded-lg"><h2 class="text-xl text-text">${ssrInterpolate(post.title)}</h2><p class="text-lg text-text">${ssrInterpolate(post.content)}</p></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=blog-BTea1vt_.mjs.map

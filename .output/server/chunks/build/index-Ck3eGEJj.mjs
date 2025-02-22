import { _ as __nuxt_component_0 } from './nuxt-layout-Bau4NBOH.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-gQID-DSZ.mjs';
import { mergeProps, withCtx, createTextVNode, unref, createVNode, toDisplayString, createBlock, createCommentVNode, openBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { u as useBlog } from './useBlog-Dlx0axto.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { blogs, loading, error } = useBlog();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "admin" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="min-h-screen bg-gray-50 p-6"${_scopeId}><div class="max-w-7xl mx-auto"${_scopeId}><div class="flex justify-between items-center mb-8"${_scopeId}><h1 class="text-3xl font-bold text-gray-900"${_scopeId}>Blog Posts</h1>`);
            _push2(ssrRenderComponent(_component_NuxtLink, {
              to: "/admin/blog/create",
              class: "bg-[#92A75A] text-white px-5 py-3 rounded-lg hover:bg-[#7a8c4c] transition-colors shadow-lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` + Add New Post `);
                } else {
                  return [
                    createTextVNode(" + Add New Post ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            if (_ctx.isLoading) {
              _push2(`<div class="text-center py-12"${_scopeId}><div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#92A75A] mx-auto"${_scopeId}></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(error)) {
              _push2(`<div class="bg-red-50 text-red-500 p-4 rounded-lg mb-6 shadow-md"${_scopeId}>${ssrInterpolate(unref(error))}</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!unref(loading) && !unref(error)) {
              _push2(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"${_scopeId}><!--[-->`);
              ssrRenderList(unref(blogs), (post) => {
                _push2(`<div class="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_NuxtLink, {
                  to: "/admin/blog/edit/" + post.id,
                  class: "text-blue-600 hover:underline font-medium"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<img${ssrRenderAttr("src", post.image || "/default-blog.png")} alt="Blog Image" class="w-full h-48 object-cover"${_scopeId2}><div class="p-5"${_scopeId2}><h2 class="text-xl font-bold text-gray-900 mb-2"${_scopeId2}>${ssrInterpolate(post.title)}</h2><p class="text-gray-600 line-clamp-3"${_scopeId2}>${ssrInterpolate(post.content)}</p><div class="mt-4 flex justify-between items-center"${_scopeId2}><button class="text-red-500 hover:text-red-700 transition-colors"${_scopeId2}> \u{1F5D1} Delete </button></div></div>`);
                    } else {
                      return [
                        createVNode("img", {
                          src: post.image || "/default-blog.png",
                          alt: "Blog Image",
                          class: "w-full h-48 object-cover"
                        }, null, 8, ["src"]),
                        createVNode("div", { class: "p-5" }, [
                          createVNode("h2", { class: "text-xl font-bold text-gray-900 mb-2" }, toDisplayString(post.title), 1),
                          createVNode("p", { class: "text-gray-600 line-clamp-3" }, toDisplayString(post.content), 1),
                          createVNode("div", { class: "mt-4 flex justify-between items-center" }, [
                            createVNode("button", {
                              onClick: ($event) => _ctx.deletePost(post.id),
                              class: "text-red-500 hover:text-red-700 transition-colors"
                            }, " \u{1F5D1} Delete ", 8, ["onClick"])
                          ])
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!_ctx.isLoading && !unref(error) && unref(blogs).length === 0) {
              _push2(`<div class="text-center text-gray-500 mt-12"${_scopeId}> No blog posts found. </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "min-h-screen bg-gray-50 p-6" }, [
                createVNode("div", { class: "max-w-7xl mx-auto" }, [
                  createVNode("div", { class: "flex justify-between items-center mb-8" }, [
                    createVNode("h1", { class: "text-3xl font-bold text-gray-900" }, "Blog Posts"),
                    createVNode(_component_NuxtLink, {
                      to: "/admin/blog/create",
                      class: "bg-[#92A75A] text-white px-5 py-3 rounded-lg hover:bg-[#7a8c4c] transition-colors shadow-lg"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" + Add New Post ")
                      ]),
                      _: 1
                    })
                  ]),
                  _ctx.isLoading ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "text-center py-12"
                  }, [
                    createVNode("div", { class: "animate-spin rounded-full h-12 w-12 border-b-2 border-[#92A75A] mx-auto" })
                  ])) : createCommentVNode("", true),
                  unref(error) ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "bg-red-50 text-red-500 p-4 rounded-lg mb-6 shadow-md"
                  }, toDisplayString(unref(error)), 1)) : createCommentVNode("", true),
                  !unref(loading) && !unref(error) ? (openBlock(), createBlock("div", {
                    key: 2,
                    class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(blogs), (post) => {
                      return openBlock(), createBlock("div", {
                        key: post.id,
                        class: "bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
                      }, [
                        createVNode(_component_NuxtLink, {
                          to: "/admin/blog/edit/" + post.id,
                          class: "text-blue-600 hover:underline font-medium"
                        }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: post.image || "/default-blog.png",
                              alt: "Blog Image",
                              class: "w-full h-48 object-cover"
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "p-5" }, [
                              createVNode("h2", { class: "text-xl font-bold text-gray-900 mb-2" }, toDisplayString(post.title), 1),
                              createVNode("p", { class: "text-gray-600 line-clamp-3" }, toDisplayString(post.content), 1),
                              createVNode("div", { class: "mt-4 flex justify-between items-center" }, [
                                createVNode("button", {
                                  onClick: ($event) => _ctx.deletePost(post.id),
                                  class: "text-red-500 hover:text-red-700 transition-colors"
                                }, " \u{1F5D1} Delete ", 8, ["onClick"])
                              ])
                            ])
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ]);
                    }), 128))
                  ])) : createCommentVNode("", true),
                  !_ctx.isLoading && !unref(error) && unref(blogs).length === 0 ? (openBlock(), createBlock("div", {
                    key: 3,
                    class: "text-center text-gray-500 mt-12"
                  }, " No blog posts found. ")) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Ck3eGEJj.mjs.map

import { _ as __nuxt_component_0 } from './nuxt-layout-Bau4NBOH.mjs';
import { ref, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, withDirectives, vModelText, openBlock, toDisplayString, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { a as useReferral } from './server.mjs';
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
  __name: "referrals",
  __ssrInlineRender: true,
  setup(__props) {
    const { referralData, generateReferral, loadReferrals, deleteReferral } = useReferral();
    const email = ref("");
    const referralLink = ref("");
    const baseUrl = ref("");
    const createReferral = async () => {
      if (!email.value) return;
      referralLink.value = await generateReferral(email.value);
      email.value = "";
      await loadReferrals();
    };
    const removeReferral = async (id) => {
      await deleteReferral(id);
      await loadReferrals();
    };
    const copyLink = (code) => {
      (void 0).clipboard.writeText(`${baseUrl.value}?ref=${code}`);
      alert("Link copied to clipboard!");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "admin" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-8 min-h-screen bg-gray-100"${_scopeId}><div class="max-w-5xl mx-auto bg-white shadow-xl rounded-lg p-8"${_scopeId}><h2 class="text-3xl font-semibold text-gray-900 mb-6"${_scopeId}> Generate Your Affiliate Link </h2><div class="mb-6 relative"${_scopeId}><input${ssrRenderAttr("value", email.value)} type="email" placeholder="Enter your email" class="w-full p-3 pr-14 text-sm rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"${_scopeId}><button class="absolute right-2 top-1 bg-[#92A75A] text-white py-2 px-4 rounded-full hover:bg-green-600 transition-colors"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="M5 12h14"${_scopeId}></path><path d="M12 5l7 7-7 7"${_scopeId}></path></svg></button></div>`);
            if (referralLink.value) {
              _push2(`<div class="mt-6 p-4 rounded-lg bg-gray-50 shadow-md"${_scopeId}><h3 class="font-semibold text-lg text-gray-800 mb-2"${_scopeId}> Your Referral Link: </h3><p class="text-sm text-gray-700 break-all"${_scopeId}><a${ssrRenderAttr("href", referralLink.value)} class="text-blue-600 hover:underline" target="_blank"${_scopeId}>${ssrInterpolate(referralLink.value)}</a></p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="overflow-x-auto mt-6"${_scopeId}>`);
            if (unref(referralData).length) {
              _push2(`<table class="min-w-full bg-white table-auto rounded-lg shadow-xl"${_scopeId}><thead${_scopeId}><tr class="text-left border-b-2 border-gray-300 bg-gray-100"${_scopeId}><th class="py-4 px-6 text-sm text-gray-700"${_scopeId}>Email</th><th class="py-4 px-6 text-sm text-gray-700"${_scopeId}>Referral Link</th><th class="py-4 px-6 text-sm text-gray-700"${_scopeId}>Clicks</th><th class="py-4 px-6 text-sm text-gray-700"${_scopeId}>Actions (Click)</th><th class="py-4 px-6 text-sm text-gray-700"${_scopeId}>Actions</th></tr></thead><tbody${_scopeId}><!--[-->`);
              ssrRenderList(unref(referralData), (ref2) => {
                _push2(`<tr class="border-b border-gray-200 hover:bg-gray-50 transition-colors"${_scopeId}><td class="py-4 px-6 text-sm text-gray-800"${_scopeId}>${ssrInterpolate(ref2.email)}</td><td class="py-4 px-6 text-sm text-gray-600 break-all"${_scopeId}><a${ssrRenderAttr("href", `${baseUrl.value}?ref=${ref2.code}`)} class="text-blue-500 hover:underline" target="_blank"${_scopeId}>${ssrInterpolate(`${baseUrl.value}?ref=${ref2.code}`)}</a></td><td class="py-4 px-6 text-sm text-gray-600"${_scopeId}>${ssrInterpolate(ref2.clicks)}</td><td class="py-4 px-6 text-sm text-gray-600"${_scopeId}><!--[-->`);
                ssrRenderList(ref2.actions, (key, action) => {
                  _push2(`<p${_scopeId}>${ssrInterpolate(action)}(${ssrInterpolate(key)}) </p>`);
                });
                _push2(`<!--]--></td><td class="py-4 px-6 flex space-x-3"${_scopeId}><button class="text-blue-600 hover:text-blue-800"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"${_scopeId}><path d="M 18.5 5 C 15.480226 5 13 7.4802259 13 10.5 L 13 32.5 C 13 35.519774 15.480226 38 18.5 38 L 34.5 38 C 37.519774 38 40 35.519774 40 32.5 L 40 10.5 C 40 7.4802259 37.519774 5 34.5 5 L 18.5 5 z M 18.5 8 L 34.5 8 C 35.898226 8 37 9.1017741 37 10.5 L 37 32.5 C 37 33.898226 35.898226 35 34.5 35 L 18.5 35 C 17.101774 35 16 33.898226 16 32.5 L 16 10.5 C 16 9.1017741 17.101774 8 18.5 8 z M 11 10 L 9.78125 10.8125 C 8.66825 11.5545 8 12.803625 8 14.140625 L 8 33.5 C 8 38.747 12.253 43 17.5 43 L 30.859375 43 C 32.197375 43 33.4465 42.33175 34.1875 41.21875 L 35 40 L 17.5 40 C 13.91 40 11 37.09 11 33.5 L 11 10 z"${_scopeId}></path></svg></button><button${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"${_scopeId}><path fill="red" d="M10 2l-1 1H3v2h18V3h-6l-1-1zm-4.635 5l1.527 13.264c.132.99.984 1.736 1.982 1.736h8.248c.998 0 1.851-.745 1.984-1.744L18.365 7H5.365z"${_scopeId}></path></svg></button></td></tr>`);
              });
              _push2(`<!--]--></tbody></table>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "p-8 min-h-screen bg-gray-100" }, [
                createVNode("div", { class: "max-w-5xl mx-auto bg-white shadow-xl rounded-lg p-8" }, [
                  createVNode("h2", { class: "text-3xl font-semibold text-gray-900 mb-6" }, " Generate Your Affiliate Link "),
                  createVNode("div", { class: "mb-6 relative" }, [
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => email.value = $event,
                      type: "email",
                      placeholder: "Enter your email",
                      class: "w-full p-3 pr-14 text-sm rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, email.value]
                    ]),
                    createVNode("button", {
                      onClick: createReferral,
                      class: "absolute right-2 top-1 bg-[#92A75A] text-white py-2 px-4 rounded-full hover:bg-green-600 transition-colors"
                    }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        class: "w-5 h-5",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                      }, [
                        createVNode("path", { d: "M5 12h14" }),
                        createVNode("path", { d: "M12 5l7 7-7 7" })
                      ]))
                    ])
                  ]),
                  referralLink.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mt-6 p-4 rounded-lg bg-gray-50 shadow-md"
                  }, [
                    createVNode("h3", { class: "font-semibold text-lg text-gray-800 mb-2" }, " Your Referral Link: "),
                    createVNode("p", { class: "text-sm text-gray-700 break-all" }, [
                      createVNode("a", {
                        href: referralLink.value,
                        class: "text-blue-600 hover:underline",
                        target: "_blank"
                      }, toDisplayString(referralLink.value), 9, ["href"])
                    ])
                  ])) : createCommentVNode("", true),
                  createVNode("div", { class: "overflow-x-auto mt-6" }, [
                    unref(referralData).length ? (openBlock(), createBlock("table", {
                      key: 0,
                      class: "min-w-full bg-white table-auto rounded-lg shadow-xl"
                    }, [
                      createVNode("thead", null, [
                        createVNode("tr", { class: "text-left border-b-2 border-gray-300 bg-gray-100" }, [
                          createVNode("th", { class: "py-4 px-6 text-sm text-gray-700" }, "Email"),
                          createVNode("th", { class: "py-4 px-6 text-sm text-gray-700" }, "Referral Link"),
                          createVNode("th", { class: "py-4 px-6 text-sm text-gray-700" }, "Clicks"),
                          createVNode("th", { class: "py-4 px-6 text-sm text-gray-700" }, "Actions (Click)"),
                          createVNode("th", { class: "py-4 px-6 text-sm text-gray-700" }, "Actions")
                        ])
                      ]),
                      createVNode("tbody", null, [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(referralData), (ref2) => {
                          return openBlock(), createBlock("tr", {
                            key: ref2.code,
                            class: "border-b border-gray-200 hover:bg-gray-50 transition-colors"
                          }, [
                            createVNode("td", { class: "py-4 px-6 text-sm text-gray-800" }, toDisplayString(ref2.email), 1),
                            createVNode("td", { class: "py-4 px-6 text-sm text-gray-600 break-all" }, [
                              createVNode("a", {
                                href: `${baseUrl.value}?ref=${ref2.code}`,
                                class: "text-blue-500 hover:underline",
                                target: "_blank"
                              }, toDisplayString(`${baseUrl.value}?ref=${ref2.code}`), 9, ["href"])
                            ]),
                            createVNode("td", { class: "py-4 px-6 text-sm text-gray-600" }, toDisplayString(ref2.clicks), 1),
                            createVNode("td", { class: "py-4 px-6 text-sm text-gray-600" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(ref2.actions, (key, action) => {
                                return openBlock(), createBlock("p", null, toDisplayString(action) + "(" + toDisplayString(key) + ") ", 1);
                              }), 256))
                            ]),
                            createVNode("td", { class: "py-4 px-6 flex space-x-3" }, [
                              createVNode("button", {
                                onClick: ($event) => copyLink(ref2.code),
                                class: "text-blue-600 hover:text-blue-800"
                              }, [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "20",
                                  height: "20",
                                  viewBox: "0 0 48 48"
                                }, [
                                  createVNode("path", { d: "M 18.5 5 C 15.480226 5 13 7.4802259 13 10.5 L 13 32.5 C 13 35.519774 15.480226 38 18.5 38 L 34.5 38 C 37.519774 38 40 35.519774 40 32.5 L 40 10.5 C 40 7.4802259 37.519774 5 34.5 5 L 18.5 5 z M 18.5 8 L 34.5 8 C 35.898226 8 37 9.1017741 37 10.5 L 37 32.5 C 37 33.898226 35.898226 35 34.5 35 L 18.5 35 C 17.101774 35 16 33.898226 16 32.5 L 16 10.5 C 16 9.1017741 17.101774 8 18.5 8 z M 11 10 L 9.78125 10.8125 C 8.66825 11.5545 8 12.803625 8 14.140625 L 8 33.5 C 8 38.747 12.253 43 17.5 43 L 30.859375 43 C 32.197375 43 33.4465 42.33175 34.1875 41.21875 L 35 40 L 17.5 40 C 13.91 40 11 37.09 11 33.5 L 11 10 z" })
                                ]))
                              ], 8, ["onClick"]),
                              createVNode("button", {
                                onClick: ($event) => removeReferral(ref2._id)
                              }, [
                                (openBlock(), createBlock("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  width: "20",
                                  height: "20",
                                  viewBox: "0 0 24 24"
                                }, [
                                  createVNode("path", {
                                    fill: "red",
                                    d: "M10 2l-1 1H3v2h18V3h-6l-1-1zm-4.635 5l1.527 13.264c.132.99.984 1.736 1.982 1.736h8.248c.998 0 1.851-.745 1.984-1.744L18.365 7H5.365z"
                                  })
                                ]))
                              ], 8, ["onClick"])
                            ])
                          ]);
                        }), 128))
                      ])
                    ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/referrals.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=referrals-D-9446l-.mjs.map

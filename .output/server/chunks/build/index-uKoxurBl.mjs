import { _ as __nuxt_component_0 } from './nuxt-layout-Bau4NBOH.mjs';
import { ref, withAsyncContext, watch, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, openBlock, withModifiers, withDirectives, vModelText, Fragment, renderList, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { CheckCircleIcon } from '@heroicons/vue/24/outline';
import { u as useContact } from './useContact-DnieksL-.mjs';
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
  async setup(__props) {
    let __temp, __restore;
    const {
      contactInfo,
      isLoading,
      fetchContactInfo,
      updateContactInfo
    } = useContact();
    const form = ref({
      email: "",
      phone: "",
      address: {
        street: "",
        city: "",
        state: "",
        zipCode: "",
        country: ""
      },
      socialLinks: {
        facebook: "",
        twitter: "",
        linkedin: "",
        instagram: "",
        tiktok: "",
        telegram: ""
      },
      introVideo: "",
      podcastVideo: "",
      calendarly: "",
      stats: {
        studentsEmpowered: 0,
        gradeImprovement: 0,
        tutorialHours: 0
      }
    });
    ref(null);
    const showSuccessToast = ref(false);
    [__temp, __restore] = withAsyncContext(() => fetchContactInfo()), await __temp, __restore();
    watch(
      contactInfo,
      (newContactInfo) => {
        if (newContactInfo) {
          form.value = { ...form.value, ...newContactInfo };
        }
      },
      { immediate: true }
    );
    const getSocialIcon = (platform) => {
      const icons = {
        facebook: "fab fa-facebook",
        twitter: "fab fa-twitter",
        linkedin: "fab fa-linkedin",
        instagram: "fab fa-instagram",
        tiktok: "fab fa-tiktok",
        telegram: "fab fa-telegram"
      };
      return icons[platform];
    };
    const handleSubmit = async () => {
      try {
        await updateContactInfo(form.value);
        showSuccessToast.value = true;
        setTimeout(() => {
          showSuccessToast.value = false;
        }, 3e3);
      } catch (e) {
        console.error("Failed to save changes:", e);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "admin" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="min-h-screen bg-gray-50 p-8"${_scopeId}><div class="max-w-7xl mx-auto"${_scopeId}><div class="flex justify-between items-center mb-8"${_scopeId}><h1 class="text-3xl font-bold text-gray-900"${_scopeId}>Contact Information</h1></div>`);
            if (unref(isLoading)) {
              _push2(`<div class="text-center py-12"${_scopeId}><div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#92A75A] mx-auto"${_scopeId}></div></div>`);
            } else {
              _push2(`<form class="space-y-8"${_scopeId}><div class="bg-white rounded-lg shadow-sm p-6"${_scopeId}><h2 class="text-lg font-medium text-gray-900 mb-4"${_scopeId}> Basic Information </h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2"${_scopeId}>Email</label><input${ssrRenderAttr("value", form.value.email)} type="email" class="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-[#92A75A] focus:border-[#92A75A]" required${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2"${_scopeId}>Phone</label><input${ssrRenderAttr("value", form.value.phone)} type="tel" class="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-[#92A75A] focus:border-[#92A75A]" required${_scopeId}></div><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2"${_scopeId}>Scheduler link</label><input${ssrRenderAttr("value", form.value.calendarly)} type="tel" class="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-[#92A75A] focus:border-[#92A75A]" required${_scopeId}></div></div></div><div class="bg-white rounded-lg shadow-sm p-6"${_scopeId}><h2 class="text-lg font-medium text-gray-900 mb-4"${_scopeId}> Social Media Links </h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6"${_scopeId}><!--[-->`);
              ssrRenderList(form.value.socialLinks, (_2, platform) => {
                _push2(`<div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2 capitalize"${_scopeId}>${ssrInterpolate(platform)}</label><div class="flex"${_scopeId}><span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-200 bg-gray-50 text-gray-500"${_scopeId}><i class="${ssrRenderClass(getSocialIcon(platform))}"${_scopeId}></i></span><input${ssrRenderAttr("value", form.value.socialLinks[platform])} type="url" class="flex-1 p-2.5 border border-gray-200 rounded-r-lg focus:ring-[#92A75A] focus:border-[#92A75A]"${_scopeId}></div></div>`);
              });
              _push2(`<!--]--></div></div><div class="bg-white rounded-lg shadow-sm p-6"${_scopeId}><h2 class="text-lg font-medium text-gray-900 mb-4"${_scopeId}> Additional Information </h2><div class="space-y-6"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2"${_scopeId}>Introduction Video URL</label><input${ssrRenderAttr("value", form.value.introVideo)} type="text" class="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-[#92A75A] focus:border-[#92A75A]"${_scopeId}>`);
              if (form.value.introVideo) {
                _push2(`<div class="mt-4"${_scopeId}><div class="p-4"${_scopeId}><iframe class="w-full aspect-video"${ssrRenderAttr("src", form.value.introVideo)} title="Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen${_scopeId}></iframe></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div><div class="space-y-6"${_scopeId}><div${_scopeId}><label class="block text-sm font-medium text-gray-700 mb-2"${_scopeId}>Podcast Video URL</label><input${ssrRenderAttr("value", form.value.podcastVideo)} type="text" class="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-[#92A75A] focus:border-[#92A75A]"${_scopeId}>`);
              if (form.value.podcastVideo) {
                _push2(`<div class="mt-4"${_scopeId}><div class="p-4"${_scopeId}><iframe class="w-full aspect-video"${ssrRenderAttr("src", form.value.podcastVideo)} title="Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen${_scopeId}></iframe></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div></div><div class="flex justify-end"${_scopeId}><button type="submit" class="bg-[#92A75A] text-white px-6 py-2.5 rounded-lg hover:bg-[#7a8c4c] transition-colors"${ssrIncludeBooleanAttr(unref(isLoading) || _ctx.uploading) ? " disabled" : ""}${_scopeId}>`);
              if (unref(isLoading) || _ctx.uploading) {
                _push2(`<span${_scopeId}>Saving...</span>`);
              } else {
                _push2(`<span${_scopeId}>Save Changes</span>`);
              }
              _push2(`</button></div></form>`);
            }
            _push2(`</div>`);
            if (showSuccessToast.value) {
              _push2(`<div class="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(CheckCircleIcon), { class: "w-5 h-5 mr-2" }, null, _parent2, _scopeId));
              _push2(` Changes saved successfully </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "min-h-screen bg-gray-50 p-8" }, [
                createVNode("div", { class: "max-w-7xl mx-auto" }, [
                  createVNode("div", { class: "flex justify-between items-center mb-8" }, [
                    createVNode("h1", { class: "text-3xl font-bold text-gray-900" }, "Contact Information")
                  ]),
                  unref(isLoading) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "text-center py-12"
                  }, [
                    createVNode("div", { class: "animate-spin rounded-full h-12 w-12 border-b-2 border-[#92A75A] mx-auto" })
                  ])) : (openBlock(), createBlock("form", {
                    key: 1,
                    onSubmit: withModifiers(handleSubmit, ["prevent"]),
                    class: "space-y-8"
                  }, [
                    createVNode("div", { class: "bg-white rounded-lg shadow-sm p-6" }, [
                      createVNode("h2", { class: "text-lg font-medium text-gray-900 mb-4" }, " Basic Information "),
                      createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Email"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => form.value.email = $event,
                            type: "email",
                            class: "w-full p-2.5 border border-gray-200 rounded-lg focus:ring-[#92A75A] focus:border-[#92A75A]",
                            required: ""
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, form.value.email]
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Phone"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => form.value.phone = $event,
                            type: "tel",
                            class: "w-full p-2.5 border border-gray-200 rounded-lg focus:ring-[#92A75A] focus:border-[#92A75A]",
                            required: ""
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, form.value.phone]
                          ])
                        ]),
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Scheduler link"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => form.value.calendarly = $event,
                            type: "tel",
                            class: "w-full p-2.5 border border-gray-200 rounded-lg focus:ring-[#92A75A] focus:border-[#92A75A]",
                            required: ""
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, form.value.calendarly]
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "bg-white rounded-lg shadow-sm p-6" }, [
                      createVNode("h2", { class: "text-lg font-medium text-gray-900 mb-4" }, " Social Media Links "),
                      createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-6" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(form.value.socialLinks, (_2, platform) => {
                          return openBlock(), createBlock("div", { key: platform }, [
                            createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2 capitalize" }, toDisplayString(platform), 1),
                            createVNode("div", { class: "flex" }, [
                              createVNode("span", { class: "inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-200 bg-gray-50 text-gray-500" }, [
                                createVNode("i", {
                                  class: getSocialIcon(platform)
                                }, null, 2)
                              ]),
                              withDirectives(createVNode("input", {
                                "onUpdate:modelValue": ($event) => form.value.socialLinks[platform] = $event,
                                type: "url",
                                class: "flex-1 p-2.5 border border-gray-200 rounded-r-lg focus:ring-[#92A75A] focus:border-[#92A75A]"
                              }, null, 8, ["onUpdate:modelValue"]), [
                                [vModelText, form.value.socialLinks[platform]]
                              ])
                            ])
                          ]);
                        }), 128))
                      ])
                    ]),
                    createVNode("div", { class: "bg-white rounded-lg shadow-sm p-6" }, [
                      createVNode("h2", { class: "text-lg font-medium text-gray-900 mb-4" }, " Additional Information "),
                      createVNode("div", { class: "space-y-6" }, [
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Introduction Video URL"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => form.value.introVideo = $event,
                            type: "text",
                            class: "w-full p-2.5 border border-gray-200 rounded-lg focus:ring-[#92A75A] focus:border-[#92A75A]"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, form.value.introVideo]
                          ]),
                          form.value.introVideo ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "mt-4"
                          }, [
                            createVNode("div", { class: "p-4" }, [
                              createVNode("iframe", {
                                class: "w-full aspect-video",
                                src: form.value.introVideo,
                                title: "Video",
                                frameborder: "0",
                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                allowfullscreen: ""
                              }, null, 8, ["src"])
                            ])
                          ])) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "space-y-6" }, [
                        createVNode("div", null, [
                          createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-2" }, "Podcast Video URL"),
                          withDirectives(createVNode("input", {
                            "onUpdate:modelValue": ($event) => form.value.podcastVideo = $event,
                            type: "text",
                            class: "w-full p-2.5 border border-gray-200 rounded-lg focus:ring-[#92A75A] focus:border-[#92A75A]"
                          }, null, 8, ["onUpdate:modelValue"]), [
                            [vModelText, form.value.podcastVideo]
                          ]),
                          form.value.podcastVideo ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "mt-4"
                          }, [
                            createVNode("div", { class: "p-4" }, [
                              createVNode("iframe", {
                                class: "w-full aspect-video",
                                src: form.value.podcastVideo,
                                title: "Video",
                                frameborder: "0",
                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                allowfullscreen: ""
                              }, null, 8, ["src"])
                            ])
                          ])) : createCommentVNode("", true)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "flex justify-end" }, [
                      createVNode("button", {
                        type: "submit",
                        class: "bg-[#92A75A] text-white px-6 py-2.5 rounded-lg hover:bg-[#7a8c4c] transition-colors",
                        disabled: unref(isLoading) || _ctx.uploading
                      }, [
                        unref(isLoading) || _ctx.uploading ? (openBlock(), createBlock("span", { key: 0 }, "Saving...")) : (openBlock(), createBlock("span", { key: 1 }, "Save Changes"))
                      ], 8, ["disabled"])
                    ])
                  ], 32))
                ]),
                showSuccessToast.value ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center"
                }, [
                  createVNode(unref(CheckCircleIcon), { class: "w-5 h-5 mr-2" }),
                  createTextVNode(" Changes saved successfully ")
                ])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/contact/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-uKoxurBl.mjs.map

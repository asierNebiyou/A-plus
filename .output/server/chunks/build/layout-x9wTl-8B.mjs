import { _ as __nuxt_component_0$1 } from './nuxt-link-gQID-DSZ.mjs';
import { defineComponent, ref, withAsyncContext, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo-light-BUsO-7S1.mjs';
import { u as useContact } from './useContact-DnieksL-.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { f as useRoute, c as useRuntimeConfig } from './server.mjs';
import { u as useHead } from './index-CrXeyONu.mjs';
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

const _sfc_main$3 = {
  __name: "HeaderInfo",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const info = ref({});
    const { contactInfo, fetchContactInfo } = useContact();
    [__temp, __restore] = withAsyncContext(() => fetchContactInfo()), await __temp, __restore();
    info.value = contactInfo.value;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#92A75A] text-white py-0 px-4" }, _attrs))}><div class="container text-sm md:text-base mx-auto flex justify-center gap-5 items-center"><a${ssrRenderAttr("href", `mailto:${info.value.email}`)} class="flex items-center"><svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg> ${ssrInterpolate(info.value.email)}</a><a${ssrRenderAttr("href", `tel:${info.value.phone}`)} class="flex items-center"><svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg> ${ssrInterpolate(info.value.phone)}</a></div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeaderInfo.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NavBar",
  __ssrInlineRender: true,
  setup(__props) {
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`<nav class="container mx-auto py-4 px-4" data-v-9d7cc27e><div class="flex justify-between items-center" data-v-9d7cc27e><a href="/" data-v-9d7cc27e><img${ssrRenderAttr("src", _imports_0)} alt="Aplus Tutoring" class="h-12" data-v-9d7cc27e></a><button class="text-gray-700 lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-300" data-v-9d7cc27e>`);
      if (!isOpen.value) {
        _push(`<span class="material-icons" data-v-9d7cc27e><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,256,256" data-v-9d7cc27e><defs data-v-9d7cc27e><linearGradient x1="12.066" y1="0.066" x2="34.891" y2="22.891" gradientUnits="userSpaceOnUse" id="color-1_Rdp3AydLFY2A_gr1" data-v-9d7cc27e><stop offset="0.237" stop-color="#92a75a" data-v-9d7cc27e></stop><stop offset="0.85" stop-color="#92a75a" data-v-9d7cc27e></stop></linearGradient><linearGradient x1="12.066" y1="12.066" x2="34.891" y2="34.891" gradientUnits="userSpaceOnUse" id="color-2_Rdp3AydLFY2A_gr2" data-v-9d7cc27e><stop offset="0.237" stop-color="#92a75a" data-v-9d7cc27e></stop><stop offset="0.85" stop-color="#92a75a" data-v-9d7cc27e></stop></linearGradient><linearGradient x1="12.066" y1="24.066" x2="34.891" y2="46.891" gradientUnits="userSpaceOnUse" id="color-3_Rdp3AydLFY2A_gr3" data-v-9d7cc27e><stop offset="0.237" stop-color="#92a75a" data-v-9d7cc27e></stop><stop offset="0.85" stop-color="#92a75a" data-v-9d7cc27e></stop></linearGradient></defs><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="${ssrRenderStyle({ "mix-blend-mode": "normal" })}" data-v-9d7cc27e><g transform="scale(5.33333,5.33333)" data-v-9d7cc27e><path d="M43,15h-38c-1.1,0 -2,-0.9 -2,-2v-2c0,-1.1 0.9,-2 2,-2h38c1.1,0 2,0.9 2,2v2c0,1.1 -0.9,2 -2,2z" fill="url(#color-1_Rdp3AydLFY2A_gr1)" data-v-9d7cc27e></path><path d="M43,27h-38c-1.1,0 -2,-0.9 -2,-2v-2c0,-1.1 0.9,-2 2,-2h38c1.1,0 2,0.9 2,2v2c0,1.1 -0.9,2 -2,2z" fill="url(#color-2_Rdp3AydLFY2A_gr2)" data-v-9d7cc27e></path><path d="M43,39h-38c-1.1,0 -2,-0.9 -2,-2v-2c0,-1.1 0.9,-2 2,-2h38c1.1,0 2,0.9 2,2v2c0,1.1 -0.9,2 -2,2z" fill="url(#color-3_Rdp3AydLFY2A_gr3)" data-v-9d7cc27e></path></g></g></svg></span>`);
      } else {
        _push(`<span class="material-icons" data-v-9d7cc27e><svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-9d7cc27e><g id="SVGRepo_bgCarrier" stroke-width="0" data-v-9d7cc27e></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.24000000000000005" data-v-9d7cc27e></g><g id="SVGRepo_iconCarrier" data-v-9d7cc27e><path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#92a75a" data-v-9d7cc27e></path></g></svg></span>`);
      }
      _push(`</button><div class="hidden lg:flex space-x-8" data-v-9d7cc27e>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "text-gray-700 hover:text-[#92A75A]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Home `);
          } else {
            return [
              createTextVNode(" Home ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/about",
        class: "text-gray-700 hover:text-[#92A75A]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` About Us `);
          } else {
            return [
              createTextVNode(" About Us ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/pricing",
        class: "text-gray-700 hover:text-[#92A75A]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Pricing `);
          } else {
            return [
              createTextVNode(" Pricing ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "text-gray-700 hover:text-[#92A75A]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact Us `);
          } else {
            return [
              createTextVNode(" Contact Us ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/free-classes",
        class: "text-gray-700 hover:text-[#92A75A]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Classes `);
          } else {
            return [
              createTextVNode(" Classes ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (isOpen.value) {
        _push(`<div class="flex flex-col mt-4 space-y-4 lg:hidden bg-white p-4 rounded" data-v-9d7cc27e>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "text-gray-700 hover:text-[#92A75A]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Home `);
            } else {
              return [
                createTextVNode(" Home ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/about",
          class: "text-gray-700 hover:text-[#92A75A]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` About Us `);
            } else {
              return [
                createTextVNode(" About Us ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/pricing",
          class: "text-gray-700 hover:text-[#92A75A]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Pricing `);
            } else {
              return [
                createTextVNode(" Pricing ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/contact",
          class: "text-gray-700 hover:text-[#92A75A]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Contact Us `);
            } else {
              return [
                createTextVNode(" Contact Us ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/free-classes",
          class: "text-gray-700 hover:text-[#92A75A]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Classes `);
            } else {
              return [
                createTextVNode(" Classes ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</nav><!--]-->`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavBar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-9d7cc27e"]]);
const _sfc_main$1 = {
  __name: "Footer",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { contactInfo, fetchContactInfo } = useContact();
    const socialsData = ref({
      socialLinks: {}
    });
    [__temp, __restore] = withAsyncContext(() => fetchContactInfo()), await __temp, __restore();
    socialsData.value = contactInfo.value;
    const getSocialIcon = (platform) => {
      const icons = {
        facebook: "fab fa-facebook text-[#1E2755]",
        twitter: "fab fa-twitter text-[#1E2755]",
        linkedin: "fab fa-linkedin text-[#1E2755]",
        instagram: "fab fa-instagram text-[#1E2755]",
        telegram: "fab fa-telegram  text-[#1E2755]",
        tiktok: "fab fa-tiktok text-[#1E2755]"
      };
      return icons[platform];
    };
    const links = ref([
      { name: "About Us", url: "/about" },
      { name: "Privacy policy", url: "/privacy-policy" },
      { name: "Terms of Service", url: "/terms-of-service" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-[#2E3E5C] py-8 px-4 md:px-8 mt-5" }, _attrs))}><div class="max-w-6xl mx-auto"><div class="flex flex-col md:flex-row justify-between items-center mb-8"><div class="mb-6 md:mb-0"><img${ssrRenderAttr("src", _imports_0)} alt="A plus tutoring" class="h-12"></div><div class="flex"><!--[-->`);
      ssrRenderList(socialsData.value.socialLinks, (_, platform) => {
        _push(`<div>`);
        if (socialsData.value.socialLinks[platform]) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: platform,
            to: socialsData.value.socialLinks[platform],
            "aria-label": platform,
            class: "bg-[#92A75A] mx-4 w-10 h-10 rounded-full bg-sage-500 flex items-center justify-center hover:bg-sage-600 transition-colors"
          }, {
            default: withCtx((_2, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<i class="${ssrRenderClass(getSocialIcon(platform))}"${_scopeId}></i>`);
              } else {
                return [
                  createVNode("i", {
                    class: getSocialIcon(platform)
                  }, null, 2)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div><hr class="bg-[#EAEEF3] opacity-15 my-5"><div class="flex flex-col md:flex-row justify-between items-center mb-8"><div class="text-white text-xl font-semibold mb-4 md:mb-0">A plus</div><nav class="flex flex-wrap justify-center gap-6"><!--[-->`);
      ssrRenderList(links.value, (link, index) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: index,
          to: link.url,
          class: "text-white hover:text-sage-500 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "mt-4 md:mt-0 px-6 py-2 bg-sage-500 text-white rounded-full hover:bg-sage-600 transition-colors bg-[#92A75A]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Contact Us `);
          } else {
            return [
              createTextVNode(" Contact Us ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="text-center text-white text-sm"><p>\xA9 power 2025 - All Rights Reserved</p></div></div></footer>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "layout",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const config = useRuntimeConfig();
    const siteUrl = config.public.BASE_URL;
    const fullUrl = `${siteUrl}${route.path}`;
    useHead({
      title: "Best Online Tutoring | A Plus Tutoring",
      meta: [
        { property: "og:title", content: "Best Online Tutoring | A Plus Tutoring" },
        {
          property: "og:description",
          content: "Learn from top tutors online with A Plus Tutoring. Affordable, expert-led sessions tailored to your needs."
        },
        { property: "og:image", content: "/public/logo-dark.png" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: fullUrl },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Best Online Tutoring | A Plus Tutoring"
        },
        {
          name: "twitter:description",
          content: "Learn from top tutors online with A Plus Tutoring. Affordable, expert-led sessions tailored to your needs."
        },
        { name: "twitter:image", content: "/public/logo-dark.png" },
        { name: "twitter:url", content: fullUrl },
        { rel: "canonical", href: fullUrl }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavBar = __nuxt_component_0;
      const _component_Footer = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=layout-x9wTl-8B.mjs.map

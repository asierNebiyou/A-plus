import { _ as __nuxt_component_0 } from './nuxt-link-gQID-DSZ.mjs';
import { ref, computed, mergeProps, withCtx, createVNode, resolveDynamicComponent, createBlock, createTextVNode, openBlock, toDisplayString, unref, withModifiers, Transition, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrRenderVNode, ssrInterpolate, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _imports_0 } from './logo-light-BUsO-7S1.mjs';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import { CurrencyDollarIcon, UsersIcon, CursorArrowRaysIcon, CogIcon, AtSymbolIcon, UserGroupIcon, InformationCircleIcon, ChevronDownIcon } from '@heroicons/vue/24/outline';
import { u as useAuth } from './useAuth-C_xfvkwX.mjs';
import { f as useRoute } from './server.mjs';
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
  __name: "admin",
  __ssrInlineRender: true,
  setup(__props) {
    const { logout } = useAuth();
    const menuItems = [
      { name: "Pricing Plans", path: "/admin/pricing", icon: CurrencyDollarIcon },
      { name: "Contact", path: "/admin/contact", icon: UsersIcon },
      { name: "Referrals", path: "/admin/referrals", icon: CursorArrowRaysIcon },
      { name: "Blog", path: "/admin", icon: CogIcon },
      {
        name: "Submissions",
        path: "/admin/consultation",
        icon: AtSymbolIcon
      },
      { name: "Testimonials", path: "/admin/testimonials", icon: UserGroupIcon },
      { name: "Faq", path: "/admin/faq", icon: InformationCircleIcon }
    ];
    const route = useRoute();
    ref(true);
    const currentPage = computed(() => {
      const currentMenuItem = menuItems.find((item) => isCurrentRoute(item.path));
      return currentMenuItem ? currentMenuItem.name : "Dashboard";
    });
    const isCurrentRoute = (path) => {
      return route.path === path;
    };
    const log_out = () => {
      logout();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 flex" }, _attrs))}><div class="fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200"><div class="flex items-center h-16 px-6 border-b border-gray-200"><a href="/"><img${ssrRenderAttr("src", _imports_0)} alt="A plus Tutoring" class="h-12 m-auto"></a></div><nav class="p-4 space-y-1"><!--[-->`);
      ssrRenderList(menuItems, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: item.path,
          to: item.path,
          class: ["flex items-center px-4 py-3 text-[#1E2755] rounded-lg hover:bg-gray-100", {
            "bg-[#92A75A] text-white hover:bg-[#92A75A]": isCurrentRoute(
              item.path
            )
          }]
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(item.icon), { class: "w-5 h-5 mr-3" }, null), _parent2, _scopeId);
              _push2(` ${ssrInterpolate(item.name)}`);
            } else {
              return [
                (openBlock(), createBlock(resolveDynamicComponent(item.icon), { class: "w-5 h-5 mr-3" })),
                createTextVNode(" " + toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav></div><div class="flex-1 ml-64"><header class="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6"><div class="flex items-center space-x-4"><button class="lg:hidden">menu</button><h2 class="text-[#1E2755] font-medium">${ssrInterpolate(currentPage.value)}</h2></div><div class="relative">`);
      _push(ssrRenderComponent(unref(Menu), {
        as: "div",
        class: "relative inline-block text-left"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(MenuButton), { class: "flex items-center space-x-2 text-[#1E2755]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span${_scopeId2}>User</span>`);
                  _push3(ssrRenderComponent(unref(ChevronDownIcon), { class: "w-4 h-4" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("span", null, "User"),
                    createVNode(unref(ChevronDownIcon), { class: "w-4 h-4" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(``);
            _push2(ssrRenderComponent(unref(MenuItems), { class: "absolute right-0 mt-2 w-48 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="py-1"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(MenuItem), null, {
                    default: withCtx(({ active }, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<a class="${ssrRenderClass([
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-red-600"
                        ])}"${_scopeId3}> Logout </a>`);
                      } else {
                        return [
                          createVNode("a", {
                            onClick: withModifiers(log_out, ["prevent"]),
                            class: [
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-red-600"
                            ]
                          }, " Logout ", 2)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "py-1" }, [
                      createVNode(unref(MenuItem), null, {
                        default: withCtx(({ active }) => [
                          createVNode("a", {
                            onClick: withModifiers(log_out, ["prevent"]),
                            class: [
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-red-600"
                            ]
                          }, " Logout ", 2)
                        ]),
                        _: 1
                      })
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(MenuButton), { class: "flex items-center space-x-2 text-[#1E2755]" }, {
                default: withCtx(() => [
                  createVNode("span", null, "User"),
                  createVNode(unref(ChevronDownIcon), { class: "w-4 h-4" })
                ]),
                _: 1
              }),
              createVNode(Transition, {
                "enter-active-class": "transition duration-100 ease-out",
                "enter-from-class": "transform scale-95 opacity-0",
                "enter-to-class": "transform scale-100 opacity-100",
                "leave-active-class": "transition duration-75 ease-in",
                "leave-from-class": "transform scale-100 opacity-100",
                "leave-to-class": "transform scale-95 opacity-0"
              }, {
                default: withCtx(() => [
                  createVNode(unref(MenuItems), { class: "absolute right-0 mt-2 w-48 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "py-1" }, [
                        createVNode(unref(MenuItem), null, {
                          default: withCtx(({ active }) => [
                            createVNode("a", {
                              onClick: withModifiers(log_out, ["prevent"]),
                              class: [
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-red-600"
                              ]
                            }, " Logout ", 2)
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></header><main class="p-6">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/admin.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=admin-eFYrhe7F.mjs.map

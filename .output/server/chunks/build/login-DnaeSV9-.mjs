import { _ as __nuxt_component_0 } from './nuxt-layout-Bau4NBOH.mjs';
import { ref, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, openBlock, toDisplayString, withModifiers, withDirectives, vModelText, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { u as useAuth } from './useAuth-C_xfvkwX.mjs';
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
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const { login, error } = useAuth();
    const username = ref("");
    const password = ref("");
    const isLoading = ref(false);
    const handleSubmit = async () => {
      isLoading.value = true;
      await login(username.value, password.value);
      isLoading.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "layout" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-center items-center min-h-screen bg-gray-100"${_scopeId}><div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md"${_scopeId}><h2 class="text-2xl font-semibold text-center mb-6"${_scopeId}>Admin Login</h2>`);
            if (unref(error)) {
              _push2(`<div class="text-red-500 text-sm mb-4 text-center"${_scopeId}>${ssrInterpolate(unref(error))}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form class="space-y-4"${_scopeId}><div${_scopeId}><label class="block text-gray-700 text-sm font-medium mb-2"${_scopeId}>Username</label><input${ssrRenderAttr("value", username.value)} type="text" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" required${_scopeId}></div><div${_scopeId}><label class="block text-gray-700 text-sm font-medium mb-2"${_scopeId}>Password</label><input${ssrRenderAttr("value", password.value)} type="password" class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" required${_scopeId}></div><button type="submit" class="w-full bg-[#92A75A] text-white p-3 rounded-lg hover:bg-blue-600 transition disabled:opacity-50"${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""}${_scopeId}>${ssrInterpolate(isLoading.value ? "Logging in..." : "Login")}</button></form></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-center items-center min-h-screen bg-gray-100" }, [
                createVNode("div", { class: "bg-white p-8 rounded-lg shadow-md w-full max-w-md" }, [
                  createVNode("h2", { class: "text-2xl font-semibold text-center mb-6" }, "Admin Login"),
                  unref(error) ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "text-red-500 text-sm mb-4 text-center"
                  }, toDisplayString(unref(error)), 1)) : createCommentVNode("", true),
                  createVNode("form", {
                    onSubmit: withModifiers(handleSubmit, ["prevent"]),
                    class: "space-y-4"
                  }, [
                    createVNode("div", null, [
                      createVNode("label", { class: "block text-gray-700 text-sm font-medium mb-2" }, "Username"),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => username.value = $event,
                        type: "text",
                        class: "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500",
                        required: ""
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, username.value]
                      ])
                    ]),
                    createVNode("div", null, [
                      createVNode("label", { class: "block text-gray-700 text-sm font-medium mb-2" }, "Password"),
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => password.value = $event,
                        type: "password",
                        class: "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500",
                        required: ""
                      }, null, 8, ["onUpdate:modelValue"]), [
                        [vModelText, password.value]
                      ])
                    ]),
                    createVNode("button", {
                      type: "submit",
                      class: "w-full bg-[#92A75A] text-white p-3 rounded-lg hover:bg-blue-600 transition disabled:opacity-50",
                      disabled: isLoading.value
                    }, toDisplayString(isLoading.value ? "Logging in..." : "Login"), 9, ["disabled"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-DnaeSV9-.mjs.map

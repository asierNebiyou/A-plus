import { _ as __nuxt_component_0 } from './nuxt-layout-Bau4NBOH.mjs';
import { ref, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, withDirectives, vModelText, openBlock, Fragment, renderList, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
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

const API_BASE_URL = "/api/auth/admin";
function useAdmin() {
  const admins = ref([]);
  const loadAdmins = async () => {
    try {
      admins.value = await $fetch(API_BASE_URL);
    } catch (error) {
      console.error("Error loading admins:", error);
    }
  };
  const registerAdmin = async (username, password) => {
    try {
      const response = await $fetch(API_BASE_URL, {
        method: "POST",
        body: { username, password }
      });
      admins.value.push(response);
      return response;
    } catch (error) {
      console.error("Error registering admin:", error);
    }
  };
  const updateAdmin = async (id, updatedData) => {
    try {
      const response = await $fetch(`${API_BASE_URL}/${id}`, {
        method: "PUT",
        body: updatedData
      });
      const index = admins.value.findIndex((admin) => admin.id === id);
      if (index !== -1) admins.value[index] = response;
      return response;
    } catch (error) {
      console.error("Error updating admin:", error);
    }
  };
  const deleteAdmin = async (id) => {
    try {
      await $fetch(`${API_BASE_URL}/${id}`, { method: "DELETE" });
      admins.value = admins.value.filter((admin) => admin.id !== id);
    } catch (error) {
      console.error("Error deleting admin:", error);
    }
  };
  return { admins, loadAdmins, registerAdmin, updateAdmin, deleteAdmin };
}
const _sfc_main = {
  __name: "users",
  __ssrInlineRender: true,
  setup(__props) {
    const { admins, registerAdmin, updateAdmin, deleteAdmin } = useAdmin();
    const newUsername = ref("");
    const newPassword = ref("");
    const editUsername = ref("");
    const editPassword = ref("");
    const editingAdminId = ref(null);
    const showEditModal = ref(false);
    const register = async () => {
      await registerAdmin(newUsername.value, newPassword.value);
      newUsername.value = "";
      newPassword.value = "";
    };
    const startEdit = (admin) => {
      editingAdminId.value = admin._id;
      editUsername.value = admin.username;
      editPassword.value = "";
      showEditModal.value = true;
    };
    const update = async () => {
      await updateAdmin(
        editingAdminId.value,
        editUsername.value,
        editPassword.value
      );
      editingAdminId.value = null;
      showEditModal.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "admin" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md mt-6"${_scopeId}><h2 class="text-3xl font-semibold text-center mb-6 text-gray-800"${_scopeId}> Admin Management </h2><div class="flex gap-3 mb-6"${_scopeId}><input${ssrRenderAttr("value", newUsername.value)} class="border border-gray-300 p-3 rounded-md flex-grow" placeholder="New Username"${_scopeId}><input${ssrRenderAttr("value", newPassword.value)} type="password" class="border border-gray-300 p-3 rounded-md flex-grow" placeholder="New Password"${_scopeId}><button class="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"${_scopeId}> Register </button></div><div class="overflow-x-auto bg-gray-50 rounded-lg shadow"${_scopeId}><table class="min-w-full"${_scopeId}><thead${_scopeId}><tr class="bg-gray-200 text-gray-700"${_scopeId}><th class="py-3 px-4 text-left"${_scopeId}>ID</th><th class="py-3 px-4 text-left"${_scopeId}>Username</th><th class="py-3 px-4 text-center"${_scopeId}>Actions</th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList(unref(admins), (admin) => {
              _push2(`<tr class="border-t"${_scopeId}><td class="py-3 px-4"${_scopeId}>${ssrInterpolate(admin._id)}</td><td class="py-3 px-4"${_scopeId}>${ssrInterpolate(admin.username)}</td><td class="py-3 px-4 flex justify-center gap-2"${_scopeId}><button class="p-2 rounded-md bg-yellow-500 hover:bg-yellow-600 transition"${_scopeId}><svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19l-4 1 1-4L16.5 7.5a2.12 2.12 0 113 3L11 19z"${_scopeId}></path></svg></button><button class="p-2 rounded-md bg-red-500 hover:bg-red-600 transition"${_scopeId}><svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"${_scopeId}></path></svg></button></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div>`);
            if (showEditModal.value) {
              _push2(`<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"${_scopeId}><div class="bg-white p-6 rounded-lg shadow-lg w-96"${_scopeId}><h3 class="text-xl font-semibold mb-4"${_scopeId}>Edit Admin</h3><input${ssrRenderAttr("value", editUsername.value)} class="border border-gray-300 p-3 rounded-md w-full mb-2" placeholder="Username"${_scopeId}><input${ssrRenderAttr("value", editPassword.value)} type="password" class="border border-gray-300 p-3 rounded-md w-full mb-4" placeholder="New Password (optional)"${_scopeId}><div class="flex justify-end gap-2"${_scopeId}><button class="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"${_scopeId}> Update </button><button class="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400 transition"${_scopeId}> Cancel </button></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md mt-6" }, [
                createVNode("h2", { class: "text-3xl font-semibold text-center mb-6 text-gray-800" }, " Admin Management "),
                createVNode("div", { class: "flex gap-3 mb-6" }, [
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => newUsername.value = $event,
                    class: "border border-gray-300 p-3 rounded-md flex-grow",
                    placeholder: "New Username"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, newUsername.value]
                  ]),
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => newPassword.value = $event,
                    type: "password",
                    class: "border border-gray-300 p-3 rounded-md flex-grow",
                    placeholder: "New Password"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, newPassword.value]
                  ]),
                  createVNode("button", {
                    onClick: register,
                    class: "bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                  }, " Register ")
                ]),
                createVNode("div", { class: "overflow-x-auto bg-gray-50 rounded-lg shadow" }, [
                  createVNode("table", { class: "min-w-full" }, [
                    createVNode("thead", null, [
                      createVNode("tr", { class: "bg-gray-200 text-gray-700" }, [
                        createVNode("th", { class: "py-3 px-4 text-left" }, "ID"),
                        createVNode("th", { class: "py-3 px-4 text-left" }, "Username"),
                        createVNode("th", { class: "py-3 px-4 text-center" }, "Actions")
                      ])
                    ]),
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(admins), (admin) => {
                        return openBlock(), createBlock("tr", {
                          key: admin._id,
                          class: "border-t"
                        }, [
                          createVNode("td", { class: "py-3 px-4" }, toDisplayString(admin._id), 1),
                          createVNode("td", { class: "py-3 px-4" }, toDisplayString(admin.username), 1),
                          createVNode("td", { class: "py-3 px-4 flex justify-center gap-2" }, [
                            createVNode("button", {
                              onClick: ($event) => startEdit(admin),
                              class: "p-2 rounded-md bg-yellow-500 hover:bg-yellow-600 transition"
                            }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-5 h-5 text-white",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M11 19l-4 1 1-4L16.5 7.5a2.12 2.12 0 113 3L11 19z"
                                })
                              ]))
                            ], 8, ["onClick"]),
                            createVNode("button", {
                              onClick: ($event) => unref(deleteAdmin)(admin._id),
                              class: "p-2 rounded-md bg-red-500 hover:bg-red-600 transition"
                            }, [
                              (openBlock(), createBlock("svg", {
                                class: "w-5 h-5 text-white",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                xmlns: "http://www.w3.org/2000/svg"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  "stroke-width": "2",
                                  d: "M6 18L18 6M6 6l12 12"
                                })
                              ]))
                            ], 8, ["onClick"])
                          ])
                        ]);
                      }), 128))
                    ])
                  ])
                ]),
                showEditModal.value ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                }, [
                  createVNode("div", { class: "bg-white p-6 rounded-lg shadow-lg w-96" }, [
                    createVNode("h3", { class: "text-xl font-semibold mb-4" }, "Edit Admin"),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => editUsername.value = $event,
                      class: "border border-gray-300 p-3 rounded-md w-full mb-2",
                      placeholder: "Username"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, editUsername.value]
                    ]),
                    withDirectives(createVNode("input", {
                      "onUpdate:modelValue": ($event) => editPassword.value = $event,
                      type: "password",
                      class: "border border-gray-300 p-3 rounded-md w-full mb-4",
                      placeholder: "New Password (optional)"
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelText, editPassword.value]
                    ]),
                    createVNode("div", { class: "flex justify-end gap-2" }, [
                      createVNode("button", {
                        onClick: update,
                        class: "bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                      }, " Update "),
                      createVNode("button", {
                        onClick: ($event) => showEditModal.value = false,
                        class: "bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400 transition"
                      }, " Cancel ", 8, ["onClick"])
                    ])
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/internalusers/users.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=users-B4Z4joKf.mjs.map

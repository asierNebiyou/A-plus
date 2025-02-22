import { _ as __nuxt_component_0 } from './nuxt-layout-Bau4NBOH.mjs';
import { ref, withAsyncContext, computed, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, withDirectives, vModelText, vModelSelect, openBlock, toDisplayString, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { u as useConsultation } from './useSubmittions-C77mNBA_.mjs';
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

const pageSize = 5;
const _sfc_main = {
  __name: "consultation",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { consultations, loadConsultations, updateConsultation, loading, error } = useConsultation();
    const searchQuery = ref("");
    const statusFilter = ref("");
    const currentPage = ref(1);
    [__temp, __restore] = withAsyncContext(() => loadConsultations()), await __temp, __restore();
    const filteredConsultations = computed(() => {
      return consultations.value.filter((consultation) => {
        const matchesSearch = [
          consultation.name,
          consultation.email,
          consultation.phone
        ].join(" ").toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchesStatus = statusFilter.value ? consultation.status === statusFilter.value : true;
        return matchesSearch && matchesStatus;
      });
    });
    const paginatedConsultations = computed(() => {
      const start = (currentPage.value - 1) * pageSize;
      return filteredConsultations.value.slice(start, start + pageSize);
    });
    const handleStatusChange = async (id, newStatus) => {
      await updateConsultation(id, { status: newStatus });
    };
    const totalPages = computed(
      () => Math.ceil(filteredConsultations.value.length / pageSize)
    );
    const nextPage = () => {
      if (currentPage.value < totalPages.value) currentPage.value++;
    };
    const prevPage = () => {
      if (currentPage.value > 1) currentPage.value--;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "admin" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="p-6 bg-white shadow rounded-lg"${_scopeId}><h2 class="text-2xl font-semibold mb-4"${_scopeId}>Consultation Requests</h2><div class="flex flex-col md:flex-row gap-4 mb-4 justify-between"${_scopeId}><input${ssrRenderAttr("value", searchQuery.value)} type="text" placeholder="Search by name, email, or phone" class="w-full md:w-1/2 p-2 border rounded-md"${_scopeId}><select class="w-full md:w-1/4 p-2 border rounded-md"${_scopeId}><option value=""${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "") : ssrLooseEqual(statusFilter.value, "")) ? " selected" : ""}${_scopeId}>All Statuses</option><option value="pending"${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "pending") : ssrLooseEqual(statusFilter.value, "pending")) ? " selected" : ""}${_scopeId}>Pending</option><option value="contacted"${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "contacted") : ssrLooseEqual(statusFilter.value, "contacted")) ? " selected" : ""}${_scopeId}>Contacted</option><option value="scheduled"${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "scheduled") : ssrLooseEqual(statusFilter.value, "scheduled")) ? " selected" : ""}${_scopeId}>Scheduled</option><option value="completed"${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "completed") : ssrLooseEqual(statusFilter.value, "completed")) ? " selected" : ""}${_scopeId}>Completed</option><option value="cancelled"${ssrIncludeBooleanAttr(Array.isArray(statusFilter.value) ? ssrLooseContain(statusFilter.value, "cancelled") : ssrLooseEqual(statusFilter.value, "cancelled")) ? " selected" : ""}${_scopeId}>Cancelled</option></select></div>`);
            if (unref(error)) {
              _push2(`<p class="text-red-500"${_scopeId}>${ssrInterpolate(unref(error))}</p>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(loading)) {
              _push2(`<p class="text-gray-500"${_scopeId}>Loading ...</p>`);
            } else {
              _push2(`<!---->`);
            }
            if (!unref(loading) && paginatedConsultations.value.length > 0) {
              _push2(`<div${_scopeId}><table class="w-full border-collapse border border-gray-200"${_scopeId}><thead class="bg-gray-100"${_scopeId}><tr${_scopeId}><th class="border p-2"${_scopeId}>Name</th><th class="border p-2"${_scopeId}>Email</th><th class="border p-2"${_scopeId}>Phone</th><th class="border p-2"${_scopeId}>Source</th><th class="border p-2"${_scopeId}>Status</th></tr></thead><tbody${_scopeId}><!--[-->`);
              ssrRenderList(paginatedConsultations.value, (consultation) => {
                _push2(`<tr class="hover:bg-gray-50"${_scopeId}><td class="border p-2"${_scopeId}>${ssrInterpolate(consultation.name)}</td><td class="border p-2"${_scopeId}>${ssrInterpolate(consultation.email)}</td><td class="border p-2"${_scopeId}>${ssrInterpolate(consultation.phone)}</td><td class="border p-2"${_scopeId}>${ssrInterpolate(consultation.source)}</td><td class="border p-2"${_scopeId}><select${ssrRenderAttr("value", consultation.status)} class="border rounded p-1"${_scopeId}><option value="pending"${_scopeId}>Pending</option><option value="contacted"${_scopeId}>Contacted</option><option value="scheduled"${_scopeId}>Scheduled</option><option value="completed"${_scopeId}>Completed</option><option value="cancelled"${_scopeId}>Cancelled</option></select></td></tr>`);
              });
              _push2(`<!--]--></tbody></table><div class="flex justify-between items-center mt-4"${_scopeId}><button${ssrIncludeBooleanAttr(currentPage.value === 1) ? " disabled" : ""} class="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"${_scopeId}> Previous </button><span${_scopeId}>Page ${ssrInterpolate(currentPage.value)} of ${ssrInterpolate(totalPages.value)}</span><button${ssrIncludeBooleanAttr(currentPage.value === totalPages.value) ? " disabled" : ""} class="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"${_scopeId}> Next </button></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (!unref(loading) && paginatedConsultations.value.length === 0) {
              _push2(`<p class="text-gray-500"${_scopeId}> No consultations found. </p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "p-6 bg-white shadow rounded-lg" }, [
                createVNode("h2", { class: "text-2xl font-semibold mb-4" }, "Consultation Requests"),
                createVNode("div", { class: "flex flex-col md:flex-row gap-4 mb-4 justify-between" }, [
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => searchQuery.value = $event,
                    type: "text",
                    placeholder: "Search by name, email, or phone",
                    class: "w-full md:w-1/2 p-2 border rounded-md"
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, searchQuery.value]
                  ]),
                  withDirectives(createVNode("select", {
                    "onUpdate:modelValue": ($event) => statusFilter.value = $event,
                    class: "w-full md:w-1/4 p-2 border rounded-md"
                  }, [
                    createVNode("option", { value: "" }, "All Statuses"),
                    createVNode("option", { value: "pending" }, "Pending"),
                    createVNode("option", { value: "contacted" }, "Contacted"),
                    createVNode("option", { value: "scheduled" }, "Scheduled"),
                    createVNode("option", { value: "completed" }, "Completed"),
                    createVNode("option", { value: "cancelled" }, "Cancelled")
                  ], 8, ["onUpdate:modelValue"]), [
                    [vModelSelect, statusFilter.value]
                  ])
                ]),
                unref(error) ? (openBlock(), createBlock("p", {
                  key: 0,
                  class: "text-red-500"
                }, toDisplayString(unref(error)), 1)) : createCommentVNode("", true),
                unref(loading) ? (openBlock(), createBlock("p", {
                  key: 1,
                  class: "text-gray-500"
                }, "Loading ...")) : createCommentVNode("", true),
                !unref(loading) && paginatedConsultations.value.length > 0 ? (openBlock(), createBlock("div", { key: 2 }, [
                  createVNode("table", { class: "w-full border-collapse border border-gray-200" }, [
                    createVNode("thead", { class: "bg-gray-100" }, [
                      createVNode("tr", null, [
                        createVNode("th", { class: "border p-2" }, "Name"),
                        createVNode("th", { class: "border p-2" }, "Email"),
                        createVNode("th", { class: "border p-2" }, "Phone"),
                        createVNode("th", { class: "border p-2" }, "Source"),
                        createVNode("th", { class: "border p-2" }, "Status")
                      ])
                    ]),
                    createVNode("tbody", null, [
                      (openBlock(true), createBlock(Fragment, null, renderList(paginatedConsultations.value, (consultation) => {
                        return openBlock(), createBlock("tr", {
                          key: consultation._id,
                          class: "hover:bg-gray-50"
                        }, [
                          createVNode("td", { class: "border p-2" }, toDisplayString(consultation.name), 1),
                          createVNode("td", { class: "border p-2" }, toDisplayString(consultation.email), 1),
                          createVNode("td", { class: "border p-2" }, toDisplayString(consultation.phone), 1),
                          createVNode("td", { class: "border p-2" }, toDisplayString(consultation.source), 1),
                          createVNode("td", { class: "border p-2" }, [
                            createVNode("select", {
                              value: consultation.status,
                              onChange: ($event) => handleStatusChange(consultation._id, $event.target.value),
                              class: "border rounded p-1"
                            }, [
                              createVNode("option", { value: "pending" }, "Pending"),
                              createVNode("option", { value: "contacted" }, "Contacted"),
                              createVNode("option", { value: "scheduled" }, "Scheduled"),
                              createVNode("option", { value: "completed" }, "Completed"),
                              createVNode("option", { value: "cancelled" }, "Cancelled")
                            ], 40, ["value", "onChange"])
                          ])
                        ]);
                      }), 128))
                    ])
                  ]),
                  createVNode("div", { class: "flex justify-between items-center mt-4" }, [
                    createVNode("button", {
                      onClick: prevPage,
                      disabled: currentPage.value === 1,
                      class: "px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                    }, " Previous ", 8, ["disabled"]),
                    createVNode("span", null, "Page " + toDisplayString(currentPage.value) + " of " + toDisplayString(totalPages.value), 1),
                    createVNode("button", {
                      onClick: nextPage,
                      disabled: currentPage.value === totalPages.value,
                      class: "px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                    }, " Next ", 8, ["disabled"])
                  ])
                ])) : createCommentVNode("", true),
                !unref(loading) && paginatedConsultations.value.length === 0 ? (openBlock(), createBlock("p", {
                  key: 3,
                  class: "text-gray-500"
                }, " No consultations found. ")) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/consultation.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=consultation-Bn847YNH.mjs.map

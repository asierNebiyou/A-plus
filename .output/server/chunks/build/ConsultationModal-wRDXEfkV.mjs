import { ref, withAsyncContext, unref, withCtx, createVNode, createTextVNode, createBlock, createCommentVNode, openBlock, withModifiers, withDirectives, vModelText, vModelCheckbox, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
import { C as publicAssetsURL } from '../nitro/nitro.mjs';
import { TransitionRoot, Dialog, TransitionChild, DialogOverlay, DialogPanel, DialogTitle } from '@headlessui/vue';
import { u as useConsultation } from './useSubmittions-C77mNBA_.mjs';
import { u as useContact } from './useContact-DnieksL-.mjs';

const _imports_0 = publicAssetsURL("/image.png");
const _sfc_main = {
  __name: "ConsultationModal",
  __ssrInlineRender: true,
  props: {
    isOpen: Boolean,
    source: String
  },
  emits: ["close"],
  async setup(__props, { emit: __emit }) {
    let __temp, __restore;
    const props = __props;
    const emit = __emit;
    const { addConsultation, error } = useConsultation();
    const { contactInfo, fetchContactInfo } = useContact();
    const formData = ref({
      name: "",
      phone: "",
      consent: false
    });
    [__temp, __restore] = withAsyncContext(() => fetchContactInfo()), await __temp, __restore();
    const successMessage = ref("");
    const calendlyVisible = ref(false);
    const calendlyURL = ref("");
    const LoadingCalendarly = ref(false);
    const closeModal = () => {
      emit("close");
    };
    [__temp, __restore] = withAsyncContext(() => fetchContactInfo()), await __temp, __restore();
    calendlyURL.value = contactInfo.value.calendarly;
    const proceedToCalendly = async () => {
      LoadingCalendarly.value = true;
      successMessage.value = "";
      try {
        await addConsultation({
          ...formData.value,
          source: props.source
        });
        if (calendlyURL) {
          calendlyURL.value = `${calendlyURL.value}?name=${encodeURIComponent(
            formData.value.name
          )}&email=unknown@example.com&customAnswers[1]=${encodeURIComponent(
            formData.value.phone
          )}`;
        }
        LoadingCalendarly.value = false;
        calendlyVisible.value = true;
      } catch (err) {
        LoadingCalendarly.value = false;
        console.error(err);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(TransitionRoot), {
        appear: "",
        show: __props.isOpen,
        as: "template"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Dialog), {
              as: "div",
              onClose: closeModal,
              class: "relative z-50"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(TransitionChild), {
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0",
                    "enter-to": "opacity-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100",
                    "leave-to": "opacity-0"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(DialogOverlay), { class: "fixed inset-0 bg-black/50 backdrop-blur-md" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(DialogOverlay), { class: "fixed inset-0 bg-black/50 backdrop-blur-md" })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="fixed inset-0 overflow-y-auto"${_scopeId2}><div class="flex h-screen items-center justify-center p-6"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(TransitionChild), {
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0 scale-95",
                    "enter-to": "opacity-100 scale-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100 scale-100",
                    "leave-to": "opacity-0 scale-95"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(unref(DialogPanel), { class: "w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-xl" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="flex"${_scopeId4}><div class="hidden md:block md:w-1/2"${_scopeId4}><img${ssrRenderAttr("src", _imports_0)} alt="Tutoring Session" class="h-full w-full object-cover"${_scopeId4}></div><div class="w-full md:w-1/2 p-8"${_scopeId4}>`);
                              _push5(ssrRenderComponent(unref(DialogTitle), { class: "text-3xl font-bold text-gray-900 mb-6" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Book Your Free Consultation `);
                                  } else {
                                    return [
                                      createTextVNode(" Book Your Free Consultation ")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              if (!calendlyVisible.value) {
                                _push5(`<form class="space-y-4"${_scopeId4}><div${_scopeId4}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId4}>Name</label><input type="text"${ssrRenderAttr("value", formData.value.name)} required class="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-green-500"${_scopeId4}></div><div${_scopeId4}><label class="block text-sm font-medium text-gray-700 mb-1"${_scopeId4}>Phone Number</label><input type="tel"${ssrRenderAttr("value", formData.value.phone)} required class="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-green-500"${_scopeId4}></div><div class="mb-4 flex items-start"${_scopeId4}><input type="checkbox" id="consent"${ssrIncludeBooleanAttr(Array.isArray(formData.value.consent) ? ssrLooseContain(formData.value.consent, null) : formData.value.consent) ? " checked" : ""} required class="mr-2 mt-2"${_scopeId4}><label for="consent" class="text-sm text-gray-700"${_scopeId4}> By providing my phone number and email, I consent to be contacted by A Plus Tutoring. </label></div><button type="submit"${ssrIncludeBooleanAttr(!formData.value.consent) ? " disabled" : ""} class="w-full bg-[#92A75A] text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors disabled:bg-gray-600"${_scopeId4}>${ssrInterpolate(LoadingCalendarly.value ? "Loading schedule ..." : "Proceed to Schedule")}</button></form>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              if (calendlyVisible.value) {
                                _push5(`<div class="mt-6"${_scopeId4}><iframe${ssrRenderAttr("src", calendlyURL.value)} width="100%" height="500" frameborder="0" scrolling="no" class="rounded-xl shadow-lg"${_scopeId4}></iframe></div>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              if (unref(error)) {
                                _push5(`<p class="text-red-500 text-sm mt-2"${_scopeId4}>${ssrInterpolate(unref(error))}</p>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              if (successMessage.value) {
                                _push5(`<p class="text-green-500 text-sm mt-2 text-center w-full"${_scopeId4}>${ssrInterpolate(successMessage.value)}</p>`);
                              } else {
                                _push5(`<!---->`);
                              }
                              _push5(`</div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "flex" }, [
                                  createVNode("div", { class: "hidden md:block md:w-1/2" }, [
                                    createVNode("img", {
                                      src: _imports_0,
                                      alt: "Tutoring Session",
                                      class: "h-full w-full object-cover"
                                    })
                                  ]),
                                  createVNode("div", { class: "w-full md:w-1/2 p-8" }, [
                                    createVNode(unref(DialogTitle), { class: "text-3xl font-bold text-gray-900 mb-6" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Book Your Free Consultation ")
                                      ]),
                                      _: 1
                                    }),
                                    !calendlyVisible.value ? (openBlock(), createBlock("form", {
                                      key: 0,
                                      onSubmit: withModifiers(proceedToCalendly, ["prevent"]),
                                      class: "space-y-4"
                                    }, [
                                      createVNode("div", null, [
                                        createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Name"),
                                        withDirectives(createVNode("input", {
                                          type: "text",
                                          "onUpdate:modelValue": ($event) => formData.value.name = $event,
                                          required: "",
                                          class: "w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-green-500"
                                        }, null, 8, ["onUpdate:modelValue"]), [
                                          [vModelText, formData.value.name]
                                        ])
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Phone Number"),
                                        withDirectives(createVNode("input", {
                                          type: "tel",
                                          "onUpdate:modelValue": ($event) => formData.value.phone = $event,
                                          required: "",
                                          class: "w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-green-500"
                                        }, null, 8, ["onUpdate:modelValue"]), [
                                          [vModelText, formData.value.phone]
                                        ])
                                      ]),
                                      createVNode("div", { class: "mb-4 flex items-start" }, [
                                        withDirectives(createVNode("input", {
                                          type: "checkbox",
                                          id: "consent",
                                          "onUpdate:modelValue": ($event) => formData.value.consent = $event,
                                          required: "",
                                          class: "mr-2 mt-2"
                                        }, null, 8, ["onUpdate:modelValue"]), [
                                          [vModelCheckbox, formData.value.consent]
                                        ]),
                                        createVNode("label", {
                                          for: "consent",
                                          class: "text-sm text-gray-700"
                                        }, " By providing my phone number and email, I consent to be contacted by A Plus Tutoring. ")
                                      ]),
                                      createVNode("button", {
                                        type: "submit",
                                        disabled: !formData.value.consent,
                                        class: "w-full bg-[#92A75A] text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors disabled:bg-gray-600"
                                      }, toDisplayString(LoadingCalendarly.value ? "Loading schedule ..." : "Proceed to Schedule"), 9, ["disabled"])
                                    ], 32)) : createCommentVNode("", true),
                                    calendlyVisible.value ? (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "mt-6"
                                    }, [
                                      createVNode("iframe", {
                                        src: calendlyURL.value,
                                        width: "100%",
                                        height: "500",
                                        frameborder: "0",
                                        scrolling: "no",
                                        class: "rounded-xl shadow-lg"
                                      }, null, 8, ["src"])
                                    ])) : createCommentVNode("", true),
                                    unref(error) ? (openBlock(), createBlock("p", {
                                      key: 2,
                                      class: "text-red-500 text-sm mt-2"
                                    }, toDisplayString(unref(error)), 1)) : createCommentVNode("", true),
                                    successMessage.value ? (openBlock(), createBlock("p", {
                                      key: 3,
                                      class: "text-green-500 text-sm mt-2 text-center w-full"
                                    }, toDisplayString(successMessage.value), 1)) : createCommentVNode("", true)
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(unref(DialogPanel), { class: "w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-xl" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex" }, [
                                createVNode("div", { class: "hidden md:block md:w-1/2" }, [
                                  createVNode("img", {
                                    src: _imports_0,
                                    alt: "Tutoring Session",
                                    class: "h-full w-full object-cover"
                                  })
                                ]),
                                createVNode("div", { class: "w-full md:w-1/2 p-8" }, [
                                  createVNode(unref(DialogTitle), { class: "text-3xl font-bold text-gray-900 mb-6" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Book Your Free Consultation ")
                                    ]),
                                    _: 1
                                  }),
                                  !calendlyVisible.value ? (openBlock(), createBlock("form", {
                                    key: 0,
                                    onSubmit: withModifiers(proceedToCalendly, ["prevent"]),
                                    class: "space-y-4"
                                  }, [
                                    createVNode("div", null, [
                                      createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Name"),
                                      withDirectives(createVNode("input", {
                                        type: "text",
                                        "onUpdate:modelValue": ($event) => formData.value.name = $event,
                                        required: "",
                                        class: "w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-green-500"
                                      }, null, 8, ["onUpdate:modelValue"]), [
                                        [vModelText, formData.value.name]
                                      ])
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Phone Number"),
                                      withDirectives(createVNode("input", {
                                        type: "tel",
                                        "onUpdate:modelValue": ($event) => formData.value.phone = $event,
                                        required: "",
                                        class: "w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-green-500"
                                      }, null, 8, ["onUpdate:modelValue"]), [
                                        [vModelText, formData.value.phone]
                                      ])
                                    ]),
                                    createVNode("div", { class: "mb-4 flex items-start" }, [
                                      withDirectives(createVNode("input", {
                                        type: "checkbox",
                                        id: "consent",
                                        "onUpdate:modelValue": ($event) => formData.value.consent = $event,
                                        required: "",
                                        class: "mr-2 mt-2"
                                      }, null, 8, ["onUpdate:modelValue"]), [
                                        [vModelCheckbox, formData.value.consent]
                                      ]),
                                      createVNode("label", {
                                        for: "consent",
                                        class: "text-sm text-gray-700"
                                      }, " By providing my phone number and email, I consent to be contacted by A Plus Tutoring. ")
                                    ]),
                                    createVNode("button", {
                                      type: "submit",
                                      disabled: !formData.value.consent,
                                      class: "w-full bg-[#92A75A] text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors disabled:bg-gray-600"
                                    }, toDisplayString(LoadingCalendarly.value ? "Loading schedule ..." : "Proceed to Schedule"), 9, ["disabled"])
                                  ], 32)) : createCommentVNode("", true),
                                  calendlyVisible.value ? (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "mt-6"
                                  }, [
                                    createVNode("iframe", {
                                      src: calendlyURL.value,
                                      width: "100%",
                                      height: "500",
                                      frameborder: "0",
                                      scrolling: "no",
                                      class: "rounded-xl shadow-lg"
                                    }, null, 8, ["src"])
                                  ])) : createCommentVNode("", true),
                                  unref(error) ? (openBlock(), createBlock("p", {
                                    key: 2,
                                    class: "text-red-500 text-sm mt-2"
                                  }, toDisplayString(unref(error)), 1)) : createCommentVNode("", true),
                                  successMessage.value ? (openBlock(), createBlock("p", {
                                    key: 3,
                                    class: "text-green-500 text-sm mt-2 text-center w-full"
                                  }, toDisplayString(successMessage.value), 1)) : createCommentVNode("", true)
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode(unref(TransitionChild), {
                      enter: "duration-300 ease-out",
                      "enter-from": "opacity-0",
                      "enter-to": "opacity-100",
                      leave: "duration-200 ease-in",
                      "leave-from": "opacity-100",
                      "leave-to": "opacity-0"
                    }, {
                      default: withCtx(() => [
                        createVNode(unref(DialogOverlay), { class: "fixed inset-0 bg-black/50 backdrop-blur-md" })
                      ]),
                      _: 1
                    }),
                    createVNode("div", { class: "fixed inset-0 overflow-y-auto" }, [
                      createVNode("div", { class: "flex h-screen items-center justify-center p-6" }, [
                        createVNode(unref(TransitionChild), {
                          enter: "duration-300 ease-out",
                          "enter-from": "opacity-0 scale-95",
                          "enter-to": "opacity-100 scale-100",
                          leave: "duration-200 ease-in",
                          "leave-from": "opacity-100 scale-100",
                          "leave-to": "opacity-0 scale-95"
                        }, {
                          default: withCtx(() => [
                            createVNode(unref(DialogPanel), { class: "w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-xl" }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex" }, [
                                  createVNode("div", { class: "hidden md:block md:w-1/2" }, [
                                    createVNode("img", {
                                      src: _imports_0,
                                      alt: "Tutoring Session",
                                      class: "h-full w-full object-cover"
                                    })
                                  ]),
                                  createVNode("div", { class: "w-full md:w-1/2 p-8" }, [
                                    createVNode(unref(DialogTitle), { class: "text-3xl font-bold text-gray-900 mb-6" }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Book Your Free Consultation ")
                                      ]),
                                      _: 1
                                    }),
                                    !calendlyVisible.value ? (openBlock(), createBlock("form", {
                                      key: 0,
                                      onSubmit: withModifiers(proceedToCalendly, ["prevent"]),
                                      class: "space-y-4"
                                    }, [
                                      createVNode("div", null, [
                                        createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Name"),
                                        withDirectives(createVNode("input", {
                                          type: "text",
                                          "onUpdate:modelValue": ($event) => formData.value.name = $event,
                                          required: "",
                                          class: "w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-green-500"
                                        }, null, 8, ["onUpdate:modelValue"]), [
                                          [vModelText, formData.value.name]
                                        ])
                                      ]),
                                      createVNode("div", null, [
                                        createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Phone Number"),
                                        withDirectives(createVNode("input", {
                                          type: "tel",
                                          "onUpdate:modelValue": ($event) => formData.value.phone = $event,
                                          required: "",
                                          class: "w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-green-500"
                                        }, null, 8, ["onUpdate:modelValue"]), [
                                          [vModelText, formData.value.phone]
                                        ])
                                      ]),
                                      createVNode("div", { class: "mb-4 flex items-start" }, [
                                        withDirectives(createVNode("input", {
                                          type: "checkbox",
                                          id: "consent",
                                          "onUpdate:modelValue": ($event) => formData.value.consent = $event,
                                          required: "",
                                          class: "mr-2 mt-2"
                                        }, null, 8, ["onUpdate:modelValue"]), [
                                          [vModelCheckbox, formData.value.consent]
                                        ]),
                                        createVNode("label", {
                                          for: "consent",
                                          class: "text-sm text-gray-700"
                                        }, " By providing my phone number and email, I consent to be contacted by A Plus Tutoring. ")
                                      ]),
                                      createVNode("button", {
                                        type: "submit",
                                        disabled: !formData.value.consent,
                                        class: "w-full bg-[#92A75A] text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors disabled:bg-gray-600"
                                      }, toDisplayString(LoadingCalendarly.value ? "Loading schedule ..." : "Proceed to Schedule"), 9, ["disabled"])
                                    ], 32)) : createCommentVNode("", true),
                                    calendlyVisible.value ? (openBlock(), createBlock("div", {
                                      key: 1,
                                      class: "mt-6"
                                    }, [
                                      createVNode("iframe", {
                                        src: calendlyURL.value,
                                        width: "100%",
                                        height: "500",
                                        frameborder: "0",
                                        scrolling: "no",
                                        class: "rounded-xl shadow-lg"
                                      }, null, 8, ["src"])
                                    ])) : createCommentVNode("", true),
                                    unref(error) ? (openBlock(), createBlock("p", {
                                      key: 2,
                                      class: "text-red-500 text-sm mt-2"
                                    }, toDisplayString(unref(error)), 1)) : createCommentVNode("", true),
                                    successMessage.value ? (openBlock(), createBlock("p", {
                                      key: 3,
                                      class: "text-green-500 text-sm mt-2 text-center w-full"
                                    }, toDisplayString(successMessage.value), 1)) : createCommentVNode("", true)
                                  ])
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Dialog), {
                as: "div",
                onClose: closeModal,
                class: "relative z-50"
              }, {
                default: withCtx(() => [
                  createVNode(unref(TransitionChild), {
                    enter: "duration-300 ease-out",
                    "enter-from": "opacity-0",
                    "enter-to": "opacity-100",
                    leave: "duration-200 ease-in",
                    "leave-from": "opacity-100",
                    "leave-to": "opacity-0"
                  }, {
                    default: withCtx(() => [
                      createVNode(unref(DialogOverlay), { class: "fixed inset-0 bg-black/50 backdrop-blur-md" })
                    ]),
                    _: 1
                  }),
                  createVNode("div", { class: "fixed inset-0 overflow-y-auto" }, [
                    createVNode("div", { class: "flex h-screen items-center justify-center p-6" }, [
                      createVNode(unref(TransitionChild), {
                        enter: "duration-300 ease-out",
                        "enter-from": "opacity-0 scale-95",
                        "enter-to": "opacity-100 scale-100",
                        leave: "duration-200 ease-in",
                        "leave-from": "opacity-100 scale-100",
                        "leave-to": "opacity-0 scale-95"
                      }, {
                        default: withCtx(() => [
                          createVNode(unref(DialogPanel), { class: "w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-xl" }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex" }, [
                                createVNode("div", { class: "hidden md:block md:w-1/2" }, [
                                  createVNode("img", {
                                    src: _imports_0,
                                    alt: "Tutoring Session",
                                    class: "h-full w-full object-cover"
                                  })
                                ]),
                                createVNode("div", { class: "w-full md:w-1/2 p-8" }, [
                                  createVNode(unref(DialogTitle), { class: "text-3xl font-bold text-gray-900 mb-6" }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Book Your Free Consultation ")
                                    ]),
                                    _: 1
                                  }),
                                  !calendlyVisible.value ? (openBlock(), createBlock("form", {
                                    key: 0,
                                    onSubmit: withModifiers(proceedToCalendly, ["prevent"]),
                                    class: "space-y-4"
                                  }, [
                                    createVNode("div", null, [
                                      createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Name"),
                                      withDirectives(createVNode("input", {
                                        type: "text",
                                        "onUpdate:modelValue": ($event) => formData.value.name = $event,
                                        required: "",
                                        class: "w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-green-500"
                                      }, null, 8, ["onUpdate:modelValue"]), [
                                        [vModelText, formData.value.name]
                                      ])
                                    ]),
                                    createVNode("div", null, [
                                      createVNode("label", { class: "block text-sm font-medium text-gray-700 mb-1" }, "Phone Number"),
                                      withDirectives(createVNode("input", {
                                        type: "tel",
                                        "onUpdate:modelValue": ($event) => formData.value.phone = $event,
                                        required: "",
                                        class: "w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-green-500"
                                      }, null, 8, ["onUpdate:modelValue"]), [
                                        [vModelText, formData.value.phone]
                                      ])
                                    ]),
                                    createVNode("div", { class: "mb-4 flex items-start" }, [
                                      withDirectives(createVNode("input", {
                                        type: "checkbox",
                                        id: "consent",
                                        "onUpdate:modelValue": ($event) => formData.value.consent = $event,
                                        required: "",
                                        class: "mr-2 mt-2"
                                      }, null, 8, ["onUpdate:modelValue"]), [
                                        [vModelCheckbox, formData.value.consent]
                                      ]),
                                      createVNode("label", {
                                        for: "consent",
                                        class: "text-sm text-gray-700"
                                      }, " By providing my phone number and email, I consent to be contacted by A Plus Tutoring. ")
                                    ]),
                                    createVNode("button", {
                                      type: "submit",
                                      disabled: !formData.value.consent,
                                      class: "w-full bg-[#92A75A] text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors disabled:bg-gray-600"
                                    }, toDisplayString(LoadingCalendarly.value ? "Loading schedule ..." : "Proceed to Schedule"), 9, ["disabled"])
                                  ], 32)) : createCommentVNode("", true),
                                  calendlyVisible.value ? (openBlock(), createBlock("div", {
                                    key: 1,
                                    class: "mt-6"
                                  }, [
                                    createVNode("iframe", {
                                      src: calendlyURL.value,
                                      width: "100%",
                                      height: "500",
                                      frameborder: "0",
                                      scrolling: "no",
                                      class: "rounded-xl shadow-lg"
                                    }, null, 8, ["src"])
                                  ])) : createCommentVNode("", true),
                                  unref(error) ? (openBlock(), createBlock("p", {
                                    key: 2,
                                    class: "text-red-500 text-sm mt-2"
                                  }, toDisplayString(unref(error)), 1)) : createCommentVNode("", true),
                                  successMessage.value ? (openBlock(), createBlock("p", {
                                    key: 3,
                                    class: "text-green-500 text-sm mt-2 text-center w-full"
                                  }, toDisplayString(successMessage.value), 1)) : createCommentVNode("", true)
                                ])
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ConsultationModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=ConsultationModal-wRDXEfkV.mjs.map

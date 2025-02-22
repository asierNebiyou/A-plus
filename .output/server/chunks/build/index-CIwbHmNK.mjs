import { D as buildAssetsURL } from '../nitro/nitro.mjs';
import { _ as __nuxt_component_0 } from './nuxt-layout-Bau4NBOH.mjs';
import { _ as _sfc_main$5 } from './ConsultationModal-wRDXEfkV.mjs';
import { mergeProps, withCtx, createVNode, ref, withAsyncContext, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderTeleport } from 'vue/server-renderer';
import { u as useContact } from './useContact-DnieksL-.mjs';
import { u as useTestimonial } from './useTestimonial-B-QJ7-uw.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
import { _ as _sfc_main$4 } from './Faq-OSjTkLZ7.mjs';
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
import './server.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@headlessui/vue';
import './useSubmittions-C77mNBA_.mjs';
import './useFaq-CFEAJwic.mjs';

const _imports_0 = "" + buildAssetsURL("heroimage.DeidXxDo.png");
const _sfc_main$3 = {
  __name: "HeroPage",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const showModal = ref(false);
    const isModalOpen = ref(false);
    const modalSource = ref("");
    const info = ref({});
    const { contactInfo, fetchContactInfo } = useContact();
    [__temp, __restore] = withAsyncContext(() => fetchContactInfo()), await __temp, __restore();
    info.value = contactInfo.value;
    const closeModal = () => {
      isModalOpen.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ConsultationModal = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mb-20 bg-white" }, _attrs))}><div class="container mx-auto mt-6 px-10 py-16 relative container-lg mx-auto"><div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"><div class="space-y-6 mb-20 md:m-0"><h1 class="text-4xl md:text-5xl font-bold text-[#1E2755]"> Affordable and <br> Personalized <span class="relative"><span class="text-[#92A75A]">Tutoring</span><svg class="absolute -top-1 -left-2 w-full h-full text-[#92A75A]" viewBox="0 0 200 100"><path d="M10,50 Q100,20 190,50" fill="none" stroke="currentColor" stroke-width="2"></path></svg></span></h1><p class="text-gray-600 text-lg"> Unlock Your Child&#39;s Full Potential with Affordable, Personalized Tutoring Designed to Inspire Confidence and Academic Success. </p><div class="flex space-x-4"><button class="bg-[#92A75A] text-white px-6 py-3 rounded-lg hover:bg-opacity-90"> Schedule a Free Trial </button><button class="flex items-center space-x-2 px-6 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50"><svg class="w-5 h-5 animate-pulse" fill="#1E2755" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"></path></svg><span class="font-semibold opacity-80">Watch our introduction video</span></button></div></div><div class="relative"><div class="relative rounded-full border-8 border-[#92A75A] w-[350px] h-[350px] mx-auto"><div class="inset-7 bg-gray-100 rounded-full w-[320px] h-[320px] mx-2 my-2"></div><img${ssrRenderAttr("src", _imports_0)} alt="Hero image" class="object-cover absolute -top-20 min-w-[410px] -left-5"></div><a href="https://www.google.com/maps/place/A+Plus+Tutoring/@39.764306,-105.1844482,10z/data=!4m18!1m9!3m8!1s0x8b941080b3729781:0xfee7ae2b024c9a04!2sA+Plus+Tutoring!8m2!3d39.7642444!4d-104.8547524!9m1!1b1!16s%2Fg%2F11l34t7jt_!3m7!1s0x8b941080b3729781:0xfee7ae2b024c9a04!8m2!3d39.7642444!4d-104.8547524!9m1!1b1!16s%2Fg%2F11l34t7jt_?entry=ttu&amp;g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D"><div class="absolute -bottom-12 right-40 bg-white rounded-lg shadow-lg p-4"><div class="text-center"><h3 class="font-bold">Book Your Free</h3><p>Consultation Today</p><div class="flex items-center justify-center mt-2"><span class="text-[#92A75A] font-bold">5.0</span><div class="flex text-[#92A75A] ml-2"><span>\u2605\u2605\u2605\u2605\u2605</span></div><span class="text-gray-500 text-sm ml-2">(Reviews)</span></div></div></div></a><div class="absolute -top-4 left-5 md:-left-4 w-20 h-20 rounded-full bg-[#470137]"></div><div class="absolute top-1/2 -right-4 w-12 h-12 rounded-full bg-[#1E2755]"></div><div class="absolute bottom-1/4 md:top-80 -left-0 md:-left-5 w-16 h-16 rounded-full bg-[#92A75A]"></div></div></div></div>`);
      _push(ssrRenderComponent(_component_ConsultationModal, {
        "is-open": isModalOpen.value,
        source: modalSource.value,
        onClose: closeModal
      }, null, _parent));
      if (showModal.value) {
        _push(`<div class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"><div class="bg-white rounded-lg overflow-hidden w-11/12 max-w-3xl"><div class="flex justify-between items-center p-4 border-b"><h3 class="text-xl font-semibold">Watch Video</h3><button class="text-gray-600 hover:text-gray-900"> \u2715 </button></div><div class="p-4">`);
        if (info.value) {
          _push(`<iframe class="w-full aspect-video"${ssrRenderAttr("src", info.value.introVideo)} title="Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HeroPage.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "LearningApproach",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { contactInfo, fetchContactInfo } = useContact();
    const info = ref("");
    const isModalOpen = ref(false);
    [__temp, __restore] = withAsyncContext(() => fetchContactInfo()), await __temp, __restore();
    info.value = contactInfo.value;
    const features = [
      { title: "Customized Lesson Plans", img: "/customizedLessonplans.png" },
      { title: "Experienced Tutors", img: "/expiriencedtutors.png" },
      { title: "Flexible Scheduling Options", img: "/scheduleimg.png" },
      { title: "Affordable Pricing", img: "/affordable.png" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-6xl mx-auto px-4 py-5" }, _attrs))}><h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6"> Our Personalized One-On-One Learning Approach </h2><p class="text-gray-600 mb-8 max-w-3xl"> We believe that every student is unique. Our tailored tutoring sessions cater to your specific learning style, ensuring you grasp concepts with ease. </p><div class="grid grid-cols-1 md:grid-cols-2 gap-8">`);
      if (!info.value.podcastVideo) {
        _push(`<div class="text-center py-12 flex flex-col items-center justify-center"><div style="${ssrRenderStyle({ "width": "84px", "height": "84px" })}" class="animate-spin rounded-full border-b-2 border-[#92A75A] mx-auto"></div></div>`);
      } else {
        _push(`<div class="relative rounded-xl overflow-hidden cursor-pointer"><div class="aspect-w-16 aspect-h-9 relative"><div class="absolute inset-0 flex items-center justify-center"><button class="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg animate-pulse"><svg class="w-8 h-8 text-[#94A95B]" fill="currentColor" viewBox="0 0 20 20"><path d="M8 5v10l7-5-7-5z"></path></svg></button></div>`);
        if (info.value) {
          _push(`<iframe class="w-full aspect-video"${ssrRenderAttr("src", info.value.podcastVideo)} title="Video" frameborder="0" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="py-4 bg-white"><p class="text-[#2E3E5C]"></p><h3 class="font-semibold text-lg">Get to know us and our passion</h3><p class="text-[#2E3E5C]"> Check out our latest podcast about A plus! Discover how personalized learning can help students excel. \u{1F3A7}\u{1F4DA} </p></div></div>`);
      }
      _push(`<div class="grid grid-cols-2 gap-3"><!--[-->`);
      ssrRenderList(features, (feature) => {
        _push(`<div class="bg-white"><img${ssrRenderAttr("src", feature.img)}${ssrRenderAttr("alt", feature.title)} class="object-cover rounded-2xl my-2 hover:scale-105 transition"><h4 class="font-semibold mb-2 p-2 text-[#2E3E5C]">${ssrInterpolate(feature.title)}</h4></div>`);
      });
      _push(`<!--]--></div></div>`);
      ssrRenderTeleport(_push, (_push2) => {
        if (isModalOpen.value) {
          _push2(`<div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50"><div class="bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full relative"><button class="absolute top-2 right-2 text-gray-600 hover:text-gray-800"> \u2715 </button>`);
          if (info.value) {
            _push2(`<iframe class="w-full aspect-video mt-5"${ssrRenderAttr("src", info.value.podcastVideo)} title="Video" frameborder="0" allow="accelerometer;  autoplay;clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LearningApproach.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Testimonial",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { testimonialData, loadTestimonial } = useTestimonial();
    const testimonials = ref([]);
    const currentIndex = ref(0);
    [__temp, __restore] = withAsyncContext(() => loadTestimonial()), await __temp, __restore();
    testimonials.value = testimonialData.value;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 bg-white overflow-hidden relative" }, _attrs))} data-v-d69d3dac><div class="container mx-auto px-4 relative" data-v-d69d3dac><div class="absolute left-20 -top-8 rotate-[17deg]" data-v-d69d3dac><div class="grid grid-cols-5 gap-2" data-v-d69d3dac><!--[-->`);
      ssrRenderList(25, (n) => {
        _push(`<div class="w-1.5 h-1.5 rounded-full bg-[#92A75A] opacity-40" data-v-d69d3dac></div>`);
      });
      _push(`<!--]--></div></div><div class="text-center mb-16 relative z-10" data-v-d69d3dac><h2 class="text-3xl font-bold text-[#1E2755]" data-v-d69d3dac>Let&#39;s Hear</h2><h3 class="text-3xl font-bold text-[#1E2755]" data-v-d69d3dac>What They Say</h3></div><div class="relative max-w-3xl mx-auto" data-v-d69d3dac><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320" fill="#92A75A" class="w-10" data-v-d69d3dac><path d="M105.6 51.2 24 160v108.8h108.8V160H78.4l54.4-108.8zm190.4 0h-27.2L187.2 160v108.8H296V160h-54.4z" data-v-d69d3dac></path></svg><div class="overflow-hidden relative" data-v-d69d3dac><div class="flex transition-transform duration-500" style="${ssrRenderStyle({ transform: `translateX(-${currentIndex.value * 100}%)` })}" data-v-d69d3dac><!--[-->`);
      ssrRenderList(testimonials.value, (testimonial, index) => {
        _push(`<div class="w-full flex-shrink-0" data-v-d69d3dac><div class="text-center text-gray-600 space-y-4 px-8 relative" data-v-d69d3dac><p class="relative z-10" data-v-d69d3dac>${ssrInterpolate(testimonial.testimonial)}</p></div><div class="text-center mt-12 relative z-10" data-v-d69d3dac><h4 class="text-xl font-semibold text-[#1E2755]" data-v-d69d3dac>${ssrInterpolate(testimonial.name)}</h4></div></div>`);
      });
      _push(`<!--]--></div></div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320" fill="#92A75A" class="absolute bottom-0 right-0 -mr-8 w-12 h-12 text-[#92A75A] transform rotate-180" data-v-d69d3dac><path d="M105.6 51.2 24 160v108.8h108.8V160H78.4l54.4-108.8zm190.4 0h-27.2L187.2 160v108.8H296V160h-54.4z" data-v-d69d3dac></path></svg></div><div class="absolute right-20 bottom-16 -rotate-[17deg]" data-v-d69d3dac><div class="grid grid-cols-5 gap-2" data-v-d69d3dac><!--[-->`);
      ssrRenderList(25, (n) => {
        _push(`<div class="w-1.5 h-1.5 rounded-full bg-[#92A75A] opacity-40" data-v-d69d3dac></div>`);
      });
      _push(`<!--]--></div></div><svg class="absolute top-0 left-0 w-full h-full -z-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" data-v-d69d3dac><path fill="#EBF0D7" fill-opacity="0.5" d="M0,96L48,112C96,128,192,160,288,181.3C384,203,480,213,576,192C672,171,768,128,864,117.3C960,107,1056,128,1152,149.3C1248,171,1344,192,1392,202.7L1440,213L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" data-v-d69d3dac></path></svg></div></section>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Testimonial.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Testimonial = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d69d3dac"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_HeroPage = _sfc_main$3;
      const _component_LearningApproach = _sfc_main$2;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "layout" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-col"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_HeroPage, null, null, _parent2, _scopeId));
            _push2(`</div><div class="min-h-screen flex flex-col container-lg mx-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_LearningApproach, null, null, _parent2, _scopeId));
            _push2(`</div><div class="py-10 flex flex-col container-lg mx-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(Testimonial, null, null, _parent2, _scopeId));
            _push2(`</div><div class="py-10 flex flex-col container-lg mx-auto"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-col" }, [
                createVNode(_component_HeroPage)
              ]),
              createVNode("div", { class: "min-h-screen flex flex-col container-lg mx-auto" }, [
                createVNode(_component_LearningApproach)
              ]),
              createVNode("div", { class: "py-10 flex flex-col container-lg mx-auto" }, [
                createVNode(Testimonial)
              ]),
              createVNode("div", { class: "py-10 flex flex-col container-lg mx-auto" }, [
                createVNode(_sfc_main$4)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CIwbHmNK.mjs.map

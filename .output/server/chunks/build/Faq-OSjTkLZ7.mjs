import { ref, withAsyncContext, mergeProps, unref, shallowRef, toRef, getCurrentInstance, onServerPrefetch, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { b as useNuxtApp, h as asyncDataDefaults, j as createError } from './server.mjs';
import { u as useFaq } from './useFaq-CFEAJwic.mjs';

const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  var _a2, _b2, _c, _d, _e, _f, _g, _h;
  var _b;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, _handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  const handler = _handler ;
  const getDefault = () => asyncDataDefaults.value;
  const getDefaultCachedData = () => nuxtApp.isHydrating ? nuxtApp.payload.data[key] : nuxtApp.static.data[key];
  options.server = (_a2 = options.server) != null ? _a2 : true;
  options.default = (_b2 = options.default) != null ? _b2 : getDefault;
  options.getCachedData = (_c = options.getCachedData) != null ? _c : getDefaultCachedData;
  options.lazy = (_d = options.lazy) != null ? _d : false;
  options.immediate = (_e = options.immediate) != null ? _e : true;
  options.deep = (_f = options.deep) != null ? _f : asyncDataDefaults.deep;
  options.dedupe = (_g = options.dedupe) != null ? _g : "cancel";
  const initialCachedData = options.getCachedData(key, nuxtApp);
  const hasCachedData = initialCachedData != null;
  if (!nuxtApp._asyncData[key] || !options.immediate) {
    (_h = (_b = nuxtApp.payload._errors)[key]) != null ? _h : _b[key] = asyncDataDefaults.errorValue;
    const _ref = options.deep ? ref : shallowRef;
    nuxtApp._asyncData[key] = {
      data: _ref(hasCachedData ? initialCachedData : options.default()),
      pending: ref(!hasCachedData),
      error: toRef(nuxtApp.payload._errors, key),
      status: ref("idle"),
      _default: options.default
    };
  }
  const asyncData = { ...nuxtApp._asyncData[key] };
  delete asyncData._default;
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    var _a3;
    if (nuxtApp._asyncDataPromises[key]) {
      if (isDefer((_a3 = opts.dedupe) != null ? _a3 : options.dedupe)) {
        return nuxtApp._asyncDataPromises[key];
      }
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    if (opts._initial || nuxtApp.isHydrating && opts._initial !== false) {
      const cachedData = opts._initial ? initialCachedData : options.getCachedData(key, nuxtApp);
      if (cachedData != null) {
        return Promise.resolve(cachedData);
      }
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxtApp));
        } catch (err) {
          reject(err);
        }
      }
    ).then(async (_result) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = await options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      nuxtApp.payload.data[key] = result;
      asyncData.data.value = result;
      asyncData.error.value = asyncDataDefaults.errorValue;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      asyncData.error.value = createError(error);
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      delete nuxtApp._asyncDataPromises[key];
    });
    nuxtApp._asyncDataPromises[key] = promise;
    return nuxtApp._asyncDataPromises[key];
  };
  asyncData.clear = () => clearNuxtDataByKey(nuxtApp, key);
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = asyncDataDefaults.errorValue;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = void 0;
    nuxtApp._asyncData[key].error.value = asyncDataDefaults.errorValue;
    nuxtApp._asyncData[key].pending.value = false;
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    if (nuxtApp._asyncDataPromises[key]) {
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
const _sfc_main = {
  __name: "Faq",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const openIndex = ref(null);
    const { data: faq, error } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("faqs", async () => {
      const { faqs, fetchFaqs } = useFaq();
      await fetchFaqs();
      return faqs.value && Object.keys(faqs.value).length ? faqs.value : [
        {
          question: "How does tutoring work?",
          answer: "Our tutoring sessions are conducted online, providing personalized, one-on-one support from experienced tutors."
        },
        {
          question: "What subjects do you cover?",
          answer: "We offer a comprehensive range of subjects, including mathematics, sciences, English, history, and more."
        },
        {
          question: "Can I choose my tutor?",
          answer: "Absolutely! You can browse tutor profiles, read reviews, and select the tutor that best suits you."
        },
        {
          question: "How do I schedule a session?",
          answer: "Simply create an account, browse tutors, and book a session at a convenient time."
        }
      ];
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative py-16 px-8 max-w-6xl mx-auto bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl overflow-hidden" }, _attrs))}><h2 class="text-4xl font-extrabold text-gray-900 text-center mb-12 relative z-10"> Frequently Asked Questions </h2><div class="space-y-8 relative z-10"><!--[-->`);
      ssrRenderList(unref(faq), (faq2, index) => {
        _push(`<div class="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"><button class="flex justify-between items-center w-full text-left py-5 px-7 focus:outline-none"><span class="text-lg font-semibold text-gray-800">${ssrInterpolate(faq2.question)}</span><span class="${ssrRenderClass([[openIndex.value === index ? "rotate-180" : "", "text-[#91A65A]"], "transition transform"])}"><svg class="w-7 h-7 fill-none stroke-current" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"></path></svg></span></button>`);
        if (openIndex.value === index) {
          _push(`<div class="px-7 pb-6 text-gray-700 leading-relaxed">${ssrInterpolate(faq2.answer)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="absolute bottom-0 right-0 w-64 h-64 bg-[#91A65A] rounded-full -mr-24 -mb-24"></div><div class="absolute top-0 left-0 w-full h-full -z-20"><svg class="absolute top-1/4 left-1/4 w-32 h-32 text-[#91A65A] fill-current animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg><svg class="absolute bottom-1/4 right-1/4 w-40 h-40 text-[#91A65A] fill-current animate-spin-slow" viewBox="0 0 24 24" fill="none" stroke="#92A75A" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect></svg></div><div class="absolute top-12 -left-20 w-64 h-64 bg-[#91A65A] rounded-full -mr-24 -mb-24 opacity-80"></div><div class="absolute top-0 left-0 w-full h-full -z-20"><svg class="absolute top-1/4 left-1/4 w-32 h-32 text-[#91A65A] fill-current animate-pulse" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg><svg class="absolute bottom-1/4 right-1/4 w-40 h-40 text-[#91A65A] fill-current animate-spin-slow" viewBox="0 0 24 24" fill="none" stroke="#92A75A" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect></svg></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Faq-OSjTkLZ7.mjs.map

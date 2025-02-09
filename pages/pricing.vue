<template>
  <NuxtLayout name="layout">
    <div class="bg-gradient-to-b from-gray-50 to-gray-100 py-20 px-4">
      <div
        class="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
      ></div>

      <div
        class="absolute top-40 left-40 w-80 h-80 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"
      ></div>

      <!-- </div> -->

      <div class="px-4 sm:px-6 lg:px-8 relative">
        <div class="text-center mb-8">
          <h2 class="text-4xl md:text-5xl font-bold text-[#1E2755]">
            Simple, transparent pricing
          </h2>
          <p class="text-xl text-gray-600">
            Choose the perfect plan for your needs
          </p>
        </div>

        <!-- Billing toggle -->
        <div class="flex justify-center mb-12">
          <div class="relative flex items-center p-1 rounded-full bg-gray-200">
            <button
              @click="filteredPlans('monthly')"
              :class="`relative px-6 py-2 text-sm font-medium transition-colors duration-200 ${
                !isYearly ? 'text-white' : 'text-gray-700'
              }`"
            >
              Monthly
              <transition name="slide">
                <div
                  v-if="!isYearly"
                  class="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full -z-10"
                />
              </transition>
            </button>
            <button
              @click="filteredPlans('yearly')"
              :class="`relative px-6 py-2 text-sm font-medium transition-colors duration-200 ${
                isYearly ? 'text-white' : 'text-gray-700'
              }`"
            >
              Yearly
              <transition name="slide">
                <div
                  v-if="isYearly"
                  class="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full -z-10"
                />
              </transition>
            </button>
          </div>
        </div>

        <!-- Pricing cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div
            v-for="(plan, index) in pricingValues"
            :key="plan.name"
            class="relative flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <!-- Popular badge -->
            <div v-if="plan.popular" class="absolute top-0 right-0 mt-4 mr-4">
              <span
                class="inline-flex items-center px-3 py-1 text-xs font-medium leading-5 text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
              >
                Most Popular
              </span>
            </div>

            <div class="p-8 flex-1">
              <!-- Plan icon -->
              <div
                :class="`inline-flex p-4 rounded-2xl ${
                  plan.isPopular ? 'bg-[#92A75A]' : 'bg-[#6171FE]'
                }  mb-6`"
              >
                <div v-if="plan.isPopular">
                  <component :is="Users" class="w-6 h-6 text-white" />
                </div>
                <div v-else>
                  <component :is="Zap" class="w-6 h-6 text-white" />
                </div>
              </div>

              <h3 class="text-2xl font-bold text-gray-900 mb-2">
                {{ plan.name }}
              </h3>
              <div class="mt-4 flex items-baseline">
                <span class="text-4xl font-extrabold text-gray-900">
                  {{ plan.price }}
                </span>
                <span class="ml-2 text-gray-500"
                  >/{{ isYearly ? "year" : "month" }}</span
                >
              </div>

              <!-- Features list -->
              <ul class="mt-8 space-y-4">
                <li
                  v-for="(feature, i) in plan.features"
                  :key="i"
                  class="flex items-center"
                >
                  <CheckCircle
                    class="flex-shrink-0 w-5 h-5 text-green-500 mr-3"
                  />
                  <span class="text-gray-600">{{ feature }}</span>
                </li>
              </ul>
            </div>

            <!-- Action button -->
            <div class="p-6">
              <button
                @click="openModal(plan.name + '_' + plan.period)"
                :class="`w-full py-3 px-6 rounded-xl text-white font-medium 
                 ${
                   plan.isPopular ? 'bg-[#92A75A]' : 'bg-[#6171FE]'
                 } hover:opacity-90 transition-all duration-200
                transform hover:scale-[1.02] active:scale-[0.98]
                focus:outline-none focus:ring-2 focus:ring-offset-2`"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ConsultationModal
      :is-open="isModalOpen"
      :source="modalSource"
      @close="closeModal"
    />
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { usePricing } from "@/composables/usePricing";
import { CheckCircle, Zap, Shield, Users } from "lucide-vue-next";

const { pricingPlans, isLoading, fetchPlans } = usePricing();
const billingCycle = ref("monthly");
const isYearly = ref(false);

const isModalOpen = ref(false);
const modalSource = ref("");
// const pricingValues = ref("");
const openModal = (source) => {
  modalSource.value = source;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
await fetchPlans();
const pricingValues = computed(() =>
  pricingPlans.value
    ? pricingPlans.value.filter(
        (plan) => plan.period === (isYearly.value ? "yearly" : "monthly")
      )
    : []
);
// onMounted(async () => {
//   filteredPlans("monthly");
// });

const filteredPlans = (period) => {
  isYearly.value = period == "yearly" ? true : false;
  pricingValues.value = pricingPlans.value.filter(
    (plans) => plans.period == period
  );
};
</script>

<style scoped>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-out;
}

.slide-enter-from {
  transform: translateX(-100%);
}

.slide-leave-to {
  transform: translateX(100%);
}
</style>

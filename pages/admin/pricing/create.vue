<template>
  <NuxtLayout name="admin">
    <div class="min-h-screen bg-gray-50 p-6">
      <div class="max-w-3xl mx-auto">
        <div class="flex items-center mb-6">
          <button @click="router.back()" class="mr-4">
            <ArrowLeftIcon class="w-5 h-5 text-gray-600 hover:text-gray-800" />
          </button>
          <h1 class="text-2xl font-semibold text-gray-900">Create New Plan</h1>
        </div>

        <form
          @submit.prevent="handleSubmit"
          class="bg-white rounded-lg shadow-sm p-6"
        >
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Name</label
              >
              <input
                v-model="form.name"
                type="text"
                class="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-[#92A75A] focus:border-[#92A75A]"
                required
              />
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Price</label
              >
              <div class="relative">
                <span class="absolute left-3 top-3 text-gray-500">$</span>
                <input
                  v-model="form.price"
                  type="number"
                  step="0.01"
                  class="w-full p-2.5 pl-7 border border-gray-200 rounded-lg focus:ring-[#92A75A] focus:border-[#92A75A]"
                  required
                />
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Billing Period</label
              >
              <select
                v-model="form.period"
                class="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-[#92A75A] focus:border-[#92A75A]"
              >
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>

            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2"
                >Type</label
              >
              <select
                v-model="form.type"
                class="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-[#92A75A] focus:border-[#92A75A]"
              >
                <option value="free">Free</option>
                <option value="regular">Regular</option>
                <option value="extended">Extended</option>
              </select>
            </div>
          </div>

          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 mb-2"
              >Features</label
            >
            <div class="space-y-3">
              <div
                v-for="(feature, index) in form.features"
                :key="index"
                class="flex items-center space-x-2"
              >
                <input
                  v-model="form.features[index]"
                  type="text"
                  class="flex-1 p-2.5 border border-gray-200 rounded-lg focus:ring-[#92A75A] focus:border-[#92A75A]"
                />
                <button
                  @click="removeFeature(index)"
                  type="button"
                  class="text-red-500 hover:text-red-700"
                >
                  <XMarkIcon class="w-5 h-5" />
                </button>
              </div>
            </div>
            <button
              type="button"
              @click="addFeature"
              class="mt-3 text-[#92A75A] hover:text-[#7a8c4c] flex items-center"
            >
              <PlusIcon class="w-5 h-5 mr-1" />
              Add Feature
            </button>
          </div>

          <div class="flex items-center mb-6">
            <input
              v-model="form.isPopular"
              type="checkbox"
              class="rounded border-gray-300 text-[#92A75A] focus:ring-[#92A75A]"
            />
            <label class="ml-2 text-sm text-gray-700"
              >Mark as Popular Plan</label
            >
          </div>

          <div class="flex justify-end space-x-4">
            <button
              type="button"
              @click="router.back()"
              class="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="bg-[#92A75A] text-white px-6 py-2 rounded-lg hover:bg-[#7a8c4c] transition-colors"
              :disabled="isLoading"
            >
              <span v-if="isLoading">Creating...</span>
              <span v-else>Create Plan</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "nuxt/app";
import { ArrowLeftIcon, XMarkIcon, PlusIcon } from "@heroicons/vue/24/outline";
import { usePricing } from "~/composables/usePricing";

const router = useRouter();
const { createPlan, isLoading } = usePricing();

const form = ref({
  name: "",
  price: "",
  period: "monthly",
  type: "regular",
  features: [""],
  isPopular: false,
});

const addFeature = () => {
  form.value.features.push("");
};

const removeFeature = (index) => {
  form.value.features.splice(index, 1);
};

const handleSubmit = async () => {
  try {
    // Filter out empty features
    const features = form.value.features.filter((f) => f.trim());
    const newPlan = await createPlan({
      ...form.value,
      features,
    });
    router.push("/admin/pricing");
  } catch (error) {
    console.error("Failed to create plan:", error);
  }
};
</script>

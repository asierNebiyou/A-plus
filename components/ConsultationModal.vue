<template>
  <div>
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-50">
        <!-- Blurred Background -->
        <TransitionChild
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="fixed inset-0 bg-black/50 backdrop-blur-md" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex h-screen items-center justify-center p-6">
            <TransitionChild
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <!-- Larger Modal -->
              <DialogPanel
                class="w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-xl"
              >
                <div class="flex">
                  <div class="hidden md:block md:w-1/2">
                    <img
                      src="/image.png"
                      alt="Tutoring Session"
                      class="h-full w-full object-cover"
                    />
                  </div>
                  <div class="w-full md:w-1/2 p-8">
                    <DialogTitle class="text-3xl font-bold text-gray-900 mb-6">
                      Book Your Free Consultation
                    </DialogTitle>

                    <form @submit.prevent="submitForm" class="space-y-4">
                      <input type="hidden" :value="source" />

                      <div>
                        <label
                          class="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          v-model="formData.name"
                          required
                          class="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>

                      <div>
                        <label
                          class="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          v-model="formData.email"
                          required
                          class="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>

                      <div>
                        <label
                          class="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          v-model="formData.phone"
                          required
                          class="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>

                      <button
                        type="submit"
                        :disabled="loading"
                        class="w-full bg-[#92A75A] text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors"
                      >
                        {{
                          loading ? "Submitting..." : "Schedule Consultation"
                        }}
                      </button>

                      <p v-if="error" class="text-red-500 text-sm mt-2">
                        {{ error }}
                      </p>
                      <p
                        v-if="successMessage"
                        class="text-green-500 text-sm mt-2"
                      >
                        {{ successMessage }}
                      </p>
                    </form>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogOverlay,
} from "@headlessui/vue";
import { useConsultation } from "~/composables/useSubmittions";

const props = defineProps({
  isOpen: Boolean,
  source: String,
});

const emit = defineEmits(["close"]);
const { addConsultation, loading, error } = useConsultation();

const formData = ref({
  name: "",
  email: "",
  phone: "",
});

const successMessage = ref("");

const closeModal = () => {
  emit("close");
};

const submitForm = async () => {
  successMessage.value = "";
  try {
    await addConsultation({
      ...formData.value,
      source: props.source,
    });
    successMessage.value = "Your consultation has been scheduled!";
    setTimeout(() => {
      closeModal();
      successMessage.value = "";
    }, 2000);
  } catch (err) {
    console.error(err);
  }
};
</script>

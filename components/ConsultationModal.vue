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
                class="w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-xl"
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

                    <!-- Show Form if Calendly is NOT yet visible -->
                    <form
                      v-if="!calendlyVisible"
                      @submit.prevent="proceedToCalendly"
                      class="space-y-4"
                    >
                      <div>
                        <label
                          class="block text-sm font-medium text-gray-700 mb-1"
                          >Name</label
                        >
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
                          >Phone Number</label
                        >
                        <input
                          type="tel"
                          v-model="formData.phone"
                          required
                          class="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-green-500 focus:ring-green-500"
                        />
                      </div>
                      <div class="mb-4 flex items-start">
                        <input
                          type="checkbox"
                          id="consent"
                          v-model="formData.consent"
                          required
                          class="mr-2"
                        />
                        <label for="consent" class="text-sm text-gray-700">
                          By providing a telephone number and submitting this
                          form you are consenting to be contacted by SMS text
                          message. Message & data rates may apply. You can reply
                          STOP to opt-out of further messaging and reply HELP
                          for more helpful information.
                        </label>
                      </div>
                      <button
                        type="submit"
                        :disabled="!formData.consent"
                        class="w-full bg-[#92A75A] text-white py-3 px-6 rounded-md hover:bg-green-700 transition-colors disabled:bg-gray-600"
                      >
                        {{
                          LoadingCalendarly
                            ? "Loading schedule ..."
                            : "Proceed to Schedule"
                        }}
                      </button>
                    </form>

                    <!-- Show Calendly Iframe After Submission -->
                    <div v-if="calendlyVisible" class="mt-6">
                      <iframe
                        :src="calendlyURL"
                        width="100%"
                        height="500"
                        frameborder="0"
                        scrolling="no"
                        class="rounded-xl shadow-lg"
                      ></iframe>
                    </div>

                    <!-- Error or Success Messages -->
                    <p v-if="error" class="text-red-500 text-sm mt-2">
                      {{ error }}
                    </p>
                    <p
                      v-if="successMessage"
                      class="text-green-500 text-sm mt-2 text-center w-full"
                    >
                      {{ successMessage }}
                    </p>
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
const { contactInfo, isLoading, error: err, fetchContactInfo } = useContact();

const formData = ref({
  name: "",
  phone: "",
  consent: false,
});
await fetchContactInfo();
const successMessage = ref("");
const calendlyVisible = ref(false);
const calendlyURL = ref("");
const LoadingCalendarly = ref(false);

const closeModal = () => {
  emit("close");
};
await fetchContactInfo();
calendlyURL.value = contactInfo.value.calendarly;
const proceedToCalendly = async () => {
  LoadingCalendarly.value = true;
  successMessage.value = "";
  try {
    await addConsultation({
      ...formData.value,
      source: props.source,
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
</script>

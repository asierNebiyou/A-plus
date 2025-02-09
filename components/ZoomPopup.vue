// CountdownPopup.vue
<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="transform translate-y-full opacity-0"
    enter-to-class="transform translate-y-0 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="transform translate-y-0 opacity-100"
    leave-to-class="transform translate-y-full opacity-0"
  >
    <div
      v-if="showPopup && !isPopupDismissed"
      :class="[
        'fixed z-50 backdrop-blur-md bg-white/90 dark:bg-gray-800/90',
        'border border-gray-100 dark:border-gray-700',
        'rounded-2xl shadow-2xl shadow-blue-500/10',
        isMobile ? 'bottom-4 left-4 right-4' : 'bottom-6 left-6 w-[400px]',
      ]"
    >
      <div class="relative p-6">
        <!-- Close button -->
        <button
          @click="dismissPopup"
          class="absolute top-4 right-4 p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          <svg
            class="w-4 h-4 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- Header -->
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            Next Consultation
          </h3>
          <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Join our upcoming session
          </p>
        </div>

        <!-- Countdown -->
        <div class="grid grid-cols-4 gap-3 mb-6">
          <div
            v-for="(time, unit) in countdown"
            :key="unit"
            class="flex flex-col items-center justify-center p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-100 dark:border-gray-600"
          >
            <span
              class="text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 text-transparent bg-clip-text"
            >
              {{ time }}
            </span>
            <span
              class="text-xs font-medium text-gray-500 dark:text-gray-400 mt-1"
            >
              {{ unit }}
            </span>
          </div>
        </div>

        <!-- Meeting info -->
        <div class="mb-6 p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20">
          <div class="flex items-center space-x-3">
            <div class="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/40">
              <svg
                class="w-5 h-5 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <h4 class="text-sm font-medium text-gray-900 dark:text-white">
                Zoom Meeting
              </h4>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                {{ formatDate() }}
              </p>
            </div>
          </div>
        </div>

        <!-- Join button -->
        <button
          @click="joinMeeting"
          class="w-full px-4 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl hover:from-blue-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-all duration-200 hover:scale-[1.02]"
        >
          Join Meeting
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const showPopup = ref(false);
const isPopupDismissed = ref(false);
const isMobile = ref(false);
const nextMeeting = ref(null);
const countdown = ref({
  Days: 0,
  Hours: 0,
  Minutes: 0,
  Seconds: 0,
});

const fetchNextMeeting = async () => {
  try {
    const response = await fetch("/api/zoom");
    if (response.ok) {
      const { link, scheduled } = await response.json();
      console.log(link, scheduled);
      nextMeeting.value = {
        link: link,
        scheduled: new Date(scheduled).getTime(),
      };
      updateCountdown();
    } else {
      console.error("Failed to fetch next meeting: ", response.statusText);
    }
  } catch (error) {
    console.error("Error fetching next meeting:", error);
  }
};

const formatDate = () => {
  if (!nextMeeting.value) return "";
  return new Date(nextMeeting.value.scheduled).toDateString();
};

const updateCountdown = () => {
  if (!nextMeeting.value) return;

  const now = new Date().getTime();
  const distance = nextMeeting.value.scheduled - now;

  countdown.value = {
    Days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    Hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    Minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    Seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };
};

const dismissPopup = () => {
  isPopupDismissed.value = true;
  localStorage.setItem("popupDismissed", "true");
};

const joinMeeting = () => {
  if (nextMeeting.value?.link) {
    window.open(nextMeeting.value.link, "_blank");
  }
};

const handleResize = () => {
  isMobile.value = window.innerWidth < 768;
};

const handleScroll = () => {
  if (!isMobile.value && window.scrollY > 100) {
    showPopup.value = true;
  }
};

let countdownInterval;

onMounted(() => {
  // Check if popup was previously dismissed
  isPopupDismissed.value = localStorage.getItem("popupDismissed") === "true";
  isMobile.value = window.innerWidth < 768;

  if (!isPopupDismissed.value) {
    fetchNextMeeting();
    console.log(nextMeeting.value);
    countdownInterval = setInterval(updateCountdown, 1000);

    if (!isMobile.value) {
      window.addEventListener("scroll", handleScroll);
    } else {
      showPopup.value = true;
    }
  }

  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  clearInterval(countdownInterval);
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", handleResize);
});
</script>

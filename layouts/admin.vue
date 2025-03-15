<template>
  <NuxtLoadingIndicator height="5" color="#1E2755" />
  <div class="min-h-screen bg-gray-50 flex">
    <!-- Sidebar -->
    <div class="fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200">
      <div class="flex items-center h-16 px-6 border-b border-gray-200">
        <a href="/"
          ><img
            src="/public/logo-light.png"
            alt="A plus Tutoring"
            class="h-12 m-auto"
          />
        </a>
      </div>

      <nav class="p-4 space-y-1">
        <NuxtLink
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          class="flex items-center px-4 py-3 text-[#1E2755] rounded-lg hover:bg-gray-100"
          :class="{
            'bg-[#92A75A] text-white hover:bg-[#92A75A]': isCurrentRoute(
              item.path
            ),
          }"
        >
          <component :is="item.icon" class="w-5 h-5 mr-3" />
          {{ item.name }}
        </NuxtLink>
      </nav>
    </div>

    <!-- Main Content -->
    <div class="flex-1 ml-64">
      <!-- Top Header -->
      <header
        class="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6"
      >
        <div class="flex items-center space-x-4">
          <button @click="toggleSidebar" class="lg:hidden">menu</button>
          <h2 class="text-[#1E2755] font-medium">{{ currentPage }}</h2>
        </div>

        <!-- User Menu -->
        <div class="relative">
          <Menu as="div" class="relative inline-block text-left">
            <MenuButton class="flex items-center space-x-2 text-[#1E2755]">
              <!-- <img 
                src="/default-avatar.png" 
                alt="User"
                class="w-8 h-8 rounded-full"
              > -->
              <span>User</span>
              <ChevronDownIcon class="w-4 h-4" />
            </MenuButton>

            <transition
              enter-active-class="transition duration-100 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <MenuItems
                class="absolute right-0 mt-2 w-48 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <div class="py-1">
                  <MenuItem v-slot="{ active }">
                    <a
                      @click.prevent="log_out"
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-red-600',
                      ]"
                    >
                      Logout
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </header>

      <main class="p-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import {
  HomeIcon,
  UsersIcon,
  CogIcon,
  ChevronDownIcon,
  CursorArrowRaysIcon,
  AtSymbolIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  InformationCircleIcon,
} from "@heroicons/vue/24/outline";
import { useAuth } from "~/composables/useAuth";
import { icons } from "lucide-vue-next";
const { login, logout, token, error } = useAuth();
const menuItems = [
  { name: "Pricing Plans", path: "/admin/pricing", icon: CurrencyDollarIcon },
  { name: "Contact", path: "/admin/contact", icon: UsersIcon },
  { name: "Referrals", path: "/admin/referrals", icon: CursorArrowRaysIcon },
  {
    name: "Submissions",
    path: "/admin/consultation",
    icon: AtSymbolIcon,
  },
  { name: "Testimonials", path: "/admin/testimonials", icon: UserGroupIcon },
  { name: "Faq", path: "/admin/faq", icon: InformationCircleIcon },
];

const route = useRoute();
const sidebarOpen = ref(true);

const currentPage = computed(() => {
  const currentMenuItem = menuItems.find((item) => isCurrentRoute(item.path));
  return currentMenuItem ? currentMenuItem.name : "Dashboard";
});

const isCurrentRoute = (path) => {
  return route.path === path;
};

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value;
};

const log_out = () => {
  logout();
};
</script>

<style scoped></style>

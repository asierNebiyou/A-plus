// AdminDashboard.vue
<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Admin Navigation -->
    <nav class="bg-[#92A75A] text-white shadow-lg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <span class="text-xl font-semibold">Admin Dashboard</span>
          </div>
          <div class="flex items-center space-x-4">
            <button
              @click="activeTab = 'blog'"
              :class="[
                'px-4 py-2 rounded-lg transition-colors',
                activeTab === 'blog' ? 'bg-white/20' : 'hover:bg-white/10',
              ]"
            >
              Blog Posts
            </button>
            <button
              @click="activeTab = 'pricing'"
              :class="[
                'px-4 py-2 rounded-lg transition-colors',
                activeTab === 'pricing' ? 'bg-white/20' : 'hover:bg-white/10',
              ]"
            >
              Pricing Plans
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div v-if="activeTab === 'blog'">
        <BlogPostEditor />
        <!-- <BlogPostsList /> -->
      </div>
      <div v-else>
        <PricingEditor />
      </div>
    </div>
  </div>
</template>

<script setup>
const activeTab = ref("blog");
</script>

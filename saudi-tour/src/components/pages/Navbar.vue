<template>
  <fwb-navbar class="bg-transparent shadow-md p-2">
    <template #logo>
      <img :src="imgUrl" class="h-16" alt="SaudiTour" />
    </template>

    <template #default="{ isShowMenu }">
      <fwb-navbar-collapse :is-show-menu="isShowMenu" class="flex justify-between items-center">
        <div class="flex space-x-4">
          <a :class="isShowMenu ? 'text-black' : 'text-white'" class="font-semibold hover:bg-custom flex items-center h-full px-3 py-2 rounded">Destination</a>
          <a :class="isShowMenu ? 'text-black' : 'text-white'" class="font-semibold hover:bg-custom flex items-center h-full px-3 py-2 rounded">Thing To Do</a>
          <a :class="isShowMenu ? 'text-black' : 'text-white'" class="font-semibold hover:bg-custom flex items-center h-full px-3 py-2 rounded">Plan Your Trip</a>
          <a :class="isShowMenu ? 'text-black' : 'text-white'" class="font-semibold hover:bg-custom flex items-center h-full px-3 py-2 rounded">Saudi Calendar</a>
          <a :class="isShowMenu ? 'text-black' : 'text-white'" class="font-semibold hover:bg-custom flex items-center h-full px-3 py-2 rounded">Saudi Map</a>
          <a :class="isShowMenu ? 'text-black' : 'text-white'" class="font-semibold hover:bg-custom flex items-center h-full px-3 py-2 rounded">Get Your Visa</a>
        </div>

        <div class="flex items-center space-x-4">
          <div v-if="showSearch" class="relative">
            <input
              type="text"
              placeholder="Search..."
              class="px-2 py-1 rounded border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
            />
            <button @click="showSearch = false" class="absolute right-0 top-0 mt-1 mr-2 text-black">
              <font-awesome-icon :icon="['fas', 'times']" />
            </button>
          </div>

          <div class="bg-white p-2 rounded-full flex items-center hover:bg-gray-200 transition">
            <button @click="toggleSearch" class="text-black flex items-center">
              <font-awesome-icon :icon="['fas', 'search']" />
            </button>
          </div>

          <div class="bg-white p-2 rounded-full flex items-center hover:bg-gray-200 transition">
            <button class="text-black flex items-center">
              <font-awesome-icon :icon="['fas', 'globe']" />
            </button>
          </div>

          <button 
            style="background-color: #e9b9b9; color: black;" 
            class="hover:bg-pink-300 py-2 px-3 rounded transition flex items-center"
          >
            Login/Sign Up
          </button>
        </div>
      </fwb-navbar-collapse>
    </template>
  </fwb-navbar>
</template>

<script setup>
import { ref } from 'vue';
import imgUrl from '../assets/Images/logo.png';
import { FwbNavbar, FwbNavbarCollapse } from 'flowbite-vue';

const showSearch = ref(false);

function toggleSearch() {
  showSearch.value = !showSearch.value;
}
</script>

<style scoped>
.hover\:bg-custom:hover {
  background-color: #e9b9b9;
}
</style>

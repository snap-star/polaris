<template>
    <div class="flex flex-col items-center justify-center p-4 bg-gray-100 min-h-screen">
      <div id="iframeContainer" class="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
        <iframe
          v-if="selectedServer === 'server1'"
          :src="iframeSrc1"
          frameborder="0"
          class="w-full h-96 md:h-[600px]"
          allowfullscreen="allowfullscreen"
          scrolling="no"
        ></iframe>
        <iframe
          v-if="selectedServer === 'server2'"
          :src="iframeSrc2"
          class="w-full h-96 md:h-[600px]"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; fullscreen; picture-in-picture"
          scrolling="no"
          seamless=""
          sandbox="allow-same-origin allow-scripts"
        ></iframe>
      </div>
      <div class="mt-4 w-full max-w-xs">
        <label for="serverSelect" class="block text-sm font-medium text-gray-700">Pilih Server:</label>
        <select
          v-model="selectedServer"
          id="serverSelect"
          class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="server1">Server 1</option>
          <option value="server2">Server 2</option>
        </select>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      iframeSrc1: {
        type: String,
        required: true
      },
      iframeSrc2: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        selectedServer: 'server1'
      };
    }
  };
  </script>
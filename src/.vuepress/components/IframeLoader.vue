<template>
  <div class="flex flex-col items-center justify-center p-4 bg-gray-100 min-h-screen">
    <el-card
      class="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden"
      :header="cardHeader"
      :footer="cardFooter"
      :body-style="cardBodyStyle"
      :body-class="cardBodyClass"
      :shadow="cardShadow"
    >
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
      <template #footer>
        <div class="flex justify-between items-center px-4 py-2 bg-gray-200">
          <div class="text-center">{{ cardFooter }}</div>
          <br>
          <el-dropdown>
            <el-button type="primary">
              <i class="fas fa-caret-down"></i> Pilih Server
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="selectedServer = 'server1'">
                  Server 1
                </el-dropdown-item>
                <el-dropdown-item @click="selectedServer = 'server2'">
                  Server 2
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps } from 'vue'
import { ElCard, ElSelect, ElOption, ElDropdown, ElDropdownMenu, ElDropdownItem, ElButton } from 'element-plus'

// Props from parent component
const props = defineProps<{
  iframeSrc1: string
  iframeSrc2: string
}>()

// Data
const selectedServer = ref('server1')

// Card attributes
const cardHeader = ''
const cardFooter = 'Pilih Server Untuk Memulai Streaming.'
const cardBodyStyle = { padding: '0' }
const cardBodyClass = ''
const cardShadow = 'always'
</script>

<style scoped>
/* Add any additional styles here */
</style>

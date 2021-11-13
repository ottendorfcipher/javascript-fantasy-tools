<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

</script>

<template>
    <div class="hero min-h-screen" style="background-image: url(&quot;https://picsum.photos/id/439/1600/1200&quot;);">
        <div class="hero-overlay bg-opacity-60">
        </div> 
        <div class="text-center hero-content text-neutral-content">
            <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">
                    Project Management App
                </h1> 
                <p class="mb-5">
                    Fun 
                </p> 
                <button class="btn btn-primary">Get Started</button>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>

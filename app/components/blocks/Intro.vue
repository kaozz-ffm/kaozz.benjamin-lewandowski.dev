<script setup lang="ts">
defineProps<{
    title?: string,
    description?: string
}>()
</script>

<template>
    <div v-if="title || description" class="grid gap-4-12-clamp">
        <h2 v-if="title" class="text-balance font-headline text-2xl-3xl-clamp mt-0 mb-0" v-html="title"></h2>
        <p v-if="description" class="text-balance font-copy text-lg-xl-clamp mt-0 mb-0 m-0" v-html="description"></p>
    </div>
</template>

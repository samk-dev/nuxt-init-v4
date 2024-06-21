<script setup lang="ts">
defineProps({
  // eslint-disable-next-line vue/require-default-prop
  error: Object
})
const localePath = useLocalePath()
const handleError = (): Promise<void> =>
  clearError({ redirect: localePath({ name: 'index' }) })
</script>

<template>
  <main
    class="flex h-full w-full flex-col items-center justify-center text-center"
  >
    <p
      class="text-lg md:text-xl font-bold text-primary-700 dark:text-primary-500"
    >
      {{ error?.statusCode }}
    </p>
    <h1 v-if="error?.statusCode === 404" class="text-5xl md:text-6xl font-bold">
      {{ $t('page-not-found') }}
    </h1>
    <h1 v-else>
      {{ $t('there-has-been-an-error') }}
    </h1>

    <button type="button" class="mt-6" @click="handleError">
      <span class="text-primary-700 dark:text-primary-500" aria-hidden="true">
        &larr;
      </span>
      {{ $t('back-to-index') }}
    </button>
  </main>
</template>

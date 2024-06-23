<template>
  <div>
    <p>{{ t('page-translations-title') }}</p>
    <p>{{ t('page-translations-description') }}</p>
    <p>{{ t('page-translations-image') }}</p>

    <AppLangSwitcher />
  </div>
</template>

<script lang="ts" setup>
const { t } = useI18n()

const dynamicTitle = computed(() => t('page-translations-title'))
const dynamicDescription = computed(() => t('page-translations-description'))
const dynamicImage = computed(() => t('page-translations-image'))

useSeoMeta({
  title: dynamicTitle,
  ogTitle: dynamicTitle,
  description: dynamicDescription,
  ogDescription: dynamicDescription,
  ogImage: dynamicImage,
  twitterCard: 'summary_large_image'
})
</script>

<style></style>

<script lang="ts" setup>
const { locale, locales, setLocale, setLocaleCookie } = useI18n()

const handleLocaleSwitch = (langCode: string) => {
  if (langCode !== locale.value) {
    setLocale(langCode)
    setLocaleCookie(langCode)
  }
}

const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value)
})
</script>

<template>
  <ul>
    <li v-for="lang in availableLocales" :key="lang.code">
      <button type="button" @click="handleLocaleSwitch(lang.code)">
        {{ lang.name }}
      </button>
    </li>
  </ul>
</template>

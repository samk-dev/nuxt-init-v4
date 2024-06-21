<script lang="ts" setup>
const { locale, locales, setLocale, setLocaleCookie } = useI18n()

const handleLocaleSwitch = (langCode: string) => {
  if (langCode !== locale.value) {
    setLocale(langCode)
    setLocaleCookie(langCode)
  }
}

const getLocaleCode = (localeName: string) => {
  const langCode = locales.value.find((el) => el.name === localeName)
  return langCode?.code === locale.value
}
</script>

<template>
  <ul>
    <li v-for="lang in locales" :key="lang.code">
      <button
        type="button"
        :disabled="getLocaleCode(String(lang.name))"
        @click="handleLocaleSwitch(lang.code)"
      >
        {{ lang.name }}
      </button>
    </li>
  </ul>
</template>

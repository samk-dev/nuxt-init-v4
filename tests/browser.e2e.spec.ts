import { fileURLToPath } from 'node:url'
import { createPage, setup } from '@nuxt/test-utils/e2e'
import { describe, expect, it } from 'vitest'

await setup({
  rootDir: fileURLToPath(new URL('../', import.meta.url)),
  browser: true
})

describe('browser', () => {
  it('runs a test', async () => {
    const page = await createPage('/')
    const text = await page.getByTestId('index-h1').textContent()
    expect(text).toContain('index page')
    await page.close()
  })
})

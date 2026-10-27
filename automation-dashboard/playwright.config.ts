import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: [
    ['html', { outputFolder: '../public/playwright-report', open: 'never' }],
    ['list']
  ],
  use: {
    baseURL: 'https://www.saucedemo.com',
    trace: 'on',
    screenshot: 'on',
    video: 'on',
    actionTimeout: 10000,
  },
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
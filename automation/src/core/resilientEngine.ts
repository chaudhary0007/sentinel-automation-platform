import { Page, Locator } from '@playwright/test';

export interface ResilientSelector {
  name: string;
  primary: string;
  fallbacks: string[];
}

export async function resolveElement(
  page: Page,
  selector: ResilientSelector,
  timeout = 3000
): Promise<Locator> {
  const primaryLocator = page.locator(selector.primary);

  try {
    await primaryLocator.waitFor({ state: 'visible', timeout });
    return primaryLocator;
  } catch {
    console.warn(`\x1b[33m[Self-Healing] Primary locator failed for "${selector.name}": "${selector.primary}"\x1b[0m`);

    for (let i = 0; i < selector.fallbacks.length; i++) {
      const fallback = selector.fallbacks[i];
      const fallbackLocator = page.locator(fallback);
      try {
        await fallbackLocator.waitFor({ state: 'visible', timeout });
        console.log(`\x1b[32m[Self-Healing] Successfully recovered using Tier-${i + 1} fallback: "${fallback}"\x1b[0m`);
        return fallbackLocator;
      } catch {
        continue;
      }
    }

    throw new Error(
      `[Self-Healing Exhausted] Element "${selector.name}" could not be resolved using primary or any fallback selectors.`
    );
  }
}
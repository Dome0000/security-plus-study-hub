import type { ContentBundle } from '../../scripts/validate-content';

/**
 * Loads the active content bundle.
 * Uses isolated fixture data only when explicitly launched with VITE_USE_FIXTURE=true
 * (eliminated during normal production builds so fixtures never ship to production).
 */
export async function loadActiveContentBundle(): Promise<ContentBundle> {
  if (import.meta.env.VITE_USE_FIXTURE === 'true') {
    const mod = await import('../__fixtures__/sampleContent');
    return mod.FIXTURE_CONTENT_BUNDLE;
  }
  const prod = await import('./contentRegistry');
  return prod.loadFullContentBundle();
}

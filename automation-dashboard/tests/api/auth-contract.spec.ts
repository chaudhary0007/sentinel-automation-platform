import { test, expect } from '@playwright/test';

test.describe('API Health and Contract Validation', () => {
  test('GET /users returns schema compliant payload and response headers', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users?page=1');
    
    expect(response.status()).toBe(200);
    expect(response.headers()['content-type']).toContain('application/json');

    const json = await response.json();
    expect(json.page).toBe(1);
    expect(Array.isArray(json.data)).toBeTruthy();
    expect(json.data[0]).toHaveProperty('id');
    expect(json.data[0]).toHaveProperty('email');
  });
});
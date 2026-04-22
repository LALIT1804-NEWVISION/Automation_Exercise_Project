import { test, expect } from '@playwright/test';

test.describe('api test cases', () => {
    const apiBase = 'https://fakerestapi.azurewebsites.net/api/v1';

    test('TC001 - GET → Fetch list of Activities', async ({ request }) => {
        const response = await request.get(`${apiBase}/Activities`);
        expect(response.status()).toBe(200);
        const body = await response.json();
        //console.log(body);
        expect(Array.isArray(body)).toBeTruthy();
        expect(body.length).toBeGreaterThan(0);
        expect(body[0]).toHaveProperty('id');
        expect(body[0]).toHaveProperty('title');
        expect(body[0]).toHaveProperty('dueDate');
        expect(body[0]).toHaveProperty('completed');
    });

    test('TC002 - GET → Fetch single Activity by ID', async ({ request }) => {
        const response = await request.get(`${apiBase}/Activities/1`);
        expect(response.status()).toBe(200);
        const body = await response.json();
        console.log(body);
        expect(body.id).toBe(1);
        expect(body).toHaveProperty('id');
        expect(body).toHaveProperty('title');
        expect(body).toHaveProperty('dueDate');
        expect(body).toHaveProperty('completed');
    });

    test('TC003 - POST → Create new Activity', async ({ request }) => {
        const payload = {
            title: 'Activity 31',
            dueDate: '2026-04-26T11:05:33.5560115+00:00',
            completed: false,
        };
        const response = await request.post(`${apiBase}/Activities`, {
            data: payload
        });
        //expect(response.status()).toBe(201);
        expect(response.status()).toBe(200);
        const body = await response.json();
        expect(body).toMatchObject(payload);
        expect(body).toHaveProperty('id');
        expect(typeof body.id).toBe('number');
    });

    test('TC004 - PUT → Update entire Activity', async ({ request }) => {
        const payload = {
            title: 'Updated Activity Title',
            dueDate: new Date().toISOString(),
            completed: true,
        };
        const response = await request.put(`${apiBase}/Activities/1`, {
            data: payload,
            headers: {
                'Content-Type': 'application/json',
            },
        });
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        const body = await response.json();
        expect(body.title).toBe(payload.title);
        expect(body.completed).toBe(payload.completed);
        expect(new Date(body.dueDate).toISOString()).toBe(payload.dueDate);
    });

    test('TC006 - DELETE Activity', async ({ request }) => {
        const response = await request.delete(`${apiBase}/Activities/1`);
        expect(response.status()).toBe(200);
        const text = await response.text();
        expect(text).toBe('');
    });
});
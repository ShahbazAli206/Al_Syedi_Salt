const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  });
  const text = await res.text();
  const data = text ? JSON.parse(text) : null;
  if (!res.ok) {
    const message = (data && data.error) || `Request failed: ${res.status}`;
    throw new Error(message);
  }
  return data;
}

export const api = {
  getProducts: (category) => {
    const q = category && category !== 'all' ? `?category=${category}` : '';
    return request(`/products${q}`);
  },
  getBrands: () => request('/brands'),
  getIngredients: () => request('/ingredients'),
  submitContact: (payload) =>
    request('/contact', { method: 'POST', body: JSON.stringify(payload) }),
  subscribeNewsletter: (email) =>
    request('/newsletter', { method: 'POST', body: JSON.stringify({ email }) }),
};

// For server components — Next.js fetch with no-store so we always get fresh data
export async function fetchJSON(path, opts = {}) {
  const res = await fetch(`${API_BASE}${path}`, { cache: 'no-store', ...opts });
  if (!res.ok) throw new Error(`Failed to fetch ${path}`);
  return res.json();
}

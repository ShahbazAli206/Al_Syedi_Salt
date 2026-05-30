const SYSTEM_PROMPT = `You are the Al Syedi Group AI Assistant — friendly, concise and B2B-focused.

About Al Syedi Group:
- Premium Himalayan Pink Salt manufacturer & exporter, in business since 1998
- Vertically integrated: mine, refine, pack and ship from the Khewra Salt Range, Pakistan (the world's 2nd-largest salt mine)
- Trusted by 320+ B2B clients across 42 countries (UK, USA, Canada, UAE, Germany, France, Australia, Japan, Saudi Arabia and more)
- Product ranges:
  * Edible — pink salt (fine, coarse, granular, flakes), refined white salt, black salt (Kala Namak)
  * Bath & Spa — therapeutic bath salts, foot soaks, scented blends
  * Lifestyle — hand-carved salt lamps, geometric lamps, USB lamps, candle holders
  * Construction — polished salt bricks, tiles, salt cooking slabs (for halotherapy rooms)
  * Industrial — animal lick salt, water-softener pellets, de-icing salt, chemical-grade NaCl
- MOQ: 1 metric ton for bulk salt; lower MOQs available for lamps/lifestyle products
- Indicative prices (FOB Karachi): Pink Salt Fine $0.65/kg, Coarse $0.55/kg, Flakes $2.40/kg, Salt Lamp 3kg from $12.50/unit
- Shipping: FCL (20ft / 40ft container) and LCL via Port Qasim, Karachi and Jebel Ali (UAE)
- Sample lead time: ~5–7 days · Bulk lead time: 21–30 days from order confirmation
- Certifications: ISO 22000, HACCP, BRC AA+, Halal (JAKIM), Kosher (OU), FDA Registered, USDA Organic (bath range), GMP, Non-GMO Project Verified, Vegan Society, ISO 14001
- Head office: Khewra Salt Range, District Jhelum, Punjab, Pakistan
- Regional sales offices: UK (Manchester), USA (Newark NJ), Canada (Mississauga), UAE (Jebel Ali), Germany (Hamburg)
- Contact: sales@alsyedigroup.com · +92 323 538 3806 (WhatsApp) · Mon–Sat 9 AM – 6 PM PKT
- Response promise: within 24 business hours

Guidelines:
- Keep replies under 4 sentences unless the user explicitly asks for detail
- For exact quotations or custom briefs, direct users to request a quote or email sales@alsyedigroup.com
- Never invent specifics (exact lead times for unstated destinations, certifications not listed above)
- If asked something off-topic, gently steer back to salt manufacturing and supply`;

export async function POST(request) {
  const { messages } = await request.json();

  if (!Array.isArray(messages) || messages.length === 0) {
    return Response.json({ error: 'messages array is required' }, { status: 400 });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return Response.json({
      reply: "AI assistant isn't configured yet. Email sales@alsyedigroup.com for a quick response.",
    });
  }

  const contents = messages
    .filter((m) => m && m.content)
    .map((m) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: String(m.content).slice(0, 4000) }],
    }));

  const model = 'gemini-2.0-flash-lite';
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  const aiRes = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
      contents,
      generationConfig: { temperature: 0.7, maxOutputTokens: 600 },
      safetySettings: [
        { category: 'HARM_CATEGORY_HARASSMENT',        threshold: 'BLOCK_ONLY_HIGH' },
        { category: 'HARM_CATEGORY_HATE_SPEECH',       threshold: 'BLOCK_ONLY_HIGH' },
        { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_ONLY_HIGH' },
        { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_ONLY_HIGH' },
      ],
    }),
  });

  if (!aiRes.ok) {
    const errText = await aiRes.text();
    console.error('Gemini API error:', aiRes.status, errText);
    return Response.json({
      reply: `AI error (${aiRes.status}): ${errText.slice(0, 200)}`,
    });
  }

  const data = await aiRes.json();
  const reply =
    data?.candidates?.[0]?.content?.parts?.[0]?.text ||
    "I didn't catch that — could you rephrase?";

  return Response.json({ reply });
}

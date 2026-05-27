'use client';

import { useEffect, useRef, useState } from 'react';

const WELCOME = {
  role: 'assistant',
  content:
    "Hi! I'm the **Al Syedi Assistant**. Ask me anything about our Himalayan Pink Salt, bulk supply, private label, certifications or shipping to your country.",
};

const SUGGESTIONS = [
  'What is your MOQ?',
  'Pink salt price per kg?',
  'Do you ship to the UK / US / Canada?',
  'Tell me about private label',
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, loading, open]);

  async function send(text) {
    const content = (text ?? input).trim();
    if (!content || loading) return;
    setInput('');
    const next = [...messages, { role: 'user', content }];
    setMessages(next);
    setLoading(true);

    try {
      const apiBase = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
      const res = await fetch(`${apiBase}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: next.map((m) => ({ role: m.role, content: m.content })),
        }),
      });
      const data = await res.json();
      setMessages([
        ...next,
        { role: 'assistant', content: data.reply || data.error || 'No response.' },
      ]);
    } catch (err) {
      setMessages([
        ...next,
        {
          role: 'assistant',
          content:
            "Sorry — I'm having trouble reaching the server. Please try again or email sales@alsyedigroup.com.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function renderMessage(content) {
    // Basic markdown: **bold** and \n line breaks
    const parts = content.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i}>{part.slice(2, -2)}</strong>;
      }
      return part.split('\n').map((line, j, arr) => (
        <span key={`${i}-${j}`}>
          {line}
          {j < arr.length - 1 && <br />}
        </span>
      ));
    });
  }

  return (
    <>
      <div className="floating-actions">
        <a
          className="fab green"
          aria-label="Chat on WhatsApp"
          href="https://wa.me/923004567890"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.5 14.4c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2s-.8 1-1 1.2c-.2.2-.4.2-.7 0-.4-.2-1.5-.5-2.8-1.7-1-.9-1.7-2.1-1.9-2.4-.2-.4 0-.5.2-.7l.5-.6c.2-.2.2-.3.4-.6.1-.2.1-.4 0-.6l-.9-2.2c-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.2 3.3 5.2 4.6 1.8.8 2.5.8 3.4.7.5-.1 1.8-.7 2-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.7-.4zM12 22a10 10 0 01-5.3-1.5L2 22l1.6-4.5A10 10 0 1112 22z" />
          </svg>
        </a>
        <button
          className="fab"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close chat' : 'Open chat'}
        >
          {open ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="chatbot-panel" role="dialog" aria-label="Al Syedi AI Assistant">
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" />
                </svg>
              </div>
              <div>
                <div className="chatbot-eyebrow">AI ASSISTANT</div>
                <strong>Al Syedi Assistant</strong>
              </div>
            </div>
            <button className="chatbot-close" onClick={() => setOpen(false)} aria-label="Close">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="chatbot-messages" ref={scrollRef}>
            {messages.map((m, i) => (
              <div key={i} className={`chat-msg chat-msg-${m.role}`}>
                {renderMessage(m.content)}
              </div>
            ))}
            {loading && (
              <div className="chat-msg chat-msg-assistant chat-typing">
                <span></span><span></span><span></span>
              </div>
            )}
            {messages.length === 1 && !loading && (
              <div className="chat-suggestions">
                {SUGGESTIONS.map((s) => (
                  <button key={s} type="button" onClick={() => send(s)} className="chat-suggestion">
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            className="chatbot-input"
            onSubmit={(e) => { e.preventDefault(); send(); }}
          >
            <input
              type="text"
              placeholder="Ask about MOQs, prices, shipping…"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={loading}
              autoFocus
            />
            <button type="submit" disabled={loading || !input.trim()} aria-label="Send">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}

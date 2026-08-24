import { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
}

/**
 * Top-level safety net. Without this, any uncaught render error
 * (e.g. Clerk throwing because the publishable key is missing/invalid)
 * unmounts the whole React tree and leaves a silent blank white screen —
 * with no message telling the user or developer what went wrong.
 */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: { componentStack: string }) {
    // eslint-disable-next-line no-console
    console.error('App crashed:', error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      const message = this.state.error.message || String(this.state.error);
      const isClerkKeyIssue = /publishable ?key/i.test(message);

      return (
        <div
          style={{
            minHeight: '100dvh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            textAlign: 'center',
            background: '#14141a',
            color: '#f1f5f9',
            fontFamily: 'sans-serif',
          }}
        >
          <div style={{ fontSize: 40, marginBottom: 12 }}>⚠️</div>
          <h1 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>
            অ্যাপ লোড করা যায়নি
          </h1>
          <p style={{ fontSize: 14, color: '#94a3b8', maxWidth: 320, lineHeight: 1.5, marginBottom: 16 }}>
            {isClerkKeyIssue
              ? 'Login সিস্টেম (Clerk) কনফিগার করা নেই বা key ভুল। VITE_CLERK_PUBLISHABLE_KEY সঠিকভাবে সেট করে আবার build করুন।'
              : 'একটি অপ্রত্যাশিত সমস্যা হয়েছে। ইন্টারনেট সংযোগ চেক করে আবার চেষ্টা করুন।'}
          </p>
          <pre
            style={{
              fontSize: 11,
              color: '#64748b',
              maxWidth: '100%',
              overflowX: 'auto',
              background: '#0b0b0f',
              padding: 10,
              borderRadius: 8,
              marginBottom: 16,
            }}
          >
            {message}
          </pre>
          <button
            onClick={() => window.location.reload()}
            style={{
              background: '#e0221c',
              color: 'white',
              fontWeight: 700,
              padding: '10px 20px',
              borderRadius: 10,
              border: 'none',
            }}
          >
            আবার চেষ্টা করুন
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

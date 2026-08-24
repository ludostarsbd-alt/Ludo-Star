interface Props {
  context?: string;
}

/**
 * Shown instead of an infinite spinner when Clerk fails to finish loading
 * (bad/missing VITE_CLERK_PUBLISHABLE_KEY, blocked network, etc).
 */
export function ClerkStuckFallback({ context }: Props) {
  return (
    <div className="min-h-[100dvh] w-full flex items-center justify-center px-5 text-center text-white">
      <div className="w-full max-w-sm rounded-3xl border border-red-400/30 bg-black/45 p-7 shadow-2xl backdrop-blur-md">
        <div className="text-4xl mb-3">⚠️</div>
        <h1 className="text-lg font-black mb-2">লোড হচ্ছে না</h1>
        <p className="text-sm text-white/60 leading-relaxed mb-5">
          {context ?? 'Login সিস্টেম লোড করা যাচ্ছে না।'} Clerk publishable key ভুল/অনুপস্থিত হতে পারে,
          অথবা ইন্টারনেট সংযোগ নেই। সংযোগ চেক করে আবার চেষ্টা করুন।
        </p>
        <button
          onClick={() => window.location.reload()}
          className="w-full rounded-xl bg-red-600 hover:bg-red-700 py-3 font-black text-white"
        >
          আবার চেষ্টা করুন
        </button>
      </div>
    </div>
  );
}

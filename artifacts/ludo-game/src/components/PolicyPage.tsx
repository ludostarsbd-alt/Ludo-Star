import { ArrowLeft, Mail } from 'lucide-react';
import { useLocation } from 'wouter';

type PolicyKind = 'privacy' | 'terms' | 'faq' | 'help';

const content: Record<PolicyKind, { title: string; paragraphs: string[] }> = {
  privacy: {
    title: 'Privacy Policy',
    paragraphs: [
      'LUDO STAR BD uses account, gameplay and wallet information only to provide the game, tournament and support services.',
      'Authentication data is handled through the configured identity provider. Never share your password or one-time code with another person.',
      'For data-access or deletion requests, contact ludostarsbd@gmail.com from the email address associated with your account.',
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    paragraphs: [
      'By using LUDO STAR BD, you agree to play fairly, provide accurate account information and follow tournament rules.',
      'Tournament entry fees, prize pools and currency values are displayed before joining. Results recorded by the tournament server are final unless support confirms an error.',
      'Abuse, cheating, automation and attempts to manipulate payments or matchmaking may result in account restrictions.',
    ],
  },
  faq: {
    title: 'Frequently Asked Questions',
    paragraphs: [
      'How do I join a tournament? Open Tournament from the home screen, choose the available format and review the entry fee and prize pool before joining.',
      'Why is a tournament unavailable? A tournament can be upcoming, full, closed or temporarily unavailable while the server is updating its status.',
      'How do I get help? Use the Support button below or email ludostarsbd@gmail.com with your player name and a short description of the issue.',
    ],
  },
  help: {
    title: 'Help & Legal',
    paragraphs: [
      'Keep the application updated and use a stable internet connection for online matches and tournaments.',
      'If a payment, OTP or match status looks incorrect, do not repeat the transaction. Save the visible order or match reference and contact support.',
      'Support email: ludostarsbd@gmail.com.',
    ],
  },
};

export function PolicyPage({ kind }: { kind: PolicyKind }) {
  const [, setLocation] = useLocation();
  const page = content[kind];
  return (
    <main className="min-h-[100dvh] bg-[#050818] px-4 py-6 text-white">
      <div className="mx-auto w-full max-w-xl">
        <button onClick={() => setLocation('/')} className="mb-6 flex items-center gap-2 text-sm font-bold text-cyan-300">
          <ArrowLeft size={16} /> Back to LUDO STAR BD
        </button>
        <section className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl">
          <h1 className="text-2xl font-black">{page.title}</h1>
          <div className="mt-5 space-y-4 text-sm leading-6 text-white/70">
            {page.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <a href="mailto:ludostarsbd@gmail.com" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-3 text-sm font-black text-[#04121d]">
            <Mail size={16} /> Contact Support
          </a>
        </section>
      </div>
    </main>
  );
}

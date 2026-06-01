import { JSX } from 'react'

interface TrustItem {
  icon: JSX.Element
  label: string
}

const TRUST_ITEMS: TrustItem[] = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: 'Fast turnaround',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    label: 'Mobile-first design',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M3 5a2 2 0 0 1 2-2h3l2 4-2.5 1.5A11 11 0 0 0 14.5 15.5L16 13l4 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5z" />
      </svg>
    ),
    label: '24/7 support',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
    label: 'Asaba, Nigeria',
  },
]

export default function CTASection(): JSX.Element {
  return (
    <section
      id="cta"
      className="py-16 px-4 text-center bg-gradient-to-b from-blue-950 to-blue-600"
      aria-label="Call to action"
    >
      <div className="max-w-2xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-900/40 border border-blue-400/30 rounded-full px-4 py-1.5 text-sm text-blue-100 mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            className="text-green-500"
            aria-hidden="true"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          Available for new projects
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-medium text-white mb-3 leading-snug">
          Let's build something great together
        </h2>

        {/* Subtext */}
        <p className="text-base text-blue-100 leading-relaxed mb-8">
          Whether you need a responsive website, a bold brand identity, or a digital marketing
          strategy — let's talk about your goals.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          <a
            href="https://wa.me/+2348169910462"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-blue-950 font-medium px-5 py-2.5 rounded-lg text-[15px] hover:opacity-85 transition-opacity"
          >
            <WhatsAppIcon />
            Hire me on WhatsApp
          </a>

          <a
            href="mailto:aninwezeemekafelix@gmail.com"
            className="inline-flex items-center gap-2 bg-transparent text-white border border-white/30 font-medium px-5 py-2.5 rounded-lg text-[15px] hover:bg-white/10 transition-colors"
          >
            <MailIcon />
            Send an email
          </a>
        </div>

        {/* Trust items */}
        <div className="flex flex-wrap items-center justify-center gap-5">
          {TRUST_ITEMS.map((item: TrustItem) => (
            <div
              key={item.label}
              className="flex items-center gap-1.5 text-sm text-blue-100"
            >
              {item.icon}
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhatsAppIcon(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="currentColor"
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
    </svg>
  )
}

function MailIcon(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      fill="currentColor"
      viewBox="0 0 16 16"
      aria-hidden="true"
    >
      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
    </svg>
  )
}

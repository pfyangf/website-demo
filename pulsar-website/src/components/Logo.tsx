type LogoProps = {
  variant?: 'mark' | 'lockup' | 'footer';
};

function Mark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <circle
        cx="24"
        cy="24"
        r="19"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeDasharray="92 28"
        transform="rotate(-28 24 24)"
        opacity="0.62"
      />
      <circle cx="24" cy="24" r="19" stroke="#65E5F2" strokeWidth="1.15" strokeLinecap="round" strokeDasharray="6 114" transform="rotate(8 24 24)" opacity="0.9" />
      <path d="M15.5 9.5 v29" stroke="currentColor" strokeWidth="3.3" strokeLinecap="round" />
      <path
        d="M15.5 9.6 h8.1 c7.2 0 11.8 4.35 11.8 10.35 0 5.9-4.5 10.25-11.8 10.25 H15.5"
        stroke="currentColor"
        strokeWidth="3.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="38.2" cy="13.2" r="2.15" fill="#65E5F2" />
      <circle cx="38.2" cy="13.2" r="3.7" stroke="#65E5F2" strokeWidth="0.85" opacity="0.45" />
    </svg>
  );
}

export function Logo({ variant = 'lockup' }: LogoProps) {
  if (variant === 'mark') {
    return <Mark className="logo-mark" />;
  }

  if (variant === 'footer') {
    return (
      <div className="logo logo--footer">
        <Mark className="logo-mark" />
        <div className="logo-text">
          <span className="logo-word">PULSAR</span>
          <span className="logo-sub">DEVELOPMENT LIMITED</span>
        </div>
      </div>
    );
  }

  return (
    <div className="logo">
      <Mark className="logo-mark" />
      <div className="logo-text">
        <span className="logo-word">PULSAR</span>
        <span className="logo-sub">DEVELOPMENT</span>
      </div>
    </div>
  );
}

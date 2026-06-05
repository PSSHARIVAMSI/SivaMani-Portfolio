// Official brand SVG logos for certifications
export function SnowflakeLogo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <path d="M50 5 L50 95 M5 50 L95 50 M17.9 17.9 L82.1 82.1 M82.1 17.9 L17.9 82.1" stroke="#29B5E8" strokeWidth="7" strokeLinecap="round"/>
      <circle cx="50" cy="5" r="5" fill="#29B5E8"/>
      <circle cx="50" cy="95" r="5" fill="#29B5E8"/>
      <circle cx="5" cy="50" r="5" fill="#29B5E8"/>
      <circle cx="95" cy="50" r="5" fill="#29B5E8"/>
      <circle cx="17.9" cy="17.9" r="5" fill="#29B5E8"/>
      <circle cx="82.1" cy="82.1" r="5" fill="#29B5E8"/>
      <circle cx="82.1" cy="17.9" r="5" fill="#29B5E8"/>
      <circle cx="17.9" cy="82.1" r="5" fill="#29B5E8"/>
      <circle cx="50" cy="50" r="8" fill="#29B5E8"/>
    </svg>
  )
}

export function AWSLogo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.6} viewBox="0 0 80 48" fill="none">
      <path d="M22.3 19.5c0 .8.1 1.4.2 1.9.2.5.4.9.7 1.4.1.2.2.4.2.6 0 .3-.2.6-.5.8l-1.7 1.1c-.2.2-.5.2-.7.2-.3 0-.5-.1-.8-.3-.4-.4-.7-.8-1-1.3-.3-.5-.6-1-.8-1.6-2 2.4-4.5 3.5-7.5 3.5-2.1 0-3.9-.6-5.1-1.8C4 22.8 3.3 21.2 3.3 19c0-2.3.8-4.2 2.5-5.6 1.6-1.4 3.8-2.1 6.6-2.1.9 0 1.8.1 2.8.2 1 .1 2 .3 3 .6v-1.9c0-2-.4-3.4-1.2-4.2-.8-.8-2.2-1.2-4.1-1.2-1 0-2 .1-3 .4-1 .3-2 .7-3 1.2-.4.2-.8.3-1 .3-.6 0-.8-.4-.8-1.3V4c0-.7.1-1.2.3-1.5.2-.3.6-.6 1.2-.8 1-.5 2.2-.9 3.5-1.2C10.5.2 11.9 0 13.4 0c3.3 0 5.7.7 7.4 2.2 1.6 1.5 2.5 3.7 2.5 6.7v8.6zM11.5 22c.9 0 1.8-.2 2.8-.5 1-.3 1.8-.9 2.5-1.7.4-.5.7-1.1.9-1.7.2-.7.3-1.5.3-2.5v-1.2c-.8-.2-1.6-.4-2.4-.5-.8-.1-1.6-.2-2.4-.2-1.7 0-2.9.3-3.8 1-.9.7-1.3 1.6-1.3 2.9 0 1.2.3 2.1 1 2.7.6.5 1.5.7 2.4.7zm20.7 2.8c-.7 0-1.2-.1-1.5-.4-.3-.3-.6-.8-.9-1.5L24 5.9c-.2-.8-.4-1.3-.4-1.5 0-.6.3-.9.9-.9h3.6c.8 0 1.3.1 1.6.4.3.3.5.8.8 1.5l5.1 20.2 4.8-20.2c.2-.8.5-1.2.8-1.5.3-.3.8-.4 1.5-.4h2.9c.8 0 1.3.1 1.6.4.3.3.6.8.8 1.5l4.8 20.4 5.2-20.4c.2-.8.5-1.2.8-1.5.3-.3.8-.4 1.6-.4h3.4c.6 0 .9.3.9.9 0 .2 0 .4-.1.6l-.3.9-6.3 22.1c-.2.8-.5 1.2-.9 1.5-.3.3-.8.4-1.5.4h-3.1c-.8 0-1.3-.1-1.6-.4-.3-.3-.6-.8-.8-1.5L43.7 6.3l-4.7 18.5c-.2.8-.5 1.2-.8 1.5-.3.3-.9.4-1.6.4h-4.4zm33.5.6c-1.9 0-3.8-.2-5.6-.7-1.8-.5-3.2-1-4.1-1.7-.6-.4-.7-.7-.7-1.1v-2.4c0-.9.3-1.3.9-1.3.2 0 .5.1.8.2.2.1.6.3 1 .5 1.4.6 2.9 1 4.4 1.3 1.5.3 3 .4 4.4.4 2.3 0 4.1-.4 5.4-1.2 1.2-.8 1.9-2 1.9-3.5 0-1-.3-1.9-1-2.6-.7-.7-1.9-1.3-3.7-1.8l-5.3-1.6c-2.7-.8-4.7-2-5.9-3.6-1.2-1.5-1.8-3.2-1.8-5 0-1.4.3-2.7 1-3.8.7-1.1 1.5-2.1 2.6-2.8 1.1-.8 2.4-1.3 3.8-1.7 1.5-.4 3-.6 4.6-.6.8 0 1.6.1 2.5.2.9.1 1.7.2 2.5.4.8.2 1.5.4 2.2.6.7.2 1.2.5 1.6.7.6.3.9.6 1.1.9.2.3.3.7.3 1.2v2.2c0 .9-.3 1.3-.9 1.3-.3 0-.8-.1-1.5-.4-2.2-1-4.7-1.5-7.5-1.5-2.1 0-3.8.3-5 1-1.2.7-1.8 1.7-1.8 3.2 0 1 .4 1.9 1.1 2.6.7.7 2.1 1.4 4.1 2l5.2 1.6c2.7.8 4.6 2 5.7 3.4 1.1 1.4 1.7 3.1 1.7 4.9 0 1.5-.3 2.8-1 4-.6 1.2-1.5 2.2-2.6 3-1.1.8-2.5 1.4-4 1.8-1.6.6-3.2.8-5.2.8z" fill="#FF9900"/>
    </svg>
  )
}

export function FivetranLogo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <rect width="100" height="100" rx="16" fill="#0073E6"/>
      <path d="M25 30h50v10H45v10h25v10H45v10H25V30z" fill="white"/>
    </svg>
  )
}

export function MicrosoftLogo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <rect x="4" y="4" width="44" height="44" fill="#F35325"/>
      <rect x="52" y="4" width="44" height="44" fill="#81BC06"/>
      <rect x="4" y="52" width="44" height="44" fill="#05A6F0"/>
      <rect x="52" y="52" width="44" height="44" fill="#FFBA08"/>
    </svg>
  )
}

export function CiscoLogo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.5} viewBox="0 0 120 60" fill="none">
      <rect x="0" y="20" width="12" height="20" rx="3" fill="#1BA0D7"/>
      <rect x="16" y="10" width="12" height="40" rx="3" fill="#1BA0D7"/>
      <rect x="32" y="0" width="12" height="60" rx="3" fill="#1BA0D7"/>
      <rect x="48" y="10" width="12" height="40" rx="3" fill="#1BA0D7"/>
      <rect x="64" y="20" width="12" height="20" rx="3" fill="#1BA0D7"/>
      <text x="84" y="42" fontSize="22" fontWeight="bold" fill="#1BA0D7" fontFamily="Arial">isco</text>
    </svg>
  )
}

export function JuniperLogo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="46" fill="none" stroke="#84BD00" strokeWidth="4"/>
      <path d="M50 15 C30 15 15 30 15 50 C15 70 30 85 50 85 C70 85 85 70 85 50" stroke="#84BD00" strokeWidth="6" strokeLinecap="round" fill="none"/>
      <path d="M50 15 L50 85" stroke="#84BD00" strokeWidth="3" strokeDasharray="4,4"/>
    </svg>
  )
}

export function CoalesceLogo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <rect width="100" height="100" rx="20" fill="#6366F1"/>
      <path d="M30 70 L50 30 L70 70 M40 55 H60" stroke="white" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function getCertLogo(logo: string, size = 40) {
  switch (logo) {
    case 'snowflake': return <SnowflakeLogo size={size} />
    case 'aws': return <AWSLogo size={size} />
    case 'fivetran': return <FivetranLogo size={size} />
    case 'microsoft': return <MicrosoftLogo size={size} />
    case 'cisco': return <CiscoLogo size={size} />
    case 'juniper': return <JuniperLogo size={size} />
    case 'coalesce': return <CoalesceLogo size={size} />
    default: return <span style={{ fontSize: size * 0.6 }}>🏅</span>
  }
}

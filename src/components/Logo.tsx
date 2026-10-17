export function LogoMark({ size = 30 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      shapeRendering="crispEdges"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="2" y="2" width="12" height="12" rx="2" fill="#F28C52" />
      <rect x="16" y="2" width="12" height="12" rx="2" fill="#B8DBCE" />
      <rect x="2" y="16" width="12" height="12" rx="2" fill="#C9D6F2" />
      <rect x="16" y="16" width="12" height="12" rx="2" fill="#F8D5BC" />
      <rect x="5" y="5" width="3" height="3" fill="#FFFBF6" />
      <rect x="19" y="5" width="3" height="3" fill="#FFFBF6" opacity=".8" />
      <rect x="5" y="19" width="3" height="3" fill="#FFFBF6" opacity=".8" />
      <rect x="19" y="19" width="3" height="3" fill="#FFFBF6" opacity=".9" />
    </svg>
  )
}

export function Logo() {
  return (
    <div className="logo">
      <LogoMark />
      <span className="logo__word">
        BlockCraft<span className="logo__ai"> AI</span>
      </span>
    </div>
  )
}

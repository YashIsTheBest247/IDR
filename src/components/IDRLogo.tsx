const IDRLogo = ({ showText = true, size = 32 }: { showText?: boolean; size?: number }) => (
  <a href="#" className="flex items-center gap-3 no-underline">
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="16,0 32,8 32,24 16,32 0,24 0,8" fill="hsl(var(--foreground))" />
      <polygon points="16,4 28,10 28,22 16,28 4,22 4,10" fill="hsl(var(--primary))" />
    </svg>
    {showText && (
      <span className="font-heading font-bold text-xl tracking-tight text-foreground">IDR</span>
    )}
  </a>
);

export default IDRLogo;

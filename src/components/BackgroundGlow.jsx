function BackgroundGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage:
            'radial-gradient(ellipse 70% 55% at 50% 30%, black 40%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 55% at 50% 30%, black 40%, transparent 100%)',
        }}
      />
      <div className="absolute -top-32 left-1/2 h-[560px] w-[560px] -translate-x-[58%] rounded-full bg-rose-400/20 blur-[140px]" />
      <div className="absolute -top-16 left-1/2 h-[500px] w-[500px] -translate-x-[42%] rounded-full bg-zinc-500/15 blur-[150px]" />
    </div>
  )
}

export default BackgroundGlow

import { memo } from 'react';

const GradientOverlay = memo(function GradientOverlay() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_32%),radial-gradient(circle_at_20%_30%,rgba(88,166,255,0.18),transparent_30%),radial-gradient(circle_at_80%_22%,rgba(255,255,255,0.08),transparent_24%),linear-gradient(180deg,#050816_0%,#070b16_45%,#030508_100%)]" />
      <div className="absolute inset-x-0 top-[-12%] h-[38rem] bg-[radial-gradient(circle,rgba(118,144,255,0.18),transparent_62%)] blur-3xl" />
      <div className="absolute bottom-[-18%] left-1/2 h-[30rem] w-[42rem] -translate-x-1/2 bg-[radial-gradient(circle,rgba(255,255,255,0.09),transparent_58%)] blur-3xl" />
      <div className="hero-noise absolute inset-0 opacity-[0.08]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,5,8,0.08)_0%,rgba(3,5,8,0.42)_55%,rgba(3,5,8,0.82)_100%)]" />
    </div>
  );
});

export default GradientOverlay;

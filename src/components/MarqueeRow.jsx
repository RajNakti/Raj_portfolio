import { memo } from 'react';

const MarqueeRow = memo(function MarqueeRow({
  items,
  speed = 28,
  direction = 'left',
  opacity = 0.1,
  fontSize = 'clamp(5rem, 12vw, 10rem)',
  spacing = '0.34em',
  rotation = 0,
  blur = 0,
  parallax = 8,
  className = '',
}) {
  const repeatedItems = [...items, ...items];

  return (
    <div
      aria-hidden="true"
      className={`marquee-row ${className}`}
      style={{
        '--row-duration': `${speed}s`,
        '--row-opacity': opacity,
        '--row-font-size': fontSize,
        '--row-letter-spacing': spacing,
        '--row-rotation': `${rotation}deg`,
        '--row-blur': `${blur}px`,
        '--row-parallax': `${parallax}px`,
      }}
    >
      <div className="marquee-row__parallax">
        <div
          className={`marquee-row__track ${
            direction === 'right' ? 'marquee-row__track--reverse' : ''
          }`}
        >
          <div className="marquee-row__segment">
            {repeatedItems.map((item, index) => (
              <span key={`${item}-${index}`} className="marquee-row__item">
                {item}
              </span>
            ))}
          </div>

          <div className="marquee-row__segment" aria-hidden="true">
            {repeatedItems.map((item, index) => (
              <span key={`${item}-clone-${index}`} className="marquee-row__item">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default MarqueeRow;

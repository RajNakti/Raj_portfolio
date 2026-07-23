import { memo } from 'react';
import MarqueeRow from './MarqueeRow';

const Marquee = memo(function Marquee({ rows }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {rows.map((row) => (
        <MarqueeRow key={row.id} {...row} />
      ))}
    </div>
  );
});

export default Marquee;

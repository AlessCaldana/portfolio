type FlagCode = "es" | "en" | "it";

const SIZE = 40;

function SpainFlag() {
  return (
    <>
      <rect x="0" y="0" width={SIZE} height={SIZE} fill="#AA151B" />
      <rect x="0" y={SIZE * 0.25} width={SIZE} height={SIZE * 0.5} fill="#F1BF00" />
    </>
  );
}

function ItalyFlag() {
  return (
    <>
      <rect x="0" y="0" width={SIZE} height={SIZE} fill="#F4F5F0" />
      <rect x="0" y="0" width={SIZE / 3} height={SIZE} fill="#008C45" />
      <rect x={(SIZE / 3) * 2} y="0" width={SIZE / 3} height={SIZE} fill="#CD212A" />
    </>
  );
}

function UsaFlag() {
  const stripeH = SIZE / 7;
  return (
    <>
      <rect x="0" y="0" width={SIZE} height={SIZE} fill="#FFFFFF" />
      {[0, 2, 4, 6].map((i) => (
        <rect key={i} x="0" y={i * stripeH} width={SIZE} height={stripeH} fill="#B22234" />
      ))}
      <rect x="0" y="0" width={SIZE * 0.46} height={stripeH * 4} fill="#3C3B6E" />
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <circle
            key={`${row}-${col}`}
            cx={SIZE * 0.46 * ((col + 0.5) / 4)}
            cy={stripeH * 4 * ((row + 0.5) / 3)}
            r={SIZE * 0.022}
            fill="#FFFFFF"
          />
        ))
      )}
    </>
  );
}

export function FlagIcon({ code, className }: { code: FlagCode; className?: string }) {
  const id = `flag-clip-${code}`;
  return (
    <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className={className} aria-hidden role="img">
      <defs>
        <clipPath id={id}>
          <circle cx={SIZE / 2} cy={SIZE / 2} r={SIZE / 2} />
        </clipPath>
      </defs>
      <g clipPath={`url(#${id})`}>
        {code === "es" && <SpainFlag />}
        {code === "it" && <ItalyFlag />}
        {code === "en" && <UsaFlag />}
      </g>
      <circle
        cx={SIZE / 2}
        cy={SIZE / 2}
        r={SIZE / 2 - 0.75}
        fill="none"
        stroke="rgba(255,255,255,0.18)"
        strokeWidth="1.5"
      />
    </svg>
  );
}

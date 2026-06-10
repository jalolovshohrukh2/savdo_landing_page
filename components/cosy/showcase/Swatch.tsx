type SwatchProps = {
  name: string;
  token: string;
  hex: string;
  textOn?: 'dark' | 'light';
};

export function Swatch({ name, token, hex, textOn = 'dark' }: SwatchProps) {
  return (
    <div className="overflow-hidden rounded-xl bg-cosy-surface">
      <div
        className={`flex h-20 items-end p-3 text-xs font-semibold ${
          textOn === 'light' ? 'text-white' : 'text-cosy-bg'
        }`}
        style={{ background: hex }}
      >
        {hex}
      </div>
      <div className="px-3 py-2.5">
        <p className="text-sm font-semibold text-cosy-text">{name}</p>
        <p className="font-mono text-xs text-cosy-muted-2">{token}</p>
      </div>
    </div>
  );
}

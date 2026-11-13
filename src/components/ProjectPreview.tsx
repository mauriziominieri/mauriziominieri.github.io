import React from 'react';

interface ProjectPreviewProps {
  projectId: string;
}

export const ProjectPreview: React.FC<ProjectPreviewProps> = ({ projectId }) => {
  switch (projectId) {
    case 'manus-vr':
      return (
        <div className="relative flex h-full w-full items-center justify-center bg-[#09090C] p-6">
          <div className="w-full max-w-[260px] rounded-xl border border-zinc-800 bg-[#111116] p-4">
            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
              <span>MANUS VR · UNITY</span>
              <span className="text-accent">11 SENSORI</span>
            </div>
            <svg viewBox="0 0 220 100" className="mt-3 w-full" aria-hidden="true">
              <circle cx="110" cy="72" r="18" fill="none" stroke="#3F3F46" strokeWidth="1.5" />
              <line x1="110" y1="54" x2="72" y2="26" stroke="var(--brand-accent)" strokeWidth="1.5" />
              <line x1="110" y1="54" x2="92" y2="16" stroke="var(--brand-accent)" strokeWidth="1.5" />
              <line x1="110" y1="54" x2="112" y2="12" stroke="var(--brand-accent)" strokeWidth="1.5" />
              <line x1="110" y1="54" x2="132" y2="18" stroke="var(--brand-accent)" strokeWidth="1.5" />
              <line x1="126" y1="68" x2="156" y2="48" stroke="var(--brand-accent)" strokeWidth="1.5" />
              {[
                [72, 26],
                [92, 16],
                [112, 12],
                [132, 18],
                [156, 48],
                [84, 38],
                [99, 32],
                [111, 29],
                [124, 33],
                [142, 56],
                [110, 72],
              ].map(([cx, cy], idx) => (
                <circle key={idx} cx={cx} cy={cy} r="3" fill={idx < 5 ? 'var(--brand-accent)' : '#F4F4F5'} />
              ))}
            </svg>
            <p className="mt-2 font-mono text-[10px] text-zinc-500">
              Springer WAINA 2019 · ManDri
            </p>
          </div>
        </div>
      );

    case 'my-tv':
      return (
        <div className="flex h-full w-full items-center justify-center bg-[#09090C] p-4 sm:p-6">
          <div className="w-full max-w-[270px] rounded-xl border border-zinc-800 bg-[#111116] p-4">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2.5 text-[11px] font-mono">
              <span className="text-zinc-200 font-semibold">my TV</span>
              <span className="text-accent">Next.js · TS</span>
            </div>
            <div className="mt-3 space-y-2.5">
              {[
                { title: 'Severance', ep: 'S02 · E06', pct: '85%' },
                { title: 'Mr. Robot', ep: 'S04 · E13', pct: '100%' },
                { title: 'Dark', ep: 'S03 · E04', pct: '55%' },
              ].map((show) => (
                <div key={show.title} className="rounded-lg border border-zinc-800/80 bg-[#09090C] p-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-medium text-zinc-200">{show.title}</span>
                    <span className="font-mono text-[10px] text-zinc-400">{show.ep}</span>
                  </div>
                  <div className="mt-1.5 h-1 w-full rounded-full bg-zinc-800">
                    <div
                      className="h-1 rounded-full bg-accent"
                      style={{ width: show.pct }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 'the-flying-pig':
      return (
        <div className="flex h-full w-full items-center justify-center bg-[#09090C] p-4">
          <div className="flex h-[162px] w-[104px] flex-col justify-between rounded-2xl border-2 border-zinc-700 bg-[#111116] p-2.5">
            <div className="mx-auto h-1 w-8 rounded-full bg-zinc-700" />
            <svg viewBox="0 0 100 80" className="w-full" aria-hidden="true">
              <path
                d="M 10 55 Q 35 15, 65 38 T 92 22"
                fill="none"
                stroke="var(--brand-accent)"
                strokeWidth="2"
                strokeDasharray="3 3"
              />
              <circle cx="52" cy="36" r="10" fill="var(--brand-accent)" />
              <circle cx="56" cy="34" r="2" fill="#09090C" />
              <rect x="78" y="0" width="10" height="22" rx="2" fill="#27272A" />
              <rect x="78" y="48" width="10" height="32" rx="2" fill="#27272A" />
            </svg>
            <div className="flex items-center justify-between font-mono text-[9px] text-zinc-400">
              <span>SWIFT</span>
              <span className="text-accent">iOS</span>
            </div>
          </div>
        </div>
      );

    case 'easyticket-suite':
      return (
        <div className="flex h-full w-full items-center justify-center bg-[#09090C] p-4 sm:p-6">
          <div className="grid w-full max-w-[270px] grid-cols-2 gap-2.5">
            <div className="rounded-xl border border-zinc-800 bg-[#111116] p-3">
              <p className="font-mono text-[10px] text-zinc-500">CLIENT</p>
              <p className="mt-2 font-display text-2xl font-bold text-accent tabular-nums">
                A-42
              </p>
              <p className="mt-1 text-[11px] text-zinc-400">In attesa · 2 min</p>
            </div>
            <div className="rounded-xl border border-zinc-800 bg-[#111116] p-3">
              <p className="font-mono text-[10px] text-zinc-500">OPERATOR</p>
              <p className="mt-2 font-display text-2xl font-bold text-zinc-100 tabular-nums">
                #03
              </p>
              <p className="mt-1 text-[11px] text-zinc-400">Sportello attivo</p>
            </div>
            <div className="col-span-2 rounded-lg border border-zinc-800/80 bg-[#111116] px-3 py-1.5 font-mono text-[10px] text-zinc-400">
              Java Client-Server · Web Portal
            </div>
          </div>
        </div>
      );

    case 'battlebash':
      return (
        <div className="flex h-full w-full items-center justify-center bg-[#09090C] p-4 sm:p-6">
          <div className="w-full max-w-[265px] rounded-xl border border-zinc-800 bg-[#111116] p-4 font-mono">
            <div className="flex items-center justify-between gap-2 text-[10px] text-zinc-400">
              <span className="truncate">$ ./battlebash --threads</span>
              <span className="shrink-0 text-accent">C · POSIX</span>
            </div>
            <div className="mt-3 grid grid-cols-6 gap-1">
              {Array.from({ length: 18 }).map((_, idx) => {
                const hit = idx === 4 || idx === 9 || idx === 10;
                const ship = idx === 2 || idx === 3;
                return (
                  <div
                    key={idx}
                    className={`h-5 rounded border ${
                      hit
                        ? 'border-accent bg-accent/30'
                        : ship
                          ? 'border-zinc-500 bg-zinc-700/60'
                          : 'border-zinc-800 bg-[#09090C]'
                    }`}
                  />
                );
              })}
            </div>
            <p className="mt-3 text-[10px] text-zinc-500">
              pthread_mutex_lock() · socket sync
            </p>
          </div>
        </div>
      );

    case 'change-color':
      return (
        <div className="flex h-full w-full items-center justify-center bg-[#09090C] p-4 sm:p-6">
          <div className="rounded-xl border border-zinc-800 bg-[#111116] p-4">
            <div className="grid grid-cols-4 gap-1.5">
              {[
                'var(--brand-accent)', 'var(--brand-accent)', '#3F3F46', '#27272A',
                'var(--brand-accent)', 'var(--brand-accent-soft)', 'var(--brand-accent-soft)', '#3F3F46',
                '#27272A', 'var(--brand-accent-soft)', '#52525B', '#18181B',
                '#18181B', '#3F3F46', 'var(--brand-accent)', 'var(--brand-accent)',
              ].map((color, idx) => (
                <div
                  key={idx}
                  className="h-7 w-7 rounded-md border border-black/30"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <p className="mt-3 text-center font-mono text-[10px] text-zinc-400">
              Matrice C · Flood-Fill
            </p>
          </div>
        </div>
      );

    case 'gioco-del-15':
      return (
        <div className="flex h-full w-full items-center justify-center bg-[#09090C] p-4 sm:p-6">
          <div className="rounded-xl border border-zinc-800 bg-[#111116] p-3.5">
            <div className="grid grid-cols-4 gap-1.5 font-mono text-[11px] font-semibold tabular-nums">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0].map((num) => (
                <div
                  key={num}
                  className={`flex h-7 w-7 items-center justify-center rounded-md border ${
                    num === 0
                      ? 'border-dashed border-accent/60 bg-accent/10 text-accent'
                      : 'border-zinc-700 bg-[#18181D] text-zinc-200'
                  }`}
                >
                  {num === 0 ? '·' : num}
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 'abr-graph':
      return (
        <div className="flex h-full w-full items-center justify-center bg-[#09090C] p-4 sm:p-6">
          <svg viewBox="0 0 240 120" className="w-full max-w-[250px]" aria-hidden="true">
            <line x1="120" y1="24" x2="68" y2="60" stroke="#3F3F46" strokeWidth="1.8" />
            <line x1="120" y1="24" x2="172" y2="60" stroke="var(--brand-accent)" strokeWidth="1.8" />
            <line x1="68" y1="60" x2="42" y2="96" stroke="#3F3F46" strokeWidth="1.8" />
            <line x1="68" y1="60" x2="94" y2="96" stroke="#3F3F46" strokeWidth="1.8" />
            <line x1="172" y1="60" x2="146" y2="96" stroke="var(--brand-accent)" strokeWidth="1.8" />
            <line x1="172" y1="60" x2="198" y2="96" stroke="#3F3F46" strokeWidth="1.8" />
            {[
              { x: 120, y: 24, v: '42', hi: true },
              { x: 68, y: 60, v: '18', hi: false },
              { x: 172, y: 60, v: '65', hi: true },
              { x: 42, y: 96, v: '07', hi: false },
              { x: 94, y: 96, v: '29', hi: false },
              { x: 146, y: 96, v: '53', hi: true },
              { x: 198, y: 96, v: '88', hi: false },
            ].map((n) => (
              <g key={n.v}>
                <circle
                  cx={n.x}
                  cy={n.y}
                  r="13"
                  fill={n.hi ? 'var(--brand-accent)' : '#18181D'}
                  stroke={n.hi ? 'var(--brand-accent)' : '#3F3F46'}
                  strokeWidth="1.5"
                />
                <text
                  x={n.x}
                  y={n.y + 4}
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="10"
                  fontFamily="JetBrains Mono, monospace"
                >
                  {n.v}
                </text>
              </g>
            ))}
          </svg>
        </div>
      );

    case 'nasa-game':
      return (
        <div className="flex h-full w-full items-center justify-center bg-[#09090C] p-4 sm:p-6">
          <div className="w-full max-w-[250px] rounded-xl border border-zinc-800 bg-[#111116] p-4">
            <div className="flex items-center justify-between font-mono text-[10px] text-zinc-400">
              <span>NASA SPACE APPS</span>
              <span className="text-accent">C# · UNITY</span>
            </div>
            <svg viewBox="0 0 200 80" className="mt-2 w-full" aria-hidden="true">
              <ellipse
                cx="100"
                cy="42"
                rx="78"
                ry="24"
                fill="none"
                stroke="#3F3F46"
                strokeDasharray="4 4"
                strokeWidth="1.2"
              />
              <circle cx="100" cy="42" r="14" fill="#18181D" stroke="var(--brand-accent)" strokeWidth="1.5" />
              <circle cx="168" cy="30" r="4.5" fill="var(--brand-accent)" />
              <circle cx="32" cy="20" r="1.5" fill="#71717A" />
              <circle cx="170" cy="64" r="1.5" fill="#71717A" />
            </svg>
          </div>
        </div>
      );

    case 'dance-scratch':
      return (
        <div className="flex h-full w-full items-center justify-center bg-[#09090C] p-4 sm:p-6">
          <div className="w-full max-w-[235px] space-y-2 font-mono text-[11px]">
            <div className="rounded-lg bg-accent px-3 py-2 font-medium text-white">
              quando si clicca su ⚑
            </div>
            <div className="ml-3 rounded-lg border border-amber-500/40 bg-amber-500/15 px-3 py-2 text-amber-200">
              per sempre
            </div>
            <div className="ml-6 rounded-lg border border-zinc-700 bg-[#18181D] px-3 py-2 text-zinc-200">
              cambia costume · suona nota
            </div>
          </div>
        </div>
      );

    case 'highway-project':
      return (
        <div className="flex h-full w-full items-center justify-center bg-[#09090C] p-4 sm:p-6">
          <div className="w-full max-w-[250px] space-y-2.5 rounded-xl border border-zinc-800 bg-[#111116] p-4">
            <div className="flex justify-between font-mono text-[10px] text-zinc-400">
              <span>CORSIA 01</span>
              <span className="text-accent">JAVA OOP</span>
            </div>
            {[
              { pos: '18%', w: '34px', accent: true },
              { pos: '56%', w: '44px', accent: false },
              { pos: '34%', w: '30px', accent: true },
            ].map((lane, i) => (
              <div key={i} className="relative h-5 rounded border border-dashed border-zinc-800 bg-[#09090C]">
                <div
                  className={`absolute top-1 h-3 rounded-sm ${
                    lane.accent ? 'bg-accent' : 'bg-zinc-400'
                  }`}
                  style={{ left: lane.pos, width: lane.w }}
                />
              </div>
            ))}
          </div>
        </div>
      );

    case 'find-your-pc':
      return (
        <div className="flex h-full w-full items-center justify-center bg-[#09090C] p-4 sm:p-6">
          <div className="w-full max-w-[260px] rounded-xl border border-zinc-800 bg-[#111116] p-4">
            <div className="flex items-center justify-between gap-2 font-mono text-[10px] text-zinc-400">
              <span>FIND YOUR PC</span>
              <span className="text-accent">JAVA · CONFIG</span>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <svg viewBox="0 0 64 56" className="h-14 w-16 shrink-0" aria-hidden="true">
                <rect x="4" y="6" width="38" height="28" rx="3" fill="#18181D" stroke="#52525B" strokeWidth="1.5" />
                <rect x="8" y="10" width="30" height="20" rx="1.5" fill="#09090C" />
                <path d="M14 20h18M14 25h11" stroke="var(--brand-accent)" strokeWidth="2" strokeLinecap="round" />
                <path d="M18 34v6M28 34v6M13 40h20" stroke="#52525B" strokeWidth="1.8" strokeLinecap="round" />
                <rect x="46" y="10" width="14" height="30" rx="2" fill="#18181D" stroke="var(--brand-accent)" strokeWidth="1.5" />
                <circle cx="53" cy="17" r="2" fill="var(--brand-accent)" />
                <line x1="50" y1="24" x2="56" y2="24" stroke="#52525B" strokeWidth="1.5" />
                <line x1="50" y1="28" x2="56" y2="28" stroke="#52525B" strokeWidth="1.5" />
              </svg>
              <div className="flex-1 space-y-1.5 font-mono text-[9px] text-zinc-300">
                <div>CPU · 92%</div>
                <div className="h-1.5 w-full rounded-full bg-zinc-800">
                  <div className="h-1.5 w-[92%] rounded-full bg-accent" />
                </div>
                <div>RAM · 16 GB</div>
                <div className="h-1.5 w-full rounded-full bg-zinc-800">
                  <div className="h-1.5 w-[75%] rounded-full bg-zinc-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'dashboard-gierre':
      return (
        <div className="flex h-full w-full items-center justify-center bg-[#09090C] p-4 sm:p-6">
          <div className="w-full max-w-[260px] rounded-xl border border-zinc-800 bg-[#111116] p-4">
            <div className="flex items-center justify-between gap-2 font-mono text-[10px] text-zinc-400">
              <span>DASHBOARD GIERRE</span>
              <span className="text-accent">KPI · LIVE</span>
            </div>
            <div className="mt-3 flex items-end gap-2 h-14">
              {[38, 62, 48, 86, 68, 94, 72].map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-t-sm ${i === 3 || i === 5 ? 'bg-accent' : 'bg-zinc-700'}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="mt-2.5 flex items-center justify-between border-t border-zinc-800 pt-2 font-mono text-[9px] text-zinc-400">
              <span>CLIENTI ATTIVI</span>
              <span className="text-zinc-200">+24.8%</span>
            </div>
          </div>
        </div>
      );

    case 'uil-scuola-napoli':
      return (
        <div className="flex h-full w-full items-center justify-center bg-[#09090C] p-4 sm:p-6">
          <div className="w-full max-w-[260px] rounded-xl border border-zinc-800 bg-[#111116] p-4">
            <div className="flex items-center justify-between gap-2 border-b border-zinc-800 pb-2 font-mono text-[10px]">
              <span className="font-semibold text-zinc-200">UIL SCUOLA</span>
              <span className="text-accent">AREA FLEGREA</span>
            </div>
            <div className="mt-3 space-y-2">
              {['Circolare Docenti & ATA', 'Modulistica & Bandi', 'Calendario Scolastico'].map((item, idx) => (
                <div
                  key={item}
                  className="flex items-center justify-between rounded-md border border-zinc-800/80 bg-[#09090C] px-2.5 py-1.5 text-[10px] text-zinc-300"
                >
                  <span className="truncate">{item}</span>
                  <span className={`font-mono text-[10px] shrink-0 ${idx === 0 ? 'text-accent' : 'text-zinc-500'}`}>
                    ↗
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );

    case 'findone':
      return (
        <div className="flex h-full w-full items-center justify-center bg-[#09090C] p-4">
          <div className="flex h-[162px] w-[112px] flex-col justify-between rounded-2xl border-2 border-zinc-700 bg-[#111116] p-3">
            <div className="mx-auto h-1 w-8 rounded-full bg-zinc-700" />
            <svg viewBox="0 0 80 68" className="w-full" aria-hidden="true">
              <circle cx="35" cy="30" r="18" fill="none" stroke="var(--brand-accent)" strokeWidth="1.8" strokeDasharray="3 3" opacity="0.55" />
              <circle cx="35" cy="30" r="12" fill="#18181D" stroke="var(--brand-accent)" strokeWidth="2.2" />
              <circle cx="35" cy="30" r="3.5" fill="var(--brand-accent)" />
              <line x1="44" y1="39" x2="58" y2="53" stroke="#E4E4E7" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <div className="text-center font-mono text-[9px] text-accent">
              FINDONE · iOS
            </div>
          </div>
        </div>
      );

    case 'not-only-pasta':
      return (
        <div className="flex h-full w-full items-center justify-center bg-[#09090C] p-4">
          <div className="flex h-[162px] w-[112px] flex-col justify-between rounded-2xl border-2 border-zinc-700 bg-[#111116] p-3">
            <div className="mx-auto h-1 w-8 rounded-full bg-zinc-700" />
            <svg viewBox="0 0 80 72" className="w-full" aria-hidden="true">
              <path d="M26 15c0-4 3-5 3-9M38 13c0-4 3-5 3-9M50 15c0-4 3-5 3-9" fill="none" stroke="var(--brand-accent-soft)" strokeWidth="1.8" strokeLinecap="round" opacity="0.7" />
              <path d="M24 34c4-9 28-9 32 0" fill="none" stroke="var(--brand-accent)" strokeWidth="2.4" strokeLinecap="round" />
              <path d="M20 34c8-6 32-6 40 0" fill="none" stroke="#F4F4F5" strokeWidth="1.6" strokeLinecap="round" />
              <path d="M14 35h52c-2 13-11 21-26 21S16 48 14 35z" fill="#18181D" stroke="#52525B" strokeWidth="1.8" />
              <rect x="26" y="56" width="28" height="3" rx="1.5" fill="#3F3F46" />
            </svg>
            <div className="text-center font-mono text-[9px] text-accent">
              PASTA · RICETTE
            </div>
          </div>
        </div>
      );

    case 'cabway':
      return (
        <div className="flex h-full w-full items-center justify-center bg-[#09090C] p-4">
          <div className="flex h-[162px] w-[112px] flex-col justify-between rounded-2xl border-2 border-zinc-700 bg-[#111116] p-3">
            <div className="mx-auto h-1 w-8 rounded-full bg-zinc-700" />
            <svg viewBox="0 0 84 68" className="w-full" aria-hidden="true">
              <path d="M12 50 C 28 50, 26 22, 46 22 S 64 38, 72 16" fill="none" stroke="var(--brand-accent)" strokeWidth="2.2" strokeDasharray="4 3" />
              <circle cx="12" cy="50" r="4.5" fill="#F4F4F5" />
              <path d="M72 8a6 6 0 0 1 6 6c0 4.5-6 10-6 10s-6-5.5-6-10a6 6 0 0 1 6-6z" fill="var(--brand-accent)" />
              <circle cx="72" cy="14" r="2" fill="#09090C" />
              <rect x="28" y="34" width="26" height="11" rx="3" fill="#18181D" stroke="#52525B" strokeWidth="1.4" />
              <circle cx="34" cy="46" r="2.2" fill="#E4E4E7" />
              <circle cx="48" cy="46" r="2.2" fill="#E4E4E7" />
            </svg>
            <div className="text-center font-mono text-[9px] text-accent">
              CABWAY · MAPKIT
            </div>
          </div>
        </div>
      );

    case 'geoall-ar-coredata':
      return (
        <div className="flex h-full w-full items-center justify-center bg-[#09090C] p-4">
          <div className="flex h-[162px] w-[112px] flex-col justify-between rounded-2xl border-2 border-zinc-700 bg-[#111116] p-3">
            <div className="mx-auto h-1 w-8 rounded-full bg-zinc-700" />
            <svg viewBox="0 0 80 72" className="w-full" aria-hidden="true">
              <circle cx="40" cy="36" r="22" fill="#18181D" stroke="var(--brand-accent)" strokeWidth="1.8" />
              <ellipse cx="40" cy="36" rx="10" ry="22" fill="none" stroke="#52525B" strokeWidth="1.3" />
              <line x1="18" y1="36" x2="62" y2="36" stroke="#52525B" strokeWidth="1.3" />
              <path d="M22 25h36M22 47h36" stroke="#3F3F46" strokeWidth="1.1" />
              <circle cx="51" cy="26" r="4" fill="var(--brand-accent)" />
              <path d="M12 20v-6h6M68 20v-6h-6M12 52v6h6M68 52v6h-6" fill="none" stroke="var(--brand-accent-soft)" strokeWidth="1.5" opacity="0.7" />
            </svg>
            <div className="text-center font-mono text-[9px] text-accent">
              GEOALL · ARKIT
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="flex h-full w-full items-center justify-center bg-[#09090C] p-4">
          <div className="flex h-[162px] w-[104px] flex-col justify-between rounded-2xl border-2 border-zinc-700 bg-[#111116] p-3">
            <div className="mx-auto h-1 w-8 rounded-full bg-zinc-700" />
            <div className="space-y-2">
              <div className="h-8 w-8 rounded-lg bg-accent/20 border border-accent/50 mx-auto" />
              <div className="h-2 w-14 rounded bg-zinc-700 mx-auto" />
              <div className="h-2 w-10 rounded bg-zinc-800 mx-auto" />
            </div>
            <div className="text-center font-mono text-[9px] text-accent">
              SWIFT · iOS
            </div>
          </div>
        </div>
      );
  }
};

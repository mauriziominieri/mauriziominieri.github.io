import React, { useMemo, useState } from 'react';
import { ExternalLink, FileText, FolderGit2, Search } from 'lucide-react';
import { PROFILE } from '../../data/portfolioData';

// ============================================================================
// 4. ABR TREE & GRAPH MIN-PATH — Playground Algoritmi C reali
// ============================================================================

interface AbrNode {
  val: number;
  left: AbrNode | null;
  right: AbrNode | null;
}

function insertAbr(root: AbrNode | null, val: number): AbrNode {
  if (!root) return { val, left: null, right: null };
  if (val < root.val) return { ...root, left: insertAbr(root.left, val) };
  if (val > root.val) return { ...root, right: insertAbr(root.right, val) };
  return root;
}

function findMinAbr(node: AbrNode): number {
  let curr = node;
  while (curr.left) curr = curr.left;
  return curr.val;
}

function deleteAbr(root: AbrNode | null, val: number): AbrNode | null {
  if (!root) return null;
  if (val < root.val) return { ...root, left: deleteAbr(root.left, val) };
  if (val > root.val) return { ...root, right: deleteAbr(root.right, val) };
  if (!root.left) return root.right;
  if (!root.right) return root.left;
  const successor = findMinAbr(root.right);
  return { ...root, val: successor, right: deleteAbr(root.right, successor) };
}

function inOrder(node: AbrNode | null, acc: number[] = []): number[] {
  if (!node) return acc;
  inOrder(node.left, acc);
  acc.push(node.val);
  inOrder(node.right, acc);
  return acc;
}

function preOrder(node: AbrNode | null, acc: number[] = []): number[] {
  if (!node) return acc;
  acc.push(node.val);
  preOrder(node.left, acc);
  preOrder(node.right, acc);
  return acc;
}

interface PositionedNode {
  val: number;
  x: number;
  y: number;
  px?: number;
  py?: number;
}

function layoutAbr(
  node: AbrNode | null,
  x: number,
  y: number,
  dx: number,
  px?: number,
  py?: number,
  out: PositionedNode[] = []
): PositionedNode[] {
  if (!node) return out;
  out.push({ val: node.val, x, y, px, py });
  layoutAbr(node.left, x - dx, y + 50, Math.max(24, dx * 0.56), x, y, out);
  layoutAbr(node.right, x + dx, y + 50, Math.max(24, dx * 0.56), x, y, out);
  return out;
}

const GRAPH_NODES = [
  { id: 0, label: '0 · Casa', x: 55, y: 110 },
  { id: 1, label: '1 · Centro', x: 160, y: 46 },
  { id: 2, label: '2 · Parco', x: 170, y: 176 },
  { id: 3, label: '3 · Ponte', x: 300, y: 50 },
  { id: 4, label: '4 · Staz.', x: 310, y: 174 },
  { id: 5, label: '5 · Uni', x: 430, y: 110 },
];

const GRAPH_EDGES = [
  { u: 0, v: 1, w: 4 },
  { u: 0, v: 2, w: 2 },
  { u: 1, v: 2, w: 3 },
  { u: 1, v: 3, w: 5 },
  { u: 2, v: 4, w: 4 },
  { u: 3, v: 4, w: 2 },
  { u: 3, v: 5, w: 3 },
  { u: 4, v: 5, w: 6 },
];

export const AbrGraphDemo: React.FC = () => {
  const [mode, setMode] = useState<'abr' | 'graph'>('abr');
  const [root, setRoot] = useState<AbrNode | null>(() =>
    [42, 21, 65, 12, 30, 54, 80].reduce<AbrNode | null>((acc, v) => insertAbr(acc, v), null)
  );
  const [inputVal, setInputVal] = useState('');
  const [searchPath, setSearchPath] = useState<number[]>([]);
  const [abrMsg, setAbrMsg] = useState('Inserisci o cerca una chiave nell’albero ABR.');

  const [startNode, setStartNode] = useState(0);
  const [endNode, setEndNode] = useState(5);
  const [blockedNodes, setBlockedNodes] = useState<number[]>([]);

  const positioned = useMemo(() => layoutAbr(root, 240, 28, 105), [root]);
  const inOrderList = useMemo(() => inOrder(root), [root]);
  const preOrderList = useMemo(() => preOrder(root), [root]);

  const handleInsert = () => {
    const num = Number(inputVal);
    if (!Number.isInteger(num) || num < 0 || num > 999) {
      setAbrMsg('Inserisci un intero tra 0 e 999.');
      return;
    }
    setRoot((prev) => insertAbr(prev, num));
    setSearchPath([num]);
    setAbrMsg(`Chiave ${num} inserita nell'ABR.`);
    setInputVal('');
  };

  const handleSearch = () => {
    const num = Number(inputVal);
    if (!Number.isInteger(num)) {
      setAbrMsg('Inserisci un intero valido da cercare.');
      return;
    }
    const path: number[] = [];
    let curr = root;
    let found = false;
    while (curr) {
      path.push(curr.val);
      if (num === curr.val) {
        found = true;
        break;
      }
      curr = num < curr.val ? curr.left : curr.right;
    }
    setSearchPath(path);
    setAbrMsg(
      found
        ? `Trovato ${num} (confronti: ${path.join(' -> ')}).`
        : `Chiave ${num} assente (percorso: ${path.length ? path.join(' -> ') : 'albero vuoto'}).`
    );
  };

  const handleDelete = () => {
    const num = Number(inputVal);
    if (!Number.isInteger(num)) {
      setAbrMsg('Inserisci una chiave esistente da eliminare.');
      return;
    }
    setRoot((prev) => deleteAbr(prev, num));
    setSearchPath([]);
    setAbrMsg(`Operazione deleteAbr(${num}) eseguita.`);
    setInputVal('');
  };

  const shortest = useMemo(() => {
    if (blockedNodes.includes(startNode) || blockedNodes.includes(endNode)) {
      return { path: [] as number[], dist: Infinity };
    }
    const dist = Array(6).fill(Infinity);
    const prev = Array(6).fill(-1);
    const visited = Array(6).fill(false);
    dist[startNode] = 0;

    for (let step = 0; step < 6; step++) {
      let u = -1;
      for (let i = 0; i < 6; i++) {
        if (!visited[i] && !blockedNodes.includes(i) && (u === -1 || dist[i] < dist[u])) {
          u = i;
        }
      }
      if (u === -1 || dist[u] === Infinity) break;
      visited[u] = true;
      for (const e of GRAPH_EDGES) {
        const nxt = e.u === u ? e.v : e.v === u ? e.u : -1;
        if (nxt !== -1 && !blockedNodes.includes(nxt)) {
          const alt = dist[u] + e.w;
          if (alt < dist[nxt]) {
            dist[nxt] = alt;
            prev[nxt] = u;
          }
        }
      }
    }

    if (dist[endNode] === Infinity) return { path: [] as number[], dist: Infinity };
    const path: number[] = [];
    for (let at = endNode; at !== -1; at = prev[at]) path.unshift(at);
    return { path, dist: dist[endNode] };
  }, [startNode, endNode, blockedNodes]);

  const isEdgeInPath = (u: number, v: number) => {
    for (let i = 0; i < shortest.path.length - 1; i++) {
      const a = shortest.path[i];
      const b = shortest.path[i + 1];
      if ((a === u && b === v) || (a === v && b === u)) return true;
    }
    return false;
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-zinc-800 bg-[#09090B] p-2">
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => setMode('abr')}
            className={`min-h-[36px] rounded-lg px-3 text-xs font-medium transition-colors cursor-pointer ${
              mode === 'abr' ? 'bg-accent text-white' : 'text-zinc-400 hover:text-zinc-100'
            }`}
          >
            Albero Binario (ABR_Tree)
          </button>
          <button
            type="button"
            onClick={() => setMode('graph')}
            className={`min-h-[36px] rounded-lg px-3 text-xs font-medium transition-colors cursor-pointer ${
              mode === 'graph' ? 'bg-accent text-white' : 'text-zinc-400 hover:text-zinc-100'
            }`}
          >
            Cammino Minimo (Graph_minPath)
          </button>
        </div>
      </div>

      {mode === 'abr' ? (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2 rounded-xl border border-zinc-800 bg-[#09090B] p-3">
            <input
              type="number"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Numero (es. 35)"
              className="w-32 rounded-lg border border-zinc-800 bg-[#121216] px-3 py-1.5 font-mono text-xs text-zinc-100 focus:border-accent focus:outline-none"
            />
            <button
              type="button"
              onClick={handleInsert}
              className="min-h-[34px] rounded-lg bg-accent px-3 text-xs font-semibold text-white hover:bg-accent-hover cursor-pointer"
            >
              Inserisci
            </button>
            <button
              type="button"
              onClick={handleSearch}
              className="min-h-[34px] rounded-lg border border-zinc-700 bg-[#121216] px-3 text-xs font-medium text-zinc-200 hover:text-white cursor-pointer"
            >
              Cerca
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="min-h-[34px] rounded-lg border border-zinc-700 bg-[#121216] px-3 text-xs font-medium text-zinc-200 hover:text-red-400 cursor-pointer"
            >
              Elimina
            </button>
            <button
              type="button"
              onClick={() => {
                setRoot(
                  [42, 21, 65, 12, 30, 54, 80].reduce<AbrNode | null>(
                    (acc, v) => insertAbr(acc, v),
                    null
                  )
                );
                setSearchPath([]);
                setAbrMsg('Albero ripristinato.');
              }}
              className="ml-auto min-h-[34px] rounded-lg border border-zinc-800 px-2.5 text-xs text-zinc-400 hover:text-white cursor-pointer"
            >
              Reset
            </button>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-[#09090B] p-3">
            <svg viewBox="0 0 480 210" className="w-full h-48 sm:h-56">
              {positioned.map((n) =>
                n.px !== undefined && n.py !== undefined ? (
                  <line
                    key={`e-${n.val}`}
                    x1={n.px}
                    y1={n.py}
                    x2={n.x}
                    y2={n.y}
                    stroke="#3F3F46"
                    strokeWidth={1.6}
                  />
                ) : null
              )}
              {positioned.map((n) => {
                const highlighted = searchPath.includes(n.val);
                return (
                  <g key={`n-${n.val}`}>
                    <circle
                      cx={n.x}
                      cy={n.y}
                      r={16}
                      fill={highlighted ? '#EA580C' : '#18181B'}
                      stroke={highlighted ? '#FDBA74' : '#52525B'}
                      strokeWidth={1.8}
                    />
                    <text
                      x={n.x}
                      y={n.y + 4}
                      textAnchor="middle"
                      fill="#FAFAFA"
                      fontSize="11"
                      fontFamily="monospace"
                      fontWeight="700"
                    >
                      {n.val}
                    </text>
                  </g>
                );
              })}
            </svg>
            <div className="mt-2 space-y-1 border-t border-zinc-800 pt-2.5 text-xs">
              <p className="text-zinc-300">{abrMsg}</p>
              <p className="font-mono text-[11px] text-zinc-400">
                In-Order: <span className="text-zinc-200">{inOrderList.join(', ')}</span>
              </p>
              <p className="font-mono text-[11px] text-zinc-400">
                Pre-Order: <span className="text-zinc-200">{preOrderList.join(', ')}</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-zinc-800 bg-[#09090B] p-3 text-xs">
            <div className="flex flex-wrap items-center gap-3">
              <label className="flex items-center gap-1.5 text-zinc-300">
                <span>Partenza:</span>
                <select
                  value={startNode}
                  onChange={(e) => setStartNode(Number(e.target.value))}
                  className="rounded border border-zinc-700 bg-[#121216] px-2 py-1 font-mono text-xs text-zinc-100"
                >
                  {GRAPH_NODES.map((n) => (
                    <option key={n.id} value={n.id}>
                      {n.label}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex items-center gap-1.5 text-zinc-300">
                <span>Arrivo:</span>
                <select
                  value={endNode}
                  onChange={(e) => setEndNode(Number(e.target.value))}
                  className="rounded border border-zinc-700 bg-[#121216] px-2 py-1 font-mono text-xs text-zinc-100"
                >
                  {GRAPH_NODES.map((n) => (
                    <option key={n.id} value={n.id}>
                      {n.label}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <span className="font-mono text-accent">
              {shortest.dist === Infinity
                ? 'Nessun percorso disponibile'
                : `MinPath: ${shortest.path.join(' -> ')} (${shortest.dist} km)`}
            </span>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-[#09090B] p-3">
            <svg viewBox="0 0 490 220" className="w-full h-48 sm:h-52">
              {GRAPH_EDGES.map((e) => {
                const a = GRAPH_NODES[e.u];
                const b = GRAPH_NODES[e.v];
                const active = isEdgeInPath(e.u, e.v);
                const disabled = blockedNodes.includes(e.u) || blockedNodes.includes(e.v);
                return (
                  <g key={`${e.u}-${e.v}`}>
                    <line
                      x1={a.x}
                      y1={a.y}
                      x2={b.x}
                      y2={b.y}
                      stroke={disabled ? '#27272A' : active ? '#EA580C' : '#52525B'}
                      strokeWidth={active ? 3.2 : 1.6}
                      strokeDasharray={disabled ? '4 4' : undefined}
                    />
                    <text
                      x={(a.x + b.x) / 2}
                      y={(a.y + b.y) / 2 - 5}
                      textAnchor="middle"
                      fill={active ? '#FDBA74' : '#A1A1AA'}
                      fontSize="11"
                      fontFamily="monospace"
                    >
                      {e.w}
                    </text>
                  </g>
                );
              })}
              {GRAPH_NODES.map((n) => {
                const blocked = blockedNodes.includes(n.id);
                const inPath = shortest.path.includes(n.id);
                return (
                  <g
                    key={n.id}
                    onClick={() => {
                      if (n.id === startNode || n.id === endNode) return;
                      setBlockedNodes((prev) =>
                        prev.includes(n.id) ? prev.filter((x) => x !== n.id) : [...prev, n.id]
                      );
                    }}
                    className="cursor-pointer"
                  >
                    <circle
                      cx={n.x}
                      cy={n.y}
                      r={18}
                      fill={blocked ? '#27272A' : inPath ? '#EA580C' : '#18181B'}
                      stroke={blocked ? '#EF4444' : inPath ? '#FDBA74' : '#71717A'}
                      strokeWidth={2}
                    />
                    <text
                      x={n.x}
                      y={n.y + 4}
                      textAnchor="middle"
                      fill="#FAFAFA"
                      fontSize="12"
                      fontFamily="monospace"
                      fontWeight="700"
                    >
                      {n.id}
                    </text>
                    <text
                      x={n.x}
                      y={n.y + 32}
                      textAnchor="middle"
                      fill="#A1A1AA"
                      fontSize="10"
                      fontFamily="sans-serif"
                    >
                      {n.label.split(' · ')[1]}
                    </text>
                  </g>
                );
              })}
            </svg>
            <p className="mt-1 text-center text-[11px] text-zinc-400">
              Clicca su un nodo intermedio (1–4) per simularne la chiusura (<span className="font-mono">nodo_da_rimuovere</span> in C).
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

// ============================================================================
// 5. MANUS VR & MANDRI — Player video reali della Tesi e del Gioco VR
// ============================================================================

export const ManusVrDemo: React.FC = () => {
  const [videoKind, setVideoKind] = useState<'thesis' | 'game'>('thesis');

  return (
    <div className="space-y-3 rounded-xl border border-zinc-800 bg-[#09090B] p-3.5">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex gap-1.5">
          <button
            type="button"
            onClick={() => setVideoKind('thesis')}
            className={`min-h-[36px] rounded-lg px-3 text-xs font-medium cursor-pointer ${
              videoKind === 'thesis'
                ? 'bg-accent text-white'
                : 'border border-zinc-800 bg-[#121216] text-zinc-300 hover:text-white'
            }`}
          >
            Presentazione Tesi
          </button>
          <button
            type="button"
            onClick={() => setVideoKind('game')}
            className={`min-h-[36px] rounded-lg px-3 text-xs font-medium cursor-pointer ${
              videoKind === 'game'
                ? 'bg-accent text-white'
                : 'border border-zinc-800 bg-[#121216] text-zinc-300 hover:text-white'
            }`}
          >
            Gameplay VR
          </button>
        </div>
        <span className="font-mono text-[11px] text-zinc-400">Unity 3D · C# · Manus VR</span>
      </div>

      <video
        key={videoKind}
        controls
        playsInline
        preload="metadata"
        className="w-full rounded-lg border border-zinc-800 bg-black max-h-72"
        src={videoKind === 'thesis' ? PROFILE.thesisVideoUrl : PROFILE.vrGameVideoUrl}
      />
    </div>
  );
};

// ============================================================================
// 6. DANCE SCRATCH — Player ufficiale MIT Scratch incorporato
// ============================================================================

export const DanceScratchDemo: React.FC = () => {
  return (
    <div className="space-y-3 rounded-xl border border-zinc-800 bg-[#09090B] p-3.5">
      <div className="flex items-center justify-between text-xs text-zinc-400">
        <span>Progetto reale eseguito tramite player ufficiale MIT Scratch</span>
        <a
          href="https://scratch.mit.edu/projects/312466034/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-medium text-accent hover:underline"
        >
          <span>Apri su Scratch</span>
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>
      <iframe
        src="https://scratch.mit.edu/projects/312466034/embed"
        width="100%"
        height="340"
        className="w-full rounded-lg border border-zinc-800 bg-black"
        title="DANCE Scratch Project"
      />
    </div>
  );
};

// ============================================================================
// 7. ESERCIZI JAVA — Archivio reale tracce d'esame 2006–2023 su GitHub
// ============================================================================

const JAVA_SPECIAL_MODULES = [
  { name: 'OCP11', desc: 'Esercitazioni & preparazione Oracle Java SE 11', kind: 'tree' },
  { name: 'OCA-8.pdf', desc: 'Dispensa riepilogativa Oracle Java SE 8', kind: 'blob' },
  { name: 'Rational', desc: 'Classe frazioni / numeri razionali in Java', kind: 'tree' },
  { name: 'Genealogia', desc: 'Albero genealogico OOP e relazioni in Java', kind: 'tree' },
  { name: 'Servers', desc: 'Programmazione client-server & socket Java', kind: 'tree' },
  { name: 'Login_CercaSintomi', desc: 'App di ricerca & gestione login (con varianti DB/Socket)', kind: 'tree' },
  { name: 'archivio.pdf', desc: 'Raccolta PDF delle tracce d’esame', kind: 'blob' },
  { name: 'linguaggi2.pdf', desc: 'Appunti del corso di Linguaggi di Programmazione II', kind: 'blob' },
] as const;

const JAVA_EXAMS_BY_ERA: { label: string; dates: string[] }[] = [
  {
    label: '2020–2023',
    dates: [
      '2023-04-20', '2023-02-22', '2023-01-19', '2022-10-28', '2022-09-26',
      '2022-07-26', '2022-06-23', '2022-05-02', '2022-03-28', '2022-02-24',
      '2022-01-26', '2021-10-26', '2021-09-24', '2021-07-26', '2020-02-27',
      '2020-01-24',
    ],
  },
  {
    label: '2016–2019',
    dates: [
      '2019-07-23', '2019-06-24', '2019-04-29', '2019-03-19', '2019-02-15',
      '2018-10-18', '2018-09-17', '2018-07-19', '2018-05-02', '2018-03-23',
      '2018-02-22', '2018-01-24', '2017-10-06', '2017-07-20', '2017-04-26',
      '2017-03-23', '2016-09-20', '2016-07-21', '2016-04-21', '2016-03-03',
      '2016-01-27',
    ],
  },
  {
    label: '2012–2015',
    dates: [
      '2015-09-21', '2015-07-08', '2015-06-24', '2015-02-05', '2015-01-20',
      '2014-11-03', '2014-09-18', '2014-07-28', '2014-04-28', '2014-03-05',
      '2014-01-31', '2013-09-25', '2013-04-29', '2013-03-22', '2013-02-11',
      '2013-01-22', '2012-09-03', '2012-07-09', '2012-06-18', '2012-04-23',
    ],
  },
  {
    label: '2006–2010',
    dates: [
      '2010-11-30', '2010-09-14', '2010-07-26', '2010-06-28', '2010-05-03',
      '2010-02-24', '2010-01-22', '2009-11-27', '2009-09-18', '2009-07-09',
      '2009-06-19', '2009-04-23', '2009-02-19', '2009-01-29', '2009-01-15',
      '2008-09-08', '2008-06-19', '2008-04-21', '2008-03-27', '2008-02-25',
      '2008-01-30', '2007-09-17', '2007-07-20', '2007-06-29', '2007-04-26',
      '2007-02-23', '2007-02-07', '2007-01-12', '2006-09-15', '2006-07-17',
      '2006-06-26', '2006-04-27',
    ],
  },
];

export const EserciziJavaDemo: React.FC = () => {
  const [eraIdx, setEraIdx] = useState(0);
  const [query, setQuery] = useState('');
  const [tab, setTab] = useState<'esami' | 'risorse'>('esami');

  const currentDates = useMemo(() => {
    const allDates = query.trim()
      ? JAVA_EXAMS_BY_ERA.flatMap((e) => e.dates)
      : JAVA_EXAMS_BY_ERA[eraIdx].dates;
    return allDates.filter((d) => d.includes(query.trim()));
  }, [eraIdx, query]);

  return (
    <div className="space-y-3 rounded-xl border border-zinc-800 bg-[#09090B] p-4 text-xs">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => setTab('esami')}
            className={`min-h-[34px] rounded-lg px-3 font-medium cursor-pointer ${
              tab === 'esami' ? 'bg-accent text-white' : 'border border-zinc-800 bg-[#121216] text-zinc-300'
            }`}
          >
            89 Tracce d&apos;esame (2006–2023)
          </button>
          <button
            type="button"
            onClick={() => setTab('risorse')}
            className={`min-h-[34px] rounded-lg px-3 font-medium cursor-pointer ${
              tab === 'risorse' ? 'bg-accent text-white' : 'border border-zinc-800 bg-[#121216] text-zinc-300'
            }`}
          >
            Dispense &amp; Progetti speciali
          </button>
        </div>

        <a
          href="https://github.com/mauriziominieri/esercizi-c"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-medium text-accent hover:underline"
        >
          <span>Vedi anche esercizi-c</span>
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>

      {tab === 'esami' ? (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative flex-1 min-w-[160px]">
              <Search className="pointer-events-none absolute left-2.5 top-2.5 h-3.5 w-3.5 text-zinc-500" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cerca data esame (es. 2022 o 2019-06)..."
                className="w-full rounded-lg border border-zinc-800 bg-[#121216] py-1.5 pl-8 pr-3 font-mono text-xs text-zinc-100 focus:border-accent focus:outline-none"
              />
            </div>
            {!query.trim() && (
              <div className="flex flex-wrap gap-1">
                {JAVA_EXAMS_BY_ERA.map((era, idx) => (
                  <button
                    key={era.label}
                    type="button"
                    onClick={() => setEraIdx(idx)}
                    className={`rounded-md px-2.5 py-1.5 font-mono text-[11px] cursor-pointer ${
                      eraIdx === idx
                        ? 'bg-zinc-200 font-semibold text-zinc-950'
                        : 'border border-zinc-800 bg-[#121216] text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    {era.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="grid max-h-56 grid-cols-2 gap-1.5 overflow-y-auto pr-1 sm:grid-cols-4">
            {currentDates.map((date) => (
              <a
                key={date}
                href={`https://github.com/mauriziominieri/esercizi-java/tree/master/${date}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-1.5 rounded-lg border border-zinc-800 bg-[#121216] px-2.5 py-2 font-mono text-[11px] text-zinc-200 transition-colors hover:border-accent hover:text-white"
              >
                <span className="inline-flex items-center gap-1.5 truncate">
                  <FolderGit2 className="h-3 w-3 shrink-0 text-accent" />
                  <span>{date}</span>
                </span>
                <ExternalLink className="h-2.5 w-2.5 shrink-0 text-zinc-500" />
              </a>
            ))}
          </div>
          {currentDates.length === 0 && (
            <p className="py-4 text-center text-zinc-500">Nessuna traccia trovata per “{query}”.</p>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {JAVA_SPECIAL_MODULES.map((mod) => (
            <a
              key={mod.name}
              href={`https://github.com/mauriziominieri/esercizi-java/${mod.kind}/master/${mod.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start justify-between gap-2 rounded-lg border border-zinc-800 bg-[#121216] p-3 transition-colors hover:border-accent"
            >
              <div>
                <p className="inline-flex items-center gap-1.5 font-mono font-semibold text-zinc-100">
                  {mod.kind === 'blob' ? (
                    <FileText className="h-3.5 w-3.5 text-accent" />
                  ) : (
                    <FolderGit2 className="h-3.5 w-3.5 text-accent" />
                  )}
                  <span>{mod.name}</span>
                </p>
                <p className="mt-1 text-[11px] text-zinc-400">{mod.desc}</p>
              </div>
              <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-zinc-500" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

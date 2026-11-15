import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  Code2,
  Play,
  RotateCcw,
  Sparkles,
} from 'lucide-react';

// ============================================================================
// 1. CHANGE COLOR — Replica fedele C (main.c: Risoluzione2x2 / U_Orizzontale / U_Verticale)
// ============================================================================

type CcDir = 'n' | 's' | 'e' | 'o';
interface CcStep {
  i: number;
  j: number;
  dir: CcDir;
  phase: string;
}

const CC_COLORS = [
  { id: 0, name: 'Rosso', bg: 'bg-red-600', ring: 'ring-red-300', text: 'text-white', code: '0' },
  { id: 1, name: 'Verde', bg: 'bg-emerald-600', ring: 'ring-emerald-300', text: 'text-white', code: '1' },
  { id: 2, name: 'Bianco', bg: 'bg-zinc-100', ring: 'ring-zinc-400', text: 'text-zinc-950', code: '2' },
] as const;

function createCcMatrix(size: 2 | 4 | 8): number[][] {
  const mat = Array.from({ length: size }, () =>
    Array.from({ length: size }, () => Math.floor(Math.random() * 3))
  );
  const first = mat[0][0];
  if (mat.every((row) => row.every((v) => v === first))) {
    mat[size - 1][size - 1] = (first + 1) % 3;
  }
  return mat;
}

function checkCcSolved(mat: number[][]): boolean {
  const first = mat[0][0];
  return mat.every((row) => row.every((v) => v === first));
}

function applyCcMove(
  mat: number[][],
  i: number,
  j: number,
  dir: CcDir
): { next: number[][]; changed: boolean; ni: number; nj: number; newColor: number } {
  const n = mat.length;
  const ni = dir === 'n' ? i - 1 : dir === 's' ? i + 1 : i;
  const nj = dir === 'o' ? j - 1 : dir === 'e' ? j + 1 : j;
  if (ni < 0 || ni >= n || nj < 0 || nj >= n) {
    return { next: mat, changed: false, ni, nj, newColor: mat[i][j] };
  }
  if (mat[i][j] === mat[ni][nj]) {
    return { next: mat, changed: false, ni, nj, newColor: mat[i][j] };
  }
  const sum = mat[i][j] + mat[ni][nj];
  const newColor = sum === 1 ? 2 : sum === 2 ? 1 : 0; // 3 - (a + b)
  const next = mat.map((row) => [...row]);
  next[i][j] = newColor;
  next[ni][nj] = newColor;
  return { next, changed: true, ni, nj, newColor };
}

function computeCSolverSteps(initial: number[][]): CcStep[] {
  const n = initial.length;
  const m = n;
  let sim = initial.map((r) => [...r]);
  const steps: CcStep[] = [];

  const pushCambia = (i: number, j: number, dir: CcDir, phase: string) => {
    const res = applyCcMove(sim, i, j, dir);
    if (res.changed) {
      sim = res.next;
      steps.push({ i, j, dir, phase });
    }
  };

  const risoluzione2x2 = (i: number, j: number) => {
    const ph = `Risoluzione2x2(${i},${j})`;
    pushCambia(i, j, 'e', ph);
    pushCambia(i + 1, j, 'e', ph);
    pushCambia(i, j, 's', ph);
    pushCambia(i, j + 1, 's', ph);
  };

  const uOrizzontale4x4 = (i: number, j: number) => {
    const ph = `U_Orizzontale_4x4(${i},${j})`;
    pushCambia(i, j + 1, 'e', ph);
    pushCambia(i, j, 'e', ph);
    pushCambia(i, j + 2, 'e', ph);
    for (let k = 0; k < m; k++) {
      pushCambia(i, k, 's', ph);
    }
  };

  const uVerticale4x4 = (i: number, j: number) => {
    const ph = `U_Verticale_4x4(${i},${j})`;
    pushCambia(i + 1, j, 's', ph);
    pushCambia(i, j, 's', ph);
    pushCambia(i + 2, j, 's', ph);
    for (let k = 0; k < m; k++) {
      pushCambia(k, j, 'e', ph);
    }
  };

  for (let i = 0; i < n; i += 2) {
    for (let j = 0; j < m; j += 2) {
      risoluzione2x2(i, j);
    }
  }

  if (!checkCcSolved(sim) && n >= 4) {
    for (let i = 0; i < n; i += 2) {
      for (let j = 0; j < m; j += m / 2) {
        uOrizzontale4x4(i, j);
      }
    }
    for (let i = 0; i < n; i += 4) {
      for (let j = 0; j < m; j += 2) {
        uVerticale4x4(i, j);
      }
    }
    if (!checkCcSolved(sim) && n === 8) {
      for (let i = 0; i < n; i += 2) {
        uOrizzontale4x4(i, 2);
        uOrizzontale4x4(i, 0);
        uOrizzontale4x4(i, 2);
        uOrizzontale4x4(i, 0);
        uOrizzontale4x4(i, 4);
      }
      for (let j = 0; j < n; j += 2) {
        uVerticale4x4(2, j);
        uVerticale4x4(0, j);
        uVerticale4x4(2, j);
        uVerticale4x4(0, j);
        uVerticale4x4(4, j);
      }
    }
  }

  return steps;
}

export const ChangeColorCDemo: React.FC = () => {
  const [size, setSize] = useState<2 | 4 | 8>(4);
  const [matrix, setMatrix] = useState<number[][]>(() => createCcMatrix(4));
  const [selected, setSelected] = useState<[number, number] | null>(null);
  const [moves, setMoves] = useState(0);
  const [feedback, setFeedback] = useState<string>('Seleziona due celle adiacenti di colore diverso.');
  const [logs, setLogs] = useState<string[]>(['Crea_Matrice(4, 4) pronta.']);
  const [isSolving, setIsSolving] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const solverRef = useRef<number | null>(null);

  const solved = useMemo(() => checkCcSolved(matrix), [matrix]);

  const stopSolver = useCallback(() => {
    if (solverRef.current !== null) {
      window.clearInterval(solverRef.current);
      solverRef.current = null;
    }
    setIsSolving(false);
  }, []);

  useEffect(() => stopSolver, [stopSolver]);

  const resetGame = (newSize: 2 | 4 | 8 = size) => {
    stopSolver();
    setSize(newSize);
    setMatrix(createCcMatrix(newSize));
    setSelected(null);
    setMoves(0);
    setFeedback('Seleziona due celle adiacenti di colore diverso.');
    setLogs([`Crea_Matrice(${newSize}, ${newSize}) generata.`]);
  };

  const performDirMove = (i: number, j: number, dir: CcDir, phaseLabel = 'Mossa utente') => {
    const res = applyCcMove(matrix, i, j, dir);
    if (!res.changed) {
      setFeedback('Mossa non valida: le due celle devono essere diverse ed entro i bordi.');
      return;
    }
    setMatrix(res.next);
    setMoves((m) => m + 1);
    setSelected(null);
    const colorName = CC_COLORS[res.newColor].name;
    const line = `Cambia(A, ${i}, ${j}, '${dir}') -> [${res.ni}][${res.nj}] = ${colorName}`;
    setLogs((prev) => [line, ...prev].slice(0, 6));
    setFeedback(
      checkCcSolved(res.next)
        ? `Matrice risolta! Check() == 1 in ${moves + 1} mosse.`
        : `${phaseLabel}: combinazione -> ${colorName}.`
    );
  };

  const handleCellClick = (r: number, c: number) => {
    if (isSolving || solved) return;
    if (!selected) {
      setSelected([r, c]);
      setFeedback(`Cella (${r}, ${c}) selezionata: clicca una cella adiacente di colore diverso.`);
      return;
    }
    const [sr, sc] = selected;
    if (sr === r && sc === c) {
      setSelected(null);
      return;
    }
    const dr = r - sr;
    const dc = c - sc;
    if (Math.abs(dr) + Math.abs(dc) === 1) {
      const dir: CcDir = dr === -1 ? 'n' : dr === 1 ? 's' : dc === 1 ? 'e' : 'o';
      performDirMove(sr, sc, dir);
    } else {
      setSelected([r, c]);
      setFeedback(`Selezionata cella (${r}, ${c}).`);
    }
  };

  const runCSolver = (instant: boolean) => {
    if (solved || isSolving) return;
    const queue = computeCSolverSteps(matrix);
    if (queue.length === 0) return;
    setSelected(null);

    if (instant) {
      let curr = matrix;
      const trace: string[] = [];
      for (const s of queue) {
        const r = applyCcMove(curr, s.i, s.j, s.dir);
        if (r.changed) {
          curr = r.next;
          trace.unshift(`${s.phase}: Cambia(${s.i},${s.j},'${s.dir}')`);
        }
      }
      setMatrix(curr);
      setMoves((m) => m + trace.length);
      setLogs(trace.slice(0, 6));
      setFeedback(
        checkCcSolved(curr)
          ? `Risoluzione_Matrice() completata in ${moves + trace.length} mosse totali.`
          : 'Sequenza C completata.'
      );
      return;
    }

    setIsSolving(true);
    let idx = 0;
    let working = matrix.map((row) => [...row]);
    solverRef.current = window.setInterval(() => {
      if (idx >= queue.length) {
        stopSolver();
        return;
      }
      const step = queue[idx++];
      const r = applyCcMove(working, step.i, step.j, step.dir);
      if (r.changed) {
        working = r.next;
        setMatrix(working);
        setMoves((m) => m + 1);
        setSelected([step.i, step.j]);
        setLogs((prev) =>
          [`${step.phase} -> '${step.dir}' (${step.i},${step.j})`, ...prev].slice(0, 6)
        );
        if (checkCcSolved(working)) {
          setFeedback("L'algoritmo C ha risolto la matrice (Check() == 1).");
          stopSolver();
          setSelected(null);
        } else {
          setFeedback(`Esecuzione ${step.phase}...`);
        }
      }
    }, size === 8 ? 55 : 140);
  };

  const cellSizeClass =
    size === 2
      ? 'h-16 w-16 sm:h-20 sm:w-20 text-base'
      : size === 4
      ? 'h-12 w-12 sm:h-14 sm:w-14 text-sm'
      : 'h-8 w-8 sm:h-9 sm:w-9 text-[11px]';

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-zinc-800 bg-[#09090B] px-3.5 py-2.5">
        <div className="flex items-center gap-1.5">
          <span className="mr-1 text-xs font-medium text-zinc-400">Matrice:</span>
          {([2, 4, 8] as const).map((dim) => (
            <button
              key={dim}
              type="button"
              onClick={() => resetGame(dim)}
              className={`min-h-[34px] rounded-md px-2.5 text-xs font-mono font-medium transition-colors cursor-pointer ${
                size === dim
                  ? 'bg-accent text-white'
                  : 'border border-zinc-800 bg-[#121216] text-zinc-300 hover:text-white'
              }`}
            >
              {dim}×{dim}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="font-mono text-zinc-300 tabular-nums">
            MOSSE: <strong className="text-accent">{moves}</strong>
          </span>
          <button
            type="button"
            onClick={() => setShowCode((v) => !v)}
            className="inline-flex min-h-[34px] items-center gap-1.5 rounded-md border border-zinc-800 bg-[#121216] px-2.5 text-xs text-zinc-300 hover:border-zinc-700 hover:text-white cursor-pointer"
          >
            <Code2 className="h-3.5 w-3.5 text-accent" />
            <span>{showCode ? 'Nascondi C' : 'Codice C'}</span>
          </button>
          <button
            type="button"
            onClick={() => resetGame(size)}
            className="inline-flex min-h-[34px] items-center gap-1.5 rounded-md border border-zinc-800 bg-[#121216] px-2.5 text-xs text-zinc-200 hover:border-zinc-700 cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Nuova</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:items-start">
        <div className="flex flex-col items-center justify-center rounded-xl border border-zinc-800 bg-[#09090B] p-4 md:col-span-7">
          <div className="mb-1.5 flex items-center gap-1.5 pl-6">
            {Array.from({ length: size }, (_, c) => (
              <span
                key={c}
                className={`text-center font-mono text-[11px] text-zinc-500 ${
                  size === 2 ? 'w-16 sm:w-20' : size === 4 ? 'w-12 sm:w-14' : 'w-8 sm:w-9'
                }`}
              >
                {c}
              </span>
            ))}
          </div>

          <div className="space-y-1.5">
            {matrix.map((row, r) => (
              <div key={r} className="flex items-center gap-1.5">
                <span className="w-4 text-right font-mono text-[11px] text-zinc-500">{r}</span>
                {row.map((val, c) => {
                  const clr = CC_COLORS[val];
                  const isSel = selected?.[0] === r && selected?.[1] === c;
                  return (
                    <button
                      key={`${r}-${c}`}
                      type="button"
                      onClick={() => handleCellClick(r, c)}
                      aria-label={`Cella ${r},${c} ${clr.name}`}
                      className={`${cellSizeClass} ${clr.bg} ${clr.text} flex items-center justify-center rounded-lg font-mono font-bold transition-transform duration-150 cursor-pointer ${
                        isSel ? `ring-3 ${clr.ring} scale-105` : 'hover:opacity-90'
                      }`}
                    >
                      {clr.code}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>

          <p className="mt-3 text-center text-xs text-zinc-400">
            0 = Rosso · 1 = Verde · 2 = Bianco · Due colori diversi fondono nel terzo
          </p>
        </div>

        <div className="space-y-3 md:col-span-5">
          <div className="rounded-xl border border-zinc-800 bg-[#09090B] p-3.5">
            <p className="text-xs font-semibold text-zinc-200">Risolutore automatico C</p>
            <p className="mt-1 text-xs leading-relaxed text-zinc-400">
              Esegue l&apos;algoritmo originale <span className="font-mono text-zinc-300">Risoluzione_Matrice()</span> unendo blocchi 2×2 e strisce 4×4.
            </p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <button
                type="button"
                disabled={solved || isSolving}
                onClick={() => runCSolver(false)}
                className="inline-flex min-h-[38px] items-center justify-center gap-1.5 rounded-lg bg-accent px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-accent-hover disabled:opacity-40 cursor-pointer"
              >
                <Play className="h-3.5 w-3.5" />
                <span>Passo-passo</span>
              </button>
              <button
                type="button"
                disabled={solved || isSolving}
                onClick={() => runCSolver(true)}
                className="inline-flex min-h-[38px] items-center justify-center gap-1.5 rounded-lg border border-zinc-700 bg-[#121216] px-3 py-1.5 text-xs font-medium text-zinc-200 transition-colors hover:text-white disabled:opacity-40 cursor-pointer"
              >
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                <span>Risolvi subito</span>
              </button>
            </div>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-[#09090B] p-3.5">
            <p className="text-xs font-semibold text-zinc-200">Stato terminale C</p>
            <p className={`mt-1 text-xs font-medium ${solved ? 'text-emerald-400' : 'text-zinc-300'}`}>
              {feedback}
            </p>
            <div className="mt-2.5 space-y-1 border-t border-zinc-800 pt-2 font-mono text-[11px] text-zinc-400">
              {logs.map((entry, idx) => (
                <div key={idx} className="truncate">
                  {entry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showCode && (
        <pre className="overflow-x-auto rounded-xl border border-zinc-800 bg-[#070709] p-3.5 font-mono text-[11px] leading-relaxed text-zinc-300">
{`// Estratto fedele da ChangeColor/main.c
void Cambia(int** A, int i, int j, char x) {
  // Se A[i][j] != adiacente, entrambi diventano il terzo colore (3 - (a+b))
  if (A[i][j] + A[ni][nj] == 1) A[i][j] = A[ni][nj] = 2; // Rosso+Verde -> Bianco
  if (A[i][j] + A[ni][nj] == 2) A[i][j] = A[ni][nj] = 1; // Rosso+Bianco -> Verde
  if (A[i][j] + A[ni][nj] == 3) A[i][j] = A[ni][nj] = 0; // Verde+Bianco -> Rosso
}`}
        </pre>
      )}
    </div>
  );
};

// ============================================================================
// 2. GIOCO DEL 15 — Replica fedele C (Esercizio-13.7/main.c)
// ============================================================================

const SOLVED_15 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0];

function is15Solved(board: number[]): boolean {
  for (let i = 0; i < 15; i++) {
    if (board[i] !== i + 1) return false;
  }
  return board[15] === 0;
}

function get15Neighbors(emptyIdx: number): number[] {
  const r = Math.floor(emptyIdx / 4);
  const c = emptyIdx % 4;
  const list: number[] = [];
  if (r > 0) list.push(emptyIdx - 4);
  if (r < 3) list.push(emptyIdx + 4);
  if (c > 0) list.push(emptyIdx - 1);
  if (c < 3) list.push(emptyIdx + 1);
  return list;
}

function create15Board(): number[] {
  const arr = [...SOLVED_15];
  let empty = 15;
  let prev = -1;
  for (let s = 0; s < 140; s++) {
    const opts = get15Neighbors(empty).filter((i) => i !== prev);
    const pick = opts[Math.floor(Math.random() * opts.length)];
    arr[empty] = arr[pick];
    arr[pick] = 0;
    prev = empty;
    empty = pick;
  }
  return is15Solved(arr) ? create15Board() : arr;
}

export const GiocoDel15CDemo: React.FC = () => {
  const [board, setBoard] = useState<number[]>(() => create15Board());
  const [moves, setMoves] = useState(0);
  const [terminalStyle, setTerminalStyle] = useState(true);

  const emptyIdx = board.indexOf(0);
  const emptyR = Math.floor(emptyIdx / 4);
  const emptyC = emptyIdx % 4;
  const solved = useMemo(() => is15Solved(board), [board]);

  const possibleNumbers = useMemo(() => {
    const nums: number[] = [];
    if (emptyC > 0) nums.push(board[emptyIdx - 1]);
    if (emptyC < 3) nums.push(board[emptyIdx + 1]);
    if (emptyR > 0) nums.push(board[emptyIdx - 4]);
    if (emptyR < 3) nums.push(board[emptyIdx + 4]);
    return nums;
  }, [board, emptyIdx, emptyR, emptyC]);

  const swapWithIdx = useCallback(
    (targetIdx: number) => {
      if (solved || !get15Neighbors(emptyIdx).includes(targetIdx)) return;
      setBoard((prev) => {
        const next = [...prev];
        next[emptyIdx] = next[targetIdx];
        next[targetIdx] = 0;
        return next;
      });
      setMoves((m) => m + 1);
    },
    [emptyIdx, solved]
  );

  const moveEmptyByDir = useCallback(
    (dr: number, dc: number) => {
      if (solved) return;
      const nr = emptyR + dr;
      const nc = emptyC + dc;
      if (nr < 0 || nr > 3 || nc < 0 || nc > 3) return;
      swapWithIdx(nr * 4 + nc);
    },
    [emptyR, emptyC, solved, swapWithIdx]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) return;
      if (e.key === 'w' || e.key === 'W' || e.key === 'ArrowUp') {
        e.preventDefault();
        moveEmptyByDir(-1, 0);
      } else if (e.key === 's' || e.key === 'S' || e.key === 'ArrowDown') {
        e.preventDefault();
        moveEmptyByDir(1, 0);
      } else if (e.key === 'a' || e.key === 'A' || e.key === 'ArrowLeft') {
        e.preventDefault();
        moveEmptyByDir(0, -1);
      } else if (e.key === 'd' || e.key === 'D' || e.key === 'ArrowRight') {
        e.preventDefault();
        moveEmptyByDir(0, 1);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [moveEmptyByDir]);

  const verdict =
    moves < 26
      ? { text: 'OTTIMO LAVORO', cls: 'text-emerald-400' }
      : moves < 51
      ? { text: 'BUON LAVORO', cls: 'text-amber-400' }
      : { text: "ALLENATI DI PIU'", cls: 'text-red-400' };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-zinc-800 bg-[#09090B] px-3.5 py-2.5">
        <div className="font-mono text-xs text-zinc-300 tabular-nums">
          MOSSE: <strong className="text-accent">{moves}</strong>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setTerminalStyle((v) => !v)}
            className="min-h-[34px] rounded-md border border-zinc-800 bg-[#121216] px-2.5 text-xs text-zinc-300 hover:text-white cursor-pointer"
          >
            {terminalStyle ? 'Stile Griglia' : 'Stile Terminale C [ ]'}
          </button>
          <button
            type="button"
            onClick={() => {
              setBoard(create15Board());
              setMoves(0);
            }}
            className="inline-flex min-h-[34px] items-center gap-1.5 rounded-md bg-accent px-3 text-xs font-semibold text-white hover:bg-accent-hover cursor-pointer"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Nuova partita</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:items-start">
        <div className="flex flex-col items-center justify-center rounded-xl border border-zinc-800 bg-[#09090B] p-4 md:col-span-7">
          {terminalStyle && (
            <p className="mb-3 font-mono text-xs text-red-400">* IL GIOCO DEL 15 *</p>
          )}
          <div className="grid grid-cols-4 gap-2">
            {board.map((val, idx) => {
              const isEmpty = val === 0;
              const isMovable = !solved && get15Neighbors(emptyIdx).includes(idx);
              return (
                <button
                  key={idx}
                  type="button"
                  disabled={isEmpty || !isMovable || solved}
                  onClick={() => swapWithIdx(idx)}
                  aria-label={isEmpty ? 'Casella vuota' : `Tessera ${val}`}
                  className={`flex h-14 w-16 sm:h-16 sm:w-[74px] items-center justify-center rounded-lg font-mono text-sm sm:text-base font-semibold transition-all duration-150 ${
                    isEmpty
                      ? terminalStyle
                        ? 'border border-emerald-500/40 bg-emerald-950/30 text-emerald-400'
                        : 'border border-dashed border-zinc-700 bg-transparent text-zinc-600'
                      : isMovable
                      ? 'border border-accent/60 bg-[#18181E] text-white hover:bg-accent/20 cursor-pointer'
                      : 'border border-zinc-800 bg-[#121216] text-zinc-300'
                  }`}
                >
                  {isEmpty ? (terminalStyle ? '[    ]' : '') : terminalStyle ? `[ ${val < 10 ? `${val} ` : val} ]` : val}
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-3 md:col-span-5">
          <div className="rounded-xl border border-zinc-800 bg-[#09090B] p-3.5">
            <p className="text-xs font-semibold text-zinc-200">Console Esercizio-13.7.c</p>
            <p className="mt-2 font-mono text-xs text-zinc-300">
              Le mosse possibili sono: <span className="text-accent">{possibleNumbers.join(', ')}</span>.
            </p>
            <p className="mt-1.5 text-xs text-zinc-400">
              Usa <kbd className="rounded border border-zinc-700 px-1 text-zinc-200">W</kbd>{' '}
              <kbd className="rounded border border-zinc-700 px-1 text-zinc-200">A</kbd>{' '}
              <kbd className="rounded border border-zinc-700 px-1 text-zinc-200">S</kbd>{' '}
              <kbd className="rounded border border-zinc-700 px-1 text-zinc-200">D</kbd> o clicca i numeri adiacenti a <span className="font-mono text-emerald-400">[    ]</span>.
            </p>

            <div className="mt-4 flex flex-col items-center gap-1.5">
              <button
                type="button"
                disabled={solved || emptyR === 0}
                onClick={() => moveEmptyByDir(-1, 0)}
                className="flex h-10 w-16 items-center justify-center gap-1 rounded-lg border border-zinc-700 bg-[#121216] font-mono text-xs text-zinc-200 hover:border-accent disabled:opacity-30 cursor-pointer"
              >
                <ArrowUp className="h-3.5 w-3.5" /> W
              </button>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  disabled={solved || emptyC === 0}
                  onClick={() => moveEmptyByDir(0, -1)}
                  className="flex h-10 w-16 items-center justify-center gap-1 rounded-lg border border-zinc-700 bg-[#121216] font-mono text-xs text-zinc-200 hover:border-accent disabled:opacity-30 cursor-pointer"
                >
                  <ArrowLeft className="h-3.5 w-3.5" /> A
                </button>
                <button
                  type="button"
                  disabled={solved || emptyR === 3}
                  onClick={() => moveEmptyByDir(1, 0)}
                  className="flex h-10 w-16 items-center justify-center gap-1 rounded-lg border border-zinc-700 bg-[#121216] font-mono text-xs text-zinc-200 hover:border-accent disabled:opacity-30 cursor-pointer"
                >
                  <ArrowDown className="h-3.5 w-3.5" /> S
                </button>
                <button
                  type="button"
                  disabled={solved || emptyC === 3}
                  onClick={() => moveEmptyByDir(0, 1)}
                  className="flex h-10 w-16 items-center justify-center gap-1 rounded-lg border border-zinc-700 bg-[#121216] font-mono text-xs text-zinc-200 hover:border-accent disabled:opacity-30 cursor-pointer"
                >
                  <ArrowRight className="h-3.5 w-3.5" /> D
                </button>
              </div>
            </div>
          </div>

          {solved && (
            <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/20 p-3.5 text-center font-mono">
              <p className="text-xs text-zinc-100">
                HAI VINTO IN {moves} {moves === 1 ? 'MOSSA' : 'MOSSE'}.
              </p>
              <p className={`mt-1 text-sm font-bold ${verdict.cls}`}>{verdict.text}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 3. BATTLEBASH — Battaglia Navale 6x6 Client vs Server Bot
// ============================================================================

function generateShips6x6(): number[] {
  const grid = Array(36).fill(0);
  let placed = 0;
  while (placed < 3) {
    const horiz = Math.random() < 0.5;
    const r = Math.floor(Math.random() * (horiz ? 6 : 5));
    const c = Math.floor(Math.random() * (horiz ? 5 : 6));
    const idx1 = r * 6 + c;
    const idx2 = horiz ? idx1 + 1 : idx1 + 6;
    if (grid[idx1] === 0 && grid[idx2] === 0) {
      grid[idx1] = 1;
      grid[idx2] = 1;
      placed++;
    }
  }
  return grid;
}

export const BattleBashDemo: React.FC = () => {
  const [playerShips, setPlayerShips] = useState<number[]>(() => generateShips6x6());
  const [enemyShips, setEnemyShips] = useState<number[]>(() => generateShips6x6());
  const [playerShots, setPlayerShots] = useState<Record<number, 'hit' | 'miss'>>({});
  const [enemyShots, setEnemyShots] = useState<Record<number, 'hit' | 'miss'>>({});
  const [turn, setTurn] = useState<'player' | 'cpu' | 'won' | 'lost'>('player');
  const [log, setLog] = useState<string[]>([
    '[THREAD] Partita pronta: 3 navi da 2 caselle per flotta.',
  ]);

  const resetBattle = () => {
    setPlayerShips(generateShips6x6());
    setEnemyShips(generateShips6x6());
    setPlayerShots({});
    setEnemyShots({});
    setTurn('player');
    setLog(['[SOCKET] Nuova sessione inizializzata. Tocca a te sparare.']);
  };

  const handleFire = (idx: number) => {
    if (turn !== 'player' || playerShots[idx]) return;
    const isHit = enemyShips[idx] === 1;
    const nextPlayerShots: Record<number, 'hit' | 'miss'> = {
      ...playerShots,
      [idx]: isHit ? 'hit' : 'miss',
    };
    setPlayerShots(nextPlayerShots);

    const hitsCount = Object.entries(nextPlayerShots).filter(([, v]) => v === 'hit').length;
    const r = Math.floor(idx / 6);
    const c = idx % 6;
    if (hitsCount >= 6) {
      setTurn('won');
      setLog((l) => [`[TU] (${r},${c}) COLPITO! Flotta nemica affondata!`, ...l].slice(0, 5));
      return;
    }

    setTurn('cpu');
    setLog((l) =>
      [`[TU] Fuoco in (${r},${c}) -> ${isHit ? 'COLPITO!' : 'Acqua'}`, ...l].slice(0, 5)
    );

    window.setTimeout(() => {
      const available: number[] = [];
      for (let i = 0; i < 36; i++) {
        if (!enemyShots[i]) available.push(i);
      }
      if (available.length === 0) return;
      const pick = available[Math.floor(Math.random() * available.length)];
      const cpuHit = playerShips[pick] === 1;
      const nextEnemyShots: Record<number, 'hit' | 'miss'> = {
        ...enemyShots,
        [pick]: cpuHit ? 'hit' : 'miss',
      };
      setEnemyShots(nextEnemyShots);
      const cpuHitsCount = Object.entries(nextEnemyShots).filter(([, v]) => v === 'hit').length;
      const cr = Math.floor(pick / 6);
      const cc = pick % 6;
      if (cpuHitsCount >= 6) {
        setTurn('lost');
        setLog((l) => [`[CPU] (${cr},${cc}) COLPITO! Flotta persa.`, ...l].slice(0, 5));
      } else {
        setTurn('player');
        setLog((l) =>
          [`[CPU] Risponde su (${cr},${cc}) -> ${cpuHit ? 'COLPITO!' : 'Acqua'}`, ...l].slice(0, 5)
        );
      }
    }, 350);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-zinc-800 bg-[#09090B] px-3.5 py-2.5">
        <span className="font-mono text-xs font-medium text-zinc-200">
          {turn === 'player' && 'Tuo turno: clicca una cella sul radar avversario'}
          {turn === 'cpu' && 'Server CPU sta rispondendo...'}
          {turn === 'won' && <span className="text-emerald-400">Vittoria! Tutte le navi affondate.</span>}
          {turn === 'lost' && <span className="text-red-400">Sconfitta: la CPU ha affondato la tua flotta.</span>}
        </span>
        <button
          type="button"
          onClick={resetBattle}
          className="inline-flex min-h-[34px] items-center gap-1.5 rounded-md border border-zinc-800 bg-[#121216] px-2.5 text-xs text-zinc-200 hover:border-zinc-700 cursor-pointer"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          <span>Nuova partita</span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-zinc-800 bg-[#09090B] p-3.5">
          <p className="mb-2.5 font-mono text-xs text-zinc-400">Radar avversario (clicca per colpire)</p>
          <div className="grid grid-cols-6 gap-1.5">
            {Array.from({ length: 36 }, (_, i) => {
              const shot = playerShots[i];
              return (
                <button
                  key={i}
                  type="button"
                  disabled={turn !== 'player' || Boolean(shot)}
                  onClick={() => handleFire(i)}
                  className={`flex h-9 items-center justify-center rounded font-mono text-xs font-bold transition-colors ${
                    shot === 'hit'
                      ? 'bg-red-600 text-white'
                      : shot === 'miss'
                      ? 'bg-zinc-800 text-zinc-500'
                      : 'border border-zinc-800 bg-[#121216] text-zinc-500 hover:border-accent hover:text-accent cursor-pointer'
                  }`}
                >
                  {shot === 'hit' ? 'X' : shot === 'miss' ? '·' : '?'}
                </button>
              );
            })}
          </div>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-[#09090B] p-3.5">
          <p className="mb-2.5 font-mono text-xs text-zinc-400">La tua flotta</p>
          <div className="grid grid-cols-6 gap-1.5">
            {Array.from({ length: 36 }, (_, i) => {
              const ship = playerShips[i] === 1;
              const shot = enemyShots[i];
              return (
                <div
                  key={i}
                  className={`flex h-9 items-center justify-center rounded font-mono text-xs font-bold ${
                    shot === 'hit'
                      ? 'bg-red-600/80 text-white'
                      : shot === 'miss'
                      ? 'bg-zinc-800 text-zinc-500'
                      : ship
                      ? 'border border-emerald-500/40 bg-emerald-950/50 text-emerald-400'
                      : 'border border-zinc-800/70 bg-[#111115] text-zinc-600'
                  }`}
                >
                  {shot === 'hit' ? 'X' : shot === 'miss' ? '·' : ship ? '#' : '~'}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-zinc-800 bg-[#09090B] px-3.5 py-2.5 font-mono text-[11px] text-zinc-400 space-y-1">
        {log.map((l, idx) => (
          <div key={idx} className="truncate">{l}</div>
        ))}
      </div>
    </div>
  );
};

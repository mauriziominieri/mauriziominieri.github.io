import React from 'react';
import { SKILL_DOMAINS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  return (
    <section id="competenze" className="border-b border-zinc-800/70 bg-[#09090B]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-accent">Competenze</p>
            <h2 className="mt-1 font-display text-3xl font-semibold tracking-tight text-zinc-100">
              Stack tecnico e didattica.
            </h2>
          </div>
          <p className="text-sm text-zinc-400">
            Linguaggi, infrastrutture cloud e robotica educativa.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {SKILL_DOMAINS.map((domain) => (
            <article
              key={domain.index}
              className="rounded-xl border border-zinc-800 bg-[#111115] p-5 sm:p-6"
            >
              <div className="flex items-baseline gap-2.5">
                <span className="font-mono text-sm font-medium text-accent tabular-nums">
                  {domain.index}
                </span>
                <h3 className="font-display text-lg font-semibold tracking-tight text-zinc-100">
                  {domain.title}
                </h3>
              </div>

              <ul className="mt-4 divide-y divide-zinc-800/80 border-t border-zinc-800/80">
                {domain.items.map((item) => (
                  <li key={item.name} className="py-3 last:pb-0">
                    <p className="text-sm font-medium text-zinc-100">{item.name}</p>
                    <p className="mt-0.5 text-xs text-zinc-400">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

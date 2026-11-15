import React from 'react';
import {
  BattleBashDemo,
  ChangeColorCDemo,
  GiocoDel15CDemo,
} from './demos/ClassicDemos';
import {
  AbrGraphDemo,
  DanceScratchDemo,
  EserciziJavaDemo,
  ManusVrDemo,
} from './demos/AppDemos';

const PLAYABLE_ACTION_LABELS: Record<string, string> = {
  'manus-vr': 'Guarda video',
  'change-color': 'Gioca (C)',
  'gioco-del-15': 'Gioca (C)',
  'abr-graph': 'Testa algoritmi',
  battlebash: 'Gioca ora',
  'esercizi-java': 'Esplora 89 tracce',
  'dance-scratch': 'Gioca su Scratch',
};

export function isProjectPlayable(projectId: string): boolean {
  return projectId in PLAYABLE_ACTION_LABELS;
}

export function getPlayActionLabel(projectId: string): string {
  return PLAYABLE_ACTION_LABELS[projectId] ?? 'Dettagli';
}

export const ProjectInteractiveDemo: React.FC<{ projectId: string }> = ({ projectId }) => {
  switch (projectId) {
    case 'manus-vr':
      return <ManusVrDemo />;
    case 'change-color':
      return <ChangeColorCDemo />;
    case 'gioco-del-15':
      return <GiocoDel15CDemo />;
    case 'abr-graph':
      return <AbrGraphDemo />;
    case 'battlebash':
      return <BattleBashDemo />;
    case 'esercizi-java':
      return <EserciziJavaDemo />;
    case 'dance-scratch':
      return <DanceScratchDemo />;
    default:
      return null;
  }
};

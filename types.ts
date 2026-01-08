import { ElementType } from 'react';

export type Dimension = 'reality' | 'upsidedown';

export interface IntroSequenceProps {
  onComplete: () => void;
}

export interface GlitchTextProps {
  text: string;
  as?: ElementType;
  className?: string;
  hoverTrigger?: boolean;
}

export interface ParticleSystemProps {
  dimension: Dimension;
}

export interface ToggleSwitchProps {
  dimension: Dimension;
  toggleDimension: () => void;
}

export interface SeasonData {
    id: string;
    title: string;
    year: string;
    content: string[];
}
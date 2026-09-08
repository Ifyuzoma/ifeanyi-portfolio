import type { CSSProperties } from "react";

export type Fact = { k: string; v: string };

export type Shot = {
  src: string;
  label: string;
  alt?: string;
  imgClassName?: string;
  imgStyle?: CSSProperties;
};

export type ListItem = { n: string; t: string };

export type Callout = { label: string; text: string };

export type KVRow = { k: string; v: string };

export type MediaKind = "group" | "wide" | "cards";

export type Media = { kind: MediaKind; shots: Shot[]; caption: string; bordered?: boolean; itemSize?: string };

export type Chapter = {
  n: string;
  title: string;
  paras: string[];
  list?: ListItem[];
  callout?: Callout;
  media?: Media;
};

export type Decision = {
  n: string;
  title: string;
  rows: KVRow[];
  media?: Media;
};

export type Closer = {
  n: string;
  title: string;
  paras: string[];
  rows?: KVRow[];
};

export type CaseStudyData = {
  slug: string;
  tags: string[];
  title: string;
  dek: string;
  liveUrl?: string;
  facts: Fact[];
  facts_cols?: string;
  chapters: Chapter[];
  decisionsHeading: string;
  decisions: Decision[];
  closers: Closer[];
  finalShots: Media;
  nextProject: { title: string; href: string; label?: string };
};

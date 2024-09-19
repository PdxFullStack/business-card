import type { Snippet } from "svelte";

export type FrameArea = 'top' | 'right' | 'bottom' | 'left';
export type FrameAreasToSnippet =
  Pick<
    Map<FrameArea, Snippet>,
    'get'
  > &
  Iterable<[FrameArea, Snippet]>;
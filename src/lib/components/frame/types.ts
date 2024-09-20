import type { Snippet } from "svelte";

// TODO: Find a way to have a single soure feed both FrameBorderAreas and frame__grid
// Keep synced with areas of frame__grid class in Grid.svelte.
export type FrameBorderAreas = 'top' | 'right' | 'bottom' | 'left';
export type FrameBorderAreasToContent =
  Pick<
    Map<FrameBorderAreas, Snippet>,
    'get'
  > &
  Iterable<[FrameBorderAreas, Snippet]>;

export type ModuleProps = {
  borderAreaToContent: FrameBorderAreasToContent
  children: Snippet;
}
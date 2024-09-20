import type { Renderable } from "$lib/types";

// TODO: Find a way to have a single soure feed both FrameBorderAreas and frame__grid
// Keep synced with areas of frame__grid class in Grid.svelte.
export type FrameBorderAreas = 'top' | 'right' | 'bottom' | 'left';
export type FrameBorderAreasToContent =
  Pick<
    Map<FrameBorderAreas, Renderable>,
    'get'
  > &
  Iterable<[FrameBorderAreas, Renderable]>;
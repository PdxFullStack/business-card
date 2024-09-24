import type { FrameBorderAreasToContent } from "$lib/components/Frame/types";

import Mask from '$lib/components/Mask';
import ThemeSelectPanel from "./ThemeSelectPanel.svelte";

export function createMaskAndThemeSelectAreas(): FrameBorderAreasToContent {
  const map = new Map();

  map.set('top', Mask);
  map.set('bottom', Mask);
  map.set('left', ThemeSelectPanel);

  return map;
}

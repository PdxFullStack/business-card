import type { FrameBorderAreasToContent } from "$lib/components/Frame/types";

import Mask from '$lib/components/Mask';
import ThemeSelector from "$lib/components/ThemeSelector";


export function createMasksForVerticalBorderAreas(): FrameBorderAreasToContent {
  const map = new Map();

  map.set('top', Mask);
  map.set('bottom', Mask);
  map.set('left', ThemeSelector);

  return map;
}
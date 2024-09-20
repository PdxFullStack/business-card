import type { FrameBorderAreasToContent } from "../Frame/types";
import Mask from '$lib/components/Mask';


export function createMasksForVerticalBorderAreas(): FrameBorderAreasToContent {
  const map = new Map();

  map.set('top', Mask);
  map.set('bottom', Mask);

  return map;
}
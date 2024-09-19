import type { FrameAreasToSnippet } from "../Frame/types";
import Mask from '$lib/components/Mask';


export function createObscuredSnippetsForFrameAreas(): FrameAreasToSnippet {
  const map = new Map();

  map.set('top', Mask);
  map.set('bottom', Mask);

  return map;
}


export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.C-xYhtsE.js","_app/immutable/chunks/disclose-version.DxF3jrmv.js","_app/immutable/chunks/runtime.Djh4Bja3.js","_app/immutable/chunks/entry.DUNe-Lqi.js"];
export const stylesheets = [];
export const fonts = [];

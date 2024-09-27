import { f as ensure_array_like, h as attr, j as stringify, p as push, e as pop, k as escape_html } from "../../chunks/index.js";
/* empty css                                              */
function Border($$payload, $$props) {
  let { areaToContent } = $$props;
  const each_array = ensure_array_like(areaToContent);
  $$payload.out += `<!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let [area, content] = each_array[$$index];
    $$payload.out += `<div${attr("style", `grid-area: ${stringify(area)};`)} class="svelte-7ln8as">`;
    content($$payload);
    $$payload.out += `<!----></div>`;
  }
  $$payload.out += `<!--]-->`;
}
function DisplayCase($$payload, $$props) {
  push();
  let { children } = $$props;
  $$payload.out += `<div role="main" class="svelte-oqiqk1">`;
  children($$payload);
  $$payload.out += `<!----></div>`;
  pop();
}
function Grid($$payload, $$props) {
  push();
  let { children } = $$props;
  $$payload.out += `<div class="frame__grid svelte-5pouqv">`;
  children($$payload);
  $$payload.out += `<!----></div>`;
  pop();
}
function Frame($$payload, $$props) {
  push();
  let { borderAreasToContent, children } = $$props;
  Grid($$payload, {
    children: ($$payload2) => {
      Border($$payload2, { areaToContent: borderAreasToContent });
      $$payload2.out += `<!----> `;
      DisplayCase($$payload2, {
        children: ($$payload3) => {
          children($$payload3);
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  pop();
}
function Mask($$payload) {
  $$payload.out += `<div class="mask svelte-195zknq"></div>`;
}
function Group($$payload, $$props) {
  push();
  let { children } = $$props;
  $$payload.out += `<fieldset class="svelte-13izmyj">`;
  children($$payload);
  $$payload.out += `<!----></fieldset>`;
  pop();
}
function Option($$payload, $$props) {
  let { checked, groupName, id, label, onSelect } = $$props;
  $$payload.out += `<div class="option svelte-hul96m"><input class="option__input svelte-hul96m"${attr("checked", checked, true)}${attr("id", id)}${attr("name", groupName)} type="radio"> <label${attr("for", id)}>${escape_html(label)}</label></div>`;
}
function RadioGroup($$payload, $$props) {
  push();
  let { name, onSelect, options, value } = $$props;
  Group($$payload, {
    children: ($$payload2) => {
      const each_array = ensure_array_like(options);
      $$payload2.out += `<!--[-->`;
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        let option = each_array[i];
        Option($$payload2, {
          checked: value.toString() === option.value.toString(),
          groupName: name,
          id: `${name}-${i}`,
          label: option.label,
          onSelect: () => onSelect(option.value)
        });
      }
      $$payload2.out += `<!--]-->`;
    },
    $$slots: { default: true }
  });
  pop();
}
const themeConfig = {
  default: "light"
};
function createRuneThemeStore() {
  let theme = themeConfig.default;
  return {
    get theme() {
      return theme;
    },
    select(selectedTheme) {
      theme = selectedTheme;
    }
  };
}
const themeStore = createRuneThemeStore();
function createOptions() {
  return [
    {
      label: "LIGHT",
      value: "light"
    },
    {
      label: "DARK",
      value: "dark"
    }
  ];
}
function ThemeSelector($$payload, $$props) {
  push();
  const options = createOptions();
  RadioGroup($$payload, {
    name: "theme-selector",
    onSelect: (value) => themeStore.select(value),
    options,
    value: themeStore.theme
  });
  pop();
}
function ThemeSelectPanel($$payload) {
  $$payload.out += `<div class="theme-select-panel svelte-1jg5cxb"><div class="theme-select-panel__selector svelte-1jg5cxb">`;
  ThemeSelector($$payload);
  $$payload.out += `<!----></div></div>`;
}
function createMaskAndThemeSelectAreas() {
  const map = /* @__PURE__ */ new Map();
  map.set("top", Mask);
  map.set("bottom", Mask);
  map.set("left", ThemeSelectPanel);
  return map;
}
function FrameWithMasksAndThemeSelect($$payload, $$props) {
  push();
  let { children } = $$props;
  const maskAndThemeSelectAreas = createMaskAndThemeSelectAreas();
  Frame($$payload, {
    borderAreasToContent: maskAndThemeSelectAreas,
    children: ($$payload2) => {
      children($$payload2);
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  pop();
}
function Root($$payload, $$props) {
  push();
  let { children } = $$props;
  $$payload.out += `<div id="Root"${attr("data-theme", themeStore.theme)} class="svelte-148515f">`;
  children($$payload);
  $$payload.out += `<!----></div>`;
  pop();
}
function _layout($$payload, $$props) {
  push();
  const { children } = $$props;
  Root($$payload, {
    children: ($$payload2) => {
      FrameWithMasksAndThemeSelect($$payload2, {
        children: ($$payload3) => {
          children($$payload3);
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
    },
    $$slots: { default: true }
  });
  pop();
}
export {
  _layout as default
};

import { k as escape_html, e as pop, p as push, h as attr } from "../../chunks/index.js";
/* empty css                                              */
const links = {
  emailAddress: "dawson.turechek@gmail.com",
  githubSubdomain: "/PdxFullStack",
  linkedInSubdomain: "/in/dawson-turechek"
};
const name = {
  first: "dawson",
  last: "turechek"
};
const slogan = "passionate about crafting accessible, organic experiences through digital means";
const title = "full-stack software engineer";
const personalInfoJson = {
  links,
  name,
  slogan,
  title
};
function createLocalJsonPersonalInfoService() {
  function formatName({ first, last }) {
    return [first, last].join(" ");
  }
  const get = () => {
    const { links: links2, name: name2, slogan: slogan2, title: title2 } = personalInfoJson;
    return {
      links: links2,
      name: formatName(name2),
      slogan: slogan2,
      title: title2
    };
  };
  return {
    get
  };
}
const personalInfoService = createLocalJsonPersonalInfoService();
function About($$payload, $$props) {
  push();
  const { name: name2, slogan: slogan2, title: title2 } = personalInfoService.get();
  $$payload.out += `<div class="about svelte-1h7v2rj"><h1 class="about__header svelte-1h7v2rj">${escape_html(name2)}</h1> <h2 class="about__subheader svelte-1h7v2rj">${escape_html(title2)}</h2> <h3 class="about__description svelte-1h7v2rj">${escape_html(slogan2)}</h3></div>`;
  pop();
}
function Layout($$payload, $$props) {
  push();
  let { children } = $$props;
  $$payload.out += `<div class="layout svelte-aweerr">`;
  children($$payload);
  $$payload.out += `<!----></div>`;
  pop();
}
function Link($$payload, $$props) {
  push();
  let { href, label, registerElement } = $$props;
  $$payload.out += `<li class="link svelte-wtsrxr"><a class="link__anchor svelte-wtsrxr"${attr("href", href)} target="_blank">${escape_html(label)}</a></li>`;
  pop();
}
function LinkedInLink($$payload, $$props) {
  const { registerElement, subdomain } = $$props;
  Link($$payload, {
    href: "https://linkedin.com" + subdomain,
    label: "LinkedIn",
    registerElement
  });
}
function GithubLink($$payload, $$props) {
  const { registerElement, subdomain } = $$props;
  Link($$payload, {
    href: "https://github.com" + subdomain,
    label: "Github",
    registerElement
  });
}
function LinksContainer($$payload, $$props) {
  push();
  let { registerElement, children } = $$props;
  $$payload.out += `<ul class="links-container svelte-1mhu1nl">`;
  children($$payload);
  $$payload.out += `<!----></ul>`;
  pop();
}
function createTabNavFacilitatorFromTabCount(expectedTabCount) {
  let groupElement = void 0;
  let tabElements = [];
  !!groupElement && tabElements.length === expectedTabCount;
  const registerGroup = (element) => {
    groupElement = element;
  };
  const registerTab = (element) => {
    tabElements = [...tabElements, element];
  };
  return { registerGroup, registerTab };
}
function Links($$payload, $$props) {
  push();
  const { links: links2 } = personalInfoService.get();
  const { registerGroup, registerTab } = createTabNavFacilitatorFromTabCount(2);
  LinksContainer($$payload, {
    registerElement: registerGroup,
    children: ($$payload2) => {
      GithubLink($$payload2, {
        registerElement: registerTab,
        subdomain: links2.githubSubdomain
      });
      $$payload2.out += `<!----> `;
      LinkedInLink($$payload2, {
        registerElement: registerTab,
        subdomain: links2.linkedInSubdomain
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  pop();
}
function CardContents($$payload) {
  Layout($$payload, {
    children: ($$payload2) => {
      About($$payload2);
      $$payload2.out += `<!----> `;
      Links($$payload2);
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
}
function _page($$payload) {
  CardContents($$payload);
}
export {
  _page as default
};

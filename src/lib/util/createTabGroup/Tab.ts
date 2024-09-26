import type { Cursor } from "./createCursorFromLength.svelte";

type Props = {
  onFocus: () => void;
  root: HTMLElement;
}

export class Tab {
  private onFocus: () => void;
  private root: HTMLElement;

  constructor({onFocus, root}: Props) {
    this.onFocus = onFocus;
    this.root = root;
    this.unfocus();

    this.setup();
  }

  is(reference: Node): boolean {
    return this.root === reference;
  }

  cleanup(): void {
    this.root.removeEventListener('focus', () => this.onFocus);
  }

  makeFocusable(): void {
    this.root.setAttribute('tabindex', '0');
  }

  focus(): void {
    this.makeFocusable();
    this.root.focus();
  }

  unfocus(): void {
    this.root.setAttribute('tabindex', '-1');
  }

  private setup(): void {
    this.root.addEventListener('focus', () => this.onFocus);
  }
}
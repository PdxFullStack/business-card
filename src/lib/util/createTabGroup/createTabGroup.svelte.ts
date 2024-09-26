import { createCursorFromLength } from './createCursorFromLength.svelte';
import { Tab } from './Tab';

export function createTabGroup(groupEl: HTMLElement, tabEls: HTMLElement[]) {
	const cleanup = () => {
		observer.disconnect();
		groupEl.removeEventListener('keydown', handleKeydown);
	};

	const createObserver = () => {
		return new MutationObserver((mutations) => {
			mutations.forEach(processMutation);
		});
	};

	const createTabElement = (sourceEl: HTMLElement, index: number) => {
		return new Tab({
			root: sourceEl,
			onFocus: () => cursor.set(index)
		});
	};

	const handleKeydown = (event: KeyboardEvent) => {
		let adjustmentFn: (() => void) | undefined;

		switch (event.key) {
			case 'ArrowRight':
			case 'ArrowDown':
				adjustmentFn = cursor.rollUp;
				break;
			case 'ArrowLeft':
			case 'ArrowUp':
				adjustmentFn = cursor.rollDown;
				break;
		}

		if (!adjustmentFn) {
			return;
		}

		event.preventDefault();
		adjustmentFn();
	};

	const processMutation = ({ type, removedNodes }: MutationRecord) => {
		if (type !== 'childList') {
			return;
		}

		removedNodes.forEach((node) => {
			tabs.find((tab) => tab.is(node))?.cleanup();
		});
	};

	const setActive = (next: number, prev: number) => {
		if (prev === -1) {
			tabs[next].makeFocusable();
			return;
		}

		tabs[prev].unfocus();
		tabs[next].focus();
	};

	const setup = () => {
		groupEl.addEventListener('keydown', handleKeydown);
		observer.observe(groupEl, { childList: true });
	};

	const cursor = createCursorFromLength(tabEls.length);
	const observer = createObserver();
	const tabs = tabEls.map(createTabElement);

	$effect(() => {
		setActive(cursor.curr, cursor.prev);
	});

	setup();

	return {
		cleanup
	};
}

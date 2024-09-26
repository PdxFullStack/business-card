import createTabGroup from '$lib/util/createTabGroup';

type TabNavFacilitator = {
	registerGroup: (groupEl: HTMLElement) => void;
	registerTab: (tabEl: HTMLElement) => void;
};

export function createTabNavFacilitatorFromTabCount(expectedTabCount: number): TabNavFacilitator {
	let groupElement: HTMLElement | undefined = $state();
	let tabElements: HTMLElement[] = $state([]);

	const isComplete = $derived(!!groupElement && tabElements.length === expectedTabCount);

	const registerGroup = (element: HTMLElement) => {
		groupElement = element;
	};

	const registerTab = (element: HTMLElement) => {
		tabElements = [...tabElements, element];
	};

	$effect(() => {
		if (!isComplete) {
			return;
		}

		const tabGroup = createTabGroup(groupElement as HTMLElement, tabElements);

		return () => tabGroup.cleanup();
	});

	return {
		registerGroup,
		registerTab
	};
}

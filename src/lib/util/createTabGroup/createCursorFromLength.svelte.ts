export type Cursor = {
	curr: number;
	prev: number;
	rollDown: () => void;
	rollUp: () => void;
	set: (i: number) => void;
};

export function createCursorFromLength(length: number): Cursor {
	const max = length - 1;
	const min = 0;

	let curr = $state(0);
	let prev = $state(-1);

	const calcRoll = (newRawIndex: number) => {
		return ((newRawIndex % length) + length) % length;
	};

	const rollUp = () => {
		update(calcRoll(curr + 1));
	};

	const rollDown = () => {
		update(calcRoll(curr - 1));
	};

	const set = (newIndex: number) => {
		if (newIndex < min || newIndex > max) {
			throw new Error(
				`Tab Group Cursor could not be set to ${newIndex}. Try setting cursor between ${min} & ${max}.`
			);
		}

		update(newIndex);
	};

	const update = (newIndex: number) => {
		prev = curr;
		curr = newIndex;
	};

	return {
		get curr() {
			return curr;
		},
		get prev() {
			return prev;
		},
		rollDown,
		rollUp,
		set
	};
}

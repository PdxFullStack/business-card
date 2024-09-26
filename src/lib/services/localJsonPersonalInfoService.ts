import type { PersonalInfoService } from '$lib/types';

import personalInfoJson from '../../config/sensitive-info/personal-info.json';

type PersonalInfoJsonStructure = {
	links: {
		emailAddress: string;
		githubSubdomain: string;
		linkedInSubdomain: string;
	};
	name: {
		first: string;
		last: string;
	};
	slogan: string;
	title: string;
};

function createLocalJsonPersonalInfoService(): PersonalInfoService {
	function formatName({ first, last }: PersonalInfoJsonStructure['name']) {
		return [first, last].join(' ');
	}

	const get = () => {
		const { links, name, slogan, title } = personalInfoJson;

		return {
			links,
			name: formatName(name),
			slogan,
			title
		};
	};

	return {
		get
	};
}

export const personalInfoService = createLocalJsonPersonalInfoService();

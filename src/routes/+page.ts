import { getCharacters, getCharactersByName } from '$lib/api/getCharacters';
import type { Characters } from '$lib/interface/Character';
import { error, type Load } from '@sveltejs/kit';

export const load: Load = async ({ url }) => {
	const name = url.searchParams.get('name');
	const page = url.searchParams.get('page') ?? 1;

	let characters: Characters;
	let pagination = true;

	if (name) {
		characters = await getCharactersByName(name, +page);

		if (!characters) {
			throw error(404, 'Characters not found');
		}

		pagination = characters.info?.pages > 1;
	} else {
		characters = await getCharacters(+page);

		if (!characters) {
			throw error(404, 'Characters not found');
		}
	}

	return {
		characters,
		animationStart: false,
		pageNumber: +page,
		pagination,
		name
	};
};

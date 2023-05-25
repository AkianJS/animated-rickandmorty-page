import { getCharacters } from '$lib/api/getCharacters';
import type { Characters } from '$lib/interface/Character';
import { error, type Load } from '@sveltejs/kit';

export const load: Load = async ({ params }) => {
	const page = params.page ?? 1;
	const characters: Characters = await getCharacters(+page);

	if (!characters) {
		throw error(404, 'Characters not found');
	}

	return {
		characters,
		animationStart: false
	};
};

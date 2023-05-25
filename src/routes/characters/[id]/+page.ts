import { getCharacterDetail } from '$lib/api/getCharacters';
import type { Character } from '$lib/interface/Character';
import { error, type Load } from '@sveltejs/kit';

export const load: Load = async ({ params }) => {
	const id = Number(params.id);
	const character: Character = await getCharacterDetail(id);

	if (!character.id) {
		throw error(404, 'Character not found');
	}

	return {
		character,
		animationStart: false
	};
};

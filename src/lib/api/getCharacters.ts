const BASE_URL = 'https://rickandmortyapi.com/api';

export const getCharacters = async (page: number) => {
	const response = await fetch(`${BASE_URL}/character?page=${page}`);
	const data = await response.json();
	return data;
};

export const getCharacterDetail = async (id: number | undefined) => {
	const response = await fetch(`${BASE_URL}/character/${id}`);
	const data = await response.json();
	return data;
};

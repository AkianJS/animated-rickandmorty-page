export interface Character {
	created: string;
	episode: string[];
	gender: string;
	id: number;
	image: string;
	location: {
		name: string;
		url: string;
	};
	name: string;
	origin: {
		name: string;
		url: string;
	};
	species: string;
	status: string;
	type: string;
	url: string;
}

interface Info {
	count: number;
	pages: number;
	next: string;
	prev: string;
}

export interface Characters {
	info: Info;
	results: Character[];
}
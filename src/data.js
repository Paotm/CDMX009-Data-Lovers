import data from './data/pokemon/pokemon.js';

export const getCharacterbyType = (type) => data.pokemon.filter(p=>p.type.includes(type))

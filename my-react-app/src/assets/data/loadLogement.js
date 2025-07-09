import data from '../data/tableau.json';

export function getLogementById(id) {
  return data.find((logement) => logement.id === id);
}

export function getAllLogements() {
  return data;
}
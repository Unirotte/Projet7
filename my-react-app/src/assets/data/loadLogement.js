import data from '../data/tableau.json';
import collapsData from '../data/collapsTableau.json';

export function getLogementById(id) {
  return data.find((logement) => logement.id === id);
}
export function getAllLogements() {
  return data;
}

export function getCollapsData(id) {
  return collapsData.find((collaps) => collaps.id === id);
}
export function getAllCollaps() {
  return collapsData;
}
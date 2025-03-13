import {Person} from '../types/types';

const baseURL = 'https://swapi.dev/api/people/';

const getPeople = async (searchString: string): Promise<Person[]> => {
  const response = await fetch(`${baseURL}?search=${searchString}`);
  const data = await response.json();
  return data.results;
};

export {getPeople};

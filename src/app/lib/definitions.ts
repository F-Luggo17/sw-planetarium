export type StarWarsAPI = {
    count: number;
    next: string;
    previous: string;
    results: Planet[] | Person[];
}

export type Planet = {
    name: string;
    rotation_period: string;
    orbital_period: number;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: Person[];
    films: string[];
    created: string;
    edited: string;
    url: string;
}

export type Person = {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
  };

export type FormState = {
    [key: string]: any;
  };
  
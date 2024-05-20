import { Planet } from "../lib/definitions";

export const searchPlanets = (planets: Planet[], input: string) => {
    return planets.filter(planet => 
        planet.climate.includes(input) ||
        planet.diameter.includes(input) ||
        planet.gravity.includes(input) ||
        planet.name.includes(input) ||
        planet.orbital_period.toString().includes(input) ||
        planet.rotation_period.toString().includes(input) ||
        planet.population.includes(input) ||
        planet.climate.includes(input) ||
        planet.terrain.includes(input) ||
        planet.surface_water.includes(input)
    );
};
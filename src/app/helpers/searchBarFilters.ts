import { Planet } from "../lib/definitions";

export const searchPlanets = (planets: Planet[], input: string) => {
    return planets.filter(planet => 
        planet.climate.toLowerCase().includes(input) ||
        planet.diameter.toLowerCase().includes(input) ||
        planet.gravity.toLowerCase().includes(input) ||
        planet.name.toLowerCase().includes(input) ||
        planet.orbital_period.toString().includes(input) ||
        planet.rotation_period.toLowerCase().toString().includes(input) ||
        planet.population.toLowerCase().includes(input) ||
        planet.climate.toLowerCase().includes(input) ||
        planet.terrain.toLowerCase().includes(input) ||
        planet.surface_water.toLowerCase().includes(input)
    );
};
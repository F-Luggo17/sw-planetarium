import { Person, Planet, StarWarsAPI } from "../lib/definitions";

export const fetchPlanets = async (): Promise<Planet[]> => {
    try {
        const residents = await fetchAllPeople();
        let data: StarWarsAPI | null = null;
        let allPlanets = [] as Planet[];

        while (data == null || data.next) {
            if (data == null) {
                const response = await fetch('https://swapi.dev/api/planets');
                data = await response.json();
            } else {
                const nextPageResults: Response = await fetch(data.next);
                data = await nextPageResults.json();
            }

            // Map resident urls to resident data
            data!.results = (data!.results as Planet[]).map((planet: Planet) => {
                return { ...planet, residents: residents.filter((person: Person) => person.homeworld === planet.url) };
            });

            allPlanets = [...allPlanets, ...(data!.results as Planet[])];
        }

        allPlanets.sort((a: Planet, b: Planet) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }

            return 0;
        });

        return allPlanets;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error('An unexpected error occurred');
        }
    }
};

export const fetchAllPeople = async (): Promise<Person[]> => {

    try {
        const response = await fetch('https://swapi.dev/api/people');
        let data = await response.json();
        let allPeople: Person[] = data.results as Person[];

        while (data.next) {
            const nextPageResults = await fetch(data.next);
            const nextPageData: StarWarsAPI = await nextPageResults.json();
            data = nextPageData;
            allPeople = [...allPeople, ...(nextPageData.results as Person[])];
        }

        return allPeople;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        } else {
            throw new Error('An unexpected error occurred');
        }
    }
};
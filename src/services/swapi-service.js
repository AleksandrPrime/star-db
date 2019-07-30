
export default class SwapiServise {

    _apiBase = 'https://swapi.co/api';

    async getResource(url) {
        const prourl = "https://cors-anywhere.herokuapp.com/";
        const res = await fetch(`${prourl}${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)

        }
        return res.json();
    };

    async getAllPeople(){
        const res = await this.getResource(`/people/`);
        return res.results
    }

    getPerson(id) {
        return this.getResource(`/people/${id}`);
    }
    async getAllPlanets(){
        const res = await this.getResource(`/planets/`);
        return res.results
    }
    getPlanet(id) {
        return this.getResource(`/planets/${id}`);
    }
    async getAllStarships(){
        const res = await this.getResource(`/starships/`);
        return res.results
    }
    getStarship(id) {
        return this.getResource(`/starships/${id}`);
    }
}

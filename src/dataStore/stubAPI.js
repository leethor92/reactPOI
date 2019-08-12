import _ from "lodash";

class StubAPI {
    constructor() {
        this.points = [
            {
                id: 1,
                name: "Tory Island",
                details: "Tory Island, or simply Tory, is an island 14.5 kilometres off the north-west coast of County Donegal in Ulster, Ireland, and is the most remote inhabited island of Ireland.",
                category: "North",
                long: "55.2655",
                lat: "8.2304",
                upvotes: 10
            },
            {
                id: 2,
                name: "Inishmaan",
                details: "Inishmaan is the middle of the three main Aran Islands in Galway Bay on the west coast of Ireland. It is part of County Galway in the province of Connacht. Inishmaan has a population of about 160, making it the smallest of the Aran Islands in terms of population",
                category: "West",
                long: "53.0855",
                lat: "9.5860",
                upvotes: 14
            },
            {
                id: 3,
                name: "Inisheer",
                details: "Inisheer, the island's official name, Inis Oirthir, meaning \"east island\", and traditionally Inis Thiar, meaning \"rear island\". It is the smallest and most eastern of the three Aran Islands in Galway Bay",
                category: "North",
                long: "55.2655",
                lat: "9.5318",
                upvotes: 12
            },
            {
                id: 4,
                name: "Great Island",
                details: "Great Island is an island in Cork Harbour, at the mouth of the River Lee in Ireland",
                category: "South",
                long: "52.2922",
                lat: "7.0034",
                reviews: [],
                upvotes: 2
            },
            {
                id: 5,
                name: "Achill Island",
                details: "Achill Island lies off County Mayo on the west coast of the Republic of Ireland",
                category: "West",
                long: "53.9620",
                lat: "10.0153",
                upvotes: 8
            },
            {
                id: 6,
                name: "Gorumna",
                details: "Gorumna is an island on the west coast of Ireland, forming part of County Galway",
                category: "West",
                long: "53.2622",
                lat: "9.6778",
                upvotes: 10
            },
        ];
    }

    getAll() {
        return this.points;
    }

    add(name, details, category, long, lat) {
        let id = 1;
        let last = _.last(this.points);
        if (last) {
            id = last.id + 1;
        }
        let len = this.points.length;
        let newLen = this.points.push({
            id,
            name,
            details,
            long,
            lat,
            category,
            upvotes: 0
        });
        return newLen > len;
    }

    initialize(points) {
        this.points = points;
    }

    upvote(id) {
        let index = _.findIndex(this.points, point => point.id === id);
        if (index !== -1) {
            this.points[index].upvotes += 1;
            return true;
        }
        return false;
    }

    getPoint(id) {
        let index = _.findIndex(this.points, point => point.id === id);
        let result = index !== -1 ? this.points[index] : null;
        return result;
    }

    find(id) {
        let index = _.findIndex(this.points, point => point.id === id);
        if (index !== -1) {
            return this.points[index];
        }
        return null;
    }

    update(key, details, lat, long) {
        let index = _.findIndex(this.points, point => point.id === key);
        if (index !== -1) {
            this.points[index].details = details;
            this.points[index].lat = lat;
            this.points[index].long = long;
            return true;
        }
        return false;
    }

    delete(id) {
        let elements = _.remove(this.points, point => point.id === id);
        return elements;
    }

}

export default new StubAPI();
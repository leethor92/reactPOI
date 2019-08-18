import _ from "lodash";

class StubAPI {
    constructor() {
        this.points = [];
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
            reviews:[],
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

    addReview(pointId, r, a) {
        let point = this.getPoint(pointId);
        let id = 1;
        let last = _.last(point.reviews);
        if (last) {
            id = last.id + 1;
        }
        point.reviews.push({ id: id, review: r, author: a, upvotes: 0 });
    }

    upvoteReview(pointId, reviewId) {
        let point = this.getPoint(pointId);
        let index = _.findIndex(point.reviews, r => r.id === reviewId);
        if (index !== -1) {
            point.reviews[index].upvotes += 1;
        }
    }

}

export default new StubAPI();
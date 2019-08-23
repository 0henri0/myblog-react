import Http from './../utils/Http';

export default function getMoments(page = 1) {
    return new Http().get(`/api/home?page=${page}`);
}


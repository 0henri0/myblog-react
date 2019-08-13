import Http from './../utils/Http';

export default function getMoments() {
    return new Http().get('/api/home');
}


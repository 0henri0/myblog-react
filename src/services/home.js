import Http from './../utils/Http';

export default getMoments() {
    return new Http().get('/api/home');
}

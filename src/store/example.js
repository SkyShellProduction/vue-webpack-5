const host = 'https://kinopoiskapiunofficial.tech';
import fOpen from '../js/common';
let rand = (max) => Math.floor(Math.random() * max); 
export default {
    state: {
        message: 'Hello',
        showLoader: true,
        topMovies: [],
        awaitMovies: [],
        topRandom: null,
        awaitRandom: null,
        soloFilm: null,
        moviesList: [],
        pagesCount: 0,
        currentPage: 1,
        error: null,
        showRightMenu: false
    },
    mutations: {
        setLoader (state, payload) {
            state.showLoader = payload;
        },
        topMovies (state, films) {
            state.topMovies = films;
        },
        awaitMovies (state, films) {
            state.awaitMovies = films;
        },
        topRandomMovie(state, movie) {
            state.topRandom = movie
        },
        awaitRandomMovie(state, movie) {
            state.awaitRandom = movie
        },
        soloFilm(state, data) {
            state.soloFilm = data;
        },
        setMoviesList (state, data) {
            state.moviesList = data.films;
            state.currentPage = data.page;
            state.pagesCount = data.pagesCount < 14 ? data.pagesCount : 14;
        },
        setError (state, text) {
            state.error = text;
        },
        changeMenu (state) {
            state.showRightMenu = !state.showRightMenu;
        }
    },
    actions: {
        setLoader ({commit}) {
            commit('setLoader');
        },
        setError({commit}, text) {
            console.log(' fsdf sdf sdfsdf');
            commit('setError', text);
        },
        setMovies({commit}, page = 1) {
            let date = new Date().getMonth(),
            monthes = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'],
            curMonth = monthes[date],
            year = new Date().getFullYear();
            (async function () {
                let [top, release] = await Promise.all([
                    fOpen(`${host}/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${page}`),
                    fOpen(`${host}/api/v2.1/films/releases?year=${year}&month=${curMonth}&page=1`)
                ])
                return [top, release]
            }())
            .then(res => {
                commit('setError', null);
                commit('topMovies', res[0].films);
                commit('awaitMovies', res[1].releases);
                let rand1 = rand(res[0].films.length);
                let rand2 = rand(res[1].releases.length);
                commit('topRandomMovie', res[0].films[rand1]);
                commit('awaitRandomMovie', {
                    posterUrl: res[1].releases[rand2].posterUrl,
                    posterUrlPreview: res[1].releases[rand2].posterUrlPreview,
                });
                commit('setLoader', false);
            })
            .catch(e => {
                commit('setLoader', false);
                commit('setError', 'Кажется возникла непредвиденная ошибка')
            });     
         
        },
        soloFilm ({commit}, id) {
            commit('setLoader', true);
            (async function () {
                let [solo, frames, reviews] = await Promise.all([
                    fOpen(`${host}/api/v2.1/films/${id}`),
                    fOpen(`${host}/api/v2.1/films/${id}/frames`),
                    fOpen(`${host}/api/v1/reviews?filmId=${id}&page=1`)
                ])
                return {solo, frames, reviews}
            }())
            .then(res => {
                commit('setError', null);
                commit('soloFilm', {...res.solo.data, ...res.frames, reviews: res.reviews.reviews})
                commit('setLoader', false);
            })
            .catch(e => {
                commit('setLoader', false);
                commit('setError', 'Кажется возникла непредвиденная ошибка')
            });     
        },
        setMoviesList({commit}, data) {
            commit('setLoader', true);
            let url = data.method == 'top' ? 
                      `${host}/api/v2.2/films/top?type=TOP_250_BEST_FILMS&page=${data.page}`
                    : `${host}/api/v2.1/films/search-by-keyword?keyword=${data.keyword}&page=${data.page}`; 
            fOpen(url)
            .then(res => {
                commit('setError', null);
                commit('setMoviesList', {...res, page: data.page});
                commit('setLoader', false);
            })
            .catch(e => {
                commit('setLoader', false);
                commit('setError', 'Ничего не найдено')
            }); 
        },
        changeMenu ({commit}) {
            commit('changeMenu')
        }
    },
    getters: {
        getMessage: state => state.message,
        getLoader: state => state.showLoader,
        getTopMovies: state => state.topMovies,
        getAwaitMovies: state => state.awaitMovies,
        getRandomAwaitMovie: state => state.awaitRandom, 
        getRandomTopMovie: state => state.topRandom, 
        getSoloFilm: state => state.soloFilm, 
        getMoviesList: state => state.moviesList, 
        getPagesCount: state => state.pagesCount,
        getCurrentPage: state => state.currentPage,
        getError: state => state.error,
        showMenu: state => state.showRightMenu 
    }
}
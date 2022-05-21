async function baseFetch(endpoint: string) {
    return await fetch(process.env.REACT_APP_BASE_URL as string + endpoint)
                    .then(res => res.json()); 
}

const api = {
    async getHomeList() {
        return [
            {
                slug: 'originals',
                title: 'Originais da Netflix',
                items: await baseFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await baseFetch(`/trending/all/week?language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em alta',
                items: await baseFetch(`/movie/top_rated?language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`)
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await baseFetch(`/discover/movie?with_genres=28&api_key=${process.env.REACT_APP_API_KEY}`)
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await baseFetch(`/discover/movie?with_genres=35&api_key=${process.env.REACT_APP_API_KEY}`)
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await baseFetch(`/discover/movie?with_genres=27&api_key=${process.env.REACT_APP_API_KEY}`)
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await baseFetch(`/discover/movie?with_genres=10749&api_key=${process.env.REACT_APP_API_KEY}`)
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await baseFetch(`/discover/movie?with_genres=99&api_key=${process.env.REACT_APP_API_KEY}`)
            }
        ]
    },

    async getMovie(movieId: number, type: string) {
        const baseUrl = `${movieId}?language=pt-BR&api_key=${process.env.REACT_APP_API_KEY}`;

        switch(type.toLowerCase()) {
            case 'tv':
                return await baseFetch(`/tv/${baseUrl}`);
            case 'movie':
                return await baseFetch(`/movie/${baseUrl}`);
            default:
                return null;    
        }
    }

}

export default api;
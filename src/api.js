const API_KEY = "b32e3409287920d92c9363a89de42afd";

const categorias = [
    {
        nome: "trending",
        title: "Em alta",
        path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
        isLarge: true,
    },
    {
        nome: "netflixOriginals",
        title: "Originais Netflix",
        path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
        isLarge: false,
    },
    {
        nome: "topRated",
        title: "Populares",
        path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
        isLarge: false,
    },
    {
        nome: "comedy",
        title: "Comédias",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
        isLarge: false,
    },
    {
        nome: "romances",
        title: "Romances",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=1074`,
        isLarge: false,
    },
    {
        nome: "documentaries",
        title: "Documentário",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
        isLarge: false,
    }

];

export const getMovies = async (path) =>{
    try{
        let url = `https://api.themoviedb.org/3${path}`
        const response = await fetch(url);
        return await response.json();

    }catch (error) {
        console.log("error getMovies: ", error)
    }
}

export default categorias
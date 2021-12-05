export const ApiKey = "api_key=4726b8f7960dbcf9def0e002c59f7f22";

const BaseUrl = "https://api.themoviedb.org/3";

export const Popular_Url = BaseUrl + `/discover/movie?sort_by=popularity.desc&${ApiKey}`;

export const Theater_Url = BaseUrl + `/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&${ApiKey}`;

export const Best_Url = BaseUrl + `/discover/movie?primary_release_year=2010&sort_by=vote_average.desc&${ApiKey}`;

export const Highest_Url = BaseUrl + `/discover/movie?certification_country=US&certification=R&sort_by=revenue.desc&with_cast=3896&${ApiKey}`;

export const MostPopularKid_Url = BaseUrl + `/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${ApiKey}`;

export const Best2021_Url = BaseUrl + `/discover/movie?primary_release_year=2021&sort_by=vote_average.desc&${ApiKey}`;

export const BestDrama_Url = BaseUrl + `/discover/movie?with_genres=18&primary_release_year=2021&${ApiKey}`;

export const TomCruise_Url = BaseUrl + `/discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc&${ApiKey}`;

export const Comedy_Url = BaseUrl + `/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc&${ApiKey}`;

export const BestsortedDrama_Url = BaseUrl + `/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&${ApiKey}`;

export const Websearch = BaseUrl + `/search/tv?${ApiKey}&language=en-US&page=1&include_adult=false&query=`

export const SearchMovieById = `https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US`

const PopularSearch = BaseUrl + `/search/movie?${ApiKey}&language=en-US&page=1&include_adult=false&query=`

// const TopRatedSearch = BaseUrl + `/search/multi?${ApiKey}&language=en-US&page=1&include_adult=false&qsuery=`

const Trending = "https://api.themoviedb.org/3/trending/all/day?api_key=4726b8f7960dbcf9def0e002c59f7f22"

// export const MovieDetail = BaseUrl + `/movie/`

export const Image_Url = "https://image.tmdb.org/t/p/w500";


export const movieFetchUrl = [
    {
        swiperTittle : "Top 10 in India Today",
        url : Popular_Url
    },
    {
        swiperTittle : "In Theaters",
        url : Theater_Url
    },
    {
        swiperTittle : "Suggested Drama For You",
        url : BestsortedDrama_Url
    },
    {
        swiperTittle : "Most Popular kids Movies",
        url : MostPopularKid_Url
    },
    {
        swiperTittle : "Best 2021",
        url : Best2021_Url
    },
    {
        swiperTittle : "Best Drama",
        url : BestDrama_Url
    },
    {
        swiperTittle : "Best Of Tom Cruise",
        url : TomCruise_Url
    },
    {
        swiperTittle : "Comedy",
        url : Comedy_Url
    },
    {
        swiperTittle : "Best Movies",
        url : Best_Url
    }
]

export const navPageData = [
    {
        id : 1,
        url : Websearch,
        title : "Web Show",
        query : "all"
    },
    {
        id : 2,
        url : PopularSearch,
        title : "Movies",
        query : "all"
    },
    {
        id : 3,
        url : Trending,
        title : "New & Popular",
        query : "new"
    }
]

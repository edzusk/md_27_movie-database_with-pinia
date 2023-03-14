import { defineStore } from 'pinia'
import axios from 'axios'

const api_key = import.meta.env.VITE_API_KEY  // replace this with valid API key

type Movie = {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

type SearchResponse = {
  Search: Movie[]
  totalResults: number
  Response: string
  Error: string
}

type MovieById = {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: {
    Source: string
    Value: string
  }[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string,
  Response: string,
  Error: string
}

export const useMovieStore = defineStore('movies', {
  state: () => ({
    response: {} as SearchResponse,
    movies: [] as Movie[],
    movieById: {} as MovieById,
    currentPage: 1,
    movieSearchFor: 'Coding 101',
    totalPages: 1,
    isError: false,
    errorMessage: '',
    isLoading: false,
  }),

  actions: {
     getMovies(movieSearchFor: string) {
      this.isLoading = true
      this.movieSearchFor = movieSearchFor
      try {      axios.get<SearchResponse>(
        `http://www.omdbapi.com/?s=${movieSearchFor}&page=${this.currentPage}&apikey=${api_key}`
      ).then(({ data }) => {

        if (data.Response === "False") {
          this.isError = true
          this.errorMessage = data.Error
          this.isLoading = false                                 
        }

        if (data.Response === "True"){
          console.log('we have response')
          this.isLoading  = false
          this.totalPages =  Math.ceil(data.totalResults / 10),
          console.log(this.totalPages)
          this.movies = data.Search                     
        }
      })    
        
      } catch (error) {
        this.isError = true
        this.errorMessage = 'something went wrong'
      }
                                                                  
    },

    async getMovieById(id: string) {
      this.isLoading = true
      const { data } = await axios.get<MovieById>(`http://www.omdbapi.com/?i=${id}&apikey=${api_key}`)
      if (data.Response === "False") {
        this.isError = true
        this.errorMessage = data.Error
        this.isLoading = false                                 
      }

      if (data.Response === "True"){
        this.movieById = data                      
        this.isLoading  = false
      }
    },

    resetPage() {
      this.currentPage = 1
    },


    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage += 1
        this.getMovies(this.movieSearchFor)
      }
    },

    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage-=1
        this.getMovies(this.movieSearchFor)
      }
    }
  }
})
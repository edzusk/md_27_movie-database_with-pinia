import { defineStore } from 'pinia'
import axios, { isAxiosError } from 'axios'

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
  Response: boolean
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
  Production: string
}

export const useMovieStore = defineStore('movies', {
  state: () => ({
    response: {} as SearchResponse,
    movieById: {} as MovieById,
    currentPage: 1,
    movieTitle: 'Coding 101',
    totalPages: 1,
    isError: false,
    isLoading: false,
  }),

  getters: {
    movies(): Movie[] | undefined {
      return this.response.Search
    },

    resultsFound(): number | undefined {
      return this.response.totalResults
    }
  },

  actions: {
    async getMovies(movieTitle: string) {
      this.movieTitle = movieTitle
      this.isLoading = true
      const { data } = await axios.get<SearchResponse>(
        `http://www.omdbapi.com/?s=${movieTitle}&page=${this.currentPage}&apikey=2fcb237`
      )
      if (!data) {
        this.isError = true
        return
      }
      this.response = data,
      this.totalPages =  Math.ceil(this.response.totalResults / 10)
      this.isLoading  = false
    },

    getMovieById(id: string) {
      axios.get<MovieById>(`http://www.omdbapi.com/?i=${id}&apikey=2fcb237`).then(({ data }) => {
        this.movieById = data
      })
    },

    resetPage() {
      this.currentPage = 1
    },


    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage += 1
        this.getMovies(this.movieTitle)
      }
    },

    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--
        this.getMovies(this.movieTitle)
      }
    }
  }
})
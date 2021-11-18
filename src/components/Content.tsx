import { MovieCard } from "./MovieCard";

type Movie = {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

type contentPropsMovies = {
  selectedGenre: {
    title: string;
  }
  movies: Movie[]
}

export function Content({selectedGenre, movies}:contentPropsMovies) {
  // Complete aqui
return(
    <div className="container">
          <header>
            <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
          </header>

          <main>
            <div className="movies-list">
              {movies.map(movie => (
                <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
              ))}
            </div>
          </main>
        </div>
  )    
}
import MovieCard from "../components/MovieCard";
import MovieListFilter from "../components/MovieListFilter";
import { useLocation, useHistory } from "react-router-dom";
import movies from "../dummy-data";

const MovieList = () => {

  let location = useLocation();
  const loc = location.search.split("?")
  const qs = require('qs');
  const obj = qs.parse(loc[1])

  const shows = [10, 20, 30];
  const categories = ["TV", "Movie"];
  const fields = ["title", "score"];

  // Variable yang akan menampung parameter yang telah diberikan oleh user
  const params = {
    show: obj.show,
    category: obj.category,
    sort: obj.sort,
  };
  console.log(params)

  // Variable yang kita gunakan untuk melakukan penyaringan data
  const filter = {
    show: params.show || shows[0],
    category:  params.category ||categories[0],
    sort:  params.sort || fields[0]
  };

  // Variable yang akan menyimpan data-data yang sudah difilter menggunakan variable filter diatas
  const filteredMovies = movies.filter(movies => movies.type == filter.category)
  .sort((a, b) => filter.sort == "score" ? (a.score > b.score ? 1 : -1): (a.title > b.title ? 1 : -1))
  .slice(0, filter.show)
  .map((filtered) =>{ return filtered})

  return (
    <div className="row">
      <MovieListFilter />
      {filteredMovies.map((movie) => (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={movie.mal_id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;

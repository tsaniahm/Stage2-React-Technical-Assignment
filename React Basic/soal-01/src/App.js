import { Component } from "react";
import data from "./dummy-data.js";
import MovieCard from "./MovieCard.js";


class App extends Component {
  render() {
    return (
      <div className="container my-5">
        <h1 className="text-center">Anime List</h1>
        <div className="container my-5">
          <div id="daftar-anime" className="row">
            <MovieCard></MovieCard>
            {data.map((element) => {
              return(
              <div className="col col-lg-3 col-md-4 col-sm-6 col-12 my-2" key={element.mal_id}>
                <MovieCard  movie={element} ></MovieCard>
              </div>)
            })}

          </div>
        </div>
      </div>
    );
  }
}

export default App;
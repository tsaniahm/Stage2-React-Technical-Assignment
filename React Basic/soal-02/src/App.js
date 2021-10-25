import { Component } from "react";
import MovieCard from "./MovieCard.js";


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movieList: [],
      isLoading: false,
    }

  }

  async fetchMovieList() {
    const data = await fetch('https://api.jikan.moe/v3/top/anime');
    const dataJson = await data.json()
    this.setState({
      movieList: dataJson.top
    })
  }

  componentDidMount() {
    this.fetchMovieList()
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("updated")
    if (prevState.movieList !== this.state.movieList) {
      this.setState({
        isLoading: true
      });
    }
  }


  render() {
    return (
      <div className="container my-5">
        <h1 className="text-center">Anime List</h1>
        <div className="container my-5">
          <div id="daftar-anime" className="row">
            {
              this.state.isLoading === false ? <h2>Loading...</h2> : this.state.movieList.map((element) => {
                return (
                  <div className="col col-lg-3 col-md-4 col-sm-6 col-12 my-2" key={element.mal_id}>
                    <MovieCard movie={element} ></MovieCard>
                  </div>)
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;



import React, { useEffect, useState } from "react";
import "./movie.css";
import { useParams } from "react-router-dom";

const Movie = () => {
  const [currentMovieDetail, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));
  };

  return (
    <div className="movie">
      <div className="movie__intro">
        <img
          className="movie__backdrop flex align-middle justify-center"
          src={`https://image.tmdb.org/t/p/original${
            currentMovieDetail ? currentMovieDetail.backdrop_path : ""
          }`}
        />
      </div>
      <div className="movie__detail flex align-middle relative justify-around  top-1 mx-4 px-5 pt-5 ">
        <div className="movie__detailLeft mr-16">
          <div className="movie__posterBox">
            <img
              className="movie__poster"
              src={`https://image.tmdb.org/t/p/original${
                currentMovieDetail ? currentMovieDetail.poster_path : ""
              }`}
            />
          </div>
        </div>
        <div className="movie__detailRight  pl-10 ">
          <div className="movie__detailRightTop">
            <div className="movie__name text-3xl font-bold lg:text-6xl flex   ">
              {currentMovieDetail ? currentMovieDetail.original_title : ""}
            </div>
            <div className="movie__tagline lg:text-2xl text-lg ">
              {currentMovieDetail ? currentMovieDetail.tagline : ""}
            </div>
            <div className="movie__rating  lg:text-2xl text-lg">
              {currentMovieDetail ? currentMovieDetail.vote_average : ""}{" "}
              <i class="fas fa-star" />
              <span className="movie__voteCount lg:text-2xl text-lg">
                {currentMovieDetail
                  ? "(" + currentMovieDetail.vote_count + ") votes"
                  : ""}
              </span>
            </div>
            <div className="movie__runtime lg:text-2xl text-lg">
              {currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}
            </div>
            <div className="movie__releaseDate lg:text-2xl text-lg">
              {currentMovieDetail
                ? "Release date: " + currentMovieDetail.release_date
                : ""}
            </div>
          </div>
        </div>
      </div>

      {/* genres and details  */}
      <div className="genres_details flex flex-col pb-3">
        <div className="movie__genres flex text-xs justify-center align-middle ">
          {currentMovieDetail && currentMovieDetail.genres
            ? currentMovieDetail.genres.map((genre) => (
                <>
                  <span className="movie__genre" id={genre.id}>
                    {genre.name}
                  </span>
                </>
              ))
            : ""}
        </div>
        <div className="movie__detailRightBottom">
          <div className="synopsisText font-bold text-3xl p-2 flex align-middle justify-center ">
            Synopsis
          </div>
          <div className=" text-center mx-20">
            {currentMovieDetail ? currentMovieDetail.overview : ""}
          </div>
        </div>
      </div>

      {/* <div className="movie__heading">Useful Links</div> */}
      {/* {currentMovieDetail && currentMovieDetail.homepage && (
          <a
            href={currentMovieDetail.homepage}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="movie__homeButton movie__Button">
                Homepage <i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )} */}
      {/* {currentMovieDetail && currentMovieDetail.imdb_id && (
          <a
            href={"https://www.imdb.com/title/" + currentMovieDetail.imdb_id}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="movie__imdbButton movie__Button">
                IMDb<i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )} */}
      <div className="movie__links"></div>
      <div className="movie__heading flex justify-center align-middle mt-4">
        Production companies
      </div>
      {/* detials */}
      <div className="company_details flex justify-center align-middle">
        <div className="movie__production   ">
          {currentMovieDetail &&
            currentMovieDetail.production_companies &&
            currentMovieDetail.production_companies.map((company) => (
              <>
                {company.logo_path && (
                  <div className="productionCompanyImage flex justify-center align-middle flex-col ">
                    <img
                      className="movie__productionCompany w-40  "
                      src={
                        "https://image.tmdb.org/t/p/original" +
                        company.logo_path
                      }
                    />
                    <div className="flex justify-center align-middle">
                      {company.name}
                    </div>
                  </div>
                )}
              </>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Movie;

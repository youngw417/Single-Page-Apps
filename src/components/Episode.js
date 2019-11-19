import React, { useEffect, useState } from "react";
import axios from "axios";

import styled from "styled-components";
import EpisodeCard from "./EpisodeCard";
import SearchForm from "./SearchForm";

export default function Episode() {
  const [episodes, setEpisodes] = useState([]);

  function search(myArray) {
    setEpisodes(myArray);
  }

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode/")
      .then(res => {
        setEpisodes(res.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h2>List of Episodes</h2>
      <div className="searchForm">
        <SearchForm search={search} characters={episodes} />
        {episodes.length === 0 ? (
          <p style={{ textAlign: "center" }}>No name found in this search</p>
        ) : null}
      </div>

      <div className="wrapper">
        {episodes.map(each => {
          return <EpisodeCard key={each.id} episode={each} />;
        })}
      </div>
    </div>
  );
}

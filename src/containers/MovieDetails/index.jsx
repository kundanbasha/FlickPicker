import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowLeft } from "react-icons/fa";

import {
  Wrap,
  Title,
  PrimaryText,
  Row,
  MoreInfo,
  Column,
  Overview,
  Content,
  BackButton
} from "./movie-styled-components";
import { fetchMovieDetails } from "../../redux/MovieDetails/actions";
import Flex from "../../components/Flex";
import Rect from "../../components/Rect";

const MovieDetails = ({ match, history }) => {
  const dispatch = useDispatch();
  const movieDetails = useSelector(state => state.movieDetailsReducer);
  const { movie, isLoaded } = movieDetails;

  useEffect(() => {
    dispatch(fetchMovieDetails(match.params.id));
  }, []);

  const getGenres = gen => {
    let genres = [];
    if (gen) {
      console.log("check genres", JSON.stringify(gen));
      genres = JSON.parse(gen.replace(/\'/g, '"')).map(genre => (
        <PrimaryText key={genre.id} color="#fff">
          {genre.name}
        </PrimaryText>
      ));
    }
    return genres;
  };

  if (isLoaded)
    return (
      <Wrap column poster={movie.poster_path}>
        <BackButton onClick={() => history.push("/movies")}>
          <FaArrowLeft color="#fff" />
        </BackButton>
        <Content column>
          <Title>{movie.title}</Title>
          <Row mt="0.5">
            <PrimaryText color="#46D369" weight={600}>
              {movie.vote_average}
            </PrimaryText>
            <PrimaryText ml="1.5" color="#fff" weight={600}>
              {movie.release_date && movie.release_date.split("-")[0]}
            </PrimaryText>
            <PrimaryText ml="1.5" color="#fff" weight={600}>
              {movie.runtime + "m"}
            </PrimaryText>
          </Row>
          <Overview mt="1.5" ml="1.5" mr="1.5">
            {movie.overview}
          </Overview>
          <MoreInfo>
            <Column column>
              <Flex column mb="1.5">
                <PrimaryText>{"Release Date"}</PrimaryText>
                <PrimaryText color="#fff">{movie.release_date}</PrimaryText>
              </Flex>
              <Flex column mb="1.5">
                <PrimaryText>{"Cast"}</PrimaryText>
                <PrimaryText color="#fff">{"Iron Man"}</PrimaryText>
                <PrimaryText color="#fff">{"Thor"}</PrimaryText>
                <PrimaryText color="#fff">{"Hulk"}</PrimaryText>
                <PrimaryText color="#fff">{"Spiderman"}</PrimaryText>
              </Flex>
              <Flex column mb="1.5">
                <PrimaryText>{"Writers"}</PrimaryText>
                <PrimaryText color="#fff">{"Christopher Nolan"}</PrimaryText>
                <PrimaryText color="#fff">{"James Cameron"}</PrimaryText>
              </Flex>
            </Column>
            <Column column ml="8">
              <Flex column mb="1.5">
                <PrimaryText>{"Genres"}</PrimaryText>
                {getGenres(movie.genres)}
              </Flex>
              <Flex column mb="1.5">
                <PrimaryText>{"Type"}</PrimaryText>
                <PrimaryText color="#fff">{"Action"}</PrimaryText>
              </Flex>
            </Column>
            <Column column ml="8">
              <Flex column mb="1.5">
                <PrimaryText>{"Vote Count"}</PrimaryText>
                <PrimaryText color="#fff">{movie.vote_count}</PrimaryText>
              </Flex>
              <Flex column mb="1.5">
                <PrimaryText>{"Maturity Ratings"}</PrimaryText>
                <PrimaryText color="#fff">{"13+"}</PrimaryText>
              </Flex>
            </Column>
          </MoreInfo>
        </Content>
      </Wrap>
    );

  return (
    <Wrap column pl="1.5" pt="4">
      <Rect height={64} width={window.innerWidth - 64} />
      <Rect height={24} width={window.innerWidth - 64} mt="1" />
      <Rect height={96} width={window.innerWidth - 64} mt="1" />
      <Wrap>
        <Column column mt="1.5">
          <Rect height={24} width={300} mt="1" />
          <Rect height={200} width={300} mt="1" />
          <Rect height={100} width={300} mt="1" />
        </Column>
        <Column column mt="1.5" ml="2">
          <Rect height={24} width={300} mt="1" />
          <Rect height={64} width={300} mt="1" />
        </Column>
        <Column column mt="1.5" ml="2">
          <Rect height={24} width={300} mt="1" />
          <Rect height={64} width={300} mt="1" />
        </Column>
      </Wrap>
    </Wrap>
  );
};

export default React.memo(MovieDetails);

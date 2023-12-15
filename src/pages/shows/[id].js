import styled from "styled-components";
import React from "react";

import { Title } from "@/components/styled/Title";
import { Rating } from "@/components/styled/Rating";
import {
  StyledImageShow,
  StyledImageShowContainer,
} from "@/components/styled/StyledImageShow";
import { NameShow } from "@/components/styled/NameShow";
import { InfoSubTitle } from "@/components/styled/InfoSubTitle";
import { Info } from "@/components/styled/Info";
import Star, { StarContainer } from "@/components/Star";
import { TOTAL_NUMBER_OF_STARS } from "@/utils/consts";
import { TitleMain } from "@/components/styled/TitleMain";
import Avatar from "@/components/Avatar";

const ShowContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const HeaderContainer = styled.header`
  background-color: #ebebeb;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 15px 67px;

  @media all and (min-width: 768px) {
    flex: 1;
    margin-top: 0px;
    padding: 100px 100px 87px;
  }
`;

const HeaderContainerInfoImage = styled.div`
  display: flex;
  flex-direction: column;

  @media all and (min-width: 768px) {
    flex-direction: row;
  }
`;

const HeaderContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media all and (min-width: 768px) {
    justify-content: flex-start;
    margin-left: 50px;
    padding-top: 30px;
    width: 44%;
  }

  @media all and (min-width: 1320px) {
    justify-content: flex-start;
    margin-left: 50px;
    margin-right: 235px;
    padding-top: 30px;
  }
`;

const InfoContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
  padding: 43px 15px;

  @media all and (min-width: 768px) {
    flex: 1;
    gap: 50px;
    flex-direction: row;
    padding: 106px 100px;
  }
`;

const InfoContainerMainDivide = styled.div`
  @media all and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;

const InfoContainerSmall = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.cast ? "76px 1fr" : "1fr")};
  align-items: ${(props) => (props.cast ? "center" : '' )};

  @media all and (min-width: 768px) {
    grid-template-columns: ${(props) => (props.cast ? "1fr 3fr" : "1fr 1fr")};
    border-bottom: 1px solid #000;
    align-items: center;
    padding: ${(props) => (props.cast ? "14px 0" : "30px 0")};
  }

  @media all and (min-width: 1041px) {
    grid-template-columns: ${(props) => (props.cast ? "1fr 3fr" : "1fr 2fr")};
  }
`;

const ShowInfoContainer = styled.div`
  display: grid;
  gap: 38px;
  grid-template-columns: 1fr 1fr;
  padding-top: 12px;

  @media all and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0;
    padding-top: 0;
  }
`;

const StarringContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;

  @media all and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0;
  }
`;

const InfoCastContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;

  @media all and (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
  }
`;

export default function TVShowPage({ item, cast }) {
  return (
    <>
      {item && (
        <ShowContainer>
          <HeaderContainer>
            <Title>TV Bland</Title>
            <HeaderContainerInfoImage>
              <StyledImageShowContainer>
                <StyledImageShow
                  src={
                    item.image.medium ||
                    "https://dummyimage.com/600x400/fff/000"
                  }
                  // objectFit="cover"
                  alt={`Image of ${item.name} TV Show`}
                  sizes="100%"
                  priority
                />
              </StyledImageShowContainer>
              <HeaderContainerInfo>
                <StarContainer showRating showRatingMobile>
                  {Array.from(
                    { length: TOTAL_NUMBER_OF_STARS },
                    (_, index) => index + 1
                  ).map((index) => (
                    <Star
                      key={index}
                      width={21}
                      height={19}
                      active={
                        !item.rating.average
                          ? false
                          : item.rating.average / 2 > index
                      }
                    />
                  ))}
                  <Rating>{item.rating.average / 2}/5</Rating>
                </StarContainer>
                <NameShow>{item.name}</NameShow>
                <InfoSubTitle
                  header
                  dangerouslySetInnerHTML={{ __html: item.summary }}
                ></InfoSubTitle>
              </HeaderContainerInfo>
            </HeaderContainerInfoImage>
          </HeaderContainer>

          <InfoContainerMain>
            <InfoContainerMainDivide>
              <TitleMain>Show Info</TitleMain>
              <ShowInfoContainer>
                {item.network.name && (
                  <InfoContainerSmall>
                    <InfoSubTitle>Streamed on</InfoSubTitle>
                    <Info>{item.network.name}</Info>
                  </InfoContainerSmall>
                )}
                {item.schedule.days.length > 0 && (
                  <InfoContainerSmall>
                    <InfoSubTitle>Schedule</InfoSubTitle>
                    <Info>{item.schedule.days.join(", ")}</Info>
                  </InfoContainerSmall>
                )}
                {item.status && (
                  <InfoContainerSmall>
                    <InfoSubTitle>Status</InfoSubTitle>
                    <Info>{item.status}</Info>
                  </InfoContainerSmall>
                )}
                {item.genres.length > 0 && (
                  <InfoContainerSmall>
                    <InfoSubTitle>Genres</InfoSubTitle>
                    <Info>
                      {item.genres.map((genre, index) => (
                        <span key={index}> {genre} </span>
                      ))}
                    </Info>
                  </InfoContainerSmall>
                )}
              </ShowInfoContainer>
            </InfoContainerMainDivide>
            <InfoContainerMainDivide>
              <TitleMain>Starring</TitleMain>
              <StarringContainer>
                {cast.length !== 0 ? (
                  cast.map((cast, index) => (
                    <div key={index}>
                      <InfoContainerSmall cast>
                        <Avatar
                          name={cast.person.name}
                          image={cast.person?.image?.medium}
                        />
                        <InfoCastContainer>
                          <InfoSubTitle cast>{cast.person.name}</InfoSubTitle>
                          <Info>{cast.character.name}</Info>
                        </InfoCastContainer>
                      </InfoContainerSmall>
                    </div>
                  ))
                ) : (
                  <InfoContainerSmall>
                    <Info>There is no information</Info>
                  </InfoContainerSmall>
                )}
              </StarringContainer>
            </InfoContainerMainDivide>
          </InfoContainerMain>
        </ShowContainer>
      )}
    </>
  );
}

export const getStaticPaths = async () => {
  const showsRequest = await fetch(`${process.env.API_URL}/schedule`);
  const showsData = await showsRequest.json();

  return {
    paths: showsData.map((show) => {
      return {
        params: {
          id: show.id.toString(),
        },
      };
    }),
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  console.log("params", params);

  const showsResponse = await fetch(
    `${process.env.API_URL}/shows/${params.id}`
  );
  const item = await showsResponse.json();

  const castResponse = await fetch(
    `${process.env.API_URL}/shows/${params.id}/cast`
  );
  const cast = await castResponse.json();

  const imageResponse = await fetch(
    `${process.env.API_URL}/shows/${params.id}/images`
  );
  const images = await imageResponse.json();

  return { props: { item, cast, images } };
};

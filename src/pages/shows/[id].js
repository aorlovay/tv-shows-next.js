import React from "react";

import Link from "next/link";
import { TOTAL_NUMBER_OF_STARS } from "@/utils/consts";

import Avatar from "@/components/Avatar";
import Star from "@/components/Star";

import { Info } from "@/components/styled/Info";
import { InfoSubTitle } from "@/components/styled/InfoSubTitle";
import { NameShow } from "@/components/styled/NameShow";
import { Rating } from "@/components/styled/Rating";
import {
  HeaderContainer,
  HeaderContainerInfo,
  HeaderContainerInfoImage,
  InfoCastContainer,
  InfoContainerMain,
  InfoContainerMainDivide,
  InfoContainerSmall,
  ShowContainer,
  ShowInfoContainer,
  StarringContainer,
} from "@/components/styled/ShowContainers";
import { StarContainer } from "@/components/styled/StarContainer";
import {
  StyledImageShow,
  StyledImageShowContainer,
} from "@/components/styled/StyledImageShow";
import { Title } from "@/components/styled/Title";
import { TitleMain } from "@/components/styled/TitleMain";
import { LinkBack } from "@/components/styled/LinkBack";

export default function TVShowPage({ item, cast }) {
  return (
    <>
      {item && (
        <ShowContainer>
          <HeaderContainer>
            <Link href={`/`}>
              <LinkBack>Home</LinkBack>
              <Title>TV Bland</Title>
            </Link>
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
  try {
    const locationRequest = await fetch(`http://ip-api.com/json/`);
    const userLocation = await locationRequest.json();

    async function getAPIData(userLocation) {
      const showsRequest = await fetch(
        `${process.env.API_URL}/schedule?country=${userLocation.countryCode}`
      );
      const showsDataByCountry = await showsRequest.json();

      if (showsDataByCountry.length === 0) {
        const showsRequest2 = await fetch(`${process.env.API_URL}/schedule`);
        const showsDataByDefault = await showsRequest2.json();
        return showsDataByDefault;
      } else {
        return showsDataByCountry;
      }
    }
    const showsData = await getAPIData(userLocation);

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
  } catch (error) {
    return {
      paths: [],
      fallback: true,
    };
  }
};

export const getStaticProps = async (context) => {
  try {
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
  } catch (error) {
    return {
      props: {
        error: "Error fetching show data",
      },
    };
  }
};

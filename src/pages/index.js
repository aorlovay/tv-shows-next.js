import TVShowList from "@/components/TVShowList";

import {
  ContainerHeader,
  ContainerMain,
} from "@/components/styled/HomeContainer";
import { Subtitle } from "@/components/styled/Subtitle";
import { Title } from "@/components/styled/Title";
import { TitleMain } from "@/components/styled/TitleMain";

export default function HomePage({ showsData, error }) {
  return (
    <>
      <ContainerHeader>
        <Title>TV Bland</Title>
        <Subtitle>
          TV Show and web series database. {"\n"} Create personalised schedules.
          Episode guide, cast, crew and character information.
        </Subtitle>
      </ContainerHeader>
      <ContainerMain>
        {error ? (
          <TitleMain>Sorry, please try again later</TitleMain>
        ) : (
          <>
            <TitleMain homemobile='true'>Last Added Shows</TitleMain>
            <TVShowList items={showsData} />
          </>
        )}
      </ContainerMain>
    </>
  );
}

export async function getServerSideProps() {
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
    return { props: { showsData } };
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return { props: { error: error.message } };
  }
}

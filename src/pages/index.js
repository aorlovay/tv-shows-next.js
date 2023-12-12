import { Title } from "@/components/styled/Title";
import styled from "styled-components";
import TVShowList from "@/components/TVShowList";
import { Subtitle } from "@/components/styled/Subtitle";
import { TitleMain } from "@/components/styled/TitleMain";

const ContainerHeader = styled.header`
  background-color: #ebebeb;
  padding: 29px 15px 65px;

  @media all and (min-width: 768px) {
    width: 100%;
    padding: 100px 100px 291px;
    margin-top: 0;
  }
`;

const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 15px;

  @media all and (min-width: 768px) {
    margin: -134px 100px 0;
  }
`;

export default function HomePage({ showsData }) {
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
        <TitleMain homeMobile>Last Added Shows</TitleMain>
        <TVShowList items={showsData} />
      </ContainerMain>
    </>
  );
}

export async function getServerSideProps() {
  const showsRequest = await fetch(`${process.env.API_URL}/schedule`);
  const showsData = await showsRequest.json();

  return { props: { showsData } };
}

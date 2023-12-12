import TVShowItem from "./TVShowItem";
import styled from "styled-components";

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  gap: 10px;
  flex: 1;
  grid-template-columns: 1fr 1fr;

  @media all and (min-width: 768px) {
    grid-template-columns: repeat(6, 1fr);
    gap: 45px;
  }
`;

export default function TVShowList({ items }) {
  return (
    <Section>
      {items && items.map((item) => <TVShowItem key={item.id} item={item} />)}
    </Section>
  );
}

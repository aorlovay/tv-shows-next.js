import TVShowItem from "./TVShowItem";

import { Section } from "./styled/Section";

export default function TVShowList({ items }) {
  return (
    <Section>
      {items && items.map((item) => <TVShowItem key={item.id} item={item} />)}
    </Section>
  );
}

import Link from "next/link";

import { TOTAL_NUMBER_OF_STARS } from "@/utils/consts";

import { Article } from "./styled/Article";
import { Name } from "./styled/Name";
import { StyledImage, StyledImageContainer } from "./styled/StyledImage";
import Star, { StarContainer } from "./Star";

export default function TVShowItem({ item }) {
  return (
    <Link href={`/shows/${item?.show?.id || item?.id}`}>
      <Article>
        <StyledImageContainer>
          <StyledImage
            src={
              item?.show?.image?.medium ||
              item?.image?.medium ||
              "https://dummyimage.com/600x400/fff/000"
            }
            alt={`Image of ${item.id}`}
            sizes="100%"
            priority
          />
        </StyledImageContainer>
        <StarContainer showRating>
          {Array.from(
            { length: TOTAL_NUMBER_OF_STARS },
            (_, index) => index + 1
          ).map((index) => (
            <Star
              key={index}
              active={
                !item.show?.rating?.average || !item.rating?.average
                  ? false
                  : (item.show?.rating?.average || item.rating?.average) / 2 >
                    index
              }
            />
          ))}
        </StarContainer>
        <Name>{item.show?.name || item.name}</Name>
      </Article>
    </Link>
  );
}

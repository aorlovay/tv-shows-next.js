import Image from "next/image";

import { AvatarContainer } from "./styled/AvatarContainer";

export default function Avatar({ image, name }) {
  return (
    <AvatarContainer>
      <Image
        src={image || "/no-avatar.svg"}
        fill
        layout="fill"
        objectFit="cover"
        alt={(name && `Image of ${name}`) || `Image of no avatar for ${name}`}
        sizes="100%"
      />
    </AvatarContainer>
  );
}

import styled from "styled-components";

export const StarContainer = styled.div`
  display: ${(props) => (props.showRatingMobile ? "flex" : "none")};
  align-items: center;
  gap: 2px;
  margin: 25px 0 29px;

  @media all and (min-width: 768px) {
    display: ${(props) => (props.showRating ? "flex" : "none")};
    margin: 13px 0 17px;
  }
`;

export default function Star({ active, width = 14, height = 13 }) {
  return (
    <svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 18"
      width={width}
      height={height}
    >
      <path
        fill={active ? "#878787" : "#cacaca"}
        d="m10 14.9l-6.2 3.1 1.2-6.5-5-4.6 6.9-1 3.1-5.9 3.1 5.9 6.9 1-5 4.6 1.2 6.5z"
      />
    </svg>
  );
}

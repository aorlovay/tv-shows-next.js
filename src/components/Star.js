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

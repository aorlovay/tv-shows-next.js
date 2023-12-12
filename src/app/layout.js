import StyledComponentsRegistry from "./lib/registry";

export default function RootLayout({ children }) {
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}

import { render, screen } from "@testing-library/react";
import Demo from "./pages/Demo/Demo";

test("renders learn react link", () => {
  render(<Demo />);
  const linkElement = screen.getByText(/demo!!!!/i);
  expect(linkElement).toBeInTheDocument();
});

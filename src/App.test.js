//// src/App.test.js
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Weather App title", () => {
  render(<App />);
  const titleElement = screen.getByText(/Weather App/i);  // This matches your title
  expect(titleElement).toBeInTheDocument();
});

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { it } from "vitest";
import App from "./App";

it(`test`, async () => {
  render(<App />);
  screen.getByText("count is 0");
  await userEvent.click(
    screen.getByRole("button", {
      name: "count is 0",
    })
  );
  screen.getByText("count is 1");
});

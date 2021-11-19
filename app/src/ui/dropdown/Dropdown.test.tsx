import { screen, render } from "tests";

import { Dropdown } from "./Dropdown";

describe("DropdownMenu", () => {
  it("renders children correctly", () => {
    render(<Dropdown>DropdownMenu</Dropdown>);

    const element = screen.getByText("DropdownMenu");

    expect(element).toBeInTheDocument();
  });
});

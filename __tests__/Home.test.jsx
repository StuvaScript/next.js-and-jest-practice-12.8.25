import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home", () => {
  it("renders a heading", () => {
    //* ``** Three A's **``

    //* ``** Arrange **``
    render(<Home />);

    //* ``** Act **``
    const heading = screen.getByRole("heading", { level: 1 });

    //* ``** Assert **``
    expect(heading).toBeInTheDocument();
  });

  it("should have Documentation text", () => {
    //* ``** Three A's **``

    //* ``** Arrange **``
    render(<Home />);

    //* ``** Act **``
    const myElem = screen.getByText("Documentation");

    //* ``** Assert **``
    expect(myElem).toBeInTheDocument();
  });

  it('should have the text "instructions"', () => {
    //* ``** Three A's **``

    //* ``** Arrange **``
    render(<Home />);

    //* ``** Act **``
    const myElem = screen.getByText(/instructions/i); // <-- Regex looking for the string "instructions". The "i" flag means case-insensitive

    //* ``** Assert **``
    expect(myElem).toBeInTheDocument();
  });

  it("should have a heading", () => {
    //* ``** Three A's **``

    //* ``** Arrange **``
    render(<Home />);

    //* ``** Act **``
    const myElem = screen.getByRole("heading", {
      name: "To get started, edit the page.tsx file.",
    }); // <-- Regex looking for the string "instructions". The "i" flag means case-insensitive

    //* ``** Assert **``
    expect(myElem).toBeInTheDocument();
  });
});

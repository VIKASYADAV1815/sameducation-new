import { render, screen } from "@testing-library/react";
import { CTAButton } from "./CTAButton";

describe("CTAButton", () => {
  it("renders correctly with children", () => {
    render(<CTAButton>Talk To An Expert</CTAButton>);
    const button = screen.getByRole("button", { name: /talk to an expert/i });
    expect(button).toBeInTheDocument();
  });
});

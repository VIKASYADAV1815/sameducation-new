import { render, screen } from "@testing-library/react";
import { HeroButton } from "./HeroButton";

describe("HeroButton", () => {
  it("renders correctly with primary variant", () => {
    render(<HeroButton>Click Me</HeroButton>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-primary");
  });

  it("renders correctly with outline variant", () => {
    render(<HeroButton variant="outline">Outline</HeroButton>);
    const button = screen.getByRole("button", { name: /outline/i });
    expect(button).toHaveClass("bg-transparent text-primary");
  });
});

import { render, screen } from "@testing-library/react";
import { TestimonialCard } from "./TestimonialCard";

describe("TestimonialCard", () => {
  it("renders quote, author, and role", () => {
    render(<TestimonialCard quote="Great service" author="John Doe" role="Student" />);
    expect(screen.getByText(/"Great service"/)).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Student")).toBeInTheDocument();
  });
});

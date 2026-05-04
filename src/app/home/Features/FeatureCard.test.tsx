import { render, screen } from "@testing-library/react";
import { FeatureCard } from "./FeatureCard";

describe("FeatureCard", () => {
  it("renders title and description", () => {
    render(<FeatureCard title="Test Title" description="Test Description" />);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });
});

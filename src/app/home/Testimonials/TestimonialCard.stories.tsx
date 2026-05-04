import type { Meta, StoryObj } from "@storybook/react";
import { TestimonialCard } from "./TestimonialCard";

const meta: Meta<typeof TestimonialCard> = {
  title: "Components/TestimonialCard",
  component: TestimonialCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof TestimonialCard>;

export const Default: Story = {
  args: {
    quote: "SAMEDUCATION completely simplified my university application process. Their dedicated team guided me step-by-step, ensuring my profile stood out.",
    author: "Sarah Jenkins",
    role: "Student, University of Oxford",
  },
};

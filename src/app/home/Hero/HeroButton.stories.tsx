import type { Meta, StoryObj } from "@storybook/react";
import { HeroButton } from "./HeroButton";

const meta: Meta<typeof HeroButton> = {
  title: "Components/HeroButton",
  component: HeroButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof HeroButton>;

export const Primary: Story = {
  args: {
    children: "Start Free Assessment",
    variant: "primary",
  },
};

export const Outline: Story = {
  args: {
    children: "Speak to an Advisor",
    variant: "outline",
  },
};

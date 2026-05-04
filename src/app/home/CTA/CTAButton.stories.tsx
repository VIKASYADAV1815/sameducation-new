import type { Meta, StoryObj } from "@storybook/react";
import { CTAButton } from "./CTAButton";

const meta: Meta<typeof CTAButton> = {
  title: "Components/CTAButton",
  component: CTAButton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CTAButton>;

export const Default: Story = {
  args: {
    children: "Talk To An Expert",
  },
};

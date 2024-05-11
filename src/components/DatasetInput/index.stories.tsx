import type { Meta, StoryObj } from "@storybook/react";
import DatasetInput from "./index";

const meta: Meta<typeof DatasetInput> = {
  title: "Components/Dataset Input",
  component: DatasetInput,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof DatasetInput>;

export const Default: Story = {};

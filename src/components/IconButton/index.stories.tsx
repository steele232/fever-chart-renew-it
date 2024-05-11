import type { Meta, StoryObj } from "@storybook/react";
import IconButton from "./index";
import Close from "@mui/icons-material/Close";

const meta: Meta<typeof IconButton> = {
  title: "Components/Icon Button",
  component: IconButton,
  parameters: {
    // layout: "fullscreen",
  },

  args: {
    children: <Close />,
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {};

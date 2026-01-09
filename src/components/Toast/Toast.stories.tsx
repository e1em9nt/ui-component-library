import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Toast from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["success", "warning", "error"],
    },
    duration: {
      control: { type: "number", min: 1000, max: 10000, step: 500 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

// 1. Success Story
export const Success: Story = {
  args: {
    type: "success",
    children: "Changes saved successfully!",
    showCloseBtn: true,
    onClose: () => console.log("Toast closed"),
  },
};

// 2. Warning Story
export const Warning: Story = {
  args: {
    type: "warning",
    children: "Your session will expire soon.",
    onClose: () => console.log("Warning dismissed"),
  },
};

// 3. Error Story
export const Error: Story = {
  args: {
    type: "error",
    children: "Failed to upload the document.",
    showCloseBtn: true,
    onClose: () => console.log("Error cleared"),
  },
};

// 4. Interactive
export const Interactive: Story = {
  render: (args) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <div style={{ height: "150px" }}>
        <button
          onClick={() => setIsVisible(true)}
          style={{ padding: "10px 20px", cursor: "pointer" }}
        >
          Click to Trigger Toast
        </button>

        {isVisible && <Toast {...args} onClose={() => setIsVisible(false)} />}
      </div>
    );
  },
  args: {
    type: "success",
    children: "Changes saved successfully!",
    duration: 3000,
    showCloseBtn: true,
  },
};

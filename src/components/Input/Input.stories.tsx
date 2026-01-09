import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "number"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// 1. Basic Text Input
export const Default: Story = {
  args: {
    type: "text",
    value: "Hello World",
    placeholder: "Type something...",
    onChange: (val) => console.log("Input changed:", val),
  },
};

// 2. Password with Visibility Toggle
export const PasswordToggle: Story = {
  args: {
    type: "password",
    value: "mySecretPassword",
    placeholder: "Enter password",
    onChange: (val) => console.log("Password changed:", val),
  },
};

// 3. Clearable Input
// value must not be empty for the "X" to show up in your logic
export const Clearable: Story = {
  args: {
    type: "text",
    value: "Clear me!",
    clearable: true,
    onChange: (val) => console.log("Value cleared or changed:", val),
  },
};

// 4. Number Input
export const Number: Story = {
  args: {
    type: "number",
    value: "42",
    onChange: (val) => console.log("Number changed:", val),
  },
};

// 5. Interactive
export const Interactive: Story = {
  render: (args) => {
    const [val, setVal] = useState("Click the X to test me");
    return <Input {...args} value={val} onChange={setVal} />;
  },
  args: {
    type: "text",
    clearable: true,
  },
};

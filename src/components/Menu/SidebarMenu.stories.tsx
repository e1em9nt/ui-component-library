import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import SidebarMenu from "./SideBarMenu";
import Submenu from "./Submenu";

const meta: Meta<typeof SidebarMenu> = {
  title: "Components/SidebarMenu",
  component: SidebarMenu,
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: "select",
      options: ["left", "right"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof SidebarMenu>;

export const InteractiveNested: Story = {
  render: (args) => {
    // Manages the open/closed state requirement
    const [open, setOpen] = useState(false);

    return (
      <div style={{ height: "400px", position: "relative" }}>
        <button onClick={() => setOpen(true)}>Open Sidebar</button>

        <SidebarMenu {...args} isOpen={open} onClose={() => setOpen(false)}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ padding: "10px 20px", margin: 0 }}>Dashboard</p>

            {/* 1-Level Nested Item */}
            <Submenu label="Products">
              <p style={{ padding: "8px 20px", margin: 0 }}>All Products</p>

              {/* 2-Level Nested Item (Requirement) */}
              <Submenu label="Categories">
                <p style={{ padding: "8px 20px", margin: 0 }}>Electronics</p>
                <p style={{ padding: "8px 20px", margin: 0 }}>Clothing</p>
              </Submenu>
            </Submenu>

            <p style={{ padding: "10px 20px", margin: 0 }}>Settings</p>
          </div>
        </SidebarMenu>
      </div>
    );
  },
  args: {
    title: "Project Menu",
    position: "right", // Requirement: Slides in from the right
  },
};

export const OpenOnLeft: Story = {
  args: {
    title: "Left Sidebar",
    position: "left",
    isOpen: true,
    children: (
      <a
        href="#home"
        style={{
          padding: "10px 0",
          textDecoration: "none",
          color: "black",
        }}
      >
        Home
      </a>
    ),
  },
};

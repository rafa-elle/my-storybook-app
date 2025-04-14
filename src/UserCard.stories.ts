import type { Meta, StoryObj } from "@storybook/react";
import { UserCard } from "./UserCard";
import { within } from "@storybook/test";
import { userEvent } from "@storybook/testing-library";

const meta: Meta<typeof UserCard> = {
  component: UserCard,
  title: "Components/UserCard",
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof UserCard>;

const fakeConfirm = () =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      console.log("Utente confermato!");
      resolve();
    }, 2000);
  });

export const Primary: Story = {
  args: {
    name: "Luca Verdi",
    email: "luca.verdi@gmail.com",
    onConfirm: fakeConfirm,
  },
};

export const ConfermaAutomatica: Story = {
  args: {
    name: "Luca Verdi",
    email: "luca.verdi@gmail.com",
    onConfirm: fakeConfirm,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.getByRole('button', { name: /conferma/i });
    await userEvent.click(button);
  },
};

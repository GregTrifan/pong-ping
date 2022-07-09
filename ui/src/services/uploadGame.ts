import { GameForm } from "../types/Game";
import { showNotification, updateNotification } from "@mantine/notifications";
import { ApiEndpoint } from "../constants";

export const uploadGame = async (data: GameForm) => {
  showNotification({
    id: "load-data",
    loading: true,
    title: "Uploading the game match",
    message: "Data will be loaded in a couple of seconds",
    autoClose: false,
    disallowClose: true,
  });
  try {
    const response = await fetch(`${ApiEndpoint}/game`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const body = await response.json();
    if (body.message === "Game uploaded successfully!")
      updateNotification({
        id: "load-data",
        color: "teal",
        title: "Game uploaded successfully",
        message:
          "Notification will close in 2 seconds, you can close this notification now",
        autoClose: 2000,
      });
  } catch {
    updateNotification({
      id: "load-data",
      color: "red",
      title: "Game couldn't be uploaded",
      message: "Notification will close in 2 seconds",
      autoClose: 2000,
    });
  }
};

import React from "react";

export const EventItem = ({ event }) => {
  const { title, user } = event;

  return (
    <div>
      <strong>{title}</strong>
      <span>- {user.name}</span>
    </div>
  );
};

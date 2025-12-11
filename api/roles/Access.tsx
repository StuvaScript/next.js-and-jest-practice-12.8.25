"use client";
import { useState } from "react";

type getCredentials = {
  name: string;
  id: number;
  email: string;
  techLead: boolean;
};

export const getCredentials = (
  isAdmin: boolean
): getCredentials | undefined => {
  if (isAdmin) {
    return {
      name: "Stu",
      id: 123,
      email: "stu@codethedream.org",
      techLead: true,
    };
  }
};

export default function Access() {
  const [isAdmin, setIsAdmin] = useState(true);

  const access = getCredentials(isAdmin);

  return (
    <div>
      <p>{access?.name}</p>
      <p>{access?.id}</p>
      <p>{access?.email}</p>
      <p>{access?.techLead}</p>
    </div>
  );
}

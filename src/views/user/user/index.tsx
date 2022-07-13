import React from "react";
import { UserTable } from "./userTable";
import { UserSearch } from "./userSearch";

export function User() {
  return (
    <>
      <UserSearch />
      <UserTable />
    </>
  );
}

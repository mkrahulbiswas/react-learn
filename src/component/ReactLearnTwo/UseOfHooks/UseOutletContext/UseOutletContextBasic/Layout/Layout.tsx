import { useState } from "react";
import { Outlet } from "react-router";

export default function Layout() {
  const [name, setName] = useState('No Name')
  return (
    <>
      <p>My name is: <b>{name}</b></p>
      <Outlet context={{ name, setName }} />
    </>
  )
}
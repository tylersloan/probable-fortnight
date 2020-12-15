import React from "react";
import { Link } from "gatsby";

export default function Home() {
  return (
    <div>
      <h1>BoomTown dot com!</h1>
      <h3>Navigations</h3>
      <Link to={"/features"}>Features</Link>
      <Link to={"/about"}>About</Link>
    </div>
  );
}

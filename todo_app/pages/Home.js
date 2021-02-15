import React from "react";
import { Container, Heading, Link } from "../components";

export default function Home() {
  return (
    <Container>
      <Heading>Home</Heading>
      <Link to="/">Logout</Link>
    </Container>
  );
}

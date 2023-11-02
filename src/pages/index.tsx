import Hero from "../components/heroSection";
import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

const pageStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Hero />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

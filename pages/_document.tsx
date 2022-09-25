import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Dylan James - Software Engineer</title>
      <link rel="stylesheet" href="/css/index.css" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
      />
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossOrigin="anonymous"
      />
      <script src="https://unpkg.com/@codersrank/skills-chart@0.9.2/codersrank-skills-chart.min.js"></script>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta content="Dylan James" name="title" />
      <meta content="Just a little boring ole' cv." name="description" />
      <meta content="Just a little boring ole' cv." name="keywords" />
      <meta content="index, follow" name="robots" />
      <meta content="English" name="language" />
      <meta content="Team Tritan" name="author" />
      <meta property="og:title" content="Dylan James" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://dylanjames.gay" />
      <meta property="og:description" content="Just a little boring ole' cv" />
      <link rel="icon" href="/av.jpg" />
      <meta name="theme-color" content="#5c9dff"></meta>
      <Main />
      <NextScript />
    </Html>
  );
}

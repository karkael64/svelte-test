<script lang="ts">
  import { ApolloClient, InMemoryCache } from "@apollo/client";
  import { setClient } from "./graphql";
  import User from "./User.svelte";

  setClient(new ApolloClient({
    uri: process.env.URL_GRAPHQL,
    cache: new InMemoryCache({ addTypename: true }),
    connectToDevTools: true,
  }));
</script>

<main>
  <h1>Svelte + Node.js API</h1>
  <h2>
    Deployed with
    <a href="https://vercel.com/docs" target="_blank" rel="noreferrer noopener">
      Vercel
    </a>
    !
  </h2>
  <p>
    <a
      href="https://github.com/vercel/vercel/tree/main/examples/svelte"
      target="_blank"
      rel="noreferrer noopener">
      This project
    </a>
    is a
    <a href="https://svelte.dev/">Svelte</a>
    app with three directories,
    <code>/public</code>
    for static assets,
    <code>/src</code>
    for components and content, and
    <code>/api</code>
    which contains a serverless
    <a href="https://nodejs.org/en/">Node.js</a>
    function. See
    <a href="/api/date">
      <code>api/date</code>
      for the Date API with Node.js
    </a>
    .
  </p>
  <User />
</main>

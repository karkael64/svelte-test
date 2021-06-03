<script lang="ts">
  import { ApolloClient, InMemoryCache } from "@apollo/client";
  import { setClient } from "../graphql";
  import Hello from "./Hello.svelte";
  import Counter from "./Counter.svelte";

  setClient(
    new ApolloClient({
      uri: process.env.URL_GRAPHQL,
      cache: new InMemoryCache({ addTypename: true }),
      connectToDevTools: true,
    })
  );
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
  <Hello />
  <Counter />
</main>

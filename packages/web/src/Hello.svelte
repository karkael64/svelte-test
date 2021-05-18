<script lang="ts">
  import { QueryHello } from "../graphql";
  let messageQuery = QueryHello({});
</script>

{#if messageQuery}
  {#await messageQuery}
    <p>Loading message...</p>
  {:then res}
    <p>Recieved message {JSON.stringify(res.data.hello.message)} at {new Date(res.data.hello.date)}.</p>
  {:catch error}
    <p>{error}</p>
  {/await}
{/if}
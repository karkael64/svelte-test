<script lang="ts">
  import { QueryListUsers } from "../graphql";
  import { Button } from "@test/ui";
  let usersQuery: ReturnType<typeof QueryListUsers> | null = null;
  function onClick (){
    usersQuery = QueryListUsers({});
  }
</script>

<Button label="Hello" on:click={onClick}></Button>

{#if usersQuery}
  {#await usersQuery}
    <p>Loading users...</p>
  {:then user}
    <pre>{JSON.stringify(user, null, 1)}</pre>
  {:catch error}
    <p>{error}</p>
  {/await}
{/if}
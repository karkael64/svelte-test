<script lang="ts">
  import { QueryListUsers } from "./graphql";
  const usersQuery = QueryListUsers({});
</script>

{#await usersQuery}
  <p>Loading users...</p>
{:then user}
  <pre>{JSON.stringify(user, null, 1)}</pre>
{:catch error}
  <p>{error}</p>
{/await}

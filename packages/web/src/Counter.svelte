<script lang="ts">
  import { Button } from "@test/ui";

  let count = 0

  function handleClick() {
    count += 1;
  }
</script>

<Button on:click={handleClick} label={`Clicked ${count} times`} />

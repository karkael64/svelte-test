<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { t } from "svelte-i18n";

  type User = {
    name: string;
    email: string;
  };

  export let user: User;
  export let isEditing = false;

  const dispatch = createEventDispatcher();

  function onSubmit(event: Event) {
    dispatch("submit", event);
  }
</script>

{#if isEditing}
  <form on:submit|preventDefault={onSubmit}>
    <label class="label" name="name">
      <span class="title">{$t("user-card.name")}</span>
      <input type="text" class="input" value={user.name} />
    </label>
    <label class="label" name="email">
      <span class="title">{$t("user-card.email")}</span>
      <input type="text" class="input" value={user.email} />
    </label>
  </form>
{:else}
  <div>
    <div class="label" name="name">
      <span class="title">{$t("user-card.name")}</span>
      <span class="value">{user.name}</span>
    </div>
    <div class="label" name="email">
      <span class="title">{$t("user-card.email")}</span>
      <span class="value">{user.email}</span>
    </div>
  </div>
{/if}

<style>
  .label {
    display: flex;
  }

  .title {
    font-weight: 700;
  }

  .value {
    font-weight: 500;
  }
</style>

<script lang="ts">
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import UserCard from "./UserCard.svelte";
</script>

<Meta
  title="Atom/UserCard"
  component={UserCard}
  argTypes={{
    user: {
      control: "object",
      defaultValue: { name: "User", email: "user@email.com" },
    },
    isEditing: { control: "boolean" },
    onSumbit: { action: "onSumbit" },
  }}
/>

<Template let:args>
  <UserCard {...args} on:submit={args.onSubmit} />
</Template>

<Story
  name="Read"
  args={{
    isEditing: false,
  }}
/>

<Story
  name="Edit"
  args={{
    isEditing: true,
  }}
/>

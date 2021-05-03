<script lang="ts">
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Button from "./Button.svelte";
</script>

<!-- svelte-ignore missing-declaration -->
<Meta
  title="Example/Button"
  component={Button}
  argTypes={{
    label: { control: "text" },
    primary: { control: "boolean" },
    backgroundColor: { control: "color" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    onClick: { action: "onClick" },
  }}
/>

<!-- svelte-ignore missing-declaration -->
<Template let:args>
  <Button {...args} on:click={args.onClick} />
</Template>

<!-- svelte-ignore missing-declaration -->
<Story
  name="Primary"
  args={{
    primary: true,
    label: "Button",
  }}
/>

<!-- svelte-ignore missing-declaration -->
<Story
  name="Secondary"
  args={{
    label: "Button",
  }}
/>

<!-- svelte-ignore missing-declaration -->
<Story
  name="Large"
  args={{
    size: "large",
    label: "Button",
  }}
/>

<!-- svelte-ignore missing-declaration -->
<Story
  name="Small"
  args={{
    size: "small",
    label: "Button",
  }}
/>

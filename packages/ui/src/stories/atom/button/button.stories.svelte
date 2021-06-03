<script lang="ts">
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Button from "./Button.svelte";
</script>

<Meta
  title="Atom/Button"
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

<Template let:args id="Alone">
  <Button {...args} on:click={args.onClick} />
</Template>

<Template let:args id="Lorem">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perferendis
  asperiores assumenda praesentium tempore. <Button
    {...args}
    on:click={args.onClick}
  /> Illum recusandae, id neque cumque quam esse reiciendis, veritatis ea iusto laborum
  quaerat a cupiditate culpa.
</Template>

<Story
  name="Primary"
  args={{
    primary: true,
    label: "Button",
  }}
  template="Alone"
/>

<Story
  name="Secondary"
  args={{
    label: "Button",
  }}
  template="Alone"
/>

<Story
  name="Large"
  args={{
    size: "large",
    label: "Button",
  }}
  template="Lorem"
/>

<Story
  name="Small"
  args={{
    size: "small",
    label: "Button",
  }}
  template="Lorem"
/>

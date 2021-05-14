<script lang="ts">
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import Header from "./Header.svelte";
</script>

<!-- svelte-ignore missing-declaration -->
<Meta
  title="Example/Header"
  component={Header}
  argTypes={{
    onLogin: { action: "onLogin" },
    onLogout: { action: "onLogout" },
    onCreateAccount: { action: "onCreateAccount" },
  }}
/>

<!-- svelte-ignore missing-declaration -->
<Template let:args>
  <Header
    {...args}
    on:login={args.onLogin}
    on:logout={args.onLogout}
    on:createAccount={args.onCreateAccount}
  />
</Template>

<!-- svelte-ignore missing-declaration -->
<Story
  name="LoggedIn"
  args={{
    user: {},
  }}
/>

<!-- svelte-ignore missing-declaration -->
<Story name="LoggedOut" args={{}} />

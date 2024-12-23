<script lang="ts">
  import type { Snippet } from "svelte";

  import { env } from "$env/dynamic/public";

  import "../app.scss";

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<svelte:head>
  <title>Waifu Bot</title>
  <meta
    name="description"
    content="Multipurpose Discord Bot that serve my server"
  />
  <meta property="og:image" content="{env.PUBLIC_WEB_URL}/api/image/og" />
</svelte:head>

{@render children()}

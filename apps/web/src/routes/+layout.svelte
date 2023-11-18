<script lang="ts">
  import "../app.scss";

  import { env } from "$env/dynamic/public";
</script>

<svelte:head>
  <title>Waifu Bot</title>
  <meta property="og:image" content="{env.PUBLIC_WEB_URL}/api/image/og" />
</svelte:head>

<slot />

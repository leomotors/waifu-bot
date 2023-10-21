<script lang="ts">
  import "../app.scss";

  import { PUBLIC_WEB_URL } from "$env/static/public";
</script>

<svelte:head>
  <title>Waifu Bot</title>
  <meta property="og:image" content="{PUBLIC_WEB_URL}/api/image/og" />
</svelte:head>

<slot />

<script lang="ts">
  import { getVersion } from "@graphql";

  $: {
    const { data } = getVersion();
  }
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<p class="text-6xl">{data.version ?? "Loading"}</p>
<p class="text-3xl">{data.error ?? "No error"}</p>

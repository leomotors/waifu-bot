<script lang="ts" context="module">
  import { KQL_GetVersion } from "$graphql/generated/stores";
  import type { Load } from "@sveltejs/kit";

  export const load: Load = async ({ fetch }) => {
    await KQL_GetVersion.queryLoad({ fetch, variables: {} });
  };
</script>

<script lang="ts">
  $: version = $KQL_GetVersion.data?.version;
  $: error = $KQL_GetVersion.errors?.[0];
</script>

<h1>Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<p class="text-6xl">{version ?? "Loading"}</p>
<p class="text-3xl">{error ?? "No error"}</p>

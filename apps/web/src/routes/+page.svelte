<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Current waifu is {data.nameEn}</p>

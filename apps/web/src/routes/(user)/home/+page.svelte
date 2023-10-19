<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<p>Hello {data.user.username}</p>

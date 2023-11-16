<script lang="ts" context="module">
  import type { Loader } from "@urami/types";

  const loader = ((src, width, quality) => {
    const params = new URLSearchParams({
      url: src,
      w: width.toString(),
      q: quality.toString(),
    }).toString();

    return `/api/image?${params}`;
  }) satisfies Loader;
</script>

<script lang="ts">
  import Image from "@urami/svelte";

  export let src: string;
  export let width: number;
  export let height: number | undefined = undefined;
  export let alt: string | undefined = undefined;
  let className: string | undefined = undefined;
  export { className as class };
  export let quality: number | undefined = 100;
</script>

{#if src.startsWith("https")}
  <Image {src} {width} {height} {alt} class={className} {quality} {loader} />
{:else}
  <img {src} {width} {height} {alt} class={className} />
{/if}

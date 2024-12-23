<script lang="ts" module>
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

  interface Props {
    src: string;
    width: number;
    height?: number | undefined;
    alt?: string | undefined;
    class?: string | undefined;
    quality?: number | undefined;
  }

  let {
    src,
    width,
    height = undefined,
    alt = undefined,
    class: className = undefined,
    quality = 100,
  }: Props = $props();
</script>

{#if src.startsWith("https")}
  <Image {src} {width} {height} {alt} class={className} {quality} {loader} />
{:else}
  <img {src} {width} {height} {alt} class={className} />
{/if}

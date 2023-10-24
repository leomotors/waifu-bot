<script lang="ts" context="module">
  import type { Loader } from "@urami/types";

  const myDefaultLoader = ((src, width, quality) => {
    const params = new URLSearchParams({
      url: src,
      w: width.toString(),
      q: quality.toString(),
    }).toString();

    return `/api/image?${params}`;
  }) satisfies Loader;
</script>

<script lang="ts">
  import { buildSource } from "@urami/utils";

  export let src: string;
  export let width: number;
  export let height: number | undefined = undefined;
  export let alt: string | undefined = undefined;

  let klass: string | undefined = undefined;
  export { klass as class };

  export let quality: number = 75;

  export let loader: Loader = myDefaultLoader;

  $: buildProps = buildSource(loader, src, width, quality);
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<img
  src={buildProps.src}
  srcset={buildProps.srcSet}
  decoding="async"
  loading="lazy"
  {...$$restProps}
  {...{
    alt,
    height,
    width,
    class: klass,
  }}
/>

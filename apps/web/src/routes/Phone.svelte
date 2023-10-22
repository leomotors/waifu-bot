<script lang="ts">
  import type { getCurrentWaifu } from "$lib/server";
  import Image from "$lib/components/Image.svelte";

  import Reception4 from "svelte-bootstrap-icons/lib/Reception4.svelte";
  import BatteryFull from "svelte-bootstrap-icons/lib/BatteryFull.svelte";

  import { twMerge } from "tailwind-merge";

  export let data: Awaited<ReturnType<typeof getCurrentWaifu>>;
  let className: string = "";
  export { className as class };
</script>

<aside class={twMerge("max-w-lg rotate-3 rounded-3xl bg-black p-4", className)}>
  <!-- Phone Content -->
  <div class="aspect-[1/2.2] w-full rounded-2xl bg-gray-600">
    <!-- Camera Cutout -->
    <div
      class="flex h-8 items-center justify-between rounded-t-xl bg-gray-400 px-4 text-white"
    >
      <div class="flex-1">01:00</div>
      <div class="h-6 w-6 self-end rounded-full bg-black"></div>
      <div class="flex flex-1 items-center justify-end gap-1">
        <p class="hidden sm:block">5G</p>
        <Reception4 class="hidden h-5 w-5 sm:block" />
        <p>100%</p>
        <BatteryFull class="h-7 w-7" />
      </div>
    </div>

    <!-- Images -->
    <Image src={data.bannerUrl} width={1000} />

    <div class="h-0">
      <div class="ml-6 w-fit -translate-y-1/2 rounded-full bg-gray-600 p-2">
        <Image src={data.imageUrl} width={128} class="rounded-full" />
      </div>
    </div>

    <!-- Content -->
    <div
      class="mx-4 mb-4 mt-20 flex flex-col gap-2 rounded-xl bg-black p-3 text-white"
    >
      <!-- Name -->
      <div>
        <p class="text-xl font-medium">{data.nameJa}</p>
        {#if data.nameJa !== data.nameEn}
          <p class="text-sm">{data.nameEn}</p>
        {/if}
      </div>

      <p class="text-sm">{data.footerText}</p>

      <hr class="h-0.5 border-0 bg-gray-800" />

      <section>
        <h2>SOURCE</h2>
        <p>{data.sourceJa}</p>
        {#if data.sourceJa !== data.sourceEn}
          <p class="text-gray-300">{data.sourceEn}</p>
        {/if}
      </section>

      <section>
        <h2>SIMPING SINCE</h2>
        <p>{data.simpingSince.toLocaleDateString()}</p>
      </section>

      <section>
        <h2>NOTE</h2>
        <p>{data.note || "-"}</p>
      </section>
    </div>
  </div>
</aside>

<style lang="scss">
  h2 {
    @apply font-bold;
  }

  section > p {
    @apply text-sm;
  }
</style>

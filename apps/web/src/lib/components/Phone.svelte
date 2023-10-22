<script lang="ts">
  import Image from "$lib/components/Image.svelte";

  import Reception4 from "svelte-bootstrap-icons/lib/Reception4.svelte";
  import BatteryFull from "svelte-bootstrap-icons/lib/BatteryFull.svelte";

  import { twMerge } from "tailwind-merge";

  let className: string = "";
  export { className as class };

  export let bannerUrl: string | undefined = undefined;
  export let profileUrl: string;
  export let color: string | undefined = undefined;

  export let namePrimary: string;
  export let nameSecondary: string | undefined = undefined;
  export let statusText: string | undefined = undefined;

  type Field = {
    title: string;
    primaryField: string;
    secondaryField?: string;
  };

  export let fields: Field[];
</script>

<aside
  class={twMerge(
    "max-w-lg rotate-3 rounded-3xl bg-black p-4 shadow-2xl",
    color && "shadow-inherit",
    className,
  )}
  style={color && `--tw-shadow-color: ${color}`}
>
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
    {#if bannerUrl}
      <Image src={bannerUrl} width={1000} />
    {:else}
      <img src="/pink-400.webp" width="1000" alt="Fallback Banner" />
    {/if}

    <div class="h-0">
      <div class="ml-6 w-fit -translate-y-1/2 rounded-full bg-gray-600 p-2">
        <Image src={profileUrl} width={128} class="rounded-full" />
      </div>
    </div>

    <!-- Content -->
    <div
      class="mx-4 mb-4 mt-20 flex flex-col gap-2 rounded-xl bg-black p-3 text-white"
    >
      <!-- Name -->
      <div>
        <p class="text-xl font-medium">{namePrimary}</p>
        {#if nameSecondary && namePrimary !== nameSecondary}
          <p class="text-sm">{nameSecondary}</p>
        {/if}
      </div>

      {#if statusText}
        <p class="text-sm">{statusText}</p>
      {/if}

      <hr class="h-0.5 border-0 bg-gray-800" />

      {#each fields as field}
        <section>
          <h2>{field.title}</h2>
          <p>{field.primaryField}</p>
          {#if field.secondaryField && field.primaryField !== field.secondaryField}
            <p class="text-gray-300">{field.secondaryField}</p>
          {/if}
        </section>
      {/each}
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

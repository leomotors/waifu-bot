<script lang="ts">
  import Image from "$lib/components/Image.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div class="flex min-h-screen flex-col gap-8">
  <!-- Header -->
  <header class="py-4 shadow-lg shadow-slate-100">
    <div class="container mx-auto flex items-center justify-between px-4">
      <!-- Left -->
      <div class="flex items-center gap-4">
        <h1 class="text-2xl font-bold">Admin Panel</h1>
        <a href="/home" class="text-lg">Home</a>
      </div>

      <!-- Right -->
      <button class="rounded-md bg-gray-200 px-4 py-2 hover:bg-gray-300">
        Logout
      </button>
    </div>
  </header>

  <div
    class="container relative mx-auto flex min-h-[384px] flex-col justify-between gap-8 rounded-2xl bg-pink-100 p-8 shadow-xl"
  >
    <div class="waifu-hero">
      <Image
        class="h-[384px] w-[384px] overflow-hidden rounded-r-2xl"
        src={data.currentWaifu.imageUrl}
        width={384}
        height={384}
      />
    </div>

    <section>
      <h2 class="text-3xl font-extrabold">{data.currentWaifu.nameJa}</h2>
      <p class="text-xl font-medium">
        Our current waifu is {data.currentWaifu.nameEn}
      </p>
    </section>

    <a href="/admin/waifu">
      <button
        class="rounded bg-pink-300 px-4 py-2 font-bold text-white transition-colors hover:bg-pink-400"
      >
        Manage Waifu
      </button>
    </a>
  </div>

  <!-- Main Content -->
  <main class="flex-1 py-8">
    <div class="container mx-auto px-4">
      <h2 class="mb-4 text-xl font-bold">Dashboard</h2>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <!-- Card 1 -->
        <div class="rounded-md bg-white p-4 shadow-md">
          <h3 class="mb-2 text-lg font-bold">Bot Activities</h3>
          <p class="text-gray-600">Total: {data.activityCount}</p>
          <p class="mb-4 text-gray-600">Enabled: {data.enabledActivity}</p>

          <a href="/admin/activity">
            <button
              class="rounded bg-blue-500 px-4 py-2 font-bold text-white transition-colors hover:bg-blue-700"
            >
              Manage Activities
            </button>
          </a>
        </div>
      </div>
    </div>
  </main>
</div>

<style lang="scss">
  .waifu-hero {
    @apply absolute right-0 top-0 opacity-50;

    &::after {
      @apply absolute right-0 top-0 block h-[384px] w-[384px];
      background-image: linear-gradient(
        to left,
        rgba(255, 255, 255, 0) 0,
        #fce7f3 100%
      );
      content: "";
    }
  }
</style>

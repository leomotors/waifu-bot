<script lang="ts">
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
    class="container mx-auto flex flex-col gap-8 rounded-2xl bg-gradient-to-br from-pink-100 to-rose-100 p-4 shadow-xl"
  >
    <h2 class="text-3xl font-extrabold">{data.currentWaifu.nameEn}</h2>

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

<script lang="ts">
  import type { PageData } from "./$types";

  import GitHub from "svelte-bootstrap-icons/lib/Github.svelte";
  import Phone from "./Phone.svelte";

  export let data: PageData;
</script>

<div class="flex flex-col items-center p-4">
  <h1
    class="mt-8 select-none bg-gradient-to-br from-pink-400 to-purple-400 bg-clip-text text-6xl font-extrabold text-transparent sm:text-8xl lg:hidden"
  >
    Waifu Bot
  </h1>

  <div
    class="flex w-full flex-col-reverse items-center px-8 py-16 lg:flex-row lg:items-start lg:justify-evenly lg:px-0"
  >
    <main class="flex flex-col gap-8 pt-16">
      <h1
        class="hidden select-none bg-gradient-to-br from-pink-400 to-purple-400 bg-clip-text text-8xl font-extrabold text-transparent lg:block"
      >
        Waifu Bot
      </h1>

      <p class="text-3xl">Multipurpose Waifu Discord Bot</p>

      <a href="https://github.com/Leomotors/waifu-bot">
        <button
          class="flex items-center gap-4 rounded-lg bg-gray-800 px-4 py-3 font-bold text-white transition-colors hover:bg-gray-700"
        >
          <GitHub class="h-6 w-6" />
          <p class="text-lg font-bold">View in GitHub</p>
        </button>
      </a>

      <div class="rounded-lg bg-gray-100 p-4">
        <p class="mb-2 text-lg font-bold">Run Waifu Bot</p>
        <code
          class="flex gap-2 rounded bg-gray-300 p-2 font-mono text-sm transition-colors hover:bg-gray-400"
        >
          <p class="select-none">$</p>
          <p>docker pull ghcr.io/leomotors/waifu-bot:latest</p>
        </code>
      </div>
    </main>

    <Phone {data} />
  </div>
</div>

<script lang="ts">
  import type { PageData } from "./$types";

  import GitHub from "svelte-bootstrap-icons/lib/Github.svelte";

  import Phone from "$lib/components/Phone.svelte";
  import PastWaifu from "./PastWaifu.svelte";

  export let data: PageData;
  $: ({ currentWaifu, allWaifu } = data);
</script>

<div class="flex flex-col items-center">
  <!-- Title for Mobile -->
  <h1
    class="mt-12 select-none bg-gradient-to-br from-pink-400 to-purple-400 bg-clip-text px-4 text-6xl font-extrabold text-transparent sm:text-8xl lg:hidden"
  >
    Waifu Bot
  </h1>

  <div
    class="flex w-full flex-col-reverse items-center px-12 py-20 lg:flex-row lg:items-start lg:justify-evenly lg:px-0"
  >
    <main class="flex flex-col gap-8 pt-16">
      <div
        class="w-fit rounded-full bg-purple-200 px-3 py-1 text-xs font-bold text-purple-500"
      >
        <p>Kawaii, useful and runs on latest node 20!</p>
      </div>

      <h1
        class="hidden select-none bg-gradient-to-br from-pink-400 to-purple-400 bg-clip-text text-8xl font-extrabold text-transparent lg:block"
      >
        Waifu Bot
      </h1>

      <p class="text-3xl font-medium">Multipurpose Waifu Discord Bot</p>

      <div class="waifu-brand-buttons">
        <a
          href="https://github.com/Leomotors/waifu-bot"
          target="_blank"
          rel="noreferrer"
        >
          <button class="bg-gray-800 text-white hover:bg-gray-700">
            <GitHub class="h-6 w-6" />
            <p class="text-lg font-bold">View in GitHub</p>
          </button>
        </a>

        <a
          href="#past-waifu"
          on:click|preventDefault={() => {
            // Smooth Scroll when JS is available
            const el = document.getElementById("past-waifu");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <button class="bg-rose-300 text-white hover:bg-rose-400">
            <img
              class="h-6"
              src="/emu-64.png"
              alt="just a normal peaceful logo"
            />
            <p class="text-lg font-bold">Past Waifu</p>
          </button>
        </a>
      </div>

      <div class="rounded-lg bg-gray-100 p-4">
        <p class="mb-2 text-lg font-bold">Available in Docker</p>
        <code
          class="flex gap-2 rounded bg-gray-300 p-2 font-mono text-sm transition-colors hover:bg-gray-400/70"
        >
          <p class="select-none">$</p>
          <p>docker pull ghcr.io/leomotors/waifu-bot:latest</p>
        </code>
      </div>

      <p>
        Made with <span class="text-red-500">❤️</span> by
        <a
          class="text-blue-500 transition-colors hover:text-blue-600"
          href="https://github.com/Leomotors"
          target="_blank"
          rel="noreferrer"
        >
          Leomotors
        </a>
      </p>
    </main>

    <Phone
      bannerUrl={currentWaifu.bannerUrl}
      profileUrl={currentWaifu.imageUrl}
      color={currentWaifu.color}
      namePrimary={currentWaifu.nameJa}
      nameSecondary={currentWaifu.nameEn}
      statusText={currentWaifu.footerText}
      fields={[
        {
          title: "SOURCE",
          primaryField: currentWaifu.sourceJa,
          secondaryField: currentWaifu.sourceEn,
        },
        {
          title: "SIMPING SINCE",
          primaryField: currentWaifu.simpingSince.toLocaleDateString(
            data.primaryLanguage,
          ),
        },
        {
          title: "NOTE",
          primaryField: currentWaifu.note || "-",
        },
      ]}
    />
  </div>

  <div
    id="past-waifu"
    class="w-full bg-gradient-to-r from-black to-purple-900 p-8"
  >
    <PastWaifu {allWaifu} primaryLanguage={data.primaryLanguage} />
  </div>
</div>

<style lang="scss">
  .waifu-brand-buttons {
    @apply flex gap-2;

    & > a {
      @apply flex-1;

      & > button {
        @apply flex w-full items-center justify-center gap-4 rounded-lg px-4 py-3 font-bold transition-colors;
      }
    }
  }
</style>

<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import Phone from "$lib/components/Phone.svelte";

  import { twMerge } from "tailwind-merge";

  import type { PageData } from "./$types";

  export let allWaifu: PageData["allWaifu"];
  let selectedWaifu = 0;
  $: {
    const waifu = Number($page.url.searchParams.get("waifu"));
    selectedWaifu =
      isNaN(waifu) || waifu < 0 || waifu >= allWaifu.length ? 0 : waifu;
  }

  $: currentWaifu = allWaifu[selectedWaifu];

  export let primaryLanguage: string;

  function getMonth(date: Date) {
    return date.toLocaleString(primaryLanguage, {
      month: "long",
      year: "numeric",
    });
  }
</script>

<div class="flex items-start justify-evenly py-16">
  <Phone
    class="-rotate-3"
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
        title: "SIMPING PERIOD",
        primaryField: currentWaifu.simpIntervals
          .map(
            ({ begin, end, days, versionBegin, versionEnd }) =>
              `${begin.toLocaleDateString(
                primaryLanguage,
              )} - ${end.toLocaleDateString(primaryLanguage)} (${days} days)${
                versionBegin && versionEnd
                  ? ` v${versionBegin} - v${versionEnd}`
                  : ""
              }`,
          )
          .join("\n"),
      },
      {
        title: "CREATED BY",
        primaryField: currentWaifu.createdBy.name,
      },
      {
        title: "NOTE",
        primaryField: currentWaifu.note || "-",
      },
    ]}
  />

  <div
    class="flex max-w-[40vw] flex-col items-center gap-4 self-stretch rounded-3xl border-8 border-purple-300 bg-white px-4 py-8"
  >
    <h2
      class="bg-gradient-to-br from-red-500 to-purple-500 bg-clip-text text-center text-5xl font-extrabold text-transparent"
    >
      Past Waifu History
    </h2>

    <p class="text-center text-xl">
      "Waifu Bot" is Discord Bot that can change it's profile and theme such as
      color according to waifu we currently simp. Here are our past waifus.
    </p>

    {#each allWaifu as waifu, index}
      <a
        class="w-4/5"
        href="?waifu={index}#past-waifu"
        on:click|preventDefault={() => {
          goto(`?waifu=${index}`, { replaceState: true, noScroll: true });
        }}
      >
        <button
          class={twMerge(
            "w-full rounded-xl border-4 border-pink-300 bg-pink-100 px-4 py-2 transition-colors",
            index !== selectedWaifu && "hover:bg-pink-200",
            index === selectedWaifu && "cursor-not-allowed border-green-300",
          )}
        >
          <p class="text-xl font-bold">
            {waifu.nameJa}
            {#if waifu.nameEn && waifu.nameEn !== waifu.nameJa}
              ({waifu.nameEn})
            {/if}
          </p>
          {#each waifu.simpIntervals as simp}
            <p>
              {getMonth(simp.begin)} - {getMonth(simp.end)}
              {#if simp.versionBegin && simp.versionEnd}
                (v{simp.versionBegin} - v{simp.versionEnd})
              {/if}
            </p>
          {/each}
        </button>
      </a>
    {/each}
  </div>
</div>

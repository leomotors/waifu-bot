<script lang="ts">
  import ArrowRepeat from "svelte-bootstrap-icons/lib/ArrowRepeat.svelte";
  import HeartFill from "svelte-bootstrap-icons/lib/HeartFill.svelte";
  import PencilSquare from "svelte-bootstrap-icons/lib/PencilSquare.svelte";
  import PersonFillAdd from "svelte-bootstrap-icons/lib/PersonFillAdd.svelte";

  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import Phone from "$lib/components/Phone.svelte";

  import { twMerge } from "tailwind-merge";

  import type { PageData } from "./$types";

  export let data: PageData;

  $: ({
    allWaifu,
    config: { currentWaifuId },
    primaryLanguage,
  } = data);

  $: selectedWaifu = currentWaifuId;
  $: {
    const waifu = Number($page.url.searchParams.get("waifu"));
    selectedWaifu =
      allWaifu.find((wf) => wf.id === waifu) === undefined
        ? currentWaifuId
        : waifu;
  }

  $: currentWaifu = allWaifu.find((waifu) => waifu.id === selectedWaifu)!;

  function getMonth(date: Date) {
    return date.toLocaleString(primaryLanguage, {
      month: "long",
      year: "numeric",
    });
  }
</script>

<main class="flex flex-col items-center gap-4">
  <h1 class="text-4xl font-extrabold">Waifu Manage</h1>

  <a href="/admin/waifu/edit?id=create" class="mb-8 mt-4">
    <button
      class="flex items-center justify-center gap-2 rounded-lg bg-sky-200 p-2"
    >
      <PersonFillAdd class="h-6 w-6" />
      <p>Create Waifu</p>
    </button>
  </a>

  <section class="flex justify-evenly gap-4">
    <div class="flex flex-col gap-4 p-4">
      {#each allWaifu as waifu}
        {@const index = waifu.id}
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
            {#if waifu.simpIntervals.length === 0}
              <p>
                Created at {waifu.createdAt.toLocaleDateString(primaryLanguage)}

                {#if currentWaifuId === index}
                  <span>(Current Waifu)</span>
                {/if}
              </p>
            {/if}
          </button>
        </a>
      {/each}
    </div>

    <aside>
      <Phone
        class="rotate-3"
        bannerUrl={currentWaifu.bannerUrl}
        profileUrl={currentWaifu.imageUrl}
        color={currentWaifu.color}
        namePrimary={currentWaifu.nameJa}
        nameSecondary={currentWaifu.nameEn}
        statusText={currentWaifu.footerText}
        fields={[
          {
            title: "SHORT NAME",
            primaryField: currentWaifu.shortNameJa,
            secondaryField: currentWaifu.shortNameEn,
          },
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
                  )} - ${end.toLocaleDateString(
                    primaryLanguage,
                  )} (${days} days)${
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
      >
        <div
          slot="after-content"
          class="admin-button mx-4 mb-4 grid grid-cols-2 gap-4"
        >
          <a href="/admin/waifu/edit?id={selectedWaifu}">
            <button class="w-full bg-amber-100">
              <PencilSquare class="h-6 w-6" />
              <p>Edit this Waifu</p>
            </button>
          </a>

          {#if currentWaifuId !== currentWaifu.id}
            <button
              class="bg-pink-100 disabled:bg-slate-100"
              disabled={data.user.role !== "SUPERADMIN"}
              on:click={() =>
                goto(`/admin/waifu/confirm?action=simp&id=${currentWaifu.id}`)}
            >
              <HeartFill class="h-6 w-6" />
              <p>SIMP this Waifu</p>
            </button>
          {:else}
            <button
              class="bg-pink-100 disabled:bg-slate-100"
              disabled={data.user.role !== "SUPERADMIN"}
              on:click={() =>
                goto(
                  `/admin/waifu/confirm?action=resync&id=${currentWaifu.id}`,
                )}
            >
              <ArrowRepeat class="h-6 w-6" />
              <p>Resync to Discord</p>
            </button>
          {/if}
        </div>
      </Phone>
    </aside>
  </section>
</main>

<style lang="scss">
  .admin-button button {
    @apply flex items-center justify-center gap-2 rounded-lg p-2;
  }
</style>

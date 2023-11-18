<script lang="ts">
  import Phone from "$lib/components/Phone.svelte";

  import GearWideConnected from "svelte-bootstrap-icons/lib/GearWideConnected.svelte";
  import BoxArrowLeft from "svelte-bootstrap-icons/lib/BoxArrowLeft.svelte";

  import { isAdmin } from "$lib/authUtils";

  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div
  class="flex w-full flex-col-reverse items-center px-8 py-16 lg:flex-row lg:items-start lg:justify-evenly lg:px-4"
>
  <main class="flex flex-col gap-8 pt-16">
    <h1
      class="select-none bg-gradient-to-br from-purple-400 to-pink-400 bg-clip-text text-6xl font-extrabold text-transparent"
    >
      Welcome to the Internet
    </h1>

    {#if isAdmin(data.user.role)}
      <a href="/admin">
        <button
          class="flex w-fit items-center gap-2 rounded-lg bg-gradient-to-br from-green-400 to-blue-400 px-4 py-2 text-xl font-bold text-black transition-colors hover:text-gray-800"
        >
          <GearWideConnected class="h-6 w-6" />
          <p>Admin Control</p>
        </button>
      </a>
    {/if}

    <button
      class="flex w-fit items-center gap-2 rounded-lg bg-red-500 px-4 py-2 font-bold text-white transition-colors hover:bg-red-600"
    >
      <BoxArrowLeft class="h-6 w-6" />
      <p>Logout (It does not work yet)</p>
    </button>
  </main>

  <Phone
    bannerUrl={data.user.simpingWaifu?.bannerUrl}
    profileUrl={data.user.avatarUrl}
    namePrimary={data.user.name}
    fields={[
      {
        title: "SIMPING",
        primaryField: data.user.simpingWaifu?.nameJa ?? "not simping any",
        secondaryField: data.user.simpingWaifu?.nameEn,
      },
      {
        title: "WAIFU CREATED",
        primaryField: data.user._count.createdWaifus.toString(),
      },
      {
        title: "ROLE",
        primaryField: data.user.role,
      },
    ]}
  />
</div>

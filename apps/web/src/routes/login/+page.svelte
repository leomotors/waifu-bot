<script lang="ts">
  import { page } from "$app/stores";
  import { authFailReason, type AuthFailReason } from "$lib/login";

  $: {
    const ticket = $page.url.searchParams.get("ticket");

    if (ticket && typeof document !== "undefined") {
      const ticketInput = document.getElementById("ticket") as HTMLInputElement;
      ticketInput.value = ticket;
    }
  }

  $: errorCode = $page.url.searchParams.get("error");
  $: errorMsg = errorCode
    ? authFailReason[errorCode as AuthFailReason] || "Unknown Error"
    : null;
</script>

<main
  class="flex h-screen flex-col items-center justify-center gap-8 bg-gray-100"
>
  {#if errorMsg}
    <p class="text-lg font-medium text-red-500">{errorMsg}</p>
  {/if}

  <form
    class="flex w-full max-w-lg flex-col gap-4 rounded-lg bg-white p-6 shadow-md"
    method="POST"
  >
    <div>
      <label class="mb-2 block font-bold text-gray-700" for="ticket">
        Ticket
      </label>
      <input
        class="focus:shadow-outline w-full rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        name="ticket"
        id="ticket"
        type="text"
        placeholder="/login to get your ticket"
        required
      />
    </div>
    <div class="flex items-center justify-between">
      <button
        class="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
        type="submit"
      >
        Login
      </button>
    </div>
  </form>
</main>

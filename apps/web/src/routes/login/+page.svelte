<script lang="ts">
  import { page } from "$app/stores";

  $: {
    const ticket = $page.url.searchParams.get("ticket");

    if (ticket && typeof document !== "undefined") {
      const ticketInput = document.getElementById("ticket") as HTMLInputElement;
      ticketInput.value = ticket;
    }
  }
</script>

<main class="flex h-screen items-center justify-center bg-gray-100">
  <form class="rounded-lg bg-white p-6 shadow-md" method="POST">
    <div class="mb-4">
      <label class="mb-2 block font-bold text-gray-700" for="ticket">
        Ticket
      </label>
      <input
        class="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
        name="ticket"
        id="ticket"
        type="text"
        placeholder="Enter ticket"
      />
    </div>
    <div class="flex items-center justify-between">
      <button
        class="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
        type="submit"
      >
        Submit
      </button>
    </div>
  </form>
</main>

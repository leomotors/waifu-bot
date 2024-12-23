<script lang="ts">
  import type { PageData } from "./$types";

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
  let { action, id, waifuName } = $derived(data);

  const actions = {
    simp: {
      title: "Simping new Waifu",
      message: (waifuName) => `This will change simping waifu to ${waifuName}`,
    },
    resync: {
      title: "Resync data to Discord",
      message: (waifuName) =>
        `This will resync Discord data for current waifu (Should be ${waifuName})`,
    },
  } satisfies Record<
    typeof action,
    { title: string; message: (name: string) => string }
  >;

  let { title, message } = $derived(actions[action]);
</script>

<main class="flex flex-col items-center gap-4">
  <h1 class="text-4xl">{title}</h1>

  <p class="text-xl text-red-500">Warning: Changing username is rate limited</p>

  <p class="text-xl">{message(waifuName)} (ID = {id})</p>

  <form method="POST">
    <input type="hidden" name="id" value={id} />
    <input type="hidden" name="action" value={action} />

    <button
      type="submit"
      class="rounded-lg bg-red-500 p-2 text-white transition-colors hover:bg-red-400"
    >
      Confirm
    </button>
  </form>
</main>

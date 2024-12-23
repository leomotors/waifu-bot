<script lang="ts">
  import { ActivityType } from "discord-api-types/v10";

  import type { PageData } from "./$types";

  interface Props {
    initialValue: PageData["activities"][number];
    index: number;
  }

  let { initialValue, index }: Props = $props();
  let formId = $derived(`activity-${index}`);

  let id = $state(initialValue.id);
  let name = $state(initialValue.name);
  let type = $state(initialValue.type);
  let url = $state(initialValue.url);
  let enabled = $state(initialValue.enabled);

  let mutated = $derived(
    id !== initialValue.id ||
      name !== initialValue.name ||
      type !== initialValue.type ||
      url !== initialValue.url ||
      enabled !== initialValue.enabled,
  );
</script>

<tr
  class="transition-colors {mutated
    ? 'bg-rose-100 hover:bg-rose-200'
    : 'bg-white hover:bg-gray-100'}"
>
  <td>
    <form id={formId} method="POST">
      <input
        type="text"
        name="id"
        required
        bind:value={id}
        form={formId}
        readonly
        class="w-16"
      />
    </form>
  </td>
  <td>
    <input
      type="text"
      name="name"
      required
      bind:value={name}
      form={formId}
      class="input"
    />
  </td>
  <td>
    <select name="type" required bind:value={type} form={formId} class="input">
      {#each Object.keys(ActivityType).filter((x) => isNaN(+x)) as typeName}
        <option
          value={typeName}
          selected={typeName === type}
          disabled={typeName === "Custom"}
        >
          {typeName}
        </option>
      {/each}
    </select>
  </td>
  <td>
    <input name="url" type="url" bind:value={url} form={formId} class="input" />
  </td>
  <td>
    <input
      type="checkbox"
      name="enabled"
      bind:checked={enabled}
      form={formId}
      class="input"
    />
  </td>
  <td>
    <button
      class="rounded-md bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-700"
      form={formId}
      formaction="?/update"
      onclick={(e) => {
        if (!mutated) {
          e.preventDefault();
        }
      }}
    >
      Save
    </button>
    <button
      class="inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      form={formId}
      formaction="?/delete"
    >
      Delete
    </button>
  </td>
</tr>

<style lang="scss">
  td {
    @apply px-4 py-2;
  }

  .input {
    @apply w-full rounded-md border-gray-300;
  }

  input,
  select {
    @apply p-2;
  }
</style>

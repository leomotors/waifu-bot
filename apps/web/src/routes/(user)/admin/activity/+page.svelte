<script lang="ts">
  import { ActivityType } from "discord-api-types/v10";

  import type { ActionData, PageData } from "./$types";
  import ActivityForm from "./ActivityForm.svelte";

  export let data: PageData;
  export let form: ActionData;

  const addFormId = "activity-add";
</script>

<main class="flex-flex col gap-4 px-8 pb-8">
  <h1 class="text-3xl font-bold">Activity Management</h1>

  <p class="text-slate-800">
    You can edit one row at once. Saving one will discard all others
  </p>

  {#if form?.message}
    <p class="mt-8 text-xl text-green-600">{form.message}</p>
  {/if}

  {#if form?.error}
    <p class="mt-8 text-xl text-red-500">{form.error}</p>
  {/if}

  <table class="mt-8 min-w-full divide-y divide-gray-200">
    <thead class="bg-gray-50">
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Type</th>
        <th>URL</th>
        <th>Enabled</th>
        <th>Actions</th>
      </tr>
    </thead>

    <tbody class="divide-y divide-gray-200 bg-white">
      {#each data.activities as activity, index}
        <ActivityForm initialValue={activity} {index} />
      {/each}

      <tr class="border-b border-gray-200 bg-gray-100">
        <td>
          <form id={addFormId} action="?/create" method="POST">
            <img
              class="h-12"
              src="/emu-64.png"
              alt="just a normal peaceful logo"
            />
          </form>
        </td>
        <td>
          <input
            type="text"
            name="name"
            required
            form={addFormId}
            class="input"
          />
        </td>
        <td>
          <select name="type" required form={addFormId} class="input">
            <option value="" selected disabled>Select Type</option>
            {#each Object.keys(ActivityType).filter( (x) => isNaN(+x), ) as typeName}
              <option value={typeName} disabled={typeName === "Custom"}>
                {typeName}
              </option>
            {/each}
          </select>
        </td>
        <td>
          <input type="url" name="url" form={addFormId} class="input" />
        </td>
        <td>
          <input
            type="checkbox"
            name="enabled"
            form={addFormId}
            class="input"
          />
        </td>
        <td>
          <button
            class="rounded-md bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-700"
            type="submit"
            form={addFormId}
          >
            Add Activity
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</main>

<style lang="scss">
  th {
    @apply px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500;
  }

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

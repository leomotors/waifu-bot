<script lang="ts">
  import type { PageData } from "./$types";

  import Phone from "$lib/components/Phone.svelte";

  export let data: PageData;
  $: ({ id, create, waifu } = data);

  $: bannerUrl = waifu?.bannerUrl;
  $: imageUrl = waifu?.imageUrl;
  $: color = waifu?.color;
  $: nameJa = waifu?.nameJa;
  $: nameEn = waifu?.nameEn;
  $: footerText = waifu?.footerText;
  $: sourceJa = waifu?.sourceJa;
  $: sourceEn = waifu?.sourceEn;
  $: note = waifu?.note;

  let imageFile: FileList;
  let bannerFile: FileList;

  $: {
    if (imageFile) {
      const file = imageFile[0];
      const reader = new FileReader();

      reader.onload = () => {
        imageUrl = reader.result as string;
      };

      reader.readAsDataURL(file);
    }

    if (bannerFile) {
      const file = bannerFile[0];
      const reader = new FileReader();

      reader.onload = () => {
        bannerUrl = reader.result as string;
      };

      reader.readAsDataURL(file);
    }
  }
</script>

<main>
  <div class="flex justify-evenly">
    <form id="waifu-form">
      {#if !create}
        <div>
          <label for="id">ID</label>
          <input type="text" id="id" name="id" readonly value={id} disabled />
        </div>
      {/if}

      <div>
        <label for="nameJa">Name (日本語)</label>
        <input
          type="text"
          id="nameJa"
          name="nameJa"
          bind:value={nameJa}
          required
        />
      </div>
      <div>
        <label for="nameEn">Name (English)</label>
        <input type="text" id="nameEn" name="nameEn" bind:value={nameEn} />
      </div>

      <div>
        <label for="sourceJa">Source (日本語)</label>
        <input
          type="text"
          id="sourceJa"
          name="sourceJa"
          bind:value={sourceJa}
          required
        />
      </div>
      <div>
        <label for="sourceEn">Source (English)</label>
        <input
          type="text"
          id="sourceEn"
          name="sourceEn"
          bind:value={sourceEn}
        />
      </div>

      <div>
        <label for="footerText">Footer Text</label>
        <input
          type="text"
          id="footerText"
          name="footerText"
          bind:value={footerText}
        />
      </div>
      <div>
        <label for="note">Note</label>
        <input type="text" id="note" name="note" bind:value={note} />
      </div>

      <div>
        <label for="imageUrl">Profile Image</label>
        <input
          type="file"
          id="imageUrl"
          name="imageUrl"
          accept="image/jpeg,image/png,image/webp"
          bind:files={imageFile}
          required
        />
        <p>Image must be 1:1 (I don't check, you do it yourself)</p>
      </div>
      <div>
        <label for="bannerUrl">Banner Image</label>
        <input
          type="file"
          id="bannerUrl"
          name="bannerUrl"
          accept="image/jpeg,image/png,image/webp"
          bind:files={bannerFile}
          required
        />
        <p>Image must be ∈ [16:9, 25.5:9] (Again, check it yourself)</p>
      </div>

      <div class="flex items-center justify-between">
        <button
          type="submit"
          class="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
        >
          Save
        </button>
      </div>
    </form>

    <aside>
      <Phone
        class="rotate-3"
        {bannerUrl}
        profileUrl={imageUrl || ""}
        {color}
        namePrimary={nameJa || ""}
        nameSecondary={nameEn}
        statusText={footerText}
        fields={[
          {
            title: "SOURCE",
            primaryField: sourceJa || "",
            secondaryField: sourceEn,
          },
          {
            title: "NOTE",
            primaryField: note || "-",
          },
        ]}
      />
    </aside>
  </div>
</main>

<style lang="scss">
  form > div {
    @apply mb-4;

    & > label {
      @apply mb-2 block font-bold text-gray-700;

      &:has(+ input:required) {
        &::after {
          content: "*";
          @apply text-red-500;
        }
      }
    }

    & > input {
      @apply w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none disabled:bg-gray-200;
    }

    & > p {
      &::before {
        content: "* ";
        @apply text-blue-500;
      }

      @apply text-sm text-gray-500;
    }
  }
</style>

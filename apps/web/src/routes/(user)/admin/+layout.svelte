<div class="flex min-h-screen flex-col gap-8">
  <!-- Header -->
  <header class="py-4 shadow-lg shadow-slate-100">
    <div class="container mx-auto flex items-center justify-between px-4">
      <!-- Left -->
      <div class="flex items-center gap-4">
        <a href="/home" class="text-lg">Home</a>

        <p class="select-none text-gray-500">&gt;</p>

        <a href="/admin">
          <h1 class="text-2xl font-bold">Admin Panel</h1>
        </a>
      </div>

      <!-- Right -->
      <button class="rounded-md bg-gray-200 px-4 py-2 hover:bg-gray-300">
        Logout
      </button>
    </div>
  </header>

  <slot />
</div>

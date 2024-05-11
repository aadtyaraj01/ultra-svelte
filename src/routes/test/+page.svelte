<script lang="ts">
    import { LocalStorage } from "$lib/storageRune/index.svelte";

    let count = new LocalStorage('count', 0);
</script>

<div class="flex flex-col gap-12 items-center">
    <h1 class="text-5xl text-center">
        Testing here for backend.
    </h1>
    <button type="button" class="btn-primary btn" onclick={() => count.value++}>
        Count: {count.value}
    </button>
</div>
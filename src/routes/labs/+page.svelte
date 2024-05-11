<script lang="ts">
    import type { ActionData } from "./$types";
    let {form}: {form: ActionData} = $props();
</script>

<div class="flex flex-col justify-evenly gap-5">
    <form method="post" action="">
        <input type="text" name="poke-name" id="poke-name" class="form-input px-4 py-3 rounded-md shadow-md" />
        <button class="btn btn-secondary" type="submit">Submit</button>
    </form>

    <div class="api-results prose">
        <pre>{JSON.stringify(form)}</pre>
    </div>

    {#if form && form.success}
        <h1 class="text-3xl text-primary">{form.name}</h1>
    {/if}
</div>
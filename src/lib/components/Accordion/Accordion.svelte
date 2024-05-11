<script lang="ts">
    import type { Snippet } from 'svelte';

  let { content }: {content: Snippet} = $props();
</script>

{#snippet title(titleContent)}
  <h3 class="text-xl">{titleContent}</h3>
{/snippet}

{@render title("peeps")}

<h2 class="text-3xl text-red-400">
  {@render content()}
</h2>
<!--
  <script lang="ts">
    import type { Snippet } from "svelte";

  let {
    colapse = false,
    title,
    content,
    }:{
      colapse: boolean;
      title: Snippet;
      content: Snippet;
    } = $props();
    let count = 0;
    function generateUniqueId() {
      return `accordion-item-${count++}`;
    }

    let contentId = generateUniqueId();
</script>
<h3 class="text-xl text-red-600">{colapse}</h3>
<div class="accordion">
  {@render title()}
  {@render content()}
</div>

-->
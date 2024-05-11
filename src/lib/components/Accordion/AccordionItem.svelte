<!--
<script lang="ts">
    import { ChevronUp } from "lucide-svelte";
    import type { Snippet } from "svelte";
    import {slide} from 'svelte/transition';

    let {
        open = false,
        title,
        content
    }:{
        open: Boolean;
        title: Snippet;
        content: Snippet;
    } = $props();

    function toggleOpen ():void {
        open = !open;
    }
    function generateUniqueId() {
        const timestamp = new Date().getTime().toString(16); // Convert current timestamp to hexadecimal
        const randomNum = Math.floor(Math.random() * 10000).toString(16); // Generate random number and convert to hexadecimal
        return `${timestamp}${randomNum}`;
    }

// Example usage:
    let contentId = generateUniqueId();
</script>
<div class="accordion-item">
    <button
        class="accordion-toggle"
        onclick={toggleOpen}
        aria-expanded={open ? true : false}
        aria-controls={contentId}
    >
        <div class="accordion-title flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
            {@render title()}
            <ChevronUp class={`transition-transform duration-200 ease-in-out ${!open && 'rotate-180'}`}/>
        </div>
    </button>

    {#if open}
        <div
            class="accordion-content"
            id={contentId}
            transition:slide
            role="region"
        >
            {@render content()}
        </div>
    {/if}
</div>

-->
<script lang="ts">
    import { Accordion, AccordionItem } from '@skeletonlabs/skeleton-svelte';
    import Club from 'lucide-svelte/icons/club';
    import Diamond from 'lucide-svelte/icons/diamond';
    import Heart from 'lucide-svelte/icons/heart';
    import Spade from 'lucide-svelte/icons/spade';

    const lorem =
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit esse nisi eligendi fuga! Quas nisi repellat adipisci animi repellendus incidunt laborum sunt qui nesciunt, ducimus saepe sapiente sed ut labore.';

    // Value may optionally implement a $state rune for programmatic use cases.
    const value = $state(['club']);
</script>

<Accordion value={value}>
    <AccordionItem id="club">
        <!-- Control -->
        {#snippet controlLead()}<Club size={24} />{/snippet}
        {#snippet control()}Club{/snippet}
        <!-- Panel -->
        {#snippet panel()}{lorem}{/snippet}
    </AccordionItem>
    <hr class="hr" />
    <AccordionItem id="diamond">
        {#snippet controlLead()}<Diamond size={24} />{/snippet}
        {#snippet control()}Diamond{/snippet}
        {#snippet panel()}{lorem}{/snippet}
    </AccordionItem>
    <hr class="hr" />
    <AccordionItem id="heart" disabled>
        {#snippet controlLead()}<Heart size={24} />{/snippet}
        {#snippet control()}Heart (disabled){/snippet}
        {#snippet panel()}{lorem}{/snippet}
    </AccordionItem>
    <hr class="hr" />
    <AccordionItem id="spade">
        {#snippet controlLead()}<Spade size={24} />{/snippet}
        {#snippet control()}Spade{/snippet}
        {#snippet panel()}{lorem}{/snippet}
    </AccordionItem>
</Accordion>
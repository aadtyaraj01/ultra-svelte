<script>
    import {Carousel, CarouselItem} from "$lib/components/Carousel";
</script>

<h1>Carousel</h1>

<Carousel>
    {#each new Array(5) as _}
    <CarouselItem points={['what', 'when']}>
        {#snippet title()}
            <h3 class="text-red-500 text-4xl">Hello Snippet</h3>
        {/snippet}
        {#snippet image()}
            <img src="https://images.pexels.com/photos/21937096/pexels-photo-21937096.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="">
        {/snippet}
    </CarouselItem>
    {/each}
</Carousel>
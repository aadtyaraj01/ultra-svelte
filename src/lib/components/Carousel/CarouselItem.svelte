<script>
     //import { steps } from '$lib/data';
    
    let { title, image, points } = $props();
</script>

    <!-- Slides -->
        <li class="swiper-slide">
            <!-- <h3 class="mb-4 text-2xl md:text-4xl">{title}</h3> -->
            {@render title()}
            <div
                class="grid grid-cols-1 grid-rows-2 items-center sm:grid-cols-2 sm:grid-rows-1 sm:items-stretch sm:gap-4"
            >
                <div
                    class="carousel-image aspect-video max-h-[300px] overflow-hidden md:aspect-square"
                >
                    <!-- <img src={image} class="object-cover object-left-top" alt="what is this" /> -->
                    {@render image()}
                </div>
                <ul class="list-disc">
                    {#each points as point}
                        <li class="">{point}</li>
                    {/each}
                </ul>
            </div>
        </li>

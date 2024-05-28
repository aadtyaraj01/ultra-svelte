<script>
    //@ts-nocheck
	// core version + navigation, pagination modules:
	import Swiper from 'swiper';
	import { EffectCoverflow, Pagination } from 'swiper/modules';
	// import Swiper and modules styles
	import 'swiper/css';
	import 'swiper/css/pagination';
	import 'swiper/css/effect-flip';

    let {children} = $props();

	let swiper;
	// init Swiper:
	const sliderAction = (el) => {
		swiper = new Swiper('.swiper', {
			slidesPerView: 1,
			spaceBetween: 100,
			// configure Swiper to use modules
			modules: [Pagination, EffectCoverflow],
			// Optional parameters
			direction: 'horizontal',
			centeredSlides: true,
			loop: false,

			// If we need pagination
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			},

			// Navigation arrows

			// And if we need scrollbar
			scrollbar: {
				el: '.swiper-scrollbar',
				enabled: true
			},
			effect: 'coverflow',

			coverflowEffect: {
				rotate: 10,
				slideShadows: false,
				depth: 25
			},
			breakpoints: {
				100: {
					slidesPerView: 2,
					spaceBetween: 100
				}
			},
			resizeObserver: true
		});
		return {
			destroy() {
				swiper && swiper.destroy();
			}
		};
	};
</script>

<!-- Slider main container -->
<div class="swiper relative select-none" use:sliderAction>
	<!-- Additional required wrapper -->
    <div class="swiper-wrapper px-2 py-1 md:p-0">

        {@render children()}
    </div>
	
	<!-- If we need pagination -->
	<div class="swiper-pagination hidden md:block"></div>

	<!-- If we need navigation buttons -->
	<div class="button-container hidden md:block">
		<button
			class="swiper-button-prev btn btn-icon btn-icon-sm bg-slate-500 shadow-md"
			onclick={() => swiper.slidePrev()}>👈</button
		>
		<button
			class="swiper-button-next btn btn-icon btn-icon-sm bg-slate-500 shadow-md"
			onclick={() => swiper.slideNext()}>👉</button
		>
	</div>
</div>

<style>
	.button-container {
		margin-left: auto;
		margin-right: auto;
	}

	.swiper-pagination {
		position: relative;
	}
	@media screen and (min-width: 768px) {
		.button-container {
			position: absolute;
			bottom: 30px;
			right: 50%;
			transform: translateX(100%);
			width: 100px;
			z-index: 10;
		}
	}
</style>

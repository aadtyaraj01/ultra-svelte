<script>
  import "../app.css";
  import Navbar from '$lib/components/Navbar.svelte'
</script>

<Navbar />
<div class="grid h-screen w-full place-items-center">
  <slot />
</div>
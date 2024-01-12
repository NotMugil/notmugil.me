<script>
	import Hero from '$lib/components/hero.svelte';
	import Featured from '$lib/components/featured.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Navbar from '$lib/components/navbar.svelte';
</script>

<div class="flex flex-col max-w-screen-md justify-around mx-auto">
	<Navbar />
</div>

<Hero />
<Featured />
<Footer />

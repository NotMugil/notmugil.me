<script>
	import '../../app.css';
	import Footer from '$lib/components/footer.svelte';
	import Back from '$lib/components/back.svelte';
</script>

<Back />
<div class="flex flex-col max-w-screen-lg justify-around mx-auto font-inter overflow-x-hidden">
	<slot />
</div>
<div class="invisible md:visible border-t-2 border-white border-opacity-10 mt-8">
	<Footer />
</div>

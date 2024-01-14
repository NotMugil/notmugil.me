<script>
	import '../../app.css';
	import Navbar from '$lib/components/navbar.svelte';
</script>

<div class="font-satoshi"><Navbar /></div>
<div class="flex flex-col max-w-screen-md justify-center mx-auto font-inter">
	<slot />
</div>

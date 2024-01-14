<script>
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
</script>

<div class="font-satoshi"><Navbar /></div>
<div class="flex flex-col max-w-screen-md justify-around mx-auto font-inter overflow-x-hidden">
	<slot />
</div>

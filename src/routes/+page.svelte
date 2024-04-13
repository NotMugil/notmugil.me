<svelte:head>
   <title>NotMugil — Designer and Developer</title>
   <link rel="icon" type="image/png" href="https://res.cloudinary.com/dimb2aadu/image/upload/v1713023776/favicon_lm3iyw.svg">
</svelte:head>
<script>
	import Hero from '$lib/components/hero.svelte';
	import Featured from '$lib/components/featured.svelte';
	import Layout from './layout.svelte';
</script>

<Layout>
	<Hero />
	<div class="mt-16">
		<Featured />
	</div>
</Layout>


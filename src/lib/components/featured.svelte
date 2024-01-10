<script lang="ts">
	import { work } from '$lib/data/works';
</script>

<h1 class="mx-4 md:mx-2 font-satoshi font-semibold opacity-80 text-md md:text-lg mt-6">
	Featured projects
</h1>

<div class="mx-4 md:mx-8 lg:mx-0 mt-2 md:mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
	{#each work as work}
		<div
			class="flex flex-col justify-between rounded-lg min-w-full bg-[#fefffe] h-full min-h-64 md:min-h-72 w-8/12 backdrop-blur-lg border border-gray-200 border-opacity-60"
		>
			<div><p class="mx-4 py-3 text-sm font-medium font-inter text-[#666]">{work.title}</p></div>
			<div class="w-64 md:w-72 lg:w-80 h-48 overflow-hidden self-center">
				<img
					src={work.cover}
					alt={work.title}
					class="object-cover w-full h-full rounded-lg shadow-sm"
					loading="lazy"
				/>
			</div>
			<div><p class="mx-4 py-3 text-sm font-regular text-[#666]">{work.description}</p></div>
		</div>
	{/each}
</div>

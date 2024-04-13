<script lang="ts">
	import { work } from '$lib/data/works';
</script>

<!-- <h1 class="mx-4 md:mx-2 font-satoshi font-semibold opacity-80 text-md md:text-lg mt-6">
	Featured projects
</h1> -->

<div class="mx-4 md:mx-8 lg:mx-0 mt-2 md:mt-4 grid grid-cols-1 gap-8" data-scroll-container>
	{#each work as work}
		<!-- <a href={work.link} target="_blank" class="flex flex-col justify-between rounded-lg min-w-full bg-[#0e0e0e] h-full min-h-64 md:min-h-72 w-8/12 backdrop-blur-lg border border-white border-opacity-10 lg:hover:drop-shadow lg:duration-200 lg:ease-linear">
			<div>
				<div>
					<p class="mx-4 py-3 text-lg font-medium font-inter text-[#f2f2f2]">{work.title}</p>
				</div>
				<div class="w-64 md:w-72 lg:w-80 h-48 overflow-hidden self-center flex">
					<img
						src={work.cover}
						alt={work.title}
						class="object-cover w-full h-full rounded-lg shadow-sm flex self-center"
						loading="lazy"
					/>
				</div>
				<div><p class="mx-4 py-3 text-sm font-regular text-[#666]">{work.description}</p></div>
			</div>
		</a> -->
        <div class="mb-4">
			<a href={work.link} data-scroll-section target="_blank" class="flex flex-col relative overflow-hidden border border-white border-opacity-10 rounded-lg p-1 bg-[#1e1e1e]">
				<div class="projectcard-top"></div>
				<div class="flex ml-2 p-4 items-center h-full">
					<div class="text-white">
						<p class="text-md md:text-2xl">{work.title}</p>
						<p class="text-sm md:text-md opacity-50">{work.description}</p>
					</div>
				</div>
				<img class="project-image relative rounded-t-lg z-1 w-10/12 mt-8 self-center transform translate-y-0 transition-all duration-300 hover:-translate-y-2" 
					src={work.cover}
					alt={work.title} 
					loading="lazy"
				>
				<div class="project-card-colour absolute z-0 inset-0 opacity-0"></div>
			</a>
		</div>
	{/each}
</div>



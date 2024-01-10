<script>
	import { books } from '$lib/data/books';
</script>

<div class="mx-auto p-8 md:p-4 lg:p-0">
	<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
		{#each books as book}
			<div
				class="p-4 rounded-lg backdrop-blur-lg border border-gray-200 border-opacity-60 bg-[#fefefe] font-satoshi"
			>
				<div class="w-full h-96 md:h-80 rounded-lg overflow-hidden mb-2">
					<img
						src={book.cover}
						alt={book.title}
						class="object-cover w-full h-full rounded-lg shadow-sm"
						loading="lazy"
					/>
				</div>
				<p class="text-lg font-bold">{book.title}</p>
				<p class="text-sm">{book.author}</p>
			</div>
		{/each}
	</div>
</div>

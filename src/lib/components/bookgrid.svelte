<script lang="ts">
	import { books } from '$lib/data/books';
	import { onMount } from 'svelte';

	let selectedLabel: string = 'all';

	let filteredBooks = books;

	function updateFilteredBooks() {
		if (selectedLabel === 'all') {
			filteredBooks = books;
		} else {
			filteredBooks = books.filter((book) => book.label === selectedLabel);
		}
	}

	onMount(updateFilteredBooks);

	function getLabelColor(label: string) {
		return label === 'read'
			? 'bg-read'
			: label === 'reading'
				? 'bg-reading'
				: label === 'to-read'
					? 'bg-toread'
					: '';
	}

	function getLabelBorderColor(label: string) {
		return label === 'read'
			? 'border-[#386e54]'
			: label === 'reading'
				? 'border-[#b2b34d]'
				: label === 'to-read'
					? 'border-[#593a7c]'
					: '';
	}
</script>

<!-- Filter buttons -->
<div class="flex mb-1 md:mb-4 mx-4 md:mx-8 lg:mx-0 gap-4 text-xsmall md:text-base">
	<button
		class={`border border-white border-opacity-10 p-1 px-2 md:p-2 md:px-4 rounded ${
			selectedLabel === 'all' ? 'bg-[#1e1e1e]' : ''
		}`}
		on:click={() => {
			selectedLabel = 'all';
			updateFilteredBooks();
		}}>All</button
	>

	<button
		class={`border border-white border-opacity-10 p-1 px-2 md:p-2 md:px-4 rounded ${
			selectedLabel === 'read' ? 'bg-[#1e1e1e]' : ''
		}`}
		on:click={() => {
			selectedLabel = 'read';
			updateFilteredBooks();
		}}>Read</button
	>

	<button
		class={`border border-white border-opacity-10 p-1 px-2 md:p-2 md:px-4 rounded ${
			selectedLabel === 'reading' ? 'bg-[#1e1e1e]' : ''
		}`}
		on:click={() => {
			selectedLabel = 'reading';
			updateFilteredBooks();
		}}>Reading</button
	>

	<button
		class={`border border-white border-opacity-10 p-1 px-2 md:p-2 md:px-4 rounded ${
			selectedLabel === 'to-read' ? 'bg-[#1e1e1e]' : ''
		}`}
		on:click={() => {
			selectedLabel = 'to-read';
			updateFilteredBooks();
		}}>To Read</button
	>
</div>

<div class="mx-auto p-4 md:p-8 lg:p-0">
	<div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-2">
		{#each filteredBooks as book}
			<a
				href={book.link}
				target="_blank"
				class="p-4 rounded-lg backdrop-blur-lg border border-white border-opacity-10 bg-[#0e0e0e] lg:hover:bg-[#1e1e1e] lg:scale-95 lg:hover:drop-shadow lg:hover:scale-100 lg:hover:rotate-1 lg:duration-200 lg:ease-linear font-satoshi"
			>
				<div>
					<div class="relative w-full aspect-w-2 aspect-h-3 rounded-lg overflow-hidden mb-2">
						<img
							src={book.cover}
							alt={book.title}
							class="object-cover w-full h-full rounded-lg shadow-sm"
							loading="lazy"
						/>
						<p
							class="label absolute left-2 bottom-2 z-100 {getLabelColor(
								book.label
							)} {getLabelBorderColor(
								book.label
							)} border-b-4 border-l-2 rounded-md uppercase font-satoshi text-small mt-1 font-medium px-2 py-1 min-w-min max-w-max"
						>
							{book.label}
						</p>
					</div>
					<p class="mr-2 text-small capitalize font-medium opacity-50">{book.genre}</p>
					<p class="text-lg font-bold">{book.title}</p>
					<p class="text-sm opacity-60">{book.author}</p>
				</div>
			</a>
		{/each}
	</div>
</div>

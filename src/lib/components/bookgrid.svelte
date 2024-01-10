<script lang="ts">
	import { books } from '$lib/data/books';
	import { onMount, afterUpdate } from 'svelte';

	let selectedLabel: string = 'all';

	let filteredBooks = books;

	function updateFilteredBooks() {
	if (selectedLabel === 'all') {
		filteredBooks = books;
	} else {
		filteredBooks = books.filter(book => book.label === selectedLabel);
	}
	}

	onMount(afterUpdate(updateFilteredBooks));

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
		? 'border-[#983434]'
		: '';
  	}

</script>

<!-- Filter buttons -->
<div class="flex mb-4 gap-4">
	<button
	  class={`border-2 p-2 px-4 rounded ${selectedLabel === 'all' ? 'bg-gray-100' : ''}`}
	  on:click={() => { selectedLabel = 'all'; updateFilteredBooks(); }}
	>All</button>
  
	<button
	  class={`border-2 p-2 px-4 rounded ${selectedLabel === 'read' ? 'bg-gray-100' : ''}`}
	  on:click={() => { selectedLabel = 'read'; updateFilteredBooks(); }}
	>Read</button>
  
	<button
	  class={`border-2 p-2 px-4 rounded ${selectedLabel === 'reading' ? 'bg-gray-100' : ''}`}
	  on:click={() => { selectedLabel = 'reading'; updateFilteredBooks(); }}
	>Reading</button>
  
	<button
	  class={`border-2 p-2 px-4 rounded ${selectedLabel === 'to-read' ? 'bg-gray-100' : ''}`}
	  on:click={() => { selectedLabel = 'to-read'; updateFilteredBooks(); }}
	>To Read</button>
  </div>
  
  <div class="mx-auto p-8 md:p-4 lg:p-0">
	<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
	  {#each filteredBooks as book}
			<div
				class="p-4 rounded-lg backdrop-blur-lg border border-gray-200 border-opacity-60 bg-[#fefefe] font-satoshi"
			>
				<div class="relative w-full h-96 md:h-80 rounded-lg overflow-hidden mb-2">
					<img
						src={book.cover}
						alt={book.title}
						class="object-cover w-full h-full rounded-lg shadow-sm"
						loading="lazy"
					/>
					<p class="label absolute left-2 bottom-2 z-100 {getLabelColor(book.label)} {getLabelBorderColor(book.label)} border-b-4 border-l-2 rounded-md uppercase font-satoshi text-small mt-1 font-medium px-2 py-1 min-w-min max-w-max">{book.label}</p>
				</div>
				<p class="mr-2 text-small capitalize font-medium opacity-50">{book.genre}</p>
				<p class="text-lg font-bold">{book.title}</p>
				<p class="text-sm">{book.author}</p>
			</div>
		{/each}
	</div>
</div>
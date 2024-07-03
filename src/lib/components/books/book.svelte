<script>
// @ts-nocheck

    // @ts-ignore
    import { onMount } from 'svelte';
    import books from '../../data/books';
  
    const genres = [...new Set(books.flatMap(book => book.genres))];
    /**
	 * @type {any[]}
	 */
    let selectedGenres = [];
  
    // Filter books based on selected genres
    $: filteredBooks = selectedGenres.length === 0 ? books : books.filter(book => selectedGenres.every(genre => book.genres.includes(genre)));
  
    // Handle genre selection
    /**
	 * @param {string} genre
	 */
    function handleGenreToggle(genre) {
      if (selectedGenres.includes(genre)) {
        selectedGenres = selectedGenres.filter(g => g !== genre);
      } else {
        selectedGenres = [...selectedGenres, genre];
      }
    }
  
    // Clear all filters
    function clearFilters() {
      selectedGenres = [];
    }
  
    // Functions to show and hide preview image
    let previewUrl = '';
    let previewVisible = false;
    /**
	 * @type {{ rating: any; } | null}
	 */
    let currentBook = null; // To store the current book being hovered over
  
    /**
	 * @param {MouseEvent & { currentTarget: EventTarget & HTMLDivElement; }} event
	 * @param {{ title: string; author: string; cover: string; label: string; genres: string[]; rating: string; link: string; } | { title: string; author: string; cover: string; label: string; genres: string[]; link: string; rating?: undefined; }} book
	 */
    // @ts-ignore
    function showPreview(event, book) {
      previewUrl = book.cover;
      previewVisible = true;
      // @ts-ignore
      currentBook = book;
    }
  
    function hidePreview() {
      previewVisible = false;
      currentBook = null;
    }
  </script>
  
  <div class="container mx-auto py-8">
    <div class="mb-4">
      <div class="flex flex-wrap gap-2">
        {#each genres as genre}
          <button
            class="px-2 py-1 text-small font-satoshi font-semibold rounded bg-dark text-primary focus:outline-none"
            class:selected={selectedGenres.includes(genre)}
            on:click={() => handleGenreToggle(genre)}
          >
            {genre}
          </button>
        {/each}
      </div>
    </div>
  
    <button
      class="px-2 py-1 text-small rounded bg-error-fg text-primary hover:bg-error-fg hover:bg-opacity-60 hover:text-opacity-60"
      on:click={clearFilters}
      disabled={selectedGenres.length === 0}
    >
      Clear all filters
    </button>
  
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
      {#each filteredBooks as book}
        <a href={book.link} target="_blank" rel="noopener noreferrer">
          <div
            class="max-w-xs lg:min-w-lg flex flex-row lg:flex-col rounded overflow-hidden shadow-lg bg-dark font-satoshi h-full p-2 relative"
          >
          <!-- svelte-ignore a11y-no-static-element-interactions -->
          <div on:mouseenter={(event) => showPreview(event, book)} on:mouseleave={hidePreview}>
            <img
            class="w-16 h-24 lg:w-44 lg:justify-center lg:h-64 mx-3 my-2 rounded-sm lg:mx-auto"
            src={book.cover}
            alt={book.title}
            >
          </div>
        
            <div class="px-3 py-2 flex flex-col justify-between">
              <div class="mb-1">
                <p class="text-primary font-semibold">{book.title}</p>
                <p class="text-primary font-regular text-small mb-1 text-opacity-80">by {book.author}</p>
              </div>
              <div class="text-xsmall flex flex-wrap gap-1">
                {#each book.genres as genre}
                  <span class="bg-[#272727] px-1 py-0.5 text-primary text-opacity-60 text-xsmall rounded-sm">{genre}</span>
                {/each}
              </div>
            </div>
          </div>
        </a>
      {/each}
    </div>
  
    <!-- Large preview image overlay -->
    <div
      class="fixed inset-0 z-50 flex flex-col items-center bg-dark bg-opacity-80 backdrop-blur justify-center pointer-events-none opacity-0 transition-opacity delay-200 ease-in-out duration-500"
      class:opacity-100={previewVisible}
    >
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img src={previewUrl} alt="Preview Image" class="max-w-60 rounded">
      {#if currentBook}
        <p class="text-white font-satoshi text-p mt-4">{currentBook.rating}</p>
        <blockquote class="text-white font-satoshi m-2">{currentBook.review}</blockquote>
      {/if}
    </div>
  </div>
  
  <style>
    .selected {
      @apply bg-accent text-primary;
    }
  
    .book-card:hover {
      z-index: 10; 
      transform: scale(1.05); 
    }
  </style>
  
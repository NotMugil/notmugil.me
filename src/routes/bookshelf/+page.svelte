<svelte:head>
   <title>bookshelf</title>
   <link rel="icon" type="image/png" href="https://avatars.githubusercontent.com/u/86902446?s=96&v=4">
</svelte:head>
<script>
    import Book from "$lib/components/books/book.svelte";
</script>

<div class="max-w-screen-lg flex mx-auto">
    <div class="mx-8 w-screen-lg lg:w-full">
        <div class="flex flex-col lg:w-full">
            <p class="text-primary font-secondary text-h3 font-regular mt-4 mb-2 lg:w-full">Bookshelf.</p>
            <p class="text-secondary font-primary text-small font-regular">What I'm reading, what I've read and what I hope to read next. Recommendations are always welcome!</p>
            
            <Book />

        </div>
    </div>
</div>
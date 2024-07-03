<svelte:head>
   <title>bookshelf</title>
   <link rel="icon" type="image/png" href="https://avatars.githubusercontent.com/u/86902446?s=96&v=4">
</svelte:head>
<script>
    import Book from "$lib/components/books/book.svelte";
</script>

<div class="max-w-screen-lg flex mx-auto">
    <div class="mx-8 w-screen-lg">
        <div class="flex flex-col">
            <p class="text-primary text-h3 font-semibold my-4">Bookshelf.</p>
            <p class="text-secondary text-small font-regular">What I'm reading, what I've read and what I hope to read next. Recommendations are always welcome!</p>
            
            <Book />

        </div>
    </div>

</div>
<script>
    import books from '../../data/book/books.js';
</script>

<div class="grid grid-cols-1 md:grid-cols-3 gap-4"> 
    {#each books as { title, author, cover } (title)}
        <div class="p-4 rounded-lg backdrop-blur-lg border border-gray-200 border-opacity-60 bg-[#fefefe] font-satoshi">
            <div class="w-full h-80 md:h-72 rounded-lg overflow-hidden mb-2">
                <img src={cover} alt={title} class="object-cover w-full h-full  rounded-lg shadow-sm" />
            </div>
            <p class="text-lg font-bold">{title}</p>
            <p class="text-sm">{author}</p>
        </div>
    {/each}
</div>
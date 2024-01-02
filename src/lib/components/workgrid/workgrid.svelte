<script>
    import works from '../../data/work/works.js';
</script>

{#each works as { title, description, cover } (title)}
    <div class="flex flex-col justify-between rounded-lg min-w-full bg-[#fefffe] h-full min-h-64 md:min-h-72 w-8/12 backdrop-blur-lg border border-gray-200 border-opacity-60">
        <div><p class="mx-4 py-3 text-sm font-medium font-inter text-[#666]">{title}</p></div>
        <div class="w-64 md:w-72 lg:w-80 h-48 overflow-hidden self-center">
            <img src="{cover}" alt="{title}" class="object-cover w-full h-full rounded-lg shadow-sm" />
        </div>
        <div><p class="mx-4 py-3 text-sm font-regular text-[#666]">{description}</p></div>
    </div>
{/each}
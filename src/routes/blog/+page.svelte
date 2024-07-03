<script lang="ts">

    export let data
    
    function formatDate(dateString: string) {
        const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-UK', options);
    }

</script>
<svelte:head>
   <title>blog</title>
   <link rel="icon" type="image/png" href="https://avatars.githubusercontent.com/u/86902446?s=96&v=4">
</svelte:head>

<div class="max-w-screen-lg lg:w-full flex mx-auto">
    <div class="mx-8 w-screen-lg lg:w-full">
        <div class="flex flex-col lg:w-full font-primary">
            <p class="text-primary text-h3 font-semibold my-4">Blogs.</p>
            <p class="text-secondary text-small font-regular">What I'm writing, what I've read and what I hope to read next. Recommendations are always welcome!</p>
            <section class="mt-8">
                <ul>
                    {#each data.posts as post}
                    <a href={`blog/${post.slug}`}>

                        <li class="border-l border-secondary border-opacity-50 p-4 my-4 w-full flex flex-col font-primary hover:bg-dark">
                          <div class="flex justify-between">
                                <h2 class="text-h5 lg:text-h4 mb-2 font-semibold capitalize">{post.title}</h2>
                            <p class="text-[0.6rem] text-center align-center my-auto">{formatDate(post.date)}</p>
                          </div>
                            <p class="text-[0.937rem] text-secondary">{post.description}</p>
                        </li>
                    </a>
                    {/each}
                </ul>
            </section>
        </div>
    </div>
</div>
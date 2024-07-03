<script lang="ts">
    export let data;

    function formatDate(dateString: string) {
        const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-UK', options);
    }

</script>

<svelte:head>
    <title>{data.meta.title} - {data.meta.author}</title>
    <link rel="icon" type="image/png" href="https://avatars.githubusercontent.com/u/86902446?s=96&v=4">
    <meta property="og:type" content="website" />
    <meta property="og:title" content={data.meta.title} />
    <meta property="og:description" content={data.meta.description} />
</svelte:head>



<div class="max-w-screen-lg lg:w-full flex mx-auto">
    <div class="mx-8 w-screen-lg lg:w-full">
        <div class="flex flex-col lg:w-full">
                        
            <article>
                <hgroup class="font-primary">
                    <h1 class="text-primary text-h3 font-semibold my-4 capitalize">{data.meta.title}</h1>
                    <h2 class="text-secondary text-small font-regular italic border-b w-max pb-4 border-secondary border-opacity-30">Posted on {formatDate(data.meta.date)}</h2>
                </hgroup>
            </article>
            
        </div>
    </div>
</div>
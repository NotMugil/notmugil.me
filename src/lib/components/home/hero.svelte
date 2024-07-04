<script lang="ts">
    import { onMount } from 'svelte';

    let email: string = 'mugilsubramani@gmail.com';
    let alertMessage: string = '';

    function copyEmail() {
        navigator.clipboard.writeText(email)
            .then(() => {
                alertMessage = 'Copied to clipboard';
                setTimeout(() => {
                    alertMessage = '';
                }, 3000);
            })
            .catch((e: Error) => {
                console.error('Failed to copy email: ', e);
                alertMessage = 'Failed to copy email';
                setTimeout(() => {
                    alertMessage = '';
                }, 3000);
            });
    }
</script>

<div class="max-w-screen-lg flex mx-auto my-4 lg:my-6">
    <div class="font-primary lg:px-4 lg:mx-0 mx-4 px-4 py-8 w-full lg:w-screen rounded-3xl backdrop-blur-md lg:h-52 relative">
        <div class="flex flex-col gap-4 lg:w-full">
            <p class="font-secondary text-h3 md:text-h2 lg:text-h2">
                Hello Wanderer! I'm Mugilan, who designs and develops ideas into interfaces. Specialized in
                <span class="bg-dark rounded-lg py-0.5 px-2">Full-Stack</span> development and
                <span class="bg-dark rounded-lg py-0.5 px-2">UI/UX</span> Design.
            </p>
            <div class="flex flex-row items-center gap-2">
                <div class="bg-dark bg-opacity-90 backdrop-blur px-4 py-2 flex items-center flex-row gap-2 rounded-full cursor-pointer">
                    <span class="text-white">
                        <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="15"
                            height="15">
                            <path
                                d="M11 1.5h2.5v12a1 1 0 01-1 1h-10a1 1 0 01-1-1v-12H4M7.5 6v5M5 8.5h5M4.5.5h6v2a1 1 0 01-1 1h-4a1 1 0 01-1-1v-2z"
                                stroke="currentColor"></path>
                        </svg>
                    </span>
                    <span class="font-semibold text-secondary text-xsmall lg:text-p text-white"
                        on:click={copyEmail}>
                        {#if alertMessage === 'Copied to clipboard'}
                        Copied to clipboard
                        {:else}
                        Copy email
                        {/if}
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>

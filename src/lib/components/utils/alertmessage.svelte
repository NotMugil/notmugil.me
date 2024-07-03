<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { onMount, onDestroy } from 'svelte';

    const dispatch = createEventDispatcher();

    export let message = '';
    export let onClose = () => {};
    export let duration = 1000; // 1 second

    let timer:any;

    function closeModal() {
        onClose();
        dispatch('close');
    }

    onMount(() => {
        timer = setTimeout(() => {
            closeModal();
        }, duration);
    });

    onDestroy(() => {
        clearTimeout(timer);
    });
</script>


<div class="fixed left-0 right-0 inset-y-1/4 flex items-center justify-center z-50">
    <div class="bg-dark bg-opacity-80 backdrop-blur-md px-8 py-3 rounded-xl shadow-lg text-center text-white">
        <p class="text-lg">{message}</p>
        <button class="mt-4 px-2 py-1 bg-gray-800 text-white rounded-md hover:bg-gray-700 focus:outline-none" on:click={closeModal}>
            <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4">
                <path d="M7.5 9C5.186 9 3.561 7.848 2.497 6.666a9.368 9.368 0 01-1.449-2.164 5.065 5.065 0 01-.08-.18l-.004-.007v-.001L.5 4.5l-.464.186v.002l.003.004a2.107 2.107 0 00.026.063l.078.173a10.367 10.367 0 001.61 2.406C2.94 8.652 4.814 10 7.5 10V9zm7-4.5a68.887 68.887 0 01-.464-.186l-.003.008-.015.035-.066.145a9.37 9.37 0 01-1.449 2.164C11.44 7.848 9.814 9 7.5 9v1c2.686 0 4.561-1.348 5.747-2.666a10.365 10.365 0 001.61-2.406 6.164 6.164 0 00.104-.236l.002-.004v-.001h.001L14.5 4.5zM8 12V9.5H7V12h1zm-6.646-1.646l2-2-.708-.708-2 2 .708.708zm10.292-2l2 2 .708-.708-2-2-.708.708z" fill="currentColor"></path>
            </svg>
        </button>
    </div>
</div>

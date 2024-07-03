
<script lang="ts">
    import "$lib/app.css"; 
    import Navbar from "$lib/components/navbar/navbar.svelte";
</script>

<div class="justify-center flex flex-col">
    <Navbar />
    <slot></slot>
</div>



<script>
  import "../app.css";
  import Nav from '$lib/components/navbar/navbar.svelte'
  import Footer from '$lib/components/footer/footer.svelte'
</script>

<div class="flex flex-col max-w-screen-md justify-center mx-auto font-inter">
  <Nav/>
  <slot />
  <Footer/>
</div>


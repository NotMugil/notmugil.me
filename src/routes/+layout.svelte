<script>
  import "../app.css";
  import Nav from '$lib/components/navbar/navbar.svelte'
  import Footer from '$lib/components/footer/footer.svelte'
</script>

<Nav/>
<slot />
<Footer/>

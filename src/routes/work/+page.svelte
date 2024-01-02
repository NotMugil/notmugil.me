<script>
	import Workgrid from "$lib/components/workgrid/workgrid.svelte";
</script>
<!----------------------WORK------------------------>
<div class="flex flex-col max-w-screen-md justify-center mx-auto font-inter">

  <!--HERO-->
  <div class="mt-8 md:mt-24 mx-4 md:mx-8 lg:mx-0 font-satoshi">
    <h1 class="text-h3 md:text-h2 lg:text-h1 font-bold ">My Works ✨</h1>
    <h2 class="text-p lg:text-h6 font-medium text-[#666666]">Art, Writing, Design, and Development.</h2>
    <p class="text-small lg:text-p font-medium py-4">I like building things. Here are a few things I've built thus far that I'm pretty pleased with. Most, if not all of them, were built for fun.    </p>
  </div>


  <!--WORKS-->
  <div class="mx-4 md:mx-8 lg:mx-0 mt-2 md:mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
    <Workgrid />
  </div>



</div>
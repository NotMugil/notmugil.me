<script>
	import Workgrid from "$lib/components/workgrid/workgrid.svelte";
</script>

    <!--HEADER   
    <div class="header ">
        <ul class="flex flex-row justify-between m-4">
            <li><p class="font-bold">Mugilan</p></li>
            <li>
                <div class="flex gap-1">

                </div>
            </li>
        </ul>
    </div> -->
  

    <!--HERO-->
    <div class="mt-8 md:mt-24 mx-4 md:mx-8 lg:mx-0 font-satoshi">
      <h1 class="text-h3 md:text-h2 lg:text-h1 font-bold ">Mugilan Subramaniyan ✨</h1>
      <h2 class="text-p lg:text-h6 font-medium text-[#666666]">Web Developer and Designer</h2>
      <p class="text-small lg:text-p font-medium py-4">Hi, my name is Mugilan, I am a web developer and designer from India.  Currently open for freelance collaborations.</p>
    </div>


    <!--WORKS-->
    <h1 class="mx-4 md:mx-2 font-satoshi font-semibold opacity-80 text-md md:text-lg mt-6">Selected Works</h1>
            
    <div class="mx-4 md:mx-8 lg:mx-0 mt-2 md:mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Workgrid />
    </div>

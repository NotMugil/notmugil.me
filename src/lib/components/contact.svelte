<script>
	export let name = '';
	export let email = '';
</script>

<div class="mt-8 md:mt-24 mx-4 md:mx-8 lg:mx-0 font-satoshi">
	<h1 class="text-h3 md:text-h2 lg:text-h1 font-bold">Contact Me</h1>
	<h2 class="text-p lg:text-h6 font-medium text-[#666666]">Let's get in touch</h2>
	<p class="text-small lg:text-p font-medium py-4"></p>
</div>

<form class="max-w-md">
	<div class="mb-4">
		<label for="name" class="block text-gray-600">Name</label>
		<input
			type="text"
			id="name"
			placeholder="yournamehere"
			bind:value={name}
			class="mt-1 p-2 w-full rounded-lg backdrop-blur-lg border border-gray-400 border-opacity-60 bg-[#fefefe] focus:outline-none focus:ring focus:border-gray-700"
		/>
	</div>

	<div class="mb-4">
		<label for="email" class="block text-gray-600">Email</label>
		<input
			type="email"
			id="email"
			placeholder="youremailhere@gmail.com"
			bind:value={email}
			class="mt-1 p-2 w-full rounded-lg backdrop-blur-lg border border-gray-400 border-opacity-60 bg-[#fefefe] focus:outline-none focus:ring focus:border-gray-700"
		/>
	</div>

	<button
		type="submit"
		class="bg-gray-900 text-white py-2 px-4 rounded hover:border-gray-200 focus:outline-none"
	>
		Submit
	</button>
</form>

<div class="mt-8">
	<p class="text-gray-600">Connect with me:</p>
	<div class="flex mt-2">
		<a
			href="https://twitter.com/your-twitter-handle"
			target="_blank"
			rel="noopener noreferrer"
			class="mr-4 text-gray-500 hover:text-gray-700"
		>
			Twitter
		</a>
		<a
			href="https://linkedin.com/in/your-linkedin-profile"
			target="_blank"
			rel="noopener noreferrer"
			class="text-gray-500 hover:text-gray-700"
		>
			LinkedIn
		</a>
	</div>
</div>

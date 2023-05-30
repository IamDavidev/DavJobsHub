<script>
	export let jobDescription
	export let minRequirements
	export let skills
</script>
<div class='py-8 flex flex-col gap-12'>
	<div>
		<h3 class='text-lg xl:text-xl  2xl:text-2xl font-bold'>
			Job Description :
		</h3>
		<p class='py-2 font-light'>
			{jobDescription}
		</p>
	</div>
	{#if minRequirements}
		<div>
			<h3 class='text-lg xl:text-xl  2xl:text-2xl font-bold'>
				Min Requirements :
			</h3>
			<p class='py-2 font-light'>
				{minRequirements}
			</p>
		</div>
	{/if}
	<div>
		<h3 class='text-2xl font-bold'>Requirements Skill : </h3>
		<ul class='flex flex-row flex-wrap gap-4 py-4 justify-center items-center my-4'>
			{#each skills as skill}
				<li class='rounded-2xl'>
							<span
								class='bg-cream  px-12 py-2 rounded-2xl font-base text-black'>
								{skill}
							</span>
				</li>
			{/each}
		</ul>
	</div>
</div>
<script>

	const users = [{
		githubUser: 'midudev'
	}, {
		githubUser: 'IamDavidev'
	}, {
		githubUser: 'undefinded'
	}, {
		githubUser: 'midudev'
	}]


</script>

<div class='mt-12 flex flex-col gap-8'>
	<span class='text-bold tex-white text-2xl opacity-70 text-center'>
		Try with:	
	</span>
	<ul class='flex flex-row justify-center gap-8 items-center flex-wrap'>
		{#each users as user}
			<li class='w-auto h-auto'>
				<a href={`/jobs/github/${user.githubUser}/`}
					 class='px-16 py-3 rounded-2xl bg-white text-black border border-solid  border-white hover:bg-[rgba(0,0,0,0)] hover:text-white hover:transition-all hover:duration-500 font-bold'>
					{user.githubUser}
				</a>
			</li>
		{/each}
	</ul>
</div>

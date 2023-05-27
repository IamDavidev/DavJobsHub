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

<ul class='flex flex-row justify-center gap-8 items-center mt-12'>
	{#each users as user}
		<li class='w-auto h-auto'>
			<a href={`/jobs/github/${user.githubUser}/`} class='px-16 py-3 rounded-2xl bg-white text-black border border-solid  border-white hover:bg-[rgba(0,0,0,0)] hover:text-white hover:transition-all hover:duration-500 font-bold'>
				{user.githubUser}
			</a>
		</li>
	{/each}
	<!--	<li class='px-16 py-3 rounded-2xl bg-cream text-black'>-->
	<!--		<a href='/jobs/github/midudev/' class='font-bold'>-->
	<!--			Midudev-->
	<!--		</a>-->
	<!--	</li>-->
	<!--	<li class='px-16 py-3 rounded-2xl bg-cream text-black'>-->
	<!--		<a href='/jobs/github/midudev' class='font-bold'>-->
	<!--			Midudev-->
	<!--		</a>-->
	<!--	</li>-->
	<!--	<li class='px-16 py-3 rounded-2xl bg-cream text-black'>-->
	<!--		<a href='/jobs/github/midudev' class='font-bold'>-->
	<!--			Midudev-->
	<!--		</a>-->
	<!--	</li>-->
</ul>
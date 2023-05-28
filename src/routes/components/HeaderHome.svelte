<script>
	import InfojobsIcon from '~routes/components/icons/InfojobsIcon.svelte'
	import GithubIcon from '~routes/components/icons/GithubIcon.svelte'
</script>

<section class='py-12 flex flex-row gap-16 justify-evenly items-center'>
	<div class='flex flex-col gap-4  relative z-50'>
		<h1 class='text-7xl font-bold text-white flex flex-row gap-0'>
			<span class=''>Dav</span>
			<span class='text-blue'>Jobs</span>
			<span class=''>Hub</span>
		</h1>
		<span class='font-bold text-2xl'>
				Jobs Search power by your github
			</span>
	</div>
	<div class=' relative z-50 '>
		<img src='/githubBg.png' alt='github'
				 class='w-[320] lg:w-[480px] h-auto rounded-2xl object-cover opacity-50 animation-float' />
		<div class='absolute w-full h-full flex justify-center items-center top-0 left-0'>
			<div
				class='relative pb-4 before:absolute before:bottom-0 before:left-[20%] before:w-[60%] before:h-1 before:bg-white before:rounded-2xl'
			>
				<InfojobsIcon style='height:4rem' className='' />
				<span class='absolute -bottom-[4rem] w-full flex justify-center items-center'>
					<GithubIcon  />
				</span>
				</div>
		</div>
	</div>
</section>
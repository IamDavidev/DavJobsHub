<script lang='ts'>
	import { goto } from '$app/navigation'

	let githubUser = 'midudev'
	let isUserFound = false

	async function handler(e: SubmitEvent) {
		e.preventDefault()
		const { githubUser } = e.target

		await goto(`jobs/github/${githubUser.value}/`)
	}

</script>


<svelte:head>
	<title> DavJobsHub </title>
	<meta name='description' content='DavJobsHub is a job board for developers' />
</svelte:head>

<h1 class='text-center text-3xl font-bold text-green'>
	DavJobsHub
</h1>

<section class='h-full w-full flex justify-center items-center my-4'>
	<form
		on:submit={handler}
	>
		<labeL class='flex flex-col gap-2 justify-center items-start'>
			<span class='text-white font bold'> Enter your github username </span>
			<input
				name='githubUser'
				id='githubUser'
				type='text'
				class=' border border-green-500 rounded-lg w-[320px] p-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-black'
				value={githubUser}
			/>
		</labeL>
		<div class='flex justify-end items-center my-4'>
			<button
				type='submit'
				class='bg-cream rounded-lg py-2 px-4'
			>
				<span class='text-black font-bold'> Search </span>
			</button>
		</div>
	</form>
</section>

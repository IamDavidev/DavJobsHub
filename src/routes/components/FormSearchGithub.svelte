<script lang='ts'>

	// let githubUser = ''
	let githubUser = 'Midudev'

	import { goto } from '$app/navigation'

	async function handler(e: SubmitEvent) {
		e.preventDefault()
		const { githubUser } = e.target

		await goto(`jobs/github/${githubUser.value}/`, {
			replaceState: true
		})

	}

</script>

<h2 class='text-white text-4xl text-center font-bold'>
	Search by User
	<span class='text-blue'>
				Github
			</span>
</h2>
<form
	on:submit={handler}
	class=' flex w-full items-center flex-col '
>
	<labeL class='flex flex-col gap-4 justify-center items-start'>
		<span class='text-white font bold'>Enter your github username </span>
		<input
			name='githubUser'
			id='githubUser'
			type='text'
			class=' border border-green-500 rounded-lg w-full min-w-[240px] md:min-w-fit  md:w-[380px] p-4 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent text-black'
			placeholder='user github'
			value={githubUser}
		/>
	</labeL>
	<div class='flex justify-end items-center my-4 w-full min-w-[240px] md:min-w-fit  md:w-[380px] '>
		<button
			type='submit'
			class='bg-black border border-solid text-white border-cream rounded-lg py-2 px-8 hover:border-blue hover:bg-[rgba(0,0,0,0)] hover:text-blue hover:transition-all hover:duration-500'
		>
			<span class='font-bold'> Search </span>
		</button>
	</div>
</form>
	
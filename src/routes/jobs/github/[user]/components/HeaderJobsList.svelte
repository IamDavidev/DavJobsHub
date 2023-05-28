<script lang='ts'>
	import UserIcon from '~routes/components/icons/UserIcon.svelte'
	
	export let user: string
	export let langs : string[]
	
	let newUser: string
	
	function handler(e: SubmitEvent){
		e.preventDefault()
		console.log(newUser)
	}
	
</script>

<div class='mb-12 flex flex-col gap-8 justify-center items-center mt-4 relative z-30'>
	<div class='w-ful flex justify-center items-center'>
		<div
			class='bg-[rgba(0,0,0,0)] mx-auto w-full px-4 md:px-32 py-2 rounded-2xl flex gap-4 flex-row border border-solid border-white'>
			<UserIcon className='w-6 h-6' stroke={"#fff"} />
			<span>
					{user}
				</span>
		</div>
	</div>
	<form
		class='flex flex-col md:flex-row justify-center items-center gap-8'
		on:submit={handler}
	>
		<input type='text' placeholder='new search for user' bind:value={newUser}
					 class=' border border-green-500 rounded-lg w-[320px] p-2 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent text-black' />
		<button
			class='bg-[rgba(0,0,0,0)] border border-solid text-white border-cream rounded-lg py-2 px-8 hover:border-blue hover:bg-[rgba(0,0,0,0)] hover:text-blue hover:transition-all hover:duration-500'>
			Search
		</button>
	</form>
	<div class='flex flex-row justify-center gap-8 flex-wrap'>
		{#each langs as lang}
			<span
				class='bg-black  px-12 py-2 rounded-2xl font-base text-white'
			>
				{lang}
			</span>
		{/each}
	</div>
</div>
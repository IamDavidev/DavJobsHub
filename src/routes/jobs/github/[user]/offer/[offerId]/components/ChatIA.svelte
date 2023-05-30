<script lang='ts'>
	import { browser } from '$app/environment'

	export let user: string
	export let offerId: string

	let isOpenChatIA = false

	function openChatIA() {
		isOpenChatIA = true
	}

	function closeChatIA() {
		isOpenChatIA = false
	}

	$: {
		if (browser) {
			if (isOpenChatIA) document.body.style.overflow = 'hidden'
			else document.body.style.overflow = 'auto'
		}
	}

</script>

<button class='w-full mx-auto bg-green text-black rounded-2xl py-2'
				on:click={openChatIA}
>
	Apply Now
</button>

{#if isOpenChatIA}
	<div class='fixed top-0 left-0 w-full h-full'>
		<div class='w-full h-full flex justify-center items-center relative'>
			<div class='absolute top-0 left-0 w-full h-full bg-black opacity-80'></div>
			<button
				class='text-white absolute right-4 top-4 z-30 '
				on:click={closeChatIA}
			>
				Close
			</button>
			<span class='text-white relative z-30'>
				Open chat {user}  - {offerId}
			</span>
			<span
				class='text-white block '
			>
				{user} _ {offerId}
				
			</span>
		</div>
	</div>
{/if}
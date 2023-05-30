<script lang='ts'>
	import { browser } from '$app/environment'
	import axios from 'axios'

	import IaIcon from '~routes/components/icons/IaIcon.svelte'
	import type { ProfileData } from '~lib/interfaces/ProfileData'
	import type { ResponseApiTestProfile } from '~lib/interfaces/ResponseApiTestProfile.interface'
	import CircleIcon from '~routes/components/icons/CircleIcon.svelte'
	import CPUIcon from '~routes/components/icons/CPUIcon.svelte'
	import CloseIcon from '~routes/components/icons/CloseIcon.svelte'

	let isOpenTestProfileModal = false
	export let offerId
	export let githubUser
	export let position 

	let yearsOfExperience = 'uno anio trabajando'
	let knowledgeExperience = 'Tengo experiencia en equipos de desarollo de alta competion como senior developer y tengo experiencia con microservicios y arquitecutra hexagonal'
	let contributionOrImpact = 'El mayor impacto que tengo es haber creado un startup y migrar de singleton a microservicios\n'

	let abortController: AbortController | null = null

	let feedbackResponse = {
		isLoading: false,
		data: null,
		isError: false
	} as {
		isLoading: boolean
		data: ResponseApiTestProfile | null
		isError: boolean
	}

	function openTestProfileModal() {
		console.log('openTestProfileModal')
		isOpenTestProfileModal = true
	}

	function closeTestProfileModal() {
		console.log('closeTestProfileModal')
		isOpenTestProfileModal = false
	}

	async function handlerTestProfileWithIA(e: SubmitEvent): Promise<void> {
		e.preventDefault()

		if (abortController) abortController.abort()
		abortController = new AbortController()
		feedbackResponse.isLoading = true

		const profileData: ProfileData = {
			githubUser,
			profile: {
				yearsOfExperience,
				knowledgeExperience,
				contributionOrImpact
			},
			offerId: offerId
		}


		const { data } = await axios.post('/api/test-profile-with-ia', {
			body: JSON.stringify(profileData),
			headers: {
				'Content-Type': 'application/json'
			},
			signal: abortController.signal
		})


		feedbackResponse.isLoading = false
		feedbackResponse.data = data.data

	}

	$: {
		if (browser) {
			if (isOpenTestProfileModal) document.body.style.overflow = 'hidden'
			else document.body.style.overflow = 'auto'
		}
	}

</script>

<button
	class='w-full mx-auto border border-solid border-white rounded-2xl text-white bg-[rgba(0,0,0,0)] py-2 cursor-pointer'
	on:click={openTestProfileModal}
>
	Test Profile
</button>

{#if isOpenTestProfileModal}
	<div class='fixed top-0 left-0 w-full h-full '>
		<div class='w-full h-full flex justify-center items-center relative'>
			<div class='absolute top-0 left-0 w-full h-full bg-black opacity-100 z-10'></div>
			<button
				class='text-white absolute right-4 top-4 z-[99]'
				on:click={closeTestProfileModal}
			>
				<CloseIcon className='w-12 h-12'  color='#ffffff' />
			</button>

			{#if !feedbackResponse.data}
				<div class='relative z-40 p-4 h-full w-full pb-8 preview-offer overflow-y-scroll'>
					<div class='w-full sm:w-[480px] mx-auto sm:py-12 '>
						<span class='animate-spin'></span>
						<header
							class='mb-8 sm:mb-12 flex flex-col justify-center items-center relative before:absolute before:bottom-0 before:left-[10%] pb-8 before:bg-white before:w-[80%] before:rounded-2xl before:h-1'>
							<IaIcon className='w-12 h-12 animate-spin-slow' />
							<h2 class='text-2xl font-bold my-2'>
								Test Profile with IA
							</h2>
							<p class='text-sm text-blue opacity-60 text-center'>
								We will ask you a few questions to get to know you better and
								provide you with a better experience.*
							</p>
						</header>
						<form
							class='flex flex-col gap-4'
							on:submit={handlerTestProfileWithIA}
						>
							<label for='years-of-experience'>
						<span>
							Years of experience*
						</span>
								<input
									bind:value={yearsOfExperience}
									type='text'
									name='' id='years-of-experience' placeholder='1 year'
									class=' border border-green-500 rounded-lg w-full min-w-[240px] md:min-w-fit  md:w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue focus:border-transparent text-black block my-2'
								/>
							</label>

							<label for='knowledge-experience'>
					<span>
						Describe in detail your knowledge and experience ?  *
					</span>
								<textarea
									bind:value={knowledgeExperience}
									id='knowledge-experience'
									placeholder='I have 3 years of experience working with ...'
									class='focus:ring-2 focus:ring-blue focus:border-transparent  block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm my-2'
									rows='4' data-dl-input-translation='true'></textarea>
							</label>

							<label for='contribution-or-impact'>
					<span>
						What has been your greatest contribution or impact on a project ?*
					</span>
								<textarea
									bind:value={contributionOrImpact}
									id='contribution-or-impact'
									placeholder='In my last work I was able ...'
									class=' focus:ring-2 focus:ring-blue focus:border-transparent  block w-full px-6 py-3 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm my-2'
									rows='4'></textarea>
							</label>

							<button
								type='submit'
								class='bg-black border border-solid text-white border-cream rounded-lg py-2 px-8 hover:border-blue hover:bg-[rgba(0,0,0,0)] hover:text-blue hover:transition-all hover:duration-500'
							>
								Test profile
							</button>
							<!--						<button-->
							<!--							type='submit'-->
							<!--							class='bg-black border border-solid text-white border-cream rounded-lg py-2 px-8 hover:border-blue hover:bg-[rgba(0,0,0,0)] hover:text-blue hover:transition-all hover:duration-500 flex flex-row gap-4 justify-center items-center'-->
							<!--						>-->
							<!--						<span>-->
							<!--							only with-->
							<!--						</span>-->
							<!--							<GithubIcon className='w-4 h-4' />-->
							<!--						</button>-->
						</form>
					</div>
				</div>
			{/if}

			{#if feedbackResponse.isLoading}
				<div class='flex justify-center items-center w-full h-full  z-50 absolute bg-black  flex-col gap-8'>
					<CircleIcon className='w-12 h-12 animate-spin-slow' />
					<span class='text-blue text-xl'>
						Generating feedback...	
					</span>
				</div>
			{/if}

			{#if feedbackResponse.data}
				<div
					class='w-full h-full relative z-40 py-12 preview-offer overflow-y-scroll px-2 overflow-x-hidden '>
					<div class='w-full sm:w-[480px] mx-auto sm:py-12 flex flex-col gap-8 justify-start items-center'>
						<div class='flex flex-col justify-center items-center gap-4'>
							<h2 class='text-blue opacity-80 text-2xl text-center'>
								{position}
							</h2>
							<span>
								{githubUser}
							</span>
						</div>
						<div class='flex flex-col gap-4 w-full h-auto'>
							<h2 class='text-white text-2xl opacity-80 flex flex-row justify-start items-center gap-4'>
							<span>
								<CPUIcon className='h-6 w-6'
												 color={"#508dff"}
								/>
							</span>
								<span>
								Feedback from IA
							</span>
							</h2>
							<p class='text-white'>
								{feedbackResponse.data.feedback}
							</p>
						</div>
						<div class='flex flex-col gap-4 w-full h-auto'>
							<h2 class='text-white text-2xl opacity-80 flex flex-row justify-start items-center gap-4'>
							<span>
								<CPUIcon className='h-6 w-6'
												 color={"#508dff"}
								/>
							</span>
								<span>
									Tips to improve your profile
							</span>
							</h2>
							<p>
								{feedbackResponse.data.tips}
							</p>
						</div>

						<span class='text-blue text-center'>
						Score:  {feedbackResponse.data.score}
					</span>
						<span class='flex justify-center items-center flex-col'>
						<IaIcon className='w-12 h-12' />
					</span>

					</div>
				</div>
			{/if}
		</div>
	</div>
{/if}
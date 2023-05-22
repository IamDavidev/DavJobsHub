<script lang='ts'>
	import type { LayoutData } from './$types';

	import type { OfferItemAdapter } from '~lib/interfaces/Offer.interface';

	export let data: LayoutData;

	const offers = data.offers as OfferItemAdapter[];
	const user = data.user as string;

</script>


<div class='flex flex-row justify-between items-start'>
	<section>
		<ul>
			{#each offers as { position, id }}
				<li>
					<a href={`/jobs/github/${user}/offer/${id}`}>
						<article class=''>
							<div>
								<h2>{position}</h2>
							</div>
						</article>
					</a>
				</li>
			{/each}
		</ul>
	</section>
	<!-- * @children -->
	<slot></slot>
</div>

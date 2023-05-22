<script lang='ts'>
	import type { OfferModel } from '~lib/interfaces/Offer.interface';

	export let data;
	
	const offer = data.offer as OfferModel
</script>

<div>
	{offer.published}
</div>
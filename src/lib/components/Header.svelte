<script lang="ts">
	import type { Content } from '@prismicio/client';
	import WordMark from './WordMark.svelte';
	import { PrismicLink } from '@prismicio/svelte';

	export let settings: Content.SettingsDocument;
</script>

<header>
	<nav class="flex flex-row items-center justify-between gap-6 px-8 py-7" aria-label="Header">
		<a href="/">
			<WordMark />
			<span class="sr-only">
				{settings.data.site_title} home page
			</span>
		</a>

		<ul class="flex justify-between gap-6">
			{#each settings.data.navigation as item (item.label)}
				<li>
					<PrismicLink field={item.link} class="inline-flex min-h-11 items-center">
						{item.label}
					</PrismicLink>
				</li>
			{/each}
		</ul>
	</nav>
</header>

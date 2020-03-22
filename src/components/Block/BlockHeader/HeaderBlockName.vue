<template>
	<div class="row items-center name-wrapper"
	     @touchstart.stop
	     @mousedown.stop
	>
		<q-icon name="far fa-clock"
		        size="sm"
		        class="text-primary"
		/>

		<p class="column q-ma-none q-ml-xs name">
			<b>Блок</b>
			Таймаут
		</p>
	</div>
</template>

<style lang="scss" scoped>
	.name {
		line-height: 1.2;
	}
</style>

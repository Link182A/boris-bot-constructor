<template>
	<div class="column">
		<header class="row no-wrap">
			<header-block-name/>
			<header-options/>
		</header>

		<div @touchstart.stop @mousedown.stop>
			<q-select v-model="activeOption"
			          :options="options"
			          :label="$t('base.addImage.fileType')"/>
		</div>

		<q-btn flat
		       round
		       @touchstart.stop @mousedown.stop
		       size="xl"
		       icon="fas fa-plus-circle"
		       class="q-mx-auto q-my-sm">
		</q-btn>

		<p class="q-mx-auto">{{$t('base.addImage.photoCaption')}}</p>

		<q-card-actions align="around" @touchstart.stop @mousedown.stop>
			<q-btn class="btn-fixed-width"
			       icon="fas fa-arrow-left">

				<span class="q-ml-sm">{{$t('base.addImage.back')}}</span>
			</q-btn>

			<q-btn class="btn-fixed-width"
			       icon="fas fa-check">

				<span class="q-ml-sm">{{$t('base.addImage.save')}}</span>
			</q-btn>
		</q-card-actions>
	</div>
</template>

<script>
	import HeaderOptions from './HeaderOptions';
	import HeaderBlockName from './HeaderBlockName';

	export default {
		name: 'block-header',
		components: {
			HeaderOptions,
			HeaderBlockName
		},
		data() {
			return {
				activeOption: this.$t('base.addImage.photoFile'),
				options: [
					this.$t('base.addImage.photoFile'),
					this.$t('base.addImage.videoFile')
				]
			};
		}
	};

</script>

<style lang="scss">
	.btn-fixed-width {
		width: 48%;
	}
</style>

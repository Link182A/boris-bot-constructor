<template>
	<div>
		<header class="row no-wrap">
			<header-block-name/>
			<header-options @clickOnImage="clickOnImage"
			                @clickOnGeo="clickOnGeo"
			                :isAssetsVisible="isAssetsVisible"
			                :isGeoVisible="isGeoVisible"/>
		</header>

		<template v-if="isAssetsVisible">
			<div @touchstart.stop @mousedown.stop>
				<q-select v-model="activeOption"
				          :options="options"
				          :label="$t('base.addImage.fileType')"/>
			</div>

			<header-add-image v-show="activeOption === options[0]"
			                  @clickOnCancel="clickOnCancel"/>

			<header-add-video v-show="activeOption === options[1]"
			                  @clickOnCancel="clickOnCancel"/>

		</template>

	</div>
</template>

<script>
	import HeaderOptions from './HeaderOptions';
	import HeaderBlockName from './HeaderBlockName';
	import HeaderAddImage from './HeaderAddImage';
	import HeaderAddVideo from './HeaderAddVideo';

	export default {
		name: 'block-header',
		components: {
			HeaderOptions,
			HeaderBlockName,
			HeaderAddImage,
			HeaderAddVideo
		},
		data() {
			return {
				activeOption: this.$t('base.addImage.photoFile'),
				options: [
					this.$t('base.addImage.photoFile'),
					this.$t('base.addImage.videoFile')
				],
				isAssetsVisible: false,
				isGeoVisible: false
			};
		},
		methods: {
			clickOnImage() {
				this.isAssetsVisible = !this.isAssetsVisible;
			},
			clickOnCancel() {
				this.clickOnImage();
			},
			clickOnGeo() {
				this.isGeoVisible = !this.isGeoVisible;
			}
		}
	};

</script>

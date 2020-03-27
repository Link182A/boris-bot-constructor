<template>
	<div>
		<header class="row no-wrap">
			<header-block-name class="cursor-pointer" :block="block"/>
			<header-options @clickOnImage="clickOnImage"
			                @clickOnGeo="clickOnGeo"
			                :block="block"
			                :isAssetsVisible="isAssetsVisible"
			                :isGeoVisible="isGeoVisible"/>
		</header>

		<q-slide-transition>
			<div v-if="isGeoVisible">
				<header-geo class="custom-border q-mb-md"
				            @clickOnCancel="cancelGeo"/>
			</div>
		</q-slide-transition>

		<q-slide-transition>
			<div v-if="isAssetsVisible">
				<div class="custom-border">

					<div @touchstart.stop @mousedown.stop>
						<q-select v-model="activeOption"
						          :options="options"
						          :label="$t('base.addImage.fileType')"/>
					</div>

					<header-add-image v-show="activeOption === options[0]"
					                  @clickOnCancel="clickOnCancel"/>

					<header-add-video v-show="activeOption === options[1]"
					                  @clickOnCancel="clickOnCancel"/>
				</div>

			</div>
		</q-slide-transition>

	</div>
</template>

<script>
	import HeaderOptions from './HeaderOptions';
	import HeaderBlockName from './HeaderBlockName';
	import HeaderAddImage from './HeaderAddImage';
	import HeaderAddVideo from './HeaderAddVideo';
	import HeaderGeo from './HeaderGeo';

	export default {
		name: 'block-header',
		components: {
			HeaderOptions,
			HeaderBlockName,
			HeaderAddImage,
			HeaderAddVideo,
			HeaderGeo
		},
		props: {
			block: {
				type: Object
			}
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
			},
			cancelGeo() {
				this.clickOnGeo();
			}
		}
	}
	;

</script>

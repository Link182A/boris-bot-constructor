<template>
	<div>
		<q-input bottom-slots
		         v-model="text"
		         class="q-mb-lg"
		         :label="$t('base.addImage.videoCaption')">

			<template v-slot:hint>
				{{$t('base.addImage.videoHint')}}
			</template>
		</q-input>

		<header-actions @clickOnCancel="$emit('clickOnCancel')"/>

		<iframe v-if="youtubeHandler"
				width="100%" height="180"
		        :src="`https://www.youtube.com/embed/${youtubeHandler}`"
		        frameborder="0"
		        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		        allowfullscreen/>
	</div>
</template>

<script>
	import HeaderActions from '../OptionalAction';

	export default {
		name: 'header-add-video',
		components: {
			HeaderActions
		},
		data() {
			return {
				text: ''
			};
		},
		computed: {
			youtubeHandler() {
				const prefix = 'https://www.youtube.com/';

				if (this.text && this.text.startsWith(prefix)) {
					const updatedText = this.text.split('?v=');
					return updatedText[updatedText.length - 1];
				}
				return false;
			}
		}
	};

</script>

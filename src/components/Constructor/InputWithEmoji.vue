<template>
	<div @touchstart.stop @mousedown.stop class="q-mb-md">

		<q-input v-model="text"
		         class="q-mb-md"
		         autogrow
		         :label="$t('timeout.inputLabel')">

			<template v-slot:append>
				<q-btn @click="showEmojiPicker=!showEmojiPicker"
				       flat
				       round
				       size="md"
				       :color="showEmojiPicker?'primary':''"
				       icon="far fa-smile">
				</q-btn>
			</template>
		</q-input>

		<q-slide-transition>
			<div v-show="showEmojiPicker">
				<VEmojiPicker @select="addEmoji"/>
			</div>
		</q-slide-transition>
	</div>
</template>

<script>
	import VEmojiPicker from 'v-emoji-picker';

	export default {
		name: 'input-with-emoji',
		components: {
			VEmojiPicker
		},
		data() {
			return {
				text: '',
				showEmojiPicker: false
			};
		},
		methods: {
			addEmoji({ data }) {
				this.text = this.text.concat(data);
			}
		}
	};
</script>

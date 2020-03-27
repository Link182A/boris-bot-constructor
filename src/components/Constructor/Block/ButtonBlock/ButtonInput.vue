<template>
	<div @touchstart.stop @mousedown.stop class="q-mb-sm">

		<div class="row items-center">
			<q-input v-model="text"
			         class="shadow-1"
			         style="width: 85%"
			         dense>
				<template v-slot:prepend>
					<q-btn @click="showEmojiPicker=!showEmojiPicker"
					       flat
					       round
					       size="md"
					       :color="showEmojiPicker?'primary':''"
					       icon="far fa-smile"/>
				</template>
			</q-input>

			<q-icon name="fas fa-exchange-alt"
			        color="grey-8"
			        class="q-ml-sm rotate-90"
			        style="font-size: 25px;"/>
		</div>

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
		name: 'button-input',
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

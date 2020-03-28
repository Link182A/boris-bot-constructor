<template>
	<div class="q-mb-sm"
		 id="buttonInputWrapper">

		<div class="row items-center relative-position">
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

			<transfer-button class="transfer-button"
							 direction="left"
							 @onMenuShow="$emit('onMenuShow')"
							 @onMenuHide="$emit('onMenuHide')"/>
		</div>

		<q-slide-transition>
			<div v-show="showEmojiPicker" >
				<VEmojiPicker @select="addEmoji"
							  class="q-mt-sm"/>
			</div>
		</q-slide-transition>
	</div>
</template>

<script>
	import VEmojiPicker from 'v-emoji-picker';
	import TransferButton from '../../TransferButton';

	export default {
		name: 'button-input',
		components: {
			VEmojiPicker,
			TransferButton
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

<style lang="scss">
	#buttonInputWrapper {
		.transfer-button {
			position: absolute;
			right: -50px;
			transform: scale(.8) translateX(-50%);
		}

		.q-fab__actions {
			position: absolute;
			top: -95px;
			left: 70px;
		}
	}
</style>

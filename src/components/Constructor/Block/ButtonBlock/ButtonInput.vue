<template>
	<div class="q-mb-sm"
	     id="buttonInputWrapper">

		<div class="row items-center relative-position">
			<q-input v-model="text"
			         class="shadow-1 input"
			         style="width: 70%"
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

			<q-btn flat
			       round
			       class="q-ml-sm rotate-90 drag-icon"
			       size="md"
			       icon="fas fa-exchange-alt"/>

			<q-btn flat
			       round
			       class="remove-btn"
			       size="md"
			       icon="fas fa-times"/>

			<transfer-button class="transfer-button"
			                 direction="left"
			                 @onMenuShow="$emit('onMenuShow')"
			                 @onMenuHide="$emit('onMenuHide')"/>

		</div>

		<q-slide-transition>
			<div v-show="showEmojiPicker">
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
	@import './src/styles/quasar.variables';

	#buttonInputWrapper {
		.input {
			position: relative;
			&:before{
				content: '';
				position: absolute;
				top: 50%;
				left: -9px;
				width: 9px;
				height: 1px;
				background-color: $primary;
				transform: translateY(-50%);
			}
		}

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

		.drag-icon {
			cursor: move;
		}
	}
</style>

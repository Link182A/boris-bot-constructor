<template>
	<base-block>
		<div @touchstart.stop @mousedown.stop>
			<q-input v-model="text"
			         class="q-mb-md"
			         autogrow
			         :label="$t('timeout.inputLabel')">

				<template v-slot:append>
					<q-btn @touchstart.stop @mousedown.stop
					       @click="showEmojiPicker=!showEmojiPicker"
					       flat
					       round
					       size="md"
					       :color="showEmojiPicker?'primary':''"
					       icon="far fa-smile">
					</q-btn>
				</template>
			</q-input>
		</div>

		<div @touchstart.stop @mousedown.stop
		     class="q-mb-md">

			<q-slide-transition>
				<div v-show="showEmojiPicker">
					<VEmojiPicker @select="addEmoji"/>
				</div>
			</q-slide-transition>
		</div>

		<div class="row items-baseline">
			<b class="q-mr-md">{{$t('timeout.text')}}</b>

			<q-input
				v-model.number="delay"
				type="number"
				style="width: 40%"
				lazy-rules
				dense
				outlined
				:rules="[
                    val => val !== null
                        && val !== ''
                        && val >= 0 && val < 10
                        || $t('timeout.emptyError'),
                ]"/>
		</div>
	</base-block>
</template>

<script>
	import BaseBlock from '../BaseBlock/index';
	import VEmojiPicker from 'v-emoji-picker';

	export default {
		name: 'timeout-block',
		components: {
			BaseBlock,
			VEmojiPicker
		},
		data() {
			return {
				text: '',
				delay: 0,
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

<style lang="scss" scoped>
	b {
		line-height: 2;
	}
</style>

<template>
	<base-block :block="block">

		<input-with-emoji/>

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
	import InputWithEmoji from '../../InputWithEmoji';

	export default {
		name: 'timeout-block',
		components: {
			BaseBlock,
			InputWithEmoji
		},
		props: {
			block: {
				type: Object
			}
		},
		data() {
			return {
				delay: 0
			};
		},
		methods: {}
	};
</script>

<style lang="scss" scoped>
	b {
		line-height: 2;
	}
</style>

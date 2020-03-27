export interface Block {
	id: number;
	index: number;
	type: string;
	x: number;
	y: string;
}

export interface BlockState {
	blocks: Array<Block>;
}

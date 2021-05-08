/// <reference types="next" />
/// <reference types="next/types/global" />


declare global {
	interface CanvasRenderingContext2D {
		drawBreakingText(str: any, x: any, y: any, w: any, lh: any, method: any): any;
  	}
}

export {}
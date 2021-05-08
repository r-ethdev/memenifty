import { useRef, useEffect } from 'react'

const MemeCanvas = (props:any) => {

	const imageRef = useRef<HTMLImageElement>(null)
	const canvasRef = useRef<HTMLCanvasElement>(null)

	let padding = 0
	let height = 0
	let textSizeTop = 10
	let textSizeBottom = 10

	let maxWidth =  600
	let maxHeight = 800


	const draw = (ctx:any) => {
		if(canvasRef.current && imageRef.current) {
			ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
			canvasRef.current.width = imageRef.current.width
			canvasRef.current.height = imageRef.current.height

			ctx.drawImage(imageRef.current, 0,0, imageRef.current.width, imageRef.current.height)

			ctx.fillStyle = '#fff';
			ctx.strokeStyle = '#000';
			ctx.lineWidth = ctx.canvas.width*0.004;

			var _textSizeTop = textSizeTop/100 * ctx.canvas.width;
			var _textSizeBottom = textSizeBottom/100 * ctx.canvas.width;

			changeStyle(ctx, 'Impact', _textSizeTop, 'center', 'bottom');
			ctx.drawBreakingText(props.topText, ctx.canvas.width / 2, _textSizeTop + padding, null, 1, 'fill');
			ctx.drawBreakingText(props.topText, ctx.canvas.width / 2, _textSizeTop + padding, null, 1, 'stroke');

			changeStyle(ctx, 'Impact', _textSizeBottom, 'center', 'top');
			var height = ctx.drawBreakingText(props.bottomText, 0, 0, null, 1, 'none').textHeight;
			console.log(ctx.drawBreakingText(props.bottomText, 0, 0, null, 1, 'none'));
			ctx.drawBreakingText(props.bottomText, ctx.canvas.width / 2, ctx.canvas.height - padding - height, null, 1, 'fill');
			ctx.drawBreakingText(props.bottomText, ctx.canvas.width / 2, ctx.canvas.height - padding - height, null, 1, 'stroke');
		}

	}

	function changeStyle(ctx:any, font:any, size:any, align:any, base:any) {
		ctx.font = size + 'px ' + font;
		ctx.textAlign = align;
		ctx.textBaseline = base;
	}

	useEffect(() => {
		CanvasRenderingContext2D.prototype.drawBreakingText = function (str:any, x:any, y:any, w:any, lh:any, method:any) {
			var textSize = parseInt(this.font.replace(/\D/gi, ''));
			var textParts = [];
			var textPartsNo = 0;
			var words = [];
			var currLine = '';
			var testLine = '';
			str = str || '';
			x = x || 0;
			y = y || 0;
			w = w || this.canvas.width;
			lh = lh || 1;
			method = method || 'fill';

			textParts = str.split('\n');
			textPartsNo = textParts.length;

			for (var i = 0; i < textParts.length; i++) {
				words[i] = textParts[i].split(' ');
			}

			textParts = [];

			for (var i = 0; i < textPartsNo; i++) {

				currLine = '';

				for (var j = 0; j < words[i].length; j++) {
					testLine = currLine + words[i][j] + ' ';

					if (this.measureText(testLine).width > w && j > 0) {
						textParts.push(currLine);
						currLine = words[i][j] + ' ';
					} else {
						currLine = testLine;
					}
				}
				textParts.push(currLine);
			}

			for (var i = 0; i < textParts.length; i++) {
				if (method === 'fill') {
					this.fillText(textParts[i].replace(/((\s*\S+)*)\s*/, '$1'), x, y+(textSize*lh*i));
				} else if (method === 'stroke') {
					this.strokeText(textParts[i].replace(/((\s*\S+)*)\s*/, '$1'), x, y+(textSize*lh*i));
				} else if (method === 'none') {
					return {'textParts': textParts, 'textHeight': textSize*lh*textParts.length};
				} else {
					console.warn('drawBreakingText: ' + method + 'Text() does not exist');
					return false;
				}
			}

			return {'textParts': textParts, 'textHeight': textSize*lh*textParts.length};
		};

	}, [])

	useEffect(() => {
		console.log("Bottom and Top called")
		const canvas = canvasRef.current
		if(canvas){
			const context = canvas.getContext('2d')
			draw(context)
		}
	}, [props.bottomText, props.topText])

	useEffect(() => {
		console.log("Image Url called")
		updateImageSrc(props.imageUrl)
	}, [props.imageUrl])

	useEffect(() => {
		if(props.localFile) {
			let fr = new FileReader()
			fr.onload = function() {
				updateImageSrc(fr.result as string)
			}
			fr.readAsDataURL(props.localFile)
		}

	}, [props.localFile])

	const updateImageSrc = (src:string) => {
		if(imageRef.current) {
			imageRef.current.src = src
			
		}
	}

	//https://imgflip.com/s/meme/The-Most-Interesting-Man-In-The-World.jpg

	const callDraw = () => {
		console.log("Call draw called")
		if(imageRef.current) {
			if(imageRef.current.width > maxWidth){
				console.log("inside maxW")
			}
			if(imageRef.current.height > maxHeight){
				console.log("inside maxH")
			}
			console.log("Inside callDraw Image W&H")
			console.log(imageRef.current.width)
			console.log(imageRef.current.height)
		}



		const canvas = canvasRef.current
		if(canvas){
			const context = canvas.getContext('2d')
			draw(context)
		}

	}


	return (
		<>
		<canvas ref={canvasRef}/>
		<img onLoad={callDraw} style={{display:"none"}} ref={imageRef}></img>
		</>
		)
}

export default MemeCanvas
import { useRef, useEffect, useState } from 'react'

import MemeCanvas from './MemeCanvas'

const MemeMaker = (props:any) => {
	const [bottomText, setBottomText] = useState("")
	const [topText, setTopText] = useState("")
	const [imageUrl, setImageUrl] = useState("")  
	const [localFile, setLocalFile] = useState<File>(null as any)

	const bottomTextInput = useRef<HTMLInputElement>(null)
	const topTextInput = useRef<HTMLInputElement>(null)
	const imageUrlInput = useRef<HTMLInputElement>(null)


	const imageSourceChange = () => {
		if(imageUrlInput.current){
			setImageUrl(imageUrlInput.current.value)
		}
	}

	const bottomTextChange = () => {
		if(bottomTextInput.current){
			setBottomText(bottomTextInput.current.value)
		}
	}

	const topTextChange = () => {
		if(topTextInput.current){
			setTopText(topTextInput.current.value)
		}
	}


	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if(event.target.files){
			var file = event.target.files[0];
			setLocalFile(file)
		}
	}

return (
	<div>
		<div>
			<div>
				<MemeCanvas imageUrl={imageUrl} localFile={localFile} bottomText={bottomText} topText={topText}></MemeCanvas>
			</div>
			<div>
				<div>
					<div>
						<input type="text" placeholder="Image URL" onChange={imageSourceChange} ref={imageUrlInput}></input>
					</div>
					<div>
						<input type="file" onChange={handleFileChange} />
					</div>
				</div>
				<div>
					<div>
						<input type="text" placeholder="Top Text" onChange={topTextChange} ref={topTextInput}></input>
					</div>
					<div>
						<input type="text" placeholder="Bottom Text" onChange={bottomTextChange} ref={bottomTextInput}></input>
					</div>
				</div>
				<div>
					<div >
						<button>Mint Meme</button>
					</div>
					<div>
						<button>Reset</button>
					</div>
				</div>
			</div>
		</div>
	</div>
);


} 




export default MemeMaker
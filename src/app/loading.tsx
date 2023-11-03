import { FunctionComponent } from "react"

interface IProps {}

const Loading: FunctionComponent<IProps> = ({}) => {
	return (
		<div className="flex w-full h-full flex-1 justify-center items-center">
			<p>Loading</p>
		</div>
	)
}

export default Loading

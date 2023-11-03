import { FunctionComponent } from "react"

interface IProps {}

const Loading: FunctionComponent<IProps> = ({}) => {
	return (
		<div className="flex h-full w-full flex-1 items-center justify-center">
			<p>Loading</p>
		</div>
	)
}

export default Loading

import { FC } from "react"

interface IProps {}

const Loader: FC<IProps> = ({}) => {
	return (
		<div className="flex flex-1 w-full h-full items-center justify-center">
			<span className="loading loading-spinner loading-md" />
		</div>
	)
}

export default Loader

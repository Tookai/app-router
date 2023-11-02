import { getPokemon } from "@/server"
import Link from "next/link"
import { FunctionComponent, PropsWithChildren } from "react"

interface IProps {
	id: string
}

const SoloLayout: FunctionComponent<PropsWithChildren<IProps>> = async ({
	children,
	id,
}) => {
	const data = await getPokemon(id)

	return (
		<div className="flex w-full flex-1">
			<div className="flex w-[280px] flex-col gap-3 p-6">
				<h2 className="text-xl font-bold">{data.name}</h2>

				<Link href={`/pokemon/${id}`}>Pokemon</Link>
				<Link href={`/pokemon/${id}/spells`}>Spells</Link>
				<Link href={`/pokemon/${id}/pictures`}>Pictures</Link>
			</div>
			<div className="w-full flex-1 flex flex-col">{children}</div>
		</div>
	)
}

export default SoloLayout

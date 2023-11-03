import { getPokemon } from "@/server"
import { revalidateTag } from "next/cache"
import Link from "next/link"
import { FunctionComponent, PropsWithChildren, Suspense } from "react"
import Loader from "./Loader"

interface IProps {
	id: string
}

const refetchPokemon = async (id: string) => {
	revalidateTag(`pokemon-${id}`)
}

const SoloLayout: FunctionComponent<PropsWithChildren<IProps>> = async ({
	children,
	id,
}) => {
	const data = await getPokemon(id)

	return (
		<div className="flex max-h-screen w-full flex-1 overflow-hidden">
			<div className="flex w-[280px] shrink-0 flex-col gap-3 p-6">
				<Suspense fallback={<p>loading...</p>}>
					<h2 className="text-xl font-bold">{data.name}</h2>
				</Suspense>

				<Link href={`/pokemon/${id}`}>Pokemon</Link>
				<Link href={`/pokemon/${id}/spells`}>Spells</Link>
				<Link href={`/pokemon/${id}/pictures`}>Pictures</Link>
				<div className="flex-1" />

				<form
					action={async () => {
						"use server"
						return await refetchPokemon(id)
					}}
				>
					<button type={"submit"} className="btn btn-primary">
						Refetch
					</button>
				</form>
			</div>
			<div className="flex w-full flex-1 flex-col overflow-y-auto">
				<Suspense fallback={<Loader />}>{children}</Suspense>
			</div>
		</div>
	)
}

export default SoloLayout

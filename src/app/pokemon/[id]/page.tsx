import Loader from "@/components/Loader"
import Pokemon from "@/components/Pokemon"
import { getPokemon } from "@/server"
import type { NextPage } from "next"
import { Suspense } from "react"

export async function generateMetadata({ params: { id } }: any) {
	const data = await getPokemon(id)

	return {
		title: data.name,
	}
}

const IndexPage: NextPage<PageProps> = async ({ params: { id } }) => {
	return (
		<div className="flex-1 bg-purple-800">
			<Suspense fallback={<Loader />} key={id}>
				<Pokemon id={id} />
			</Suspense>
		</div>
	)
}

export default IndexPage

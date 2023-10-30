import Loader from "@/components/Loader"
import PokemonGrid from "@/components/PokemonGrid"
import type { NextPage } from "next"
import { Suspense } from "react"

const IndexPage: NextPage = () => {
	return (
		<Suspense fallback={<Loader />}>
			<PokemonGrid />
		</Suspense>
	)
}

export default IndexPage

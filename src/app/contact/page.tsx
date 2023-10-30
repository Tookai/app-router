import Loader from "@/components/Loader"
import PokemonGrid from "@/components/PokemonGrid"
import type { Metadata, NextPage } from "next"
import { Suspense } from "react"

export const metadata: Metadata = {
	title: "Contact",
}

const IndexPage: NextPage = () => {
	return (
		<Suspense fallback={<Loader />}>
			<PokemonGrid />
		</Suspense>
	)
}

export default IndexPage

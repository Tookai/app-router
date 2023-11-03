import Loader from "@/components/Loader"
import Pagination from "@/components/Pagination"
import PokemonGrid from "@/components/PokemonGrid"
import type { NextPage } from "next"
import { Suspense } from "react"

const IndexPage: NextPage<PageProps> = ({ searchParams: { page = 1 } }) => {
	return (
		<>
			<Suspense fallback={<Loader />} key={page}>
				<PokemonGrid page={page} />
			</Suspense>

			<Pagination />
		</>
	)
}

export default IndexPage

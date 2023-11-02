import { getPokemonsList } from "@/server"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

const PokemonGrid: FC = async ({}) => {
	const data = await getPokemonsList()

	if (data?.results?.length === 0) {
		return (
			<div className="flex-1 items-center justify-center">
				<p>We did not find any pokemon !!</p>
			</div>
		)
	}


	return (
		<div className="grid w-full grid-cols-3 gap-3 p-3">
			{data.results.map((pokemon: any, idx: number) => (
				<Link
					key={idx}
					href={`/pokemon/${idx + 1}`}
					className="flex flex-col items-center justify-center rounded-md bg-slate-800"
				>
					<Image
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${idx + 1}.png`}
						alt={pokemon.name}
						height={512}
						width={512}
						className="h-24 w-24"
						priority={idx < 21 ? true : false}
					/>

					<span>{pokemon.name}</span>
				</Link>
			))}
		</div>
	)
}

export default PokemonGrid

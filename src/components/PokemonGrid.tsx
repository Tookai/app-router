import Image from "next/image"
import { FC } from "react"

interface IProps {}

const PokemonGrid: FC<IProps> = async ({}) => {
	// await for 2 sec
	await new Promise((resolve) => setTimeout(resolve, 2500))
	const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
	const data = await response.json()

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
				<article
					key={idx}
					className="flex flex-col items-center justify-center rounded-md bg-slate-800"
				>
					<Image
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${
							idx + 1
						}.png`}
						alt={pokemon.name}
						height={512}
						width={512}
						className="h-24 w-24"
					/>

					<span>{pokemon.name}</span>
				</article>
			))}
		</div>
	)
}

export default PokemonGrid

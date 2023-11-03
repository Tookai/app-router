import { getPokemonsList } from "@/server"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

interface IProps {
	page?: string | number
}

const getId = (url: string): string => {
	const parsed = url
		.replace("https://pokeapi.co/api/v2/pokemon/", "")
		.replaceAll("/", "")

	return parsed
}

const PokemonGrid: FC<IProps> = async ({ page }) => {
	const data = await getPokemonsList(page)

	if (data?.results?.length === 0) {
		return (
			<div className="flex-1 items-center justify-center">
				<p>We did not find any pokemon !!</p>
			</div>
		)
	}

	return (
		<div className="grid w-full flex-1 grid-cols-3 gap-3 p-3">
			{data.results.map((pokemon: any, idx: number) => (
				<Link
					key={pokemon.name}
					href={`/pokemon/${getId(pokemon.url)}`}
					className="flex flex-col items-center justify-center rounded-md bg-slate-800"
				>
					<Image
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${getId(
							pokemon.url
						)}.png`}
						alt={pokemon.name}
						height={124}
						width={124}
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

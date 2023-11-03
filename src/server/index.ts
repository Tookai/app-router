"server-only"

import { cache } from "react"

export const getPokemonsList = cache(
	async (page: string | number | undefined = 1) => {
		await new Promise((resolve) => setTimeout(resolve, 1000))

		const offset = (Number(page ?? 1) - 1) * 12

		const response = await fetch(
			`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`,
			{
				next: { tags: [`pokemons-${page}`] },
			}
		)
		const data = await response.json()

		return data
	}
)

export const getPokemon = cache(async (id: string) => {
	await new Promise((resolve) => setTimeout(resolve, 2500))
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
		next: { tags: [`pokemon-${id}`] },
	})
	const data = await response.json()

	return data
})

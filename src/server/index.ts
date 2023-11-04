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

export const getPokemon = cache(async (id: string, sleep: number = 2500) => {
	await new Promise((resolve) => setTimeout(resolve, sleep))
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
		next: { tags: [`pokemon-${id}`] },
	})
	const data = await response.json()

	return data
})

// deep parse
export const  str = (obj: any): string => {
	const replacer = (key: string, value: any) => {
		if (value === undefined) {
			return undefined // Remove keys with undefined values
		} else if (value === "") {
			return null // Set empty strings to null
		}
		return value
	}

	return JSON.stringify(obj, replacer)
}

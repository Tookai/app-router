"server-only"

import { cache } from "react"

export const getPokemonsList = cache(async () => {
	await new Promise((resolve) => setTimeout(resolve, 2500))
	const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
	const data = await response.json()

	return data
})


export const getPokemon = cache(async (id: string) => {
	await new Promise((resolve) => setTimeout(resolve, 2500))
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
	const data = await response.json()

	return data
})

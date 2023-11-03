import { getPokemon } from "@/server"
import { FunctionComponent } from "react"

interface IProps {
	id: string
}

const Pokemon: FunctionComponent<IProps> = async ({ id }) => {
	const data = await getPokemon(id)

	return <pre className="code">{JSON.stringify(data, null, 2)}</pre>
}

export default Pokemon

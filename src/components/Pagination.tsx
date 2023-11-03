"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { FunctionComponent } from "react"

const Pagination: FunctionComponent = ({}) => {
	const router = useRouter()
	const searchParams = useSearchParams()
	const page = searchParams.get("page")

	const handleNext = () => {
		router.push(`/?page=${Number(page ?? 1) + 1}`)
	}

	const handlePrev = () => {
		router.push(`/?page=${Number(page ?? 1) - 1}`)
	}

	return (
		<div className="flex w-full items-center justify-center gap-3">
			<button className="btn btn-ghost" onClick={handlePrev}>
				{"<"}
			</button>
			<button className="btn btn-ghost" onClick={handleNext}>
				{">"}
			</button>
		</div>
	)
}

export default Pagination

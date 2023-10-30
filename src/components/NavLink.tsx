"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FC } from "react"

interface IProps {
	item: {
		href: string
		label: string
	}
}

const NavLink: FC<IProps> = ({ item }) => {
	const pathname = usePathname()

	if (pathname === item.href) {
		return (
			<Link href={item.href}>
				<span>{item.label}</span>
			</Link>
		)
	}

	return (
		<Link href={item.href}>
			<span className="opacity-70">{item.label}</span>
		</Link>
	)
}

export default NavLink

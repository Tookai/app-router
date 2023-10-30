import Link from "next/link"
import { FC } from "react"
import NavLink from "./NavLink"

interface IProps {}

const Header: FC<IProps> = ({}) => {
	return (
		<header className="fixed top-0 flex h-16 w-full items-center justify-between border-b bg-slate-900 px-3">
			<div className="w-28">
				<Link href={"/"}>
					<h1>Hello World</h1>
				</Link>
			</div>

			<nav className="flex items-center justify-center gap-6">
				<NavLink item={{ href: "/", label: "Home" }} />
				<NavLink item={{ href: "/about", label: "About" }} />
				<NavLink item={{ href: "/contact", label: "Contact" }} />
			</nav>

			<div className="flex w-28 justify-end">
				<span>John</span>
			</div>
		</header>
	)
}

export default Header

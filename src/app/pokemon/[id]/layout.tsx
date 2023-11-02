import SoloLayout from "@/components/SoloLayout"
import { FunctionComponent } from "react"

const layout: FunctionComponent<LayoutProps> = ({ children, params }) => {
	return <SoloLayout id={params.id}>{children}</SoloLayout>
}

export default layout

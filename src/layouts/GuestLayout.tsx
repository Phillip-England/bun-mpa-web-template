
import { GuestBanner } from "../components/Navigation"

type GuestLayoutProps = {
	title: string
	banner: string
	subBanner: string
	children: JSX.Element
}

export const GuestLayout = ({title, banner, subBanner, children}: GuestLayoutProps): JSX.Element => {
	return (
		<html lang="en">
			<head>
				<link rel="stylesheet" href="/public/styles/output.css"></link>
				<title>{title}</title>
			</head>
			<body>
				<GuestBanner banner={banner} subBanner={subBanner} />
				{children}
			</body>
		</html>
	)
}
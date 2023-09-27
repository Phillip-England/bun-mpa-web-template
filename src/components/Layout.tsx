
import { Banner } from "./Banner"

type GuestLayoutProps = {
	title: string
	banner: string
	children: JSX.Element
}

export const Layout = ({title, banner, children}: GuestLayoutProps): JSX.Element => {
	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"></meta>
				<link rel="stylesheet" href="/public/styles/output.css"></link>
				<title>{title}</title>
			</head>
			<body>
				<Banner banner={banner} />
				{children}
			</body>
		</html>
	)
}
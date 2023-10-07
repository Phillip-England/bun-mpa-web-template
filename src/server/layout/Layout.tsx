import { Banner } from "../component/Banner"



type LayoutProps = {
	title: string
	path: string
	children: JSX.Element
}

export const Layout = ({title, path, children}: LayoutProps): JSX.Element => {
	let fontAwesomeKey: string | undefined = Bun.env.FONTAWESOME_KEY
	console.log(fontAwesomeKey)

	if (fontAwesomeKey == undefined) {
		fontAwesomeKey = ''
		console.error('FONTAWESOME_KEY not provided in .env')
	}
	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"></meta>
				<link rel="stylesheet" href="/public/css/output.css"></link>
				<script src={fontAwesomeKey} crossorigin="anonymous"></script>
				<title>{title}</title>
			</head>
			<body class='bg-black text-white'>
				<Banner path={path} />
				{children}
				<script src='/public/js/client.js'></script>
			</body>
		</html>
	)
}
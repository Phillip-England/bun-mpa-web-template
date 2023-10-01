
import { bannerID, bannerBarsIconID, bannerCloseIconID, navMenuID, navMenuOverlayID } from "./config"

// Layout -------------------------------------------------------------------------

type LayoutProps = {
	title: string
	path: string
	bannerText: string
	children: JSX.Element
}

export const Layout = ({title, bannerText, children, path}: LayoutProps): JSX.Element => {
	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"></meta>
				<link rel="stylesheet" href="/public/css/output.css"></link>
				<script src="https://unpkg.com/hyperscript.org@0.9.11"></script>
				<script src="https://unpkg.com/htmx.org@1.9.6"></script>
				<script src="https://kit.fontawesome.com/ef0709a418.js" crossorigin="anonymous"></script>
				<title>{title}</title>
			</head>
			<body hx-boost='true'>
				<Banner text={bannerText} />
				<div class='h-20'></div>
				<NavMenu path={path} />
				<NavMenuOverlay />
				{children}
				<script src='/public/js/client.js'></script>
			</body>
		</html>
	)
}

// Banner -------------------------------------------------------------------------

type BannerProps = {
	text: string
}

const Banner = ({text}: BannerProps): JSX.Element => {
	return (
		<div id={bannerID} class={`bg-white h-20 flex flex-row items-center justify-between fixed top-0 w-full z-50`}>
			<h1 class='text-xl p-6'>Chick-fil-A Midtown</h1>
			<div id={bannerBarsIconID} class='p-6'>
				<i class='fa-solid fa-lg fa-bars'></i>
			</div>
			<div id={bannerCloseIconID} class='p-6 hidden'>
				<i class='fa-solid fa-lg fa-x'></i>
			</div>
		</div>
	)
} 

// NavMenu -------------------------------------------------------------------------

type NavMenuProps = {
	path: string
}

const NavMenu = ({path}: NavMenuProps): JSX.Element => {
	return (
		<nav id={navMenuID} class='fixed top-20 w-3/5 bg-white z-50 h-screen hidden'>
			<ul>
				<NavLink path={path} href='/' text='Home' />
				<NavLink path={path} href='/about' text='About' />
			</ul>
		</nav>
	)
}

// NavLink ---------------------------------------------------------------------------

type NavLinkProps = {
	text: string
	path: string
	href: string
}

const NavLink = ({path, href, text}: NavLinkProps): JSX.Element => {
	if (path == href) {
		return (
			<li class='bg-gray-100 border flex'>
				<a href={href} class='p-4 w-full'>{text}</a>
			</li>
		)
	}
	return (
		<li class='flex border'>
			<a href={href} class='p-4 w-full'>{text}</a>
		</li>
	)
}

// NavMenuOverlay -------------------------------------------------------------------------

const NavMenuOverlay = (): JSX.Element => {
	return (
		<div id={navMenuOverlayID} class='opacity-50 absolute h-screen top-0 w-screen bg-black z-30 hidden'></div>
	)
}


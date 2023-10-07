/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

// pulling in our application IDs and class names
import { bannerBarsIconID, bannerXIconID, navMenuID, navOverlayID, TopBarID } from "../config/dom"


//=======================================================
// CLIENT-SIDE ROUTER
//=======================================================

// a type to represent our client-side router
type Router = {
	[path: string]: () => void;
}


// our applications routes
const router: Router = {
	"/": () => {loginPage()},
	"/vison": () => {visionPage()},
	"/score/cem": () => {cemPage()},
	"/score/sales": () => {salesPage()},
	"/score/talent": () => {talentPage()},
	"/score/finance": () => {financePage()},
}

//=======================================================
// CONTROLLER FUNCTIONS FOR EACH ROUTE
//=======================================================

const loginPage = () => {
}

const visionPage = () => {
	const banner = new Banner()
}

const cemPage = () => {
	const banner = new Banner()
}

const salesPage = () => {
	const banner = new Banner()
}

const talentPage = () => {
	const banner = new Banner()
}

const financePage = () => {
	const banner = new Banner()
}

//=======================================================
// CLIENT-SIDE COMPONENTS
//=======================================================

class Banner {
	topBar: Element
	x: Element
	bars: Element
	menu: Element
	overlay: Element
	constructor() {
		this.topBar = document.getElementById(TopBarID) as Element
		this.x = document.getElementById(bannerXIconID) as Element
		this.bars = document.getElementById(bannerBarsIconID) as Element
		this.menu = document.getElementById(navMenuID) as Element
		this.overlay = document.getElementById(navOverlayID) as Element
		this.hook()
	}
	hook = () => {
		this.x.addEventListener('click', () => {
			this.close()
		})
		this.bars.addEventListener('click', () => {
			this.open()
		})
		this.overlay.addEventListener('click', () => {
			this.close()
		})
	}
	open = () => {
		this.x.classList.remove('hidden')
		this.bars.classList.add('hidden')
		this.menu.classList.remove('hidden')
		this.overlay.classList.remove('hidden')
	}
	close = () => {
		this.x.classList.add('hidden')
		this.bars.classList.remove('hidden')
		this.menu.classList.add('hidden')
		this.overlay.classList.add('hidden')
	}
}



//=======================================================
// CLIENT-SIDE ENTRY-POINT
//=======================================================

// executing our route function
const routeFunc = router[window.location.pathname]
routeFunc()
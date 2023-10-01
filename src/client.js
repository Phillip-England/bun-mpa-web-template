/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { bannerID, bannerBarsIconID, bannerCloseIconID, navMenuID, navMenuOverlayID  } from './config'


// DOM manipulation ------------------------------------------

// quick querySelector
const qs = (selector) => {
	let element = document.querySelector(selector)
	return element
}

// quick querySelectorAll
const qsa = (selector) => {
	let elements = document.querySelectorAll(selector)
	return elements
}

// add a single class to a single element
const addClass = (element, className) => {
	element.classList.add(className)
}

// remove a single class from a single element
const removeClass = (element, className) => {
	element.classList.remove(className)
}

// add multiple classes to a single element
const addClasses = (element, classNames) => {
	classNames.forEach(className => {
		element.classList.add(className)
	});
}

// remove multiple classes from a single element
const removeClasses = (element, classNames) => {
	classNames.forEach(className => {
		element.classList.remove(className)
	});
}

// show a hidden element
const show = (element) => {
	element.classList.remove('hidden')
}

// hide a visible element
const hide = (element) => {
	element.classList.add('hidden')
}

// show many hidden elements
const showMany = (elements) => {
	elements.forEach(element => {
		element.classList.remove('hidden')
	});
}

// hide many hidden elements
const hideMany = (elements) => {
	elements.forEach(element => {
		element.classList.add('hidden')
	});
}

// DOM Elements -----------------------------------------------

let banner = qs(`#${bannerID}`)
let bannerBarsIcon = qs(`#${bannerBarsIconID}`)
let bannerCloseIcon = qs(`#${bannerCloseIconID}`)
let navMenu = qs(`#${navMenuID}`)
let navMenuOverlay = qs(`#${navMenuOverlayID}`)

// Event Controllers ------------------------------------------

const openNavMenu = () => {
	hideMany([bannerBarsIcon])
	showMany([bannerCloseIcon, navMenu, navMenuOverlay])
}

const closeNavMenu = () => {
	showMany([bannerBarsIcon])
	hideMany([bannerCloseIcon, navMenu, navMenuOverlay])
}

// Event Handlers ---------------------------------------------

// open nav menu when clicking the bars
bannerBarsIcon.addEventListener('click', () => {
	openNavMenu()
})

// close the nav menu when clicking the close icon
bannerCloseIcon.addEventListener('click', () => {
	closeNavMenu()
})

// close the nav menu when clicking the nav menu overlay
navMenuOverlay.addEventListener('click', () => {
	closeNavMenu()
})








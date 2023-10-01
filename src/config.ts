
// Application IDs
export const bannerID = 'banner'
export const bannerBarsIconID = 'banner-bars-icon'
export const bannerCloseIconID = 'banner-x-icon'
export const navMenuOverlayID = 'nav-menu-overlay'
export const navMenuID = 'nav-menu'

// App Colors
export const color1 = '#2D3047'
export const color2 = '#93B7BE'
export const color3 = '#E0CA3C'
export const color4 = '#A799B7'
export const color5 = '#048A81'

// writes colors to tailwind.config.js
export const configTailwindColors = async () => {
	const file = Bun.file('./tailwind.config.js')
	const text = await file.text()
	const startIndexOfColors = text.indexOf('colors: {')
	let endIndexOfColors = 0
	for (let i = 0; i < text.length; i++) {
		if (i > startIndexOfColors && text[i] == '}') {
			endIndexOfColors = i+1
			break
		}
	}
	const newColorConfig = `colors: {
				"color1": "${color1}",
				"color2": "${color2}",
				"color3": "${color3}",
				"color4": "${color4}",
				"color5": "${color5}",
	}`
	let newfile = `${text.slice(0,startIndexOfColors)}${newColorConfig}${text.slice(endIndexOfColors,text.length)}`
	await Bun.write(file, newfile)
}
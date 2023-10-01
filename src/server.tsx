import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import { staticPlugin } from '@elysiajs/static'
import { Layout } from './components'
import { configTailwindColors } from './config'

// Setting up Server

const app = new Elysia()
app.use(html())
app.use(staticPlugin())
await configTailwindColors()

// Routes

app.get('/', (context) => {
	return (
		<Layout 
			path={context.path}
			title="Home Page"
			bannerText='Chick-fil-A Midtown'
			children={
				<>
				</>
			}	
		/>
	)
})

app.get('/about', (context) => {
	return (
		<Layout 
			path={context.path}
			title="About Page"
			bannerText='Chick-fil-A Midtown'
			children={
				<>
				</>
			}	
		/>
	)
})

// Running

app.listen(8080)
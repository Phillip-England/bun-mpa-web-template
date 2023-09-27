
// global imports
import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import { staticPlugin } from '@elysiajs/static'

// local imports
import { Layout } from './components/Layout'

// building our elysia web server
const app = new Elysia()

// using the html plugin to add "Content-Type: text/html; charst=utf-8" to each request
app.use(html())

// making use of the "./public" folder to server stati files
app.use(staticPlugin())

// an example index route which uses the Layout component and it's children to render the client-side view
app.get('/', () => (
    <Layout 
        title="Untitled" 
        banner="I am part of the layout"  
        children={
            <>
                <h1 class='p-4 text-2xl'>I am not part of the layout</h1>
            </>
        } />
    ))


// serving our application on port 8080
app.listen(8080)
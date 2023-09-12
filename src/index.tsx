// app.tsx
import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'

const app = new Elysia()

app.use(html())

app.get('/', () => (
        <html lang="en">
            <head>
                <title>Hello World</title>
            </head>
            <body>
                <h1>Hello World</h1>
            </body>
        </html>
    ))


    app.listen(8080)
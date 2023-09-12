// app.tsx
import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import { HelloWorld } from './components/HelloWorld'

const app = new Elysia()

app.use(html())

app.get('/', () => (
        <HelloWorld name="Bob" age="32" />
    ))


    app.listen(8080)
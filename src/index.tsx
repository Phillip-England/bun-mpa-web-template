// app.tsx
import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import { staticPlugin } from '@elysiajs/static'


import { GuestLayout } from './layouts/GuestLayout'

const app = new Elysia()

app.use(html())
app.use(staticPlugin())

app.get('/', () => (
        <GuestLayout title="CFA Tools" banner="Chick-fil-A Midtown" subBanner='Having a positive influence on all who come into contact with Chick-fil-A' children={
            <></>
        } />
    ))


    app.listen(8080)
# A Quickstart Template for MPA in Bun with Elsysia and JSX Components

## Client Side Component Build Tool Included
This project includes a client side build tool which is very useful for MPA development. You can build your JSX components on the server, and the build tool will generate client side components to match. These client side components contain all the IDs, class names, DOM elements found within your server components. This enables us to quickly grab the components we need in our client side code to hook event handlers, animations, ect. 

## In Development
This tool is in active development. For now it lives within this MPA template, but I do plan to release it as a stand alone build tool for anyone interested in following along.

## Getting Started
To get started with this template, simply paste this command into your terminal:
```bash
git clone https://github.com/phillip-england/bun-mpa-web-template <your-project-name>
```
You'll then need to install all the required dependancies. You can do this by running the following command from the root of your project:
```bash
bun install
```
## Environment Variables
This project uses fontawesome for icons. Provide a FONT_AWESOME_KEY in a .env file found in the root of your project to opt in. To get your own key, go to fontawesome and get a script tag to use their icons. In the script tag, the src attribute is the key. Place this src attribute in the .env file.

## Development
Three package.json scripts exist within this project. Here is a breakdown of how they all work.

To start tailwind and watch for changes to class names in your project run:
```bash
bun run tailwind
```

To bundle all your client side code into a single .js file, run
```bash
bun run bundle
```

To start the development server run:
```bash
bun run dev
```

Open http://localhost:8080/ with your browser to see the result.

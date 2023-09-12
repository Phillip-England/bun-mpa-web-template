type HelloWorldProps = {
	name: string
	age: string
}

export const HelloWorld = ({name, age}: HelloWorldProps) => {
	return (
		<html lang="en">
			<head>
				<title>Hello World</title>
			</head>
			<body>
				<h1>Hello World</h1>
				<p>My name is {name} and I am {age} years old</p>
			</body>
		</html>
	)
}
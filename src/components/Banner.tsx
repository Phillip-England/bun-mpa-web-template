

type BannerProps = {
	banner: string
}

export const Banner = ({banner}: BannerProps): JSX.Element => {
	return (
		<div>
			<h1 class="font-serif shadow text-lg p-4">{banner}</h1>
		</div>
	)
}


type GuestBannerProps = {
	banner: string
	subBanner: string
}

export const GuestBanner = ({banner, subBanner}: GuestBannerProps): JSX.Element => {
	return (
		<div>
			<h1 class="font-serif bg-red-500 text-lg">{banner}</h1>
			<p>{subBanner}</p>
		</div>
	)
}
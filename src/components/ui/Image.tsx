interface Iprops {
	imageURL: string;
	altText: string;
	className?: string;
	width?: number;
	height?: number;
}

const Image = ({ imageURL, altText, className, width, height }: Iprops) => {
	return (
		<img
			src={imageURL}
			alt={altText}
			loading='lazy'
			width={width}
			height={height}
			className={`block object-contain ${className || ""}`}
		/>
	);
};

export default Image;

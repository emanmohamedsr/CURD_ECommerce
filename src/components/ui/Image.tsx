interface Iprops {
	imageURL: string;
	altText: string;
	className?: string;
}

const Image = ({ imageURL, altText, className }: Iprops) => {
	return <img src={imageURL} alt={altText} className={className} />;
};

export default Image;

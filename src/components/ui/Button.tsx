import { memo, type ReactNode } from "react";

interface Iprops extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	className?: string;
	width?: "w-full" | "w-fit";
}

const Button = ({ children, className, width = "w-fit", ...rest }: Iprops) => {
	return (
		<button
			className={`${className} ${width} p-2 text-white rounded-md cursor-pointer transition-opacity duration-300 hover:opacity-85 focus:outline-none`}
			{...rest}>
			{children}
		</button>
	);
};

export default memo(Button);

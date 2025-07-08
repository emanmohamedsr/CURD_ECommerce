import type { IFormInput } from "../../interfaces";

interface Iprops extends React.InputHTMLAttributes<HTMLInputElement> {
	input: IFormInput;
}

const Input = ({ input, ...rest }: Iprops) => {
	const { id, name, type, label } = input;
	return (
		<input
			type={type}
			id={id}
			name={name}
			placeholder={`Enter ${label.toLowerCase()}`}
			className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2  focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
			{...rest}
		/>
	);
};

export default Input;

interface Iprops {
	msg: string;
}

const ErrorMessage = ({ msg }: Iprops) => {
	return msg ? <span className='block text-red-700 text-xs'>{msg}</span> : null;
};

export default ErrorMessage;

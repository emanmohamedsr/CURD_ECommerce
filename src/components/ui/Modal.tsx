import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { memo, type ReactNode } from "react";

interface IModalProps {
	isOpen: boolean;
	close: () => void;
	title?: string;
	children: ReactNode;
}

const Modal = ({ isOpen, close, title, children }: IModalProps) => {
	return (
		<>
			<Dialog
				open={isOpen}
				as='div'
				className='relative z-10 focus:outline-none'
				onClose={close}>
				<div className='fixed inset-0 z-10 w-screen overflow-y-auto bg-black/20 backdrop-blur-xs'>
					<div className='flex min-h-full items-center justify-center p-4'>
						<DialogPanel
							transition
							className='w-full max-w-md rounded-xl bg-white p-6 duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0'>
							{title && (
								<DialogTitle
									as='h3'
									className='text-base/7 text-gray-700 font-bold '>
									{title}
								</DialogTitle>
							)}

							<div className='mt-4'>{children}</div>
						</DialogPanel>
					</div>
				</div>
			</Dialog>
		</>
	);
};

export default memo(Modal);

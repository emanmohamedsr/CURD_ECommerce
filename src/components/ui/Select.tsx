"use client";

import {
	Label,
	Listbox,
	ListboxButton,
	ListboxOption,
	ListboxOptions,
} from "@headlessui/react";

import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

interface OptionItem {
	id: number;
	name: string;
	imageURL: string;
}

interface IProps<T extends OptionItem> {
	selectedItem: T;
	setSelectedItem: (item: T) => void;
	title: string;
	objs: T[];
}

const Select = <T extends OptionItem>({
	selectedItem,
	setSelectedItem,
	title,
	objs,
}: IProps<T>) => {
	return (
		<Listbox value={selectedItem} onChange={setSelectedItem}>
			<Label className='block text-sm/6 font-medium text-gray-700'>
				{title}
			</Label>
			<div className='relative mt-2'>
				<ListboxButton className='grid w-full cursor-default grid-cols-1 rounded-md bg-white pr-2 pl-3 py-2 text-left text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'>
					<span className='col-start-1 row-start-1 flex items-center gap-3 pr-6'>
						<img
							alt={selectedItem.name}
							src={selectedItem.imageURL}
							className='size-5 shrink-0 rounded-full'
						/>
						<span className='block truncate'>{selectedItem.name}</span>
					</span>
					<ChevronUpDownIcon
						aria-hidden='true'
						className='col-start-1 row-start-1 size-5 self-center justify-self-end text-gray-500 sm:size-4'
					/>
				</ListboxButton>

				<ListboxOptions className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm'>
					{objs.map((object) => (
						<ListboxOption
							key={object.id}
							value={object}
							className='group relative cursor-default py-2 pr-9 pl-3 text-gray-900 select-none data-focus:bg-indigo-700 data-focus:text-white'>
							<div className='flex items-center'>
								<img
									alt={object.name}
									src={object.imageURL}
									className='size-5 shrink-0 rounded-full'
								/>
								<span className='ml-3 block truncate font-normal group-data-selected:font-semibold'>
									{object.name}
								</span>
							</div>

							<span className='absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-700 group-not-data-selected:hidden group-data-focus:text-white'>
								<CheckIcon aria-hidden='true' className='size-5' />
							</span>
						</ListboxOption>
					))}
				</ListboxOptions>
			</div>
		</Listbox>
	);
};

export default Select;

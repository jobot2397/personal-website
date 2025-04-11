import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useEffect, useRef, useState } from 'react'

export default function Dropdown() {

    const [open, setOpen] = useState(false);

    const wrapperRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const dropdownItems = [
        {
            title: "TEST 1"
        },
        {
            title: "TEST 2"
        }
    ]

    return (
        <div ref={wrapperRef}>
            <Menu as="div" className="relative inline-block text-left" >
                <div>
                    <MenuButton className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-lg bg-transparent px-2 py-1 hover:bg-secondary-grey"
                        onClick={() => { setOpen(!open) }}>
                        <div className=" text-text font-sans font-semibold text-[18px] ">
                            JoeGPT
                        </div>
                        <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-text" />
                    </MenuButton>
                </div>

                <MenuItems
                    transition
                    className="absolute left-0 z-10 mt-2 w-36 origin-top-left divide-y divide-border rounded-md bg-transparent ring-1 ring-border transition 
                focus:outline-hidden 
                data-closed:scale-95 data-closed:transform data-closed:opacity-0 
                data-enter:duration-100 data-enter:ease-out  
                data-leave:duration-75 data-leave:ease-in"
                >
                    {open &&
                        <div >
                            {dropdownItems.map((dropdownItem, index) => {
                                return (
                                    <div key={index}>
                                        <MenuItem>
                                            <a
                                                href="#"
                                                className="block px-4 py-2 text-sm text-text data-focus:bg-secondary-grey data-focus:outline-hidden"
                                                onClick={() => { setOpen(false) }}
                                            >
                                                {dropdownItem.title}
                                            </a>
                                        </MenuItem>
                                        {/* Add divider after each item except the last one */}
                                        {index < dropdownItems.length - 1 && (
                                            <div className="h-px bg-border"></div>
                                        )}
                                    </div>
                                );
                            })}

                        </div>
                    }
                </MenuItems>
            </Menu>
        </div>
    )
}

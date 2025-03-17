import { CaretDownIcon } from "@radix-ui/react-icons";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as React from "react";
import classNames from "classnames";
import Image from "next/image";
import logoImage from "@/../public/images/logo2.png";

export default function NavBar() {
  return (
    <NavigationMenu.Root className="relative z-10 flex w-[100%] justify-center font-delius">
      <NavigationMenu.List className="center m-0 flex list-none rounded-md bg-[#F3E5DA] p-1 shadow-[0_2px_10px] shadow-[#815E5B]">
        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="block select-none rounded px-3 py-2 text-[16px] font-medium leading-none text-[#815E5B] no-underline outline-none hover:bg-[#f3b9c7] hover:bg-opacity-30 focus:shadow-[0_0_0_2px] focus:shadow-[#f3b9c7]"
            href="/book"
          >
            Books
          </NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="block select-none rounded px-3 py-2 text-[16px] font-medium leading-none text-[#815E5B] no-underline outline-none hover:bg-[#f3b9c7] hover:bg-opacity-30 focus:shadow-[0_0_0_2px] focus:shadow-[#f3b9c7]"
            href="/genres"
          >
            Genres
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[16px] font-medium leading-none text-[#815E5B] no-underline outline-none transition-all duration-300 ease-in-out hover:bg-[#f3b9c7] hover:bg-opacity-80 focus:shadow-[0_0_0_2px] focus:shadow-[#f3b9c7]">
            Create{" "}
            <CaretDownIcon
              className="relative top-px text-[#815e5b] transition-transform duration-200 ease-in group-data-[state=open]:-rotate-180"
              aria-hidden
            />
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute bg-[#F3E5DA] rounded-lg left-0 top-12 w-full data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft sm:w-auto">
            <ul className="one m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr] font-noto-serif-display">
              <li className="row-span-3 grid">
                <NavigationMenu.Link asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[#F3B9C7] to-[#F3DDCD] p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px] focus:shadow-[#815E5B]"
                    href="/create_book"
                  >
                    <Image
                      src={logoImage}
                      aria-hidden
                      className=" h-[150px]"
                      alt="Logo"
                    />
                    <div className="mb-[7px] mt-4 text-[18px] font-medium leading-[1.2] text-[#170312]">
                      Weave A Fable
                    </div>
                    <p className="text-[14px] leading-[1.3] text-[#8A3033] font-delius">
                      Spin your tale, shape your legacy.
                    </p>
                  </a>
                </NavigationMenu.Link>
              </li>
              <ListItem
                href="/update_book"
                title="Edit Book"
                className="text-[#815e5b] font-delius transition-all duration-300 ease-in-out hover:bg-[#f3b9c7] hover:bg-opacity-80"
              >
                Edit or Update your Books
              </ListItem>
              <ListItem
                href="/profile"
                title="Profile"
                className="text-[#815e5b] font-delius transition-all duration-300 ease-in-out hover:bg-[#f3b9c7] hover:bg-opacity-80"
              >
                View your profile
              </ListItem>
              <ListItem
                href="/library"
                title="Library"
                className="text-[#815e5b] font-delius transition-all duration-300 ease-in-out hover:bg-[#f3b9c7] hover:bg-opacity-80"
              >
                View your library
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
const ListItem = React.forwardRef(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames(
            "block select-none rounded-md p-3 text-[15px] leading-none no-underline outline-none transition-colors hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-violet7",
            className
          )}
          {...props}
          ref={forwardedRef}
        >
          <div className="mb-[5px] font-medium leading-[1.2] text-violet12">
            {title}
          </div>
          <p className="leading-[1.4] text-mauve11">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

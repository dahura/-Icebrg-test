import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@shadcn/components/ui/avatar";
import { FC, useRef, useState } from "react";
import { useAuth } from "../auth/useAuth";
import { useOnClickOutside } from "../hooks/hadleClickOutside";
import { Button } from "@shadcn/components/ui/button";
import { LogOut } from "lucide-react";

export const UserAvatar: FC = () => {
  const { user, logOut } = useAuth();
  const [openSubMenu, setOpenSubMenu] = useState(false);
  const submenu = useRef<HTMLUListElement>(null);
  const handleOpen = () => setOpenSubMenu(true);
  const hadleClose = () => setOpenSubMenu(false);

  useOnClickOutside(submenu, hadleClose);

  return (
    <div className="absolute right-12 top-6 flex gap-4 items-center h-fit w-fit">
      <div className="relative">
        <Avatar className="h-10 w-10 mt-2 mr-2" onClick={handleOpen}>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        {openSubMenu && (
          <ul
            ref={submenu}
            className="shadow-sm shadow-lime-400 border pr-16 py-2 px-2 rounded absolute right-0 top-0 flex flex-col "
          >
            <li className="text-sm text-green-700"> {user.email}</li>
            <li className="font-bold flex">{user.name}</li>
            <li className="items-start">
              <Button className="mt-2 text-xs space-x-2" onClick={logOut}>
                <LogOut className="h-4 w-4" /> <span>Log Out</span>
              </Button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

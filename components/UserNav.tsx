import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { MenuIcon } from "lucide-react";
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from 'next/link'
import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";

export async function UserNav(){
    const{getUser} = getKindeServerSession()
    const user = await getUser()
    return(
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className="rounded-full border px-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
                <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5"/>
                <img src={user?.picture ?? 'https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg'}
                alt="Image for the user"
                className="rounded-full h-8 w-8 hidden lg:block"/>
                </div>
                
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
            {user ? (<>
                    <DropdownMenuItem>
                        <form className = "w-full">
                            <button type = "submit" className="w-full text-start">
                                Airbnb your Home
                            </button>
                        </form>
                    </DropdownMenuItem>


                    <DropdownMenuItem>
                        <Link href="/my-homes" className="w-full"> My Listenings</Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <Link href="/favourites" className="w-full"> My Favourits</Link>
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                        <Link href="/resevations" className="w-full"> My Resevations</Link>
                    </DropdownMenuItem>


                    <DropdownMenuSeparator />

                    

                    <DropdownMenuItem>
                    <LogoutLink className="w-full">Logout</LogoutLink>
                    </DropdownMenuItem>
                    </>
            
            ):(
                <>
                 <DropdownMenuItem>
                <RegisterLink className="w-full">Register</RegisterLink>
                </DropdownMenuItem>
                <DropdownMenuItem>
                <LoginLink className="w-full">Login</LoginLink>
                </DropdownMenuItem>

                </>
            )}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
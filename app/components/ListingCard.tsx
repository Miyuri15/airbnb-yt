import Image from "next/image";
import { useCountries } from "../lib/getCountries";
import Link from 'next/link'
import { AddToFavouriteButton } from "./Submitbuttons";
import { addToFavourite, deleteFromFavourite } from "../actions";
import {DeleteFromFavouriteButton} from  "./Submitbuttons"


interface iAppProps{
    imagePath: string;
    description:string;
    location:string;
    price:number;
    userId:string | undefined;
    isInFavouriteList:boolean;
    favouriteId:string;
    homeId:string;
    pathName:string;
}



export default function ListingCard({
    description,
    imagePath,
    location,
    price,
    userId,
    favouriteId,
    isInFavouriteList,
    homeId,
    pathName,
}: iAppProps){

    const {getCountryByValue} = useCountries()
    const country = getCountryByValue(location)

    return(
        <div className="flex flex-col ">
            <div className="relative h-72">
                <Image src={`https://oiivzpifxsejdbbqtocf.supabase.co/storage/v1/object/public/images/${imagePath}`} 
                alt="Image of house" 
                fill
                className="rounded-lg h-4 object-cover "
                />
                {userId && (
                    <div className="z-10 absolute top-2 right-2">
                    {isInFavouriteList ? (
                    <form action={deleteFromFavourite}>
                        <input type="hidden" name="favouriteId" value={favouriteId} />
                        <input type="hidden" name="userId" value={userId} />
                        <input type="hidden" name="pathName" value={pathName} />

                    <DeleteFromFavouriteButton/>
                    </form>
                    ):(
                    <form action={addToFavourite}>
                        <input type="hidden" name="homeId" value={homeId} />
                        <input type="hidden" name="userId" value={userId} />
                        <input type="hidden" name="pathName" value={pathName} />
                        <AddToFavouriteButton/>
                    </form>
                    )}
                    </div>
                )}
            </div>
            <Link href={"/"} className="mt-2">
             <h3 className="font-medium text-base">
                {country?.flag} {country?.label} / {country?.region}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
                <p className="pt-2 text-muted-foreground">
                   <span className="font-medium text-black">${price} </span> 
                   Night
                    </p>
            </Link>

        </div>
    )
}
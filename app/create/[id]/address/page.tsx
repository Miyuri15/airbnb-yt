'use client'

import { createLocation } from "@/app/actions";
import { CreationBottomBar } from "@/app/components/CreationBottomBar";
import { useCountries } from "@/app/lib/getCountries";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";
import { useState, useRef, useEffect } from "react";
import { useParams } from "next/navigation";

export default function AddressRoute() {
    const params = useParams();
    const { getAllCountries } = useCountries();
    const [locationValue, setLocationValue] = useState('');

    const homeIdRef = useRef<HTMLInputElement>(null);
    const countryValueRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (homeIdRef.current) {
            homeIdRef.current.value = params.id as string;
        }
    }, [params.id]);

    useEffect(() => {
        if (countryValueRef.current) {
            countryValueRef.current.value = locationValue;
        }
    }, [locationValue]);

    const LazyMap = dynamic(() => import('@/app/components/Map'), {
        ssr: false,
        loading: () => <Skeleton className="h-[50vh] w-full" />
    });

    return (
        <>
            <div className="w-3/5 mx-auto">
                <h2 className="text-3xl font-semibold tracking-tight transition-colors mb-10">Where is your home located?</h2>
            </div>

            <form action={createLocation}>
                <input type="hidden" name="homeId" ref={homeIdRef} />
                <input type="hidden" name="countryValue" ref={countryValueRef} />

                <div className="w-3/5 mx-auto mb-36">
                    <div className="mb-5">
                        <Select required onValueChange={(value) => setLocationValue(value)}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a country" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Countries</SelectLabel>
                                    {getAllCountries().map((item) => (
                                        <SelectItem key={item.value} value={item.value}>
                                            {item.flag} {item.label} / {item.region}
                                        </SelectItem>
                                    ))}
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    {/* <LazyMap locationValue={locationValue} /> */}
                </div>
                <CreationBottomBar />
            </form>
        </>
    );
}
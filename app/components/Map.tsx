'use client'

import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useCountries } from '../lib/getCountries';
import { icon } from 'leaflet';
import { useEffect, useRef, useState } from 'react';
import * as L from 'leaflet';

const ICON = icon({
    iconUrl: "https://images.vexels.com/media/users/3/131261/isolated/preview/b2e48580147ca0ed3f970f30bf8bb009-karten-standortmarkierung.png",
    iconSize: [50, 50],
});

interface Country {
    latLang: [number, number];
}

export default function Map({ locationValue }: { locationValue: string }) {
    const { getCountryByValue } = useCountries();
    const [latLang, setLatLang] = useState<[number, number]>([0, 0]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const mapRef = useRef<L.Map | null>(null);
    const [mapInitialized, setMapInitialized] = useState(false);

    useEffect(() => {
        if (locationValue) {
            const country = getCountryByValue(locationValue);
            if (country?.latLang) {
                setLatLang(country.latLang);
                setError(null);
                if (mapRef.current) {
                    mapRef.current.setView(country.latLang, 8);
                }
            } else {
                setError('Location not found');
            }
            setLoading(false);
        } else {
            setLoading(false);
        }
    }, [locationValue, getCountryByValue]);

    // Cleanup effect
    useEffect(() => {
        return () => {
            if (mapRef.current) {
                mapRef.current.remove();
                mapRef.current = null;
                setMapInitialized(false);
            }
        };
    }, []);

    if (loading) return <div>Loading map...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="h-[50vh] rounded-lg relative z-0">
            <MapContainer
                key={locationValue} // Force remount when location changes
                scrollWheelZoom={false}
                center={latLang}
                zoom={8}
                ref={(map) => {
                    if (map && !mapInitialized) {
                        // Clean up previous instance if exists
                        if (mapRef.current) {
                            mapRef.current.remove();
                        }
                        
                        mapRef.current = map;
                        setMapInitialized(true);
                        
                        map.on('load', () => {
                            console.log('Map loaded successfully');
                        });
                    }
                }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={latLang} icon={ICON} />
            </MapContainer>
        </div>
    );
}
import React, { useEffect, useState } from 'react';

const Location = () => {
    const [location, setLocation] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const id = navigator.geolocation.watchPosition(
            (position) => {
                setLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            }, 
            (err) => {
                setError(err);
            },
        );

        return () => {
            navigator.geolocation.clearWatch(id);
        }
    }, [setError, setLocation]);

    return (
        <div>
            {error && (
                <div className="error">{error.message}</div>
            )}
            {location && (
                <div className="error">
                    Your position: ({location.lat}, {location.lng})    
                </div>
            )}
        </div>
    )
}

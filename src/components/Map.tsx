
import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MapPin, Navigation, Waves } from 'lucide-react';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [mapLoaded, setMapLoaded] = useState(false);
  const [boatLocation] = useState({
    lat: 60.3973,
    lng: 5.3247,
    heading: 45,
    speed: 12
  });

  const loadMapboxMap = async () => {
    if (!mapContainer.current || !mapboxToken) return;

    try {
      // Dynamically import mapbox-gl
      const mapboxgl = await import('mapbox-gl');
      
      // Import CSS
      await import('mapbox-gl/dist/mapbox-gl.css');
      
      (mapboxgl.default as any).accessToken = mapboxToken;
      
      const map = new (mapboxgl.default as any).Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [boatLocation.lng, boatLocation.lat],
        zoom: 13,
        pitch: 45,
      });

      // Add navigation controls
      map.addControl(
        new (mapboxgl.default as any).NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Add boat marker when map loads
      map.on('load', () => {
        // Add boat marker
        const boatMarker = new (mapboxgl.default as any).Marker({
          element: createBoatMarker(),
          anchor: 'center'
        })
        .setLngLat([boatLocation.lng, boatLocation.lat])
        .addTo(map);

        // Add Bryggen marker
        const bryggenMarker = new (mapboxgl.default as any).Marker({
          color: '#3b82f6'
        })
        .setLngLat([5.3247, 60.3973])
        .setPopup(new (mapboxgl.default as any).Popup().setHTML('<h3>Bryggen Harbor</h3><p>Waterride Base Station</p>'))
        .addTo(map);
        
        setMapLoaded(true);
      });

      // Cleanup function
      return () => {
        map.remove();
      };
    } catch (error) {
      console.error('Failed to load Mapbox:', error);
    }
  };

  const createBoatMarker = () => {
    const el = document.createElement('div');
    el.className = 'boat-marker';
    el.innerHTML = `
      <div style="
        width: 40px;
        height: 40px;
        background: linear-gradient(45deg, #3b82f6, #06b6d4);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        border: 3px solid white;
        transform: rotate(${boatLocation.heading}deg);
      ">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
          <path d="M12 2L4 7L12 12L20 7L12 2Z"/>
          <path d="M4 7V17L12 22L20 17V7"/>
        </svg>
      </div>
    `;
    return el;
  };

  useEffect(() => {
    if (mapboxToken) {
      loadMapboxMap();
    }
  }, [mapboxToken]);

  return (
    <div className="space-y-6">
      {!mapboxToken && (
        <Card className="p-6 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
          <div className="text-center space-y-4">
            <MapPin className="h-12 w-12 text-blue-500 mx-auto" />
            <h3 className="text-lg font-semibold">Enter Mapbox Token</h3>
            <p className="text-sm text-muted-foreground">
              To display the real-time boat tracking map, please enter your Mapbox public token.
              You can get one for free at <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">mapbox.com</a>
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <Input
                type="text"
                placeholder="pk.eyJ1..."
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                className="flex-1"
              />
              <Button onClick={loadMapboxMap} disabled={!mapboxToken}>
                Load Map
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Boat Status */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="p-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <Waves className="h-5 w-5 text-blue-500 mr-2" />
            <span className="font-semibold">Status</span>
          </div>
          <div className="text-lg font-bold text-green-500">Active</div>
        </Card>
        
        <Card className="p-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <Navigation className="h-5 w-5 text-blue-500 mr-2" />
            <span className="font-semibold">Speed</span>
          </div>
          <div className="text-lg font-bold">{boatLocation.speed} knots</div>
        </Card>
        
        <Card className="p-4 text-center">
          <div className="flex items-center justify-center mb-2">
            <MapPin className="h-5 w-5 text-blue-500 mr-2" />
            <span className="font-semibold">Location</span>
          </div>
          <div className="text-lg font-bold">Bryggen Area</div>
        </Card>
      </div>

      {/* Map Container */}
      <Card className="overflow-hidden">
        <div 
          ref={mapContainer} 
          className="w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900"
        >
          {!mapboxToken && (
            <div className="flex items-center justify-center h-full">
              <div className="text-center text-muted-foreground">
                <MapPin className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p>Enter Mapbox token to view the map</p>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default Map;

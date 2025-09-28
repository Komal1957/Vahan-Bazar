import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card, CardContent } from "../ui/card";
import { MapPin, Search, Phone, Star } from "lucide-react";

//  Imports for interactive map
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-control-geocoder";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";

// Fix Leaflet default marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

//  Search control for map
function SearchControl() {
  const map = useMap();

  useEffect(() => {
    const geocoder = (L.Control as any).geocoder({
      defaultMarkGeocode: true,
    }).addTo(map);

    geocoder.on("markgeocode", function (e: any) {
      const bbox = e.geocode.bbox;
      const poly = L.polygon([
        bbox.getSouthEast(),
        bbox.getNorthEast(),
        bbox.getNorthWest(),
        bbox.getSouthWest(),
      ]);
      map.fitBounds(poly.getBounds());
    });
  }, [map]);

  return null;
}

const ShowroomsSection = () => {
  const dealers = [
    {
      name: "Speed Motors",
      rating: 4.8,
      distance: "2.3 km",
      phone: "+91 98765 43210",
      coords: [28.6139, 77.209], // Delhi
    },
    {
      name: "Elite Bikes",
      rating: 4.6,
      distance: "3.1 km",
      phone: "+91 98765 43211",
      coords: [19.076, 72.8777], // Mumbai
    },
    {
      name: "Future Wheels",
      rating: 4.9,
      distance: "4.2 km",
      phone: "+91 98765 43212",
      coords: [13.0827, 80.2707], // Chennai
    },
  ];

  // Open Google Maps directions
  const openDirections = (coords: [number, number]) => {
    const [lat, lng] = coords;
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`, "_blank");
  };

  return (
    <section className="py-20 bg-background text-foreground relative overflow-hidden">
      {/* background glow accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,215,0,0.05),transparent)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(184,134,11,0.05),transparent)]"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Showrooms & <span className="text-primary">Dealers</span> Near You
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Find authorized dealers and book test rides in your city
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Map */}
          <div className="relative">
            <div className="bg-background border border-muted rounded-3xl h-96 overflow-hidden shadow-xl">
              <MapContainer
                center={[20.5937, 78.9629]} // India center
                zoom={5}
                className="w-full h-full rounded-3xl"
              >
                <TileLayer
                  attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* Add search bar */}
                <SearchControl />

                {/* Dealer Markers */}
                {dealers.map((dealer, index) => (
                  <Marker key={index} position={dealer.coords as [number, number]}>
                    <Popup>
                      <b>{dealer.name}</b>
                      <br />
                      📞 {dealer.phone}
                      <br />
                      ⭐ {dealer.rating}
                      <br />
                      <Button
                        size="sm"
                        className="mt-2 bg-primary hover:bg-accent text-background"
                        onClick={() => openDirections(dealer.coords as [number, number])}
                      >
                        Get Directions
                      </Button>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>

            {/* City Search (UI only, Map handles real search) */}
            <div className="mt-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
                <Input
                  placeholder="Search city on map..."
                  className="pl-10 h-12 bg-background border border-muted text-foreground placeholder:text-muted"
                />
              </div>
            </div>
          </div>

          {/* Dealer List */}
          <div className="space-y-4">
            <h3 className="text-2xl font-heading font-semibold mb-6">
              Verified Dealers
            </h3>

            {dealers.map((dealer, index) => (
<<<<<<< HEAD
              <Card
                key={index}
                className="bg-background border border-muted hover:border-accent transition-all rounded-2xl"
              >
=======
              <Card key={index} className="bg-background bg-yellow-100 border border-muted hover:border-accent transition-all rounded-2xl">
>>>>>>> origin/features/pages
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-heading font-semibold mb-1">
                        {dealer.name}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-muted">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{dealer.rating}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span>{dealer.distance}</span>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-primary hover:text-accent"
                    >
                      <Phone className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      className="flex-1 border-muted text-foreground hover:border-accent hover:text-accent"
                      onClick={() => openDirections(dealer.coords as [number, number])}
                    >
                      Get Directions
                    </Button>
<<<<<<< HEAD
                    <Button
                    variant="outline"
                     className="flex-1 border-muted text-foreground hover:border-accent hover:text-accent">
=======
                    <Button variant="outline" className="flex-1 border-muted text-foreground hover:border-accent hover:text-accent">
>>>>>>> origin/features/pages
                      Book Test Ride
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Button
              variant="ghost"
              className="w-full text-primary hover:text-accent"
            >
              View All Dealers →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowroomsSection;

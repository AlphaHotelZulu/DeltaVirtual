"use client";

import { useEffect, useRef, useState } from "react";
import type { LatLngBoundsExpression, Map as LeafletMap } from "leaflet";

type Hub = {
  code: string;
  name: string;
  label: string;
  coordinates: [number, number];
};

const hubs: Hub[] = [
  { code: "ATL", name: "Atlanta", label: "Atlanta", coordinates: [33.6407, -84.4277] },
  { code: "BOS", name: "Boston", label: "Boston", coordinates: [42.3656, -71.0096] },
  { code: "DTW", name: "Detroit", label: "Detroit", coordinates: [42.2162, -83.3554] },
  { code: "LAX", name: "Los Angeles", label: "Los Angeles", coordinates: [33.9416, -118.4085] },
  {
    code: "MSP",
    name: "Minneapolis-St. Paul",
    label: "Minneapolis/St. Paul",
    coordinates: [44.8848, -93.2223],
  },
  { code: "LGA/JFK", name: "New York", label: "New York", coordinates: [40.7769, -73.874] },
  { code: "SEA", name: "Seattle", label: "Seattle/Tacoma", coordinates: [47.4502, -122.3088] },
  { code: "SLC", name: "Salt Lake City", label: "Salt Lake City", coordinates: [40.7899, -111.9791] },
];

const initialBounds: LatLngBoundsExpression = [
  [24.8, -126.5],
  [50.1, -66.4],
];

export function HubsExplorer() {
  const mapNodeRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const [selectedHub, setSelectedHub] = useState<string>("ATL");

  useEffect(() => {
    let mounted = true;

    async function initializeMap() {
      if (!mapNodeRef.current || mapRef.current) {
        return;
      }

      const leaflet = await import("leaflet");

      if (!mounted || !mapNodeRef.current) {
        return;
      }

      const map = leaflet.map(mapNodeRef.current, {
        attributionControl: true,
        maxBounds: [
          [12, -145],
          [62, -48],
        ],
        maxBoundsViscosity: 0.7,
        minZoom: 3,
        scrollWheelZoom: true,
        zoomControl: true,
      });

      leaflet
        .tileLayer(
          "https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png",
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
            maxZoom: 12,
          },
        )
        .addTo(map);

      hubs.forEach((hub) => {
        const marker = leaflet
          .circleMarker(hub.coordinates, {
            className: "hub-marker",
            color: "#ffffff",
            fillColor: "#ffffff",
            fillOpacity: 0.95,
            opacity: 0.95,
            radius: 5,
            weight: 2,
          })
          .addTo(map);

        marker
          .bindTooltip(hub.label, {
            className: "hub-tooltip",
            direction: "top",
            offset: [0, -7],
            opacity: 1,
            permanent: true,
          })
          .on("click", () => {
            setSelectedHub(hub.code);
            map.flyTo(hub.coordinates, 8, { duration: 0.8 });
          });
      });

      map.fitBounds(initialBounds, { padding: [24, 24] });
      mapRef.current = map;
    }

    initializeMap();

    return () => {
      mounted = false;
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  function selectHub(hub: Hub) {
    setSelectedHub(hub.code);
    mapRef.current?.flyTo(hub.coordinates, 8, { duration: 0.8 });
  }

  return (
    <div className="hubs-explorer">
      <div className="hub-map" ref={mapNodeRef} aria-label="Interactive map of Delta Virtual hubs" />

      <div className="hub-card-grid" aria-label="Delta Virtual hub cities">
        {hubs.map((hub) => (
          <button
            className={selectedHub === hub.code ? "hub-card active" : "hub-card"}
            key={hub.code}
            onClick={() => selectHub(hub)}
            type="button"
          >
            <span>{hub.code}</span>
            {hub.name}
          </button>
        ))}
      </div>
    </div>
  );
}

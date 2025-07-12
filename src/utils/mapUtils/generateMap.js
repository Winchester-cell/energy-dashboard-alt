import L from 'leaflet'

const generateMap = (mapRef, theme, darkmap, lightmap) => {

    mapRef.current = L.map('map').setView([37.235, 49.556], 14)

    L.tileLayer(
        `${theme.theme === 'dark' ? darkmap : lightmap}`
    ).addTo(mapRef.current);


    const rashtIndustrialAreaCoords = [
        [37.24393, 49.56492],
        [37.24379, 49.52809],
        [37.22534, 49.52895],
        [37.22513, 49.56603],
    ];

    L.polygon(rashtIndustrialAreaCoords, {
        color: '#86efac',
        weight: 2,
        fillColor: '#86efac',
        fillOpacity: 0.2,
    }).addTo(mapRef.current)
        .bindPopup("محدوده شهرک صنعتی رشت");


};





export default generateMap;

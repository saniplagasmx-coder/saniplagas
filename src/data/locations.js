// Sucursales de SaniPlagas.
// Fuente única de verdad para direcciones, mapas y teléfonos por sede.
// Al abrir una nueva sucursal basta con agregar un objeto aquí.

export const LOCATIONS = [
  {
    id: 'san-miguel',
    city: 'San Miguel de Allende',
    shortName: 'San Miguel de Allende',
    isPrimary: true,
    addressLines: ['Alfil 22, INFONAVIT Malanquin,', '37755 San Miguel de Allende, Gto.'],
    phone: '+524151132340',
    phoneDisplay: '+52 (415) 113-2340',
    whatsapp: '5214151132340',
    // Embed verificado que apunta a la ficha de Google Business de la matriz.
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d461.92764898398093!2d-100.76078984673855!3d20.908997625212116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f56388ed4bf533%3A0x37f82ef30cb8b170!2sSaniplagas!5e0!3m2!1ses-419!2smx!4v1772733963683!5m2!1ses-419!2smx',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=20.908997625212116,-100.76078984673855',
    schema: {
      streetAddress: 'Alfil 22, INFONAVIT Malanquin',
      addressLocality: 'San Miguel de Allende',
      postalCode: '37755',
      geo: { latitude: 20.908997625212116, longitude: -100.76078984673855 },
    },
  },
  {
    id: 'irapuato',
    city: 'Irapuato',
    shortName: 'Irapuato',
    isPrimary: false,
    addressLines: ['Calle Arcos de Guanajuato 261, Rincón de los Arcos,', '36633 Irapuato, Gto.'],
    phone: '+524623737003',
    phoneDisplay: '+52 (462) 373-7003',
    whatsapp: '5214623737003',
    // Embed oficial de la ficha de Google Business de la sucursal Irapuato.
    mapEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.246299438066!2d-101.3384284!3d20.700220700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842c81762602de2b%3A0xea2f380a67a334c!2sSaniplagas!5e0!3m2!1ses-419!2smx!4v1786456423162!5m2!1ses-419!2smx',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=20.7002207,-101.3384284',
    schema: {
      streetAddress: 'Calle Arcos de Guanajuato 261, Rincón de los Arcos',
      addressLocality: 'Irapuato',
      postalCode: '36633',
      geo: { latitude: 20.7002207, longitude: -101.3384284 },
    },
  },
];

export const PRIMARY_LOCATION = LOCATIONS.find((l) => l.isPrimary) || LOCATIONS[0];

export default LOCATIONS;

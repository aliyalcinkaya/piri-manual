import type { ProductManual } from "@/content/manual/types"
import { proHowToSteps, advancedWirelessSyncCard } from "@/content/manual/shared"

export const piriCorePro: ProductManual = {
  id: "piri-core-pro",
  name: "Piri Core Pro",
  tagline: "Next-generation desktop pro model with enhanced performance.",
  cardImage: "/piri-desktop-pro-new-gen.png",
  features: ["Next-Gen Technology", "Enhanced Performance", "Smart Display"],

  packageContents: [
    { label: "Piri Core Pro", image: "/piri-desktop-pro-new-gen.png" },
    { label: "Height-Adjustable Desktop Stand", image: "/placeholder.svg", accent: "bg-purple-100" },
    { label: "Power Cable", image: "/power-cable.png", accent: "bg-gray-100" },
    { label: "Eye Protection", image: "/goggles.png", accent: "bg-blue-100" },
  ],

  howToUse: {
    intro:
      "Connect the device to a power outlet and use the touchscreen interface to control your red light therapy sessions with advanced features and preset modes.",
    steps: proHowToSteps,
  },

  specifications: {
    rows: [
      { label: "LED Technology", value: "5W, Dual Chip" },
      { label: "LED Count", value: "60" },
      { label: "Wavelengths", value: "2 Red & 3 NIR" },
      { label: "", value: "630, 660, 810, 830, 850nm" },
      { label: "Category", value: "Home Use" },
      { label: "Dimensions", value: '316mm x 214mm x 60mm (12.4" x 8.4" x 2.4")' },
      { label: "Weight", value: "4.5 kg (9.9 lb)" },
      { label: "Beam Angle", value: "30 degrees" },
      { label: "EMF Radiation", value: "0 μT @ 8cm" },
      { label: "Irradiance", value: "172.0 mW/cm²" },
      { label: "Voltage", value: "AC 100-250V 50/60Hz" },
      { label: "Lifespan", value: "100,000 hours" },
    ],
    certifications: ["CE", "FCC", "RoHS"],
    extraImages: [
      {
        src: "/led-panel-layout.png",
        alt: "LED Panel Layout - Visual representation of dual-chip LED arrangement",
        caption:
          "LED Panel Layout - Different patterns represent various wavelength combinations",
      },
      {
        src: "/dual-chip-led-technology.png",
        alt:
          "Dual-Chip LED Technology specifications showing wavelength combinations and benefits",
        width: 600,
        height: 400,
      },
    ],
  },

  additionalFeatures: [advancedWirelessSyncCard],

  wavelengthCount: 5,
  showDualChipScience: true,
  showAdvancedFeatures: true,
  warrantyYears: 2,
}

import type { ProductManual } from "@/content/manual/types"
import { proHowToSteps, advancedWirelessSyncCard } from "@/content/manual/shared"

export const piriOriginPro: ProductManual = {
  id: "piri-origin-pro",
  name: "Piri Origin Pro",
  tagline: "Piri Origin with touchscreen controls and custom settings.",
  cardImage: "/piridesktoppro00.png",
  features: ["Pro Features", "Smart Display", "Advanced Settings"],

  packageContents: [
    { label: "Piri Origin Pro", image: "/piridesktoppro00.png" },
    { label: "Power Cable", image: "/power-cable.png", accent: "bg-gray-100" },
    { label: "Eye Protection", image: "/goggles.png", accent: "bg-blue-100" },
    { label: "Remote Control", image: "/desktop-pro-remote.png", accent: "bg-purple-100" },
  ],

  howToUse: {
    intro:
      "Connect the device to a power outlet and use the touchscreen interface to control your red light therapy sessions with advanced features and preset modes.",
    steps: proHowToSteps,
  },

  specifications: {
    rows: [
      { label: "LED Technology", value: "5W, Mono Chip" },
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
  },

  additionalFeatures: [advancedWirelessSyncCard],

  wavelengthCount: 5,
  showDualChipScience: false,
  showAdvancedFeatures: false,
  warrantyYears: 2,
}

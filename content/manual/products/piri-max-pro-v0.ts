import type { ProductManual } from "@/content/manual/types"
import {
  proHowToSteps,
  heightLockCard,
  advancedWirelessSyncCard,
} from "@/content/manual/shared"

export const piriMaxProV0: ProductManual = {
  id: "piri-max-pro-v0",
  name: "Piri Max Pro v.0",
  tagline:
    "Large panel red light therapy system with advanced control systems for full-body treatments.",
  cardImage: "/pirimaxpro02.png",
  features: ["Professional Grade", "Advanced Controls", "Smart Display"],

  packageContents: [
    { label: "Piri Max Pro v.0", image: "/pirimaxpro02.png" },
    { label: "Power Cable", image: "/power-cable.png", accent: "bg-gray-100" },
    { label: "Eye Protection", image: "/goggles.png", accent: "bg-blue-100" },
    { label: "Remote Control", image: "/pro-max-remote.png", accent: "bg-purple-100" },
    { label: "Lifting Rope", image: "/lifting-rope.png", accent: "bg-green-100" },
    { label: "Mounting Hardware", image: "/mounting-hardware.png", accent: "bg-orange-100" },
    { label: "Door Hanging Kit", image: "/door-hanging-kit.png", accent: "bg-yellow-100" },
  ],

  howToUse: {
    intro:
      "Connect the device to a power outlet and use the touchscreen interface to control your red light therapy sessions with advanced features and preset modes.",
    steps: proHowToSteps,
  },

  specifications: {
    rows: [
      { label: "LED Technology", value: "5W, Mono Chip" },
      { label: "LED Count", value: "300" },
      { label: "Wavelengths", value: "2 Red & 3 NIR" },
      { label: "", value: "630, 660, 810, 830, 850nm" },
      { label: "Category", value: "Home Use" },
      { label: "Dimensions", value: '910mm x 298mm x 60mm (35.8" x 11.7" x 2.4")' },
      { label: "Weight", value: "11 kg (24.3 lb)" },
      { label: "Beam Angle", value: "30 degrees" },
      { label: "EMF Radiation", value: "0 μT @ 8cm" },
      { label: "Irradiance", value: "172.2 mW/cm²" },
      { label: "Voltage", value: "AC 100-250V 50/60Hz" },
      { label: "Lifespan", value: "100,000 hours" },
    ],
    certifications: ["CE", "FCC", "RoHS"],
  },

  additionalFeatures: [heightLockCard, advancedWirelessSyncCard],

  wavelengthCount: 5,
  showDualChipScience: false,
  showAdvancedFeatures: false,
  warrantyYears: 2,
}

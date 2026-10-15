import type { ProductManual } from "@/content/manual/types"
import {
  standardPanelAndRemoteDiagram,
  desktopMaxHowToSteps,
  desktopMaxRemoteControl,
  pairingCard,
  soundControlCard,
} from "@/content/manual/shared"

export const piriDesktop500: ProductManual = {
  id: "piri-desktop-500",
  name: "Piri Desktop 500",
  tagline: "Desktop red light panel with RED/NIR controls and a session timer.",
  cardImage: "/piri-desktop-500.png",
  features: ["Plug & Play", "500 W LED Power", "5 Wavelengths"],

  packageContents: [
    { label: "Piri Desktop 500", image: "/piri-desktop-500.png" },
    { label: "Power Cable", image: "/power-cable.png", accent: "bg-gray-100" },
    { label: "Eye Protection", image: "/goggles.png", accent: "bg-blue-100" },
    { label: "Remote Control", image: "/shared-controls/standard-remote-front.png", accent: "bg-purple-100" },
  ],

  howToUse: {
    intro:
      "Refer to the product page for session duration and distance guidance.",
    diagram: standardPanelAndRemoteDiagram,
    steps: desktopMaxHowToSteps,
    remoteControl: desktopMaxRemoteControl,
  },

  specifications: {
    rows: [
      { label: "LED Technology", value: "5W, Mono Chip" },
      { label: "LED Count", value: "96" },
      { label: "LED Power", value: "500 W" },
      { label: "Wavelengths", value: "2 Red & 3 NIR" },
      { label: "", value: "630, 660, 810, 830, 850nm" },
      { label: "Category", value: "Home Use" },
      { label: "Dimensions", value: '340mm x 298mm x 60mm (13.4" x 11.7" x 2.4")' },
      { label: "Weight", value: "4.5 kg (9.9 lb)" },
      { label: "Beam Angle", value: "30 degrees" },
      { label: "EMF Radiation", value: "0 μT @ 8cm" },
      { label: "Irradiance", value: "170+ mW/cm² @ 15cm" },
      { label: "Voltage", value: "AC 100-250V 50/60Hz" },
      { label: "Lifespan", value: "100,000 hours" },
    ],
    certifications: ["CE", "FCC", "RoHS"],
  },

  additionalFeatures: [pairingCard, soundControlCard],

  wavelengthCount: 5,
  showDualChipScience: false,
  showAdvancedFeatures: false,
  warrantyYears: 2,
}

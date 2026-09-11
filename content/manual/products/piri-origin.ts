import type { ProductManual } from "@/content/manual/types"
import {
  desktopMaxHowToSteps,
  desktopMaxRemoteControl,
  pairingCard,
  soundControlCard,
} from "@/content/manual/shared"

export const piriOrigin: ProductManual = {
  id: "piri-origin",
  name: "Piri Origin",
  tagline: "Desktop red light therapy panel for home and office use.",
  cardImage: "/piridesktopi00.png",
  features: ["Desktop", "Remote Control", "Timer Function"],

  packageContents: [
    { label: "Piri Origin", image: "/piridesktopi00.png" },
    { label: "Power Cable", image: "/power-cable.png", accent: "bg-gray-100" },
    { label: "Eye Protection", image: "/goggles.png", accent: "bg-blue-100" },
    { label: "Remote Control", image: "/desktop-remote.png", accent: "bg-purple-100" },
  ],

  howToUse: {
    intro:
      "Connect the device to a power outlet and follow these operation instructions for safe and effective red light therapy treatment.",
    diagram: {
      src: "/desktop-max-control-panel.png",
      alt: "Control Panel",
      caption: "Control Panel",
      width: 200,
      height: 400,
    },
    steps: desktopMaxHowToSteps,
    remoteControl: desktopMaxRemoteControl,
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

  additionalFeatures: [pairingCard, soundControlCard],

  wavelengthCount: 5,
  showDualChipScience: false,
  showAdvancedFeatures: false,
  warrantyYears: 2,
}

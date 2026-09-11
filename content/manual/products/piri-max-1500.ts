import type { ProductManual } from "@/content/manual/types"
import {
  desktopMaxHowToSteps,
  desktopMaxRemoteControl,
  pairingCard,
  soundControlCard,
  heightLockCard,
} from "@/content/manual/shared"

export const piriMax1500: ProductManual = {
  id: "piri-max-1500",
  name: "Piri Max 1500",
  tagline:
    "All the power of a full-size panel, without being bolted to one room.",
  cardImage: "/piri-max-1500.png",
  features: ["Full-Body Coverage", "1,500 W LED Power", "Brightness Control"],

  packageContents: [
    { label: "Piri Max 1500", image: "/piri-max-1500.png" },
    { label: "Power Cable", image: "/power-cable.png", accent: "bg-gray-100" },
    { label: "Eye Protection", image: "/goggles.png", accent: "bg-blue-100" },
    { label: "Remote Control", image: "/max-remote.png", accent: "bg-purple-100" },
    { label: "Mounting Hardware", image: "/mounting-hardware.png", accent: "bg-orange-100" },
    { label: "Lifting Rope", image: "/lifting-rope.png", accent: "bg-green-100" },
    { label: "Door Hanging Kit", image: "/door-hanging-kit.png", accent: "bg-yellow-100" },
  ],

  howToUse: {
    intro:
      "Connect the power cable and plug it into a wall outlet. Turn the panel on with the control panel or the remote, then use the timer and brightness controls to set your session. Hang it on a door with the included adapter or mount it on a stand. Keep all ventilation openings clear.",
    diagram: {
      src: "/piri-max-1500-panel.jpg",
      alt: "Piri Max 1500 Control Panel",
      caption: "Piri Max 1500 Control Panel",
      width: 400,
      height: 400,
    },
    steps: desktopMaxHowToSteps,
    remoteControl: desktopMaxRemoteControl,
  },

  specifications: {
    rows: [
      { label: "LED Technology", value: "5W, Mono Chip" },
      { label: "LED Count", value: "296" },
      { label: "LED Power", value: "1,500 W" },
      { label: "Wavelengths", value: "2 Red & 3 NIR" },
      { label: "", value: "630, 660, 810, 830, 850nm" },
      { label: "Category", value: "Home Use" },
      { label: "Dimensions", value: '910mm x 298mm x 60mm (35.8" x 11.7" x 2.4")' },
      { label: "Weight", value: "11 kg (24.3 lb)" },
      { label: "Beam Angle", value: "30 degrees" },
      { label: "EMF Radiation", value: "0 μT @ 8cm" },
      { label: "Irradiance", value: "170+ mW/cm² @ 15cm" },
      { label: "Voltage", value: "AC 100-250V 50/60Hz" },
      { label: "Lifespan", value: "100,000 hours" },
    ],
    certifications: ["CE", "FCC", "RoHS"],
  },

  additionalFeatures: [pairingCard, soundControlCard, heightLockCard],

  wavelengthCount: 5,
  showDualChipScience: false,
  showAdvancedFeatures: false,
  warrantyYears: 2,
}

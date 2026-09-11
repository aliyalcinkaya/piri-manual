import type { ProductManual } from "@/content/manual/types"
import {
  desktopMaxHowToSteps,
  desktopMaxRemoteControl,
  pairingCard,
  soundControlCard,
  heightLockCard,
} from "@/content/manual/shared"

export const piriVista2250: ProductManual = {
  id: "piri-vista-2250",
  name: "Piri Vista 2250",
  tagline: "Our widest panel - medical-grade coverage in a single pass.",
  cardImage: "/piri-vista-2250.jpg",
  features: ["Widest Panel", "2,250 W LED Power", "446 LEDs"],

  packageContents: [
    { label: "Piri Vista 2250", image: "/piri-vista-2250.jpg" },
    { label: "Power Cable", image: "/power-cable.png", accent: "bg-gray-100" },
    { label: "Eye Protection", image: "/goggles.png", accent: "bg-blue-100" },
    { label: "Remote Control", image: "/max-remote.png", accent: "bg-purple-100" },
    { label: "Mounting Hardware", image: "/mounting-hardware.png", accent: "bg-orange-100" },
    { label: "Lifting Rope", image: "/lifting-rope.png", accent: "bg-green-100" },
    { label: "Door Hanging Kit", image: "/door-hanging-kit.png", accent: "bg-yellow-100" },
  ],

  howToUse: {
    intro:
      "Connect the power cable and plug it into a wall outlet. Turn the panel on with the control panel or the remote, then use the timer and brightness controls to set your session. Wall-mount it or place it on a stand. Keep all ventilation openings clear. Most users position the panel about 15 cm away for 10-20 minute sessions, 3-5 times per week.",
    diagram: {
      src: "/piri-vista-2250-panel.png",
      alt: "Piri Vista 2250 Control Panel",
      caption: "Piri Vista 2250 Control Panel",
      width: 400,
      height: 400,
    },
    steps: desktopMaxHowToSteps,
    remoteControl: desktopMaxRemoteControl,
  },

  specifications: {
    rows: [
      { label: "LED Technology", value: "5W, Mono Chip" },
      { label: "LED Count", value: "446" },
      { label: "LED Power", value: "2,250 W" },
      { label: "Wavelengths", value: "2 Red & 3 NIR" },
      { label: "", value: "630, 660, 810, 830, 850nm" },
      { label: "Category", value: "Home Use" },
      { label: "Dimensions", value: '910mm x 428mm x 60mm (35.8" x 16.9" x 2.4")' },
      { label: "Weight", value: "19 kg (41.9 lb)" },
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

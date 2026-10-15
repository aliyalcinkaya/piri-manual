import type { ProductManual } from "@/content/manual/types"

export const piriPortable: ProductManual = {
  id: "piri-portable",
  name: "Piri Portable",
  tagline:
    "Compact and lightweight red light therapy device perfect for travel and targeted treatments.",
  cardImage: "/piriportable000.jpg",
  features: ["Portable Design", "Battery Powered", "Lightweight"],

  packageContents: [
    { label: "Piri Portable", image: "/piriportable000.jpg" },
    { label: "Charging Cable", image: "/piri-portable-charging-cable.png", accent: "bg-green-100" },
    { label: "Carrying Case", image: "/piri-portable-carry-case.png", accent: "bg-orange-100" },
  ],

  howToUse: {
    intro:
      "Follow these instructions to set up and use your Piri Portable.",
    diagram: {
      src: "/piri-portable-12-dual-diagram.png",
      alt: "Piri Portable 12 Dual Device Diagram",
      caption: "Piri Portable 12 Dual Device Layout & Controls",
      width: 600,
      height: 800,
    },
    steps: [
      {
        title: "Initial Setup",
        subtitle: "Charge the device first",
        bullets: [
          "Connect the USB cable to the charging port (⑥)",
          "Use a 5V-2A charger for proper charging",
          "The charging indicator light (③) will flash red during charging",
          "When fully charged, the light will stay solid red",
        ],
      },
      {
        title: "Powering On",
        subtitle: "Turn on the device",
        bullets: [
          "Press and hold the ON/OFF button (⑤) for 5 seconds",
          "The battery indicator light (④) will turn green when the device is working normally",
        ],
      },
      {
        title: "Adjusting Settings",
        subtitle: "Set your desired brightness",
        bullets: [
          "Use the brightness control button (①) to adjust the light intensity",
          "Monitor the digital display (②) to see your current settings",
          "Start with a lower intensity for your first sessions",
        ],
      },
      {
        title: "Treatment Session",
        subtitle: "Position the device",
        bullets: [
          "Place the device at the recommended distance from your skin",
          "Ensure the red light covers the area you want to treat",
        ],
      },
      {
        title: "After Use",
        subtitle: "Power off the device",
        bullets: [
          "Press and hold the ON/OFF button (⑤) for 5 seconds to turn off the device",
          "Store the device in a safe, dry place",
        ],
      },
    ],
  },

  specifications: {
    rows: [
      { label: "LED Technology", value: "5W, Dual Chip" },
      { label: "LED Count", value: "12" },
      { label: "Wavelengths", value: "1 Red & 1 NIR" },
      { label: "", value: "660nm, 850nm" },
      { label: "Category", value: "Home Use" },
      { label: "Dimensions", value: '130mm x 85mm x 30mm (5.1" x 3.3" x 1.2")' },
      { label: "Weight", value: "0.56 kg (1.2 lb)" },
      { label: "Beam Angle", value: "30 degrees" },
      { label: "EMF Radiation", value: "0 μT @ 8cm" },
      { label: "Irradiance", value: "190.0 mW/cm²" },
      { label: "Voltage", value: "Rechargeable: 130-minute battery life" },
      { label: "Lifespan", value: "100,000 hours" },
    ],
    certifications: ["CE", "FCC", "RoHS", "Portable"],
  },

  wavelengthCount: 2,
  showDualChipScience: false,
  showAdvancedFeatures: false,
  warrantyYears: 2,
}

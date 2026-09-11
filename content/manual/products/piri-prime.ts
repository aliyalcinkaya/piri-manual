import type { ProductManual } from "@/content/manual/types"
import { heightLockCard, advancedWirelessSyncCard } from "@/content/manual/shared"

export const piriPrime: ProductManual = {
  id: "piri-prime",
  name: "Piri Prime",
  tagline: "Premium red light therapy system with cutting-edge technology.",
  cardImage: "/Piri_Prime_Front.jpg",
  features: ["Premium Quality", "Latest Technology", "Smart Features"],

  packageContents: [
    { label: "Piri Prime", image: "/Piri_Prime_Front.jpg" },
    { label: "Power Cable", image: "/power-cable.png", accent: "bg-gray-100" },
    { label: "Eye Protection", image: "/goggles.png", accent: "bg-blue-100" },
    { label: "Remote Control", image: "/prime-remote.png", accent: "bg-purple-100" },
  ],

  howToUse: {
    intro:
      "Connect the power cord to the device panel and plug it into a wall outlet, ensuring you have a stable electrical connection. Make sure that cooling air can flow freely through the treatment device by keeping all ventilation openings clear of obstructions.",
    diagram: {
      src: "/piri-prime-control-panel.png",
      alt: "Piri Prime 840 Control Panel",
      caption: "Piri Prime 840 Control Panel",
      width: 200,
      height: 400,
    },
    steps: [
      {
        title: "Light Selection (R/NIR Button)",
        subtitle: 'Press the "R/NIR" button to cycle through light modes:',
        bullets: [
          "**First press:** Both red light and NIR light working (both RED and NIR indicators light up green)",
          "**Second press:** Red light only (RED indicator lights up green only)",
          "**Third press:** NIR light only (NIR indicator lights up green only - invisible to naked eye)",
          "**Fourth press:** Turn off the device",
        ],
        note: "NIR is invisible to the naked human eye.",
      },
      {
        title: "Timer Settings (T Button)",
        subtitle: "Timing is not set by default. To set a specific treatment time:",
        bullets: [
          'Press the "T" button once for 5-minute timing',
          "Each additional press increases timing by 5 minutes (up to 30 minutes)",
          '**Pause:** Press and hold "T" button for 2 seconds to pause',
          '**Resume:** Press and hold "T" button for 2 seconds again to continue',
        ],
      },
      {
        title: "Brightness Control (Sun Button)",
        subtitle: "The default light intensity is maximum brightness. To adjust:",
        bullets: [
          "Press the sun button to start at lowest brightness",
          "Each press increases brightness by one level",
        ],
      },
      {
        title: "Pulse Mode (Wave Button)",
        subtitle: "Pulse is not activated by default. To enable pulse mode:",
        bullets: [
          'Press the "wave" button to enable pulse mode',
          "Each press cycles through pulse frequencies: 10 / 40 / 73 / 146 / 293 / 587Hz",
        ],
      },
      {
        title: "Treatment Session",
        subtitle: "Position properly",
        bullets: [
          "Place the device at the recommended distance from your skin",
          "Ensure the red light covers the area you want to treat",
        ],
      },
      {
        title: "Synchronization Control Function",
        subtitle: "Sync function is turned off in factory settings. To enable:",
        bullets: [
          "Place panels within 5 meters of each other",
          '**Turn ON:** Press and hold "wave" key for 10 seconds in OFF state until screen shows "ON"',
          '**Channel Selection:** Press and hold "T" key for 10 seconds in OFF state until screen shows "01"',
          'Use "R/NIR" or "SUN" key to select sync channel, then press "T" to confirm',
          "**Turn OFF:** Use same operation as turning ON",
        ],
      },
    ],
    remoteControl: {
      title: "REMOTE CONTROL",
      intro:
        'The remote control function is enabled by default. If you want to disable the remote control function, press and hold the "R/NIR" button for 6 seconds. The remote control fits for 23A 12V battery.',
      steps: [],
      image: {
        src: "/piri-prime-remote-control.png",
        alt: "Piri Prime 840 Remote Control with Battery",
        caption: "Remote Control & 23A 12V Battery",
        width: 300,
        height: 200,
      },
    },
  },

  specifications: {
    rows: [
      { label: "LED Technology", value: "5W, Mono Chip" },
      { label: "LED Count", value: "840" },
      { label: "Wavelengths", value: "2 Red & 3 NIR" },
      { label: "", value: "630, 660, 810, 830, 850nm" },
      { label: "Category", value: "Commercial Use" },
      { label: "Dimensions", value: '1713mm x 415mm x 71mm (67.4" x 16.3" x 2.8")' },
      { label: "Weight", value: "35 kg (77.2 lb)" },
      { label: "Beam Angle", value: "30 degrees" },
      { label: "EMF Radiation", value: "0 μT @ 8cm" },
      { label: "Irradiance", value: "172.2 mW/cm²" },
      { label: "Voltage", value: "AC 100-250V 50/60Hz" },
      { label: "Lifespan", value: "100,000 hours" },
    ],
    certifications: ["CE", "FCC", "RoHS"],
  },

  additionalFeatures: [
    {
      title: "Standard Panel Light and Remote Pairing",
      body:
        "With the panel in the OFF state, press and hold the first key on the remote control + the control panel until you hear a beep, indicating successful pairing.",
      accent: "from-emerald-50 to-teal-50",
    },
    {
      title: "Cancel Pairing",
      body:
        'Press and hold the first key of the control board for about 10 seconds. When the control panel displays "OF-", pairing is successfully canceled.',
      accent: "from-amber-50 to-orange-50",
    },
    {
      title: "Wireless Synchronous (Simple Mode)",
      body:
        'With the panel in the OFF state, press and hold the fourth key on the control panel for 10 seconds, then the control board displays "L-ON". To cancel, use the same method - "L-OF" cancels the connection. Note: Press and hold the keys briefly to allow the device time to receive the signal.',
      accent: "from-cyan-50 to-blue-50",
    },
    {
      title: "Cancel Buzzer Sound",
      body:
        "With the panel in the OFF state, press and hold the third button for 10 seconds to cancel the button sound. Re-enabling the sound uses the same method.",
      accent: "from-rose-50 to-red-50",
    },
    heightLockCard,
    advancedWirelessSyncCard,
  ],

  wavelengthCount: 5,
  showDualChipScience: false,
  showAdvancedFeatures: false,
  warrantyYears: 3,
}

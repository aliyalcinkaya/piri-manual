import type { HowToStep, HowToUse } from "@/content/manual/types"

/**
 * The 8-step touchscreen operation flow shared by every "Pro" model
 * (Piri Origin Pro, Piri Core Pro, Piri Max Pro v.0). It is identical
 * across those three devices, so it lives here instead of being copied into
 * each product file. Edit here to change it for all Pro models at once.
 */
export const proHowToSteps: HowToStep[] = [
  {
    title: "START/PAUSE",
    subtitle: "Light Control",
    bullets: [
      "Click to turn on the light",
      "Light off status - device is in standby mode",
    ],
    image: {
      src: "/pro-step-1-start-pause.png",
      alt: "START/PAUSE Light Control Interface",
      caption: "Light off status and Click to turn on the light",
      width: 400,
      height: 300,
    },
  },
  {
    title: "TIME SETTING",
    subtitle: "Session Duration",
    bullets: [
      "Click to enter time setting mode",
      "Slide the color block to adjust time duration",
      "You can also turn off the time setting if desired",
    ],
    image: {
      src: "/pro-step-2-time-setting.png",
      alt: "Time Setting Interface",
      caption:
        "Click to enter time setting, slide color block to adjust, and turn off time setting",
      width: 600,
      height: 300,
    },
  },
  {
    title: "DIMMER",
    subtitle: "Brightness Control",
    bullets: [
      "Click to enter brightness adjustment mode",
      "Slide the color block to adjust brightness",
      'Or click "+" or "-" buttons for precise control',
    ],
    image: {
      src: "/pro-step-3-dimmer.png",
      alt: "Brightness Control Interface",
      caption:
        "Click to enter brightness adjustment and slide color block or use +/- buttons",
      width: 400,
      height: 300,
    },
  },
  {
    title: "MODE SELECTION",
    subtitle: "Light Type Selection",
    bullets: [
      "Enter the lighting mode selection",
      "Choose from Red, NIR (Near-Infrared), or Blue light",
      "Select the appropriate mode for your treatment needs",
    ],
    image: {
      src: "/pro-step-4-mode-selection.png",
      alt: "Mode Selection Interface",
      caption: "Enter lighting mode selection and select the lights",
      width: 400,
      height: 300,
    },
  },
  {
    title: "PULSE SETTING",
    subtitle: "Pulse Mode Configuration",
    bullets: [
      "Enter pulse mode for pulsed light therapy",
      "Click on the numbers to select desired pulse frequency",
      "Choose the frequency that best suits your treatment protocol",
    ],
    images: [
      {
        src: "/pro-step-5-pulse-1.png",
        alt: "Pulse Mode Entry Interface",
        caption: "Click on the numbers and enter pulse mode",
        width: 400,
        height: 300,
      },
      {
        src: "/pro-step-5-pulse-2.png",
        alt: "Pulse Frequency Selection Interface",
        caption: "Select or enter the desired pulse frequency",
        width: 400,
        height: 300,
      },
    ],
  },
  {
    title: "DEFAULT MODE",
    subtitle: "Custom Mode Management",
    bullets: [
      'Click "ADD AS DEFAULT MODE" to save custom settings',
      "Slide the color block to the left to delete saved modes",
      "Long press the color block to enter digital adjustment page",
      "Click to enter the custom page for personalized settings",
    ],
    images: [
      {
        src: "/pro-step-6-default-mode-1.png",
        alt: "Adding Custom Mode Interface",
        caption: "Adding a custom mode and keep",
        width: 400,
        height: 300,
      },
      {
        src: "/pro-step-6-default-mode-2.png",
        alt: "Custom Page and Delete Mode Interface",
        caption: "Click to enter custom page and slide color block left to delete",
        width: 400,
        height: 300,
      },
      {
        src: "/pro-step-6-default-mode-3.png",
        alt: "Digital Adjustment Interface",
        caption:
          "Click to enter custom page and long press color block for digital adjustment",
        width: 600,
        height: 300,
      },
    ],
  },
  {
    title: "PRESET MODE",
    subtitle: "Pre-configured Treatment Programs",
    bullets: [
      "**Muscle:** Optimized for muscle recovery and performance",
      "**Joint Pain:** Targeted therapy for joint discomfort",
      "**Sleep:** Settings designed to promote better sleep",
      "**Skin:** Skin health and rejuvenation protocols",
      "**Mood:** Light therapy for mood enhancement",
      "**Recovery:** General recovery and wellness programs",
    ],
    image: {
      src: "/pro-step-7-preset-mode.png",
      alt: "Preset Mode Selection Interface",
      caption: "Preset mode selection: Muscle, Joint Pain, Sleep, Skin, Mood, Recovery",
      width: 500,
      height: 400,
    },
  },
  {
    title: "SYNCHRONOUS WORKING",
    subtitle: "Multi-Device Synchronization",
    bullets: [
      "Press and hold for 5 seconds to enter the pairing interface",
      'Click "Sync Mode" to enable pairing',
      "Click on the machine you want to pair with",
      'Confirm pairing by clicking "Ok"',
      "Multiple devices will work in synchronized operation",
    ],
    images: [
      {
        src: "/pro-step-8-sync-1.png",
        alt: "Synchronous Working Pairing Interface",
        caption:
          "Press and hold for 5 seconds to enter pairing interface, click on machine to pair with, and confirm",
        width: 600,
        height: 300,
      },
      {
        src: "/pro-step-8-sync-2.png",
        alt: "Sync Mode and Enable Pairing",
        caption: "Sync Mode and click to enable pairing",
        width: 400,
        height: 300,
      },
    ],
  },
]

/**
 * The 5-step touch-panel flow plus remote-control block shared by the standard
 * Piri Origin and Piri Max v.0 panels. Identical across both devices.
 */
export const desktopMaxHowToSteps: HowToStep[] = [
  {
    title: "Operation Controls",
    subtitle: "Select light type",
    bullets: [
      'Touch "RED" icon on screen to activate red light therapy',
      'Touch "NIR" icon on screen to activate near-infrared light',
      "Touch the same icon again to turn off that light mode",
    ],
  },
  {
    title: "Set Treatment Time",
    bullets: [
      'Press "TIME+" to increase session duration',
      'Press "TIME-" to decrease session duration',
      "Set appropriate time based on your treatment needs",
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
    title: "Safety During Use",
    bullets: [
      "Protect your eyes - never look directly at the lights",
      "Start with shorter sessions (5-10 minutes) for beginners",
      "Gradually increase duration as tolerated",
    ],
  },
  {
    title: "End Session",
    bullets: ["Touch RED/NIR icons to turn off lights"],
  },
]

export const desktopMaxRemoteControl: NonNullable<HowToUse["remoteControl"]> = {
  title: "REMOTE CONTROL",
  intro: "The remote control uses a 23A 12V battery.",
  steps: [],
  image: {
    src: "/desktop-max-remote-control.png",
    alt: "Remote Control with 23A 12V Battery",
    caption: "Remote Control & 23A 12V Battery",
    width: 300,
    height: 400,
  },
}

/**
 * "Additional Features & Tips" cards. Each product lists the ones that apply to
 * it in its own `additionalFeatures` array, e.g. Piri Max v.0 shows
 * [pairingCard, soundControlCard, heightLockCard]. The text is identical wherever
 * a card is reused, so it is defined once here.
 */
export const pairingCard = {
  title: "How to Pair Panel Light and Remote Control",
  body:
    'With the panel\'s control board displaying "OFF", press and hold the third key "TIME+" on the control panel until "PAIR" is displayed. Then press the first key on the remote control. You will hear a beep, indicating successful pairing.',
  accent: "from-blue-50 to-indigo-50",
}

export const soundControlCard = {
  title: "How to Turn Off Sound of the Control Board",
  body:
    'With the panel in the OFF state, press and hold the fourth key "TIME-" to cancel the control panel button sounds. To turn on the sound again, use the same method.',
  accent: "from-purple-50 to-pink-50",
}

export const heightLockCard = {
  title: "How to Lock the Height of the Electric Stand",
  body:
    "Press and hold the S+2 buttons on the remote control for more than 5 seconds at the same time to lock. To unlock, repeat the same process.",
  accent: "from-green-50 to-emerald-50",
}

/** The multi-device wireless sync feature card, shared by Pro models and Prime. */
export const advancedWirelessSyncCard = {
  title: "Wireless Synchronous (Advanced Multi-Device Sync)",
  body: "Synchronize multiple devices for coordinated operation:",
  steps: [
    "Enable synchronous for all devices you want synchronized. Turn on the sync function one by one.",
    "To designate a device as the host, long-press 'Synchronous working' to enter settings.",
    "To have a device work synchronously with it, select its ID code.",
    "To prevent other devices from controlling this device, cancel the synchronous choice. However, this device can still control other devices in the same group.",
  ],
  accent: "from-violet-50 to-purple-50",
}

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
      "When the light is off, the device is in standby mode",
    ],
    image: {
      src: "/pro-step-1-start-pause.png",
      alt: "START/PAUSE Light Control Interface",
      caption: "Standby mode: click to turn on the light",
      width: 400,
      height: 300,
    },
  },
  {
    title: "TIME SETTING",
    subtitle: "Session Duration",
    bullets: [
      "Click to enter the time-setting mode",
      "Slide the color block to adjust the session duration",
      "You can also turn off the time setting if desired",
    ],
    image: {
      src: "/pro-step-2-time-setting.png",
      alt: "Time Setting Interface",
      caption:
        "Click to enter the time settings, slide the color block to adjust the duration, or turn off the timer",
      width: 600,
      height: 300,
    },
  },
  {
    title: "DIMMER",
    subtitle: "Brightness Control",
    bullets: [
      "Click to enter the brightness-adjustment mode",
      "Slide the color block to adjust brightness",
      'Or click the "+" or "-" buttons for precise control',
    ],
    image: {
      src: "/pro-step-3-dimmer.png",
      alt: "Brightness Control Interface",
      caption:
        "Click to adjust brightness, then slide the color block or use the +/- buttons",
      width: 400,
      height: 300,
    },
  },
  {
    title: "MODE SELECTION",
    subtitle: "Light Type Selection",
    bullets: [
      "Open the light-mode selection screen",
      "Choose Red or NIR (Near-Infrared) for this device's wavelength groups",
    ],
    image: {
      src: "/pro-step-4-mode-selection.png",
      alt: "Mode Selection Interface",
      caption: "Open the light-mode selection screen and select the lights",
      width: 400,
      height: 300,
    },
  },
  {
    title: "PULSE SETTING",
    subtitle: "Pulse Mode Configuration",
    bullets: [
      "Enter pulse mode for pulsed light therapy",
      "Click on the numbers to select the desired pulse frequency",
      "Adjust the pulse frequency to suit your routine.",
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
      "Press and hold the color block to open the digital adjustment page",
      "Click to open the custom settings page",
    ],
    images: [
      {
        src: "/pro-step-6-default-mode-1.png",
        alt: "Adding Custom Mode Interface",
        caption: "Add and save a custom mode",
        width: 400,
        height: 300,
      },
      {
        src: "/pro-step-6-default-mode-2.png",
        alt: "Custom Page and Delete Mode Interface",
        caption: "Click to open the custom settings page; slide the color block left to delete a mode",
        width: 400,
        height: 300,
      },
      {
        src: "/pro-step-6-default-mode-3.png",
        alt: "Digital Adjustment Interface",
        caption:
          "Click to open the custom settings page; press and hold the color block for digital adjustment",
        width: 600,
        height: 300,
      },
    ],
  },
  {
    title: "PRESET MODE",
    subtitle: "Pre-configured Treatment Programs",
    bullets: [
      "Choose a preset shown on your device's screen",
      "Screen labels may include Muscle, Joint Pain, Sleep, Skin, Mood and Recovery",
      "Preset names identify saved device settings; they do not guarantee a treatment outcome",
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
      "Press and hold for 5 seconds to open the pairing interface",
      'Click "Sync Mode" to enable pairing',
      "Click on the device you want to pair with",
      'Confirm pairing by clicking "Ok"',
      "The devices will operate in sync",
    ],
    images: [
      {
        src: "/pro-step-8-sync-1.png",
        alt: "Synchronous Working Pairing Interface",
        caption:
          "Press and hold for 5 seconds to open the pairing interface, select the device to pair with, and confirm",
        width: 600,
        height: 300,
      },
      {
        src: "/pro-step-8-sync-2.png",
        alt: "Sync Mode and Enable Pairing",
        caption: "Click Sync Mode to enable pairing",
        width: 400,
        height: 300,
      },
    ],
  },
]

/**
 * The button-control flow shared by Piri Desktop, Piri Max, Piri Vista,
 * Piri Origin and Piri Max v.0. Edit here to update all five manuals.
 */
export const desktopMaxHowToSteps: HowToStep[] = [
  {
    title: "Select Light Mode",
    bullets: [
      'Press the "RED" button to turn the red light on or off',
      'Press the "NIR" button to turn the near-infrared light on or off',
    ],
  },
  {
    title: "Set Treatment Time",
    bullets: [
      'Press the "TIME+" button to increase session duration',
      'Press the "TIME-" button to decrease session duration',
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
    bullets: ["Press the \"RED\" and/or \"NIR\" buttons to turn off any active light modes, or wait until the timer runs out."],
  },
]

export const standardPanelAndRemoteDiagram: NonNullable<HowToUse["diagram"]> = {
  "src": "/shared-controls/standard-panel-and-remote.png",
  "alt": "Black control panel and remote control, front and battery compartment views",
  "width": 1536,
  "height": 1024
}

export const desktopMaxRemoteControl: NonNullable<HowToUse["remoteControl"]> = {
  title: "REMOTE CONTROL",
  intro: "Use the remote control’s \"RED\", \"NIR\", \"TIME+\" and \"TIME-\" buttons for the same light and timer controls described above. The remote control uses a 23A 12V battery.",
  steps: [],
}

/**
 * "Additional Features & Tips" cards. Each product lists the ones that apply to
 * it in its own `additionalFeatures` array, e.g. Piri Max v.0 shows
 * [pairingCard, soundControlCard, heightLockCard]. The text is identical wherever
 * a card is reused, so it is defined once here.
 */
export const pairingCard = {
  title: "How to Pair the Panel and Remote Control",
  body:
    'With the panel\'s control board displaying "OFF", press and hold the third button, "TIME+", on the control panel until "PAIR" is displayed. Then press the first key on the remote control. You will hear a beep, indicating successful pairing.',
  accent: "from-blue-50 to-indigo-50",
}

export const soundControlCard = {
  title: "How to Turn Off the Control Panel Sounds",
  body:
    'With the panel in the OFF state, press and hold the fourth button, "TIME-", to cancel the control panel button sounds. To turn on the sound again, use the same method.',
  accent: "from-purple-50 to-pink-50",
}

export const heightLockCard = {
  title: "Optional electric stand: height lock",
  body:
    "Press and hold the S and 2 buttons on the remote control simultaneously for more than 5 seconds to lock the stand height. To unlock, repeat the same process.",
  accent: "from-green-50 to-emerald-50",
}

/** The multi-device wireless sync feature card, shared by Pro models and Prime. */
export const advancedWirelessSyncCard = {
  title: "Wireless Synchronization (Advanced Multi-Device Sync)",
  body: "Synchronize multiple devices for coordinated operation:",
  steps: [
    "Enable synchronization on all devices you want to synchronize. Turn on the sync function one by one.",
    "To designate a device as the host, long-press 'Synchronous working' to enter settings.",
    "To synchronize another device with the host, select its ID code.",
    "To prevent other devices from controlling this device, disable synchronization. However, this device can still control other devices in the same group.",
  ],
  accent: "from-violet-50 to-purple-50",
}

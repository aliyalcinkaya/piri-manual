import {sectionTitles} from '@/content/manual/section-titles'
export function AdvancedFeatures({show}:{show:boolean}) {
  if(!show)return null
  return <section id="advanced-features" className="manual-section"><h2>{sectionTitles['advanced-features']}</h2><dl className="light-definitions"><div><dt>4.3-inch touchscreen</dt><dd>Set time, brightness, pulse and wavelength group from the display.</dd></div><div><dt>Saved presets</dt><dd>Save your preferred device settings and recall them for another session.</dd></div><div><dt>Pulse control</dt><dd>Continuous, 10 Hz, 40 Hz and custom pulse settings are described on the Core Pro product page.</dd></div><div><dt>Wireless synchronization</dt><dd>Core Pro supports wireless sync. Confirm compatibility and setup for the devices you intend to connect.</dd></div></dl><p><a href="https://pirired.com.au/products/piri-core-pro">View Core Pro’s product details</a>.</p></section>
}

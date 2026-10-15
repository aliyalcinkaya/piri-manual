import Link from 'next/link'
import { Mail } from 'lucide-react'
import { supportUrl, storeUrl } from '@/content/manual/links'
export function SiteHeader() {
  return <><a className="skip-link" href="#main-content">Skip to content</a><header className="site-header"><div className="header-inner"><Link href="/" className="brand-link" aria-label="Piri Red manuals home"><img className="header-logo" src="/brand/piri-red-logo.svg" width="140" height="46" alt="Piri Red"/><img className="header-favicon" src="/favicon.svg" width="28" height="28" alt=""/><span className="header-label">Manuals &amp; Support</span></Link><nav aria-label="Main navigation"><a href={storeUrl} className="header-support store-link"><img className="header-store-icon" src="/favicon.svg" width="18" height="18" alt=""/>Visit The Store</a><a href={supportUrl} className="header-support header-contact" aria-label="Contact Piri Red"><Mail size={18} aria-hidden="true"/><span className="header-support-label">Get Support</span></a></nav></div></header></>
}
export function SiteFooter() {
  return <footer className="site-footer"><div className="footer-inner"><p><strong>Piri Red</strong><span>Light for your everyday.</span></p><nav aria-label="Footer navigation"><Link href="/">All manuals</Link><a href={supportUrl}>Contact support</a><a href={`${storeUrl}/policies/refund-policy`}>Warranty & returns</a></nav></div></footer>
}

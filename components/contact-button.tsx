import {Mail} from 'lucide-react'
import {supportUrl} from '@/content/manual/links'

/** One shared contact design for the library and every manual. */
export function ContactButton({className=''}:{className?:string}){
  return <a href={supportUrl} className={`button-primary contact-button ${className}`.trim()}><Mail size={17} aria-hidden="true"/><span>Contact Piri Red</span></a>
}

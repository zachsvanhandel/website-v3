'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const EMAIL = 'zach@zachsvanhandel.me';

const links = [
  { href: '/' },
  { href: '/about' },
  { text: '/contact', href: `mailto:${EMAIL}`, target: '_blank' },
  { href: '/résumé.pdf', target: '_blank' },
  { href: '/projects' },
  { href: '/socials' }
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className='gap-6'>
        {links
          .filter(({ href }) => href !== pathname)
          .map(({ text, href, target }) => (
            <li key={href}>
              <Link href={href} target={target}>
                {text ?? href}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}

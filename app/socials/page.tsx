const links = [
  'https://github.com/zachsvanhandel',
  'https://linkedin.com/in/zachsvanhandel',
  'https://twitter.com/zachsvanhandel'
];

export default function Socials() {
  return (
    <>
      <h1>SOCIALS</h1>

      <ul>
        {links.map((link) => (
          <li key={link} className='truncate'>
            -{' '}
            <a href={link} target='_blank'>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

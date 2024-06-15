const links = [
  'https://bravado.zachsvanhandel.me',
  'https://v1.zachsvanhandel.me'
];

export default function Projects() {
  return (
    <>
      <h1>PROJECTS</h1>

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

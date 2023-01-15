import Link from "next/link";
interface NavProps {}

const Nav = (props: NavProps) => (
  <nav>
    <h1>Hello World</h1>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/projects">Projects</Link>
      </li>
      <li>
        <Link href="/connect">Connect</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;

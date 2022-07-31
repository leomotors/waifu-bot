import styles from "$styles/Sidebar.module.scss";

import Link from "next/link";
import { useRouter } from "next/router";

import { FC, useEffect, useState } from "react";
import {
  BoxArrowInRight,
  BoxArrowRight,
  HouseDoor,
  MusicNoteList,
  Person,
} from "react-bootstrap-icons";

interface RouteProps {
  label: string;
  to: string;
  icon: JSX.Element;
}

const Route: FC<RouteProps> = ({ label, to, icon }) => {
  return (
    <li>
      <Link href={to}>
        <a>
          {icon}
          <p>{label}</p>
        </a>
      </Link>
    </li>
  );
};

export const Sidebar: FC = () => {
  const router = useRouter();

  function logout() {
    localStorage.removeItem("token");
    router.push("/");
  }

  const [isTokenSet, setIsTokenSet] = useState(false);

  useEffect(() => setIsTokenSet(!!localStorage.getItem("token")), []);

  return (
    <nav className="flex min-h-screen w-64 flex-col items-start bg-gradient-to-br from-blue-200 to-pink-200 p-2">
      <p className="text-3xl font-bold">Waifu Bot Control Center</p>

      <ul className={styles.linkList}>
        <Route label="Home" to="/" icon={<HouseDoor />} />
        <Route label="Profile" to="/profile" icon={<Person />} />
        <Route label="My Playlist" to="/playlist" icon={<MusicNoteList />} />

        <hr className="my-2 h-2 w-full border-slate-500 px-2" />

        {isTokenSet ? (
          <li>
            <button onClick={logout}>
              <BoxArrowRight />
              <p>Logout</p>
            </button>
          </li>
        ) : (
          <Route label="Login" to="/login" icon={<BoxArrowInRight />} />
        )}
      </ul>
    </nav>
  );
};

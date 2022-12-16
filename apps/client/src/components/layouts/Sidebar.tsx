import styles from "$styles/Sidebar.module.scss";

import { MiniProfile } from "$components/elements/MiniProfile";
import { AuthContext } from "$lib/contexts";

import Link from "next/link";

import { FC, useContext } from "react";
import {
  BoxArrowInRight,
  BoxArrowRight,
  Github,
  HouseDoor,
  MusicNoteList,
  Person,
} from "react-bootstrap-icons";

interface RouteProps {
  label: string;
  to: string;
  icon: JSX.Element;
}

const Route: FC<RouteProps> = ({ icon, label, to }) => {
  return (
    <li>
      <Link href={to}>
        {icon}
        <p>{label}</p>
      </Link>
    </li>
  );
};

export const Sidebar: FC = () => {
  const { logout, user } = useContext(AuthContext);

  return (
    <nav className="flex min-h-screen w-80 flex-col items-start justify-between bg-gradient-to-br from-blue-200 to-pink-200 p-2">
      <div>
        <p className="text-3xl font-bold">Waifu Bot Control Center</p>

        {user ? (
          user.profile ? (
            <MiniProfile user={user} />
          ) : (
            <p>
              Your profile does not exist, please interact with bot to update
            </p>
          )
        ) : (
          <p>Not logged in</p>
        )}

        <ul className={styles.linkList}>
          <Route icon={<HouseDoor />} label="Home" to="/" />
          <Route icon={<Person />} label="Profile" to="/profile" />
          <Route icon={<MusicNoteList />} label="My Playlist" to="/playlist" />

          <hr className="my-2 h-2 w-full border-slate-500 px-2" />

          {user ? (
            <li>
              <button onClick={logout}>
                <BoxArrowRight />
                <p>Logout</p>
              </button>
            </li>
          ) : (
            <Route icon={<BoxArrowInRight />} label="Login" to="/login" />
          )}
        </ul>
      </div>

      <div className="flex flex-col items-start text-xl font-bold">
        <p>Worcestershire Code on</p>
        <a
          className="flex flex-row items-center justify-center gap-2 text-slate-900 transition-colors hover:text-pink-700"
          href="https://github.com/Leomotors/waifu-bot"
          rel="noreferrer"
          target="_blank"
        >
          <Github />
          <p>GitHub</p>
        </a>
      </div>
    </nav>
  );
};

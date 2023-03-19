import { FC, createElement, useContext } from "react";

import { AuthContext } from "$lib/contexts";
import { WaifuPage } from "$lib/types";

interface RenderWaifuPageProps {
  page: WaifuPage;
  props: Record<string, unknown>;
}

export const RenderWaifuPage: FC<RenderWaifuPageProps> = ({ page, props }) => {
  const { loading, user } = useContext(AuthContext);

  if (loading) {
    return <p>Loading...</p>;
  } else if (page.requiredAuth && !user) {
    return (
      <p>
        Please sign in or invalid credentials or your token might be expired,
        please use /login again
      </p>
    );
  } else {
    return createElement(page, props);
  }
};

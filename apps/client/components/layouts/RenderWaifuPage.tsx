import { AuthContext } from "$lib/contexts";
import type { WaifuPage } from "$lib/types";

import { createElement, type FC, useContext } from "react";

interface RenderWaifuPageProps {
  page: WaifuPage;
  props: Record<string, unknown>;
}

export const RenderWaifuPage: FC<RenderWaifuPageProps> = ({ page, props }) => {
  const { user, loading } = useContext(AuthContext);

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

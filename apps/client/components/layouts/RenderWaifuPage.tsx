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
    return <div>Loading...</div>;
  } else if (page.requiredAuth && !user) {
    return <main>Please sign in or invalid credentials</main>;
  } else {
    return createElement(page, props);
  }
};

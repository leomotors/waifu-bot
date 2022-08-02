import { AuthContext } from "$lib/contexts";
import type { WaifuPage } from "$lib/types";

import { createElement, FC, useContext } from "react";

interface RenderWaifuPageProps {
  page: WaifuPage;
  props: Record<string, unknown>;
}

export const RenderWaifuPage: FC<RenderWaifuPageProps> = ({ page, props }) => {
  const { user } = useContext(AuthContext);

  if (page.requiredAuth && !user) {
    return <main>Please sign in</main>;
  } else {
    return createElement(page, props);
  }
};

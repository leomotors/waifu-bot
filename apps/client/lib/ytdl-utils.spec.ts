import { describe, expect, it } from "vitest";

import { getURLVideoID, validateURL } from "./ytdl-utils";

describe("ytdl utils", () => {
  it("getURLVideoID works", () => {
    expect(getURLVideoID("https://www.youtube.com/watch?v=dQw4w9WgXcQ")).toBe(
      "dQw4w9WgXcQ"
    );

    expect(getURLVideoID("https://www.youtube.com/watch?v=r4rIO94mmV0")).toBe(
      "r4rIO94mmV0"
    );
  });

  it("validateURL works", () => {
    expect(validateURL("https://www.youtube.com/watch?v=R8qNWByiy1s")).toBe(
      true
    );
    expect(validateURL("https://leomotors.me/jobs")).toBe(false);
  });
});

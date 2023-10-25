import { describe, expect, it } from "vitest";

import { parseAcceptLanguage } from "./acceptLanguage";

describe("acceptLanguage", () => {
  it("default", () => {
    expect(parseAcceptLanguage(undefined as unknown as string)).toEqual(
      "default",
    );
    expect(parseAcceptLanguage("*")).toEqual("default");
  });

  it("Parse", () => {
    expect(parseAcceptLanguage("en-US")).toEqual("en-US");
    expect(parseAcceptLanguage("en-US;q=0.8")).toEqual("en-US");
    expect(parseAcceptLanguage("en-US;q=0.8, en;q=0.5")).toEqual("en-US");
    expect(parseAcceptLanguage("en-US,en;q=0.9,fr-FR;q=0.8,fr;q=0.7")).toEqual(
      "en-US",
    );
  });
});

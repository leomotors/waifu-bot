import { authEnv } from "@waifu-bot/auth";
import { localWebUrl } from "@waifu-bot/constants";

import { Cocoa, LogStatus } from "cocoa-discord";

import { ActivityOptions, ActivityType, Client } from "discord.js";

export class ActivityManager {
  constructor(readonly client: Client) {
    if (client.isReady()) {
      this.load();
    } else {
      client.once("ready", () => {
        this.load();
      });
    }
  }

  activities: ActivityOptions[] = [];
  currentActivity: ActivityOptions | null = null;
  interval: NodeJS.Timeout | null = null;

  async load(webhook = false) {
    const res = await fetch(localWebUrl + "/api/activity", {
      headers: {
        Authorization: authEnv.INTERNAL_SECRET,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch activity");
    }

    const obj = (await res.json()) as ActivityOptions[];

    obj.forEach((o) => {
      if (o.type)
        o.type = ActivityType[o.type as unknown as keyof typeof ActivityType];
    });

    this.activities = obj;

    Cocoa.log(
      `[ActivityManager] Successfully loaded ${this.activities.length} activities` +
        (webhook ? " (Requested by Webhook)" : ""),
      LogStatus.Success,
    );

    if (
      !this.activities.find((act) => act.name === this.currentActivity?.name)
    ) {
      this.setInterval();
    }
  }

  setInterval() {
    if (this.interval) {
      clearInterval(this.interval);
    }

    this.interval = setInterval(
      () => {
        this.setActivity();
      },
      1000 * 60 * 5,
    );
    this.setActivity();
  }

  async setActivity() {
    if (!this.client.isReady()) {
      Cocoa.log(
        "Attempt to set activity when client not ready",
        LogStatus.Warning,
      );
      return;
    }

    if (this.activities.length === 0) {
      Cocoa.log("No activities loaded", LogStatus.Warning);
      return;
    }

    const activity =
      this.activities[Math.floor(Math.random() * this.activities.length)]!;

    this.client.user.setActivity({
      name: activity.name,
      type: activity.type,
      url: activity.url ?? undefined,
    });
  }
}

import { exec as execCb } from "child_process";
import { promisify } from "util";

export const exec = promisify(execCb);

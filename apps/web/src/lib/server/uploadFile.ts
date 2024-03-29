import { error } from "@sveltejs/kit";

import { dev } from "$app/environment";
import { env } from "$env/dynamic/private";

export async function uploadFile(file: File, fileKey: string) {
  const fileUploadServer = env.FILE_UPLOAD_SERVER;
  const fileUploadKey = env.FILE_UPLOAD_KEY;

  // TODO Validate this at server startup
  if (!fileUploadServer || !fileUploadKey) {
    error(500, "File upload server not configured");
  }

  const filePath = `${dev ? "dev-waifu" : "waifu"}/${fileKey}-${
    file.lastModified
  }`;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("file_name", filePath);

  const response = await fetch(`${fileUploadServer}/upload`, {
    method: "POST",
    headers: {
      Authorization: fileUploadKey,
    },
    body: formData,
  });

  if (!response.ok) {
    const err = await response.text();
    const errorMessage = `Failed to upload file ${filePath} (${response.status}): ${err}`;
    console.error(errorMessage);
    error(500, errorMessage);
  }

  const { path } = await response.json();

  if (!path || typeof path !== "string") {
    error(500, `Unable to upload file ${filePath} (invalid response)`);
  }

  return fileUploadServer + path;
}

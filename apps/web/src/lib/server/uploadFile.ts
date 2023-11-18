import { error } from "@sveltejs/kit";

import { env } from "$env/dynamic/private";

export async function uploadFile(file: File, fileKey: string) {
  const fileUploadServer = env.FILE_UPLOAD_SERVER;
  const fileUploadKey = env.FILE_UPLOAD_KEY;

  // TODO Validate this at server startup
  if (!fileUploadServer || !fileUploadKey) {
    throw error(500, "File upload server not configured");
  }

  const filePath = `waifu/${fileKey}-${file.lastModified}`;

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
    throw error(500, `Unable to upload file ${filePath} (${response.status})`);
  }

  const { path } = await response.json();

  if (!path || typeof path !== "string") {
    throw error(500, `Unable to upload file ${filePath} (invalid response)`);
  }

  return fileUploadServer + path;
}

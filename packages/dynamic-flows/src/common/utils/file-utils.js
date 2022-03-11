export function toKilobytes(sizeInBytes) {
  const ONE_KB_IN_BYTES = 1024;
  return Math.floor(sizeInBytes / ONE_KB_IN_BYTES);
}

//TODO: Refactor: This is duplicate logic as in CameraStep.js
export const toBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener('load', () => resolve(reader.result));
    reader.addEventListener('error', (error) => reject(error));
  });
};

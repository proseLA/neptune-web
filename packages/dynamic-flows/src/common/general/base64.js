/**
 * Convert the contents of a file to a Blob.
 * Original source: https://stackoverflow.com/questions/16245767/creating-a-blob-from-a-base64-string-in-javascript
 *
 * @param b64Data
 * @param contentType
 * @param sliceSize
 */
export function b64DataToBlob(b64Data, contentType = '', sliceSize = 512) {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  return new Blob(byteArrays, { type: contentType });
}

export function b64ToBlob(b64String) {
  const block = b64String.split(';');
  const contentType = block[0].split(':')[1];
  const realData = block[1].split(',')[1];
  return b64DataToBlob(realData, contentType);
}

export function parseFileName(b64String) {
  const match = b64String.match(/^data:[^/]+\/([^;]+);base64,/);

  return match ? `file.${match[1]}` : undefined;
}

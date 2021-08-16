export const asyncFileRead = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener('load', (event) => {
      resolve(event.target.result);
    });
    reader.addEventListener('error', (event) => {
      reject(event);
    });
  });

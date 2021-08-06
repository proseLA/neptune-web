() => {
  const props = {
    files: [
      {
        id: 1,
        filename: 'purchase-receipt.pdf',
        url: 'https://wise.com/public-resources/assets/logos/wise/brand_logo_inverse.svg',
        status: Status.SUCCEEDED,
      },
      {
        id: 2,
        filename: 'CoWork-0317-invoice.pdf',
        url: 'https://wise.com/public-resources/assets/logos/wise/brand_logo_inverse.svg',
        status: Status.SUCCEEDED,
      },
      {
        id: 3,
        filename: 'receipt failed.png',
        status: Status.FAILED,
        error: 'Error message from API',
      },
    ],
    onUploadFile: (formData) => {
      const additionalData = {
        activityId: '12345',
        profileId: 6789,
      };

      const customHeaders = {
        Foo: 'bar',
      };

      Object.keys(additionalData).forEach((key) => formData.append(key, additionalData[key]));

      return fetch('https://httpbin.org/post', {
        method: 'POST',
        body: formData,
        credentials: 'include',
        headers: customHeaders,
      })
        .then((response) => {
          if (!response.ok) {
            const error = new Error(response.statusText);
            error.status = response.status;
            throw error;
          }

          // DEBUG CODE ONLY
          return { id: Math.round(Math.random() * 10000), url: 'https://wise.com' };

          // Normally you'd return the servers's response
          // return response.json();
        })
        .catch((e) => {
          throw e;
        });
    },
    onDeleteFile: (id) =>
      // DEBUG CODE ONLY
      // Normally you'll call an API endpoint and return a promise that is resolved when deletion is successful
      new Promise((resolve) => {
        setTimeout(() => resolve(), 3000);
      }),
  };

  return <UploadInput multiple fileInputName="file" {...props} />;
};

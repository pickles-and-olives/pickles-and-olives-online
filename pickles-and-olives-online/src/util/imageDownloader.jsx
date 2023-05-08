export const createDownload = (apiUrl, downloadName) => {

    fetch(apiUrl)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${downloadName}.jpg`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        return url;
      })
      .catch((error) => console.error(error));
  };
 
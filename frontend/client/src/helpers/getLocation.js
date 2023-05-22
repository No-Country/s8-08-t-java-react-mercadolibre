export const getLocation = () => {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            position => {
              const { latitude, longitude } = position.coords;
              resolve({ latitude, longitude });
            },
            error => {
              reject(error);
            }
          );
        } else {
          reject(new Error("Geolocalización no soportada en este navegador"));
        }
      });
}
export const FAKE_API_DELAY = 1500;

export const FAKE_PRODUCT_DATA: { [key: string]: any } = {
  category: ["product1", "product2", "product3"],
};

export const FAKE_API_URLS: { [key: string]: string } = {
  "/category": "category",
};

export const FAKE_DATA_MAP: { [key: string]: any } = {
  category: FAKE_PRODUCT_DATA["category"],
};

export const fakeApi = async (url: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      try {
        if (!FAKE_API_URLS[url]) {
          throw new Error("Invalid URL");
        }
        console.log(FAKE_DATA_MAP[FAKE_API_URLS[url]]);
        const data = FAKE_DATA_MAP[FAKE_API_URLS[url]];
        resolve(data);
      } catch (error) {
        console.error(error);
        resolve(null);
      }
    }, FAKE_API_DELAY);
  });
};

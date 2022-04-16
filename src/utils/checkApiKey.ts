import { ApiKey } from "../database/schemas";

export const checkApiKey = async (key: string) => {
  const apiKey = await ApiKey.findOne({ key });
  if (!apiKey) {
    return null;
  }
  if (apiKey.expires < Date.now()) {
    return {
      key: apiKey.key,
      expires: apiKey.expires,
      type: apiKey.type,
      count: apiKey.count,
      rate: apiKey.rate,
      active: false,
    };
  }
  return {
    key: apiKey.key,
    expires: apiKey.expires,
    type: apiKey.type,
    count: apiKey.count,
    rate: apiKey.rate,
    active: true,
  };
};

import { ApiKey } from "../database/schemas";
import ms from "ms";
export const renewApiKey = async (key: string) => {
  const apiKey = await ApiKey.findOne({ key });
  if (!apiKey) {
    return null;
  }
  apiKey.count = 0;
  apiKey.expires = Date.now() + ms("30d");
  apiKey.save();
  return {
    key: apiKey.key,
    expires: apiKey.expires,
    type: apiKey.type,
    count: apiKey.count,
    rate: apiKey.rate,
    active: true,
  };
};

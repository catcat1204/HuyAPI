import { ApiKey } from "../database/schemas";
import ms from "ms";
const generateRandomApiKey = (length: number) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234561289";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const createNewApiKey = async (Plan: string) => {
  switch (Plan) {
    case "CLASSIC":
      return ApiKey.create({
        key: generateRandomApiKey(12),
        expires: Date.now() + ms("30d"),
        type: "CLASSIC",
        count: 0,
        rate: 5000,
      });
    case "PRO":
      return ApiKey.create({
        key: generateRandomApiKey(12),
        expires: Date.now() + ms("30d"),
        type: "PRO",
        count: 0,
        rate: 10000,
      });
    case "BOOST":
      return ApiKey.create({
        key: generateRandomApiKey(12),
        expires: Date.now() + ms("30d"),
        type: "BOOST",
        count: 0,
        rate: 100000,
      });
    default:
      return ApiKey.create({
        key: generateRandomApiKey(12),
        expires: Date.now() + ms("30d"),
        type: "classic",
        count: 0,
        rate: 1000,
      });
  }
};

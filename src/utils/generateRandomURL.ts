import { Meme } from "../database/schemas";

export const generateRandomURL = async (imageType: string) => {
  const MemeData = await Meme.findOne({
    type: imageType,
  });
  if (!MemeData) {
    return null;
  }
  const randomIndex = Math.floor(Math.random() * MemeData.datas.length);
  const randomURL = MemeData.datas[randomIndex];
  return randomURL;
};

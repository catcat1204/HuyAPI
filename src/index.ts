import { createApp } from "./utils/createApp";
import "./database";
import config from "../config.json";
const PORT = config.PORT || 3000;

async function main() {
  try {
    const app = createApp();
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();

//HuyApi 2022

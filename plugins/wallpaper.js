const fs = require("fs");
const fetch = require("node-fetch");
const { smd, TelegraPh } = require("../lib");
const Config = require("../config");
smd(
  {
    pattern: "aesthetic",
    category: "wallpapers",
    filename: __filename,
    desc: "Get an aesthetic wallpaper.",
  },
  async (m) => {
    try {
      let apiUrl = "https://api.maher-zubair.tech/wallpaper/asthetic";
      let response = await fetch(apiUrl);
      let jsonResponse = await response.json();

      if (jsonResponse.status === 200) {
        await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
      } else {
        await m.send("*_Request not be preceed!!_*");
      }
    } catch (error) {
      await m.error(
        error + "\n\ncommand: aesthetic",
        error,
        "*_No responce from API, Sorry!!_*"
      );
    }
  }
);
smd(
    {
      pattern: "car",
      category: "wallpaper",
      filename: __filename,
      desc: "Get a car wallpaper.",
    },
    async (m) => {
      try {
        let apiUrl = "https://api.maher-zubair.tech/wallpaper/car";
        let response = await fetch(apiUrl);
        let jsonResponse = await response.json();
  
        if (jsonResponse.status === 200) {
          await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
        } else {
          await m.send("*_Request not be preceed!!_*");
        }
      } catch (error) {
        await m.error(
          error + "\n\ncommand: car",
          error,
          "*_No responce from API, Sorry!!_*"
        );
      }
    }
  );
  // Command 2: colepalmer
smd(
    {
      pattern: "colepalmer",
      category: "wallpaper",
      filename: __filename,
      desc: "Get a Colepalmer (Colepalmer) wallpaper.",
    },
    async (m) => {
      try {
        let apiUrl = "https://api.maher-zubair.tech/wallpaper/colepalmer";
        let response = await fetch(apiUrl);
        let jsonResponse = await response.json();
  
        if (jsonResponse.status === 200) {
          await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
        } else {
          await m.send("*_Request not be preceed!!_*");
        }
      } catch (error) {
        await m.error(
          error + "\n\ncommand: colepalmer",
          error,
          "*_No responce from API, Sorry!!_*"
        );
      }
    }
  );
  // Command 3: cat
smd(
    {
      pattern: "Dog",
      category: "wallpaper",
      filename: __filename,
      desc: "Get a dog wallpaper.",
    },
    async (m) => {
      try {
        let apiUrl = "https://api.maher-zubair.tech/wallpaper/dog";
        let response = await fetch(apiUrl);
        let jsonResponse = await response.json();
  
        if (jsonResponse.status === 200) {
          await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
        } else {
          await m.send("*_Request not be preceed!!_*");
        }
      } catch (error) {
        await m.error(
          error + "\n\ncommand: dog",
          error,
          "*_No responce from API, Sorry!!_*"
        );
      }
    }
  );
  // Command 4: dog
smd(
    {
      pattern: "dog",
      category: "wallpaper",
      filename: __filename,
      desc: "Get a dog wallpaper.",
    },
    async (m) => {
      try {
        let apiUrl = "https://api.maher-zubair.tech/wallpaper/dog";
        let response = await fetch(apiUrl);
        let jsonResponse = await response.json();
  
        if (jsonResponse.status === 200) {
          await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
        } else {
          await m.send("*_Request not be preceed!!_*");
        }
      } catch (error) {
        await m.error(
          error + "\n\ncommand: dog",
          error,
          "*_No responce from API, Sorry!!_*"
        );
      }
    }
  );
  // Command 5: messi
smd(
    {
      pattern: "messi",
      category: "wallpaper",
      filename: __filename,
      desc: "Get a Lionel Messi wallpaper.",
    },
    async (m) => {
      try {
        let apiUrl = "https://api.maher-zubair.tech/wallpaper/messi";
        let response = await fetch(apiUrl);
        let jsonResponse = await response.json();
  
        if (jsonResponse.status === 200) {
          await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
        } else {
          await m.send("*_Request not be preceed!!_*");
        }
      } catch (error) {
        await m.error(
          error + "\n\ncommand: messi",
          error,
          "*_No responce from API, Sorry!!_*"
        );
      }
    }
  );
  // Command 6: mlegend
smd(
    {
      pattern: "mlegend",
      category: "wallpaper",
      filename: __filename,
      desc: "Get a Mobile Legends wallpaper.",
    },
    async (m) => {
      try {
        let apiUrl = "https://api.maher-zubair.tech/wallpaper/mlegend";
        let response = await fetch(apiUrl);
        let jsonResponse = await response.json();
  
        if (jsonResponse.status === 200) {
          await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
        } else {
          await m.send("*_Request not be preceed!!_*");
        }
      } catch (error) {
        await m.error(
          error + "\n\ncommand: mlegend",
          error,
          "*_No responce from API, Sorry!!_*"
        );
      }
    }
  );
  // Command 7: freefire
smd(
    {
      pattern: "freefire",
      category: "wallpaper",
      filename: __filename,
      desc: "Get a freefire wallpaper.",
    },
    async (m) => {
      try {
        let apiUrl = "https://api.maher-zubair.tech/wallpaper/freefire";
        let response = await fetch(apiUrl);
        let jsonResponse = await response.json();
  
        if (jsonResponse.status === 200) {
          await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
        } else {
          await m.send("*_Request not be preceed!!_*");
        }
      } catch (error) {
        await m.error(
          error + "\n\ncommand: freefire",
          error,
          "*_No responce from API, Sorry!!_*"
        );
      }
    }
  );
  
  // Command 8: random
  smd(
    {
      pattern: "random",
      category: "wallpaper",
      filename: __filename,
      desc: "Get a random wallpaper.",
    },
    async (m) => {
      try {
        let apiUrl = "https://api.maher-zubair.tech/wallpaper/random";
        let response = await fetch(apiUrl);
        let jsonResponse = await response.json();
  
        if (jsonResponse.status === 200) {
          await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
        } else {
          await m.send("*_Request not be preceed!!_*");
        }
      } catch (error) {
        await m.error(
          error + "\n\ncommand: random",
          error,
          "*_No responce from API, Sorry!!_*"
        );
      }
    }
  );
  
  // Command 9: cr7
  smd(
    {
      pattern: "Ronaldo",
      category: "wallpaper",
      filename: __filename,
      desc: "Get a cr7 wallpaper.",
    },
    async (m) => {
      try {
        let apiUrl = "https://api.maher-zubair.tech/wallpaper/Ronaldo";
        let response = await fetch(apiUrl);
        let jsonResponse = await response.json();
  
        if (jsonResponse.status === 200) {
          await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
        } else {
          await m.send("*_Request not be preceed!!_*");
        }
      } catch (error) {
        await m.error(
          error + "\n\ncommand: cr7",
          error,
          "*_No responce from API, Sorry!!_*"
        );
      }
    }
  );
  
  // Command 10: blackpink
  smd(
    {
      pattern: "BTS",
      category: "wallpaper",
      filename: __filename,
      desc: "Get a BTS wallpaper.",
    },
    async (m) => {
      try {
        let apiUrl = "https://api.maher-zubair.tech/wallpaper/bts";
        let response = await fetch(apiUrl);
        let jsonResponse = await response.json();
  
        if (jsonResponse.status === 200) {
          await m.send(jsonResponse.url, { caption: Config.caption }, "image", m);
        } else {
          await m.send("*_Request not be preceed!!_*");
        }
      } catch (error) {
        await m.error(
          error + "\n\ncommand: Bts",
          error,
          "*_No responce from API, Sorry!!_*"
        );
      }
    }
  );
  

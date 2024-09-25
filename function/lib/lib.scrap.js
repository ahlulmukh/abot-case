const axios = require("axios");
const cheerio = require("cheerio");
const fetch = require("node-fetch");
const FormData = require("form-data");
const { fromBuffer } = require("file-type");
global.creator = `@abot.js – Ahlul Mukhramin`;

module.exports = class Scraper {
  /* Image Uploader V2 (707a8191-3fe9-4568-a03e-763edd45f0bb.id.repl.co) [Temp]
   * @param {Buffer} buffer
   */
  uploadImageV2 = (buffer) => {
    return new Promise(async (resolve, reject) => {
      try {
        const server = await (await axios.get("https://neoxr.my.id/srv")).data;
        const { ext } = await fromBuffer(buffer);
        let form = new FormData();
        form.append("someFiles", buffer, "tmp." + ext);
        let json = await (
          await fetch(server.api_path, {
            method: "POST",
            body: form,
          })
        ).json();
        resolve(json);
      } catch (e) {
        console.log(e);
        return resolve({
          creator: global.creator,
          status: false,
          msg: e.message,
        });
      }
    });
  };

  /* Image Uploader (telegra.ph)
   * @param {Buffer} buffer
   */
  uploadImageV3 = async (str) => {
    return new Promise(async (resolve) => {
      try {
        const image = Buffer.isBuffer(str)
          ? str
          : str.startsWith("http")
          ? await (
              await axios.get(str, {
                responseType: "arraybuffer",
              })
            ).data
          : str;
        const { ext } = await fromBuffer(image);
        let form = new FormData();
        form.append("file", Buffer.from(image), "image." + ext);
        const json = await (
          await axios.post("https://telegra.ph/upload", form, {
            headers: {
              Accept: "*/*",
              "User-Agent":
                "Mozilla/5.0 (Linux; Android 6.0.1; SM-J500G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Mobile Safari/537.36",
              Origin: "https://telegra.ph",
              Referer: "https://telegra.ph",
              "Referrer-Policy": "strict-origin-when-cross-origin",
              "sec-ch-ua": '"Chromium";v="107", "Not=A?Brand";v="24"',
              "sec-ch-ua-platform": "Android",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin",
              "x-requested-with": "XMLHttpRequest",
              ...form.getHeaders(),
            },
          })
        ).data;
        if (!json || json.length < 1)
          return resolve({
            creator: global.creator,
            status: false,
            msg: "Failed to upload!",
          });
        resolve({
          creator: global.creator,
          status: true,
          data: {
            url: "https://telegra.ph" + json[0].src,
          },
        });
      } catch (e) {
        console.log(e);
        resolve({
          creator: global.creator,
          status: false,
          msg: e.message,
        });
      }
    });
  };

  /* File Uploader (707a8191-3fe9-4568-a03e-763edd45f0bb.id.repl.co) [Permanent]
   * @param {Buffer} buffer
   */
  uploadFile = (buffer) => {
    return new Promise(async (resolve, reject) => {
      try {
        const server = await (await axios.get("https://neoxr.my.id/srv")).data;
        const { ext } = await fromBuffer(buffer);
        let form = new FormData();
        form.append("someFiles", buffer, "file." + ext);
        let json = await (
          await fetch(server.api_path, {
            method: "POST",
            body: form,
          })
        ).json();
        resolve(json);
      } catch (e) {
        console.log(e);
        return resolve({
          creator: global.creator,
          status: false,
          msg: e.message,
        });
      }
    });
  };

  /* Temp File Upload (file.io)
   * @param {Buffer} buffer
   * @param {String} name
   */
  uploadFileV2 = (buffer, name) => {
    return new Promise(async (resolve) => {
      try {
        if (!Buffer.isBuffer(buffer))
          return resolve({
            status: false,
          });
        let { ext } = (await fromBuffer(buffer)) || {};
        let extention = typeof ext == "undefined" ? "txt" : ext;
        let form = new FormData();
        form.append("file", buffer, name + "." + extention);
        const json = await (
          await fetch("https://file.io/", {
            method: "POST",
            headers: {
              Accept: "*/*",
              "Accept-Language": "en-US,enq=0.9",
              "User-Agent": "GoogleBot",
            },
            body: form,
          })
        ).json();
        if (!json.success)
          return resolve({
            creator: global.creator,
            status: false,
          });
        delete json.success;
        delete json.status;
        resolve({
          creator: global.creator,
          status: true,
          data: json,
        });
      } catch (e) {
        resolve({
          creator: global.creator,
          status: false,
        });
      }
    });
  };

  sfileSearch = (query, page = 1) => {
    return new Promise(async (resolve) => {
      try {
        let res = await fetch(
          `https://sfile.mobi/search.php?q=${query}&page=${page}`
        );
        let $ = cheerio.load(await res.text());
        let result = [];
        $("div.list").each(function () {
          let title = $(this).find("a").text();
          let size = $(this).text().trim().split("(")[1];
          let link = $(this).find("a").attr("href");
          if (link) result.push({ title, size: size.replace(")", ""), link });
        });
        resolve({
          cretor: global.creator,
          status: true,
          msg: result,
        });
      } catch (e) {
        console.log(e);
        return resolve({
          creator: global.creator,
          status: false,
        });
      }
    });
  };

  sFileDl = (url) => {
    return new Promise(async (resolve) => {
      try {
        let res = await fetch(url);
        let $ = cheerio.load(await res.text());
        let filename = $("div.w3-row-padding").find("img").attr("alt");
        let mimetype = $("div.list").text().split(" - ")[1].split("\n")[0];
        let filesize = $("#download")
          .text()
          .replace(/Download File/g, "")
          .replace(/\(|\)/g, "")
          .trim();
        let download =
          $("#download").attr("href") +
          "&k=" +
          Math.floor(Math.random() * (15 - 10 + 1) + 10);
        resolve({
          cretor: global.creator,
          status: true,
          msg: { filename, filesize, mimetype, download },
        });
      } catch (e) {
        console.log(e);
        return resolve({
          creator: global.creator,
          status: false,
        });
      }
    });
  };

  /* To Video (EzGif)
   * @param {String|Buffer} str
   */
  toVideo = async (str) => {
    return new Promise(async (resolve) => {
      try {
        const image = Buffer.isBuffer(str)
          ? str
          : str.startsWith("http")
          ? await (
              await axios.get(str, {
                responseType: "arraybuffer",
              })
            ).data
          : str;
        let form = new FormData();
        form.append("new-image", Buffer.from(image), "image.webp");
        form.append("new-image-url", "");
        const html = await (
          await axios.post("https://s7.ezgif.com/webp-to-mp4", form, {
            headers: {
              Accept: "*/*",
              "User-Agent":
                "Mozilla/5.0 (Linux; Android 6.0.1; SM-J500G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Mobile Safari/537.36",
              Origin: "https://ezgif.com",
              Referer: "https://ezgif.com/webp-to-mp4",
              "Referrer-Policy": "strict-origin-when-cross-origin",
              "sec-ch-ua": '"Chromium";v="107", "Not=A?Brand";v="24"',
              "sec-ch-ua-platform": "Android",
              "sec-fetch-dest": "empty",
              "sec-fetch-mode": "cors",
              "sec-fetch-site": "same-origin",
              "x-requested-with": "XMLHttpRequest",
              ...form.getHeaders(),
            },
          })
        ).data;
        const $ = cheerio.load(html);
        let File = $("#main > form")
          .find("input[type=hidden]:nth-child(1)")
          .attr("value");
        let token = $("#main > form")
          .find("input[type=hidden]:nth-child(2)")
          .attr("value");
        let Submit = $("#tool-submit-button").find("input").attr("value");
        const Format = {
          file: File,
          token: token,
          convert: Submit,
        };
        const proc = await (
          await axios({
            url: "https://ezgif.com/webp-to-mp4/" + File,
            method: "POST",
            data: new URLSearchParams(Object.entries(Format)),
            headers: {
              "User-Agent":
                "Mozilla/5.0 (Linux; Android 6.0.1; SM-J500G) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Mobile Safari/537.36",
              Origin: "https://ezgif.com",
              Referer: "https://ezgif.com/webp-to-mp4",
              "Referrer-Policy": "strict-origin-when-cross-origin",
              accept:
                "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
              "accept-language": "en-US,en;q=0.9,id;q=0.8",
              "content-type": "application/x-www-form-urlencoded",
              "sec-ch-ua":
                '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
            },
          })
        ).data;
        const link = cheerio
          .load(proc)("#output > p.outfile")
          .find("video > source")
          .attr("src");
        if (!link)
          return resolve({
            creator: global.creator,
            status: false,
            msg: "Failed to convert!",
          });
        resolve({
          creator: global.creator,
          status: true,
          data: {
            url: "https:" + link,
          },
        });
      } catch (e) {
        console.log(e);
        resolve({
          creator: global.creator,
          status: false,
          msg: e.message,
        });
      }
    });
  };
};

// RAPIHIN AJA BANG CAPEK WKWK
// BTW JNGN LUPA SUBSCRIBE YT GWEH
// NAMA YOUTUBE : LEXXY OFFICIAL
// KALO GA BISA RAPIHIN JNGN DI EDIT NTAR ERROR

let axios = require('axios')
let BodyForm = require('form-data')
let fetch = require('node-fetch')
let fs = require('fs')

function TelegraPh (Path) {
	return new Promise (async (resolve, reject) => {
		if (!fs.existsSync(Path)) return reject(new Error("File not Found"))
		try {
			const form = new BodyForm();
			form.append("file", fs.createReadStream(Path))
			const data = await  axios({
				url: "https://telegra.ph/upload",
				method: "POST",
				headers: {
					...form.getHeaders()
				},
				data: form
			})
			return resolve("https://telegra.ph" + data.data[0].src)
		} catch (err) {
			return reject(new Error(String(err)))
		}
	})
}

async function AnonFiles(path) {
        return new Promise(async(resolve, reject) => {
          const form = new BodyForm();
          form.append("file", fs.createReadStream(path))
          const { data } = await axios.post("https://api.anonfiles.com/upload", form, {
             responseType: "json",
             headers: { ...form.getHeaders() },
          });
          if (!data.status) reject(data.error.message);
          resolve({
             url: data.data.file.url.short,
             name: data.data.file.metadata.name,
             size: data.data.file.metadata.size.readable
          });
        })
}

async function UploadFileUgu (input) {
	return new Promise (async (resolve, reject) => {
			const form = new BodyForm();
			form.append("files[]", fs.createReadStream(input))
			await axios({
				url: "https://uguu.se/upload.php",
				method: "POST",
				headers: {
					"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
					...form.getHeaders()
				},
				data: form
			}).then((data) => {
				resolve(data.data.files[0])
			}).catch((err) => reject(err))
	})
}

module.exports = { TelegraPh, UploadFileUgu, AnonFiles }

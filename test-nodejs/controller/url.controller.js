const { nanoid } = require("nanoid");
const URL = require("../model/url");

async function shortUrl(req, res) {
  try {
    const { url } = req.body;
    if (!url) {
      throw new Error("URL is required");
    }
    const nanoId = nanoid(6);
    const shortedURL = await URL.create({
      urlId: nanoId,
      redirect: url,
    });
    return res.status(200).json({ url: shortedURL });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function redirectURL(req, res) {
  try {
    const { urlId } = req.params;
    const findUrl = await URL.findOne({ urlId });
    if (!findUrl) {
      throw new Error("Invalid URL");
    }
    return res.redirect(findUrl.redirect);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function getAllURls(req, res) {
  try {
    const urls = await URL.find();
    return res.status(200).json({ urls });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function deleteUrl(req, res) {
  try {
    const { urlId } = req.params;
    const trash = await URL.findOneAndDelete({ urlId });
    return res.status(200).json({ message: trash });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

module.exports = {
  shortUrl,
  redirectURL,
  getAllURls,
  deleteUrl,
};

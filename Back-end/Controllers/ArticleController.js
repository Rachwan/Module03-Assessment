import Article from "../models/article.js";

export const createArticle = async (req, res) => {
  const { title, category, body, author } = req.body;
  const image = req.file.filename;
  try {
    const newArticle = await Article.create({
      imageURL: image,
      title,
      category,
      body,
      author,
    });
    res.status(201).json(newArticle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.findAll();
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getArticleById = async (req, res) => {
  const { id } = req.params;
  try {
    const anArticleById = await Article.findByPk(id);
    if (!anArticleById) {
      res.status(404).json({ error: "Article not found" });
      return;
    }
    res.status(200).json(anArticleById);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateArticle = async (req, res) => {
  const { title, category, body, author } = req.body;
  const image = req.file.filename;
  const { id } = req.params;
  try {
    const [updated] = await Article.update(
      { imageURL: image, title, category, body, author },
      {
        where: { id: id },
      }
    );
    if (!updated) {
      res.status(404).json({ error: "Article not found" });
      return;
    }
    const updatedArticle = await Article.findByPk(id);
    res.status(200).json(updatedArticle);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteArticle = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Article.destroy({
      where: { id: id },
    });
    if (!deleted) {
      res.status(404).json({ error: "Article not found" });
      return;
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

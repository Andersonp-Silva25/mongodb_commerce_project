db.produtos.updateMany(
  { descricao: { $exists: true } },
  { $rename: { descricao: "descricaoSite" } },
);

db.produtos.find({}, { _id: 0, nome: 1, descricaoSite: 1 });
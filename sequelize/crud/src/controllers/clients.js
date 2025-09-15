// O clientModels exportou como default, logo podemos
// declarar o nome da variável que vamos usar aqui
//            ⬇
import ClientRepository from "../models/clientModels.js";

// GET
function findAll(req, res) {
  //                     se resultado  ⬇           envie-o ⬇
  ClientRepository.findAll().then((result) => res.json(result));
}
function findClient(req, res) {
  // Busca por chave primária
  //                 ⬇
  ClientRepository.findByPk(req.params.id).then((result) => res.json(result));
}

//POST
function addClient(req, res) {
  ClientRepository
    // cria novo cliente
    //  ⬇
    .create({
      nome: req.body.nome,
      email: req.body.email,
    })
    .then((result) => res.json(result));
}

// Utilizando função assíncrona por causa da manipulação de dados

//UPDATE
async function updateClient(req, res) {
  // Atualizar cliente      ⬇
  await ClientRepository.update(
    {
      nome: req.body.nome,
      email: req.body.email,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  ClientRepository.findByPk(req.params.id).then((result) => res.json(result));
}

//DELETE
async function deleteClient(req, res) {
  //   Excluir cliente      ⬇
  await ClientRepository.destroy({
    where: {
      id: req.params.id,
    },
  });
  ClientRepository.findAll().then((result) => res.json(result));
}

export default { findAll, findClient, addClient, updateClient, deleteClient };

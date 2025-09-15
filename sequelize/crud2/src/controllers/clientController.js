import ClientRepository from "../models/clientsModel.js";

// ---  GET  ---
async function findAll(req, res) {
  try {
    const clients = await ClientRepository.findAll();
    if (clients.length === 0) {
      return res.status(200).json({ message: "No registered user" });
    }
    return res.status(200).json(clients);
  } catch (error) {
    return res.status(500).json({ erro: error.message || error });
  }
}

async function findClient(req, res) {
  try {
    const client = await ClientRepository.findByPk(req.params.id);
    if (!client) {
      return res.status(404).json({ message: "Unregistered user" });
    }
    return res.status(200).json(client);
  } catch (error) {
    return res.status(500).json({ erro: error.message || error });
  }
}

// --- POST ---
async function addClient(req, res) {
  try {
    const clientAdded = await ClientRepository.create({
      name: req.body.name,
      email: req.body.email,
    });
    return res
      .status(201)
      .json({ message: "User added with sucessfully", user: clientAdded });
  } catch (error) {
    return res.status(500).json({ erro: error.message || error });
  }
}

// --- UPDATE ---
async function updateClient(req, res) {
  try {
    const oldClient = await ClientRepository.findByPk(req.params.id);
    if (!oldClient) {
      return res.status(404).json({ message: "User not found" });
    }
    await ClientRepository.update(
      {
        name: req.body.name,
        email: req.body.email,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    const updateClient = await ClientRepository.findByPk(req.params.id);
    return res.status(200).json({
      message: "User updated sucessfully",
      oldUser: oldClient,
      userUpdated: updateClient,
    });
  } catch (error) {
    return res.status(500).json({ erro: error.message || error });
  }
}

// --- DELETE ---
async function deleteClient(req, res) {
  try {
    const rowsDeleted = await ClientRepository.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (rowsDeleted === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ erro: error.message || error });
  }
}

export default { findAll, findClient, addClient, updateClient, deleteClient };

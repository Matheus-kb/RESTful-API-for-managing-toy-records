import { Brinquedo } from "../models/Brinquedo.js";
import { Sequelize } from "sequelize";

export async function brinquedoIndex(req, res) {
  try {
    const brinquedos = await Brinquedo.findAll();
    res.status(200).json(brinquedos);
  } catch (error) {
    res.status(400).send(error);
  }
}

export async function brinquedoCreate(req, res) {
  const { descricao, marca, preco, faixa_etaria } = req.body;
  if (!descricao || !marca || !preco || !faixa_etaria) {
    res
      .status(400)
      .json("Erro... Informe descricao, marca, preco e faixa_etaria.");
    return;
  }

  try {
    const brinquedo = await Brinquedo.create({
      descricao,
      marca,
      preco,
      faixa_etaria,
    });
    res.status(201).json(brinquedo);
  } catch (error) {
    res.status(400).send(error);
  }
}

export async function brinquedoUpdate(req, res) {
  const { id } = req.params;

  const { descricao, marca, preco, faixa_etaria } = req.body;

  if (!descricao || !marca || !preco || !faixa_etaria) {
    res
      .status(400)
      .json("Erro... Informe descricao, marca, preco e faixa_etaria.");
    return;
  }

  try {
    const brinquedo = await Brinquedo.update(
      {
        descricao,
        marca,
        preco,
        faixa_etaria,
      },
      {
        where: { id },
      }
    );
    res.status(200).json(brinquedo);
  } catch (error) {
    res.status(400).send(error);
  }
}

export async function brinquedoDelete(req, res) {
  const { id } = req.params;

  try {
    await Brinquedo.destroy({
      where: { id },
    });
    res.status(200).json({ msg: "Ok! Brinquedo removido com sucesso." });
  } catch (error) {
    res.status(400).send(error);
  }
}

export async function brinquedoOrderByPrice(req, res) {
  try {
    const brinquedos = await Brinquedo.findAll({
      attributes: ["descricao", "marca", "preco"],
      order: [["preco", "ASC"]],
    });
    res.status(200).json(brinquedos);
  } catch (error) {
    res.status(400).send(error);
  }
}

export async function brinquedoCountByBrand(req, res) {
  try {
    const brinquedosPorMarca = await Brinquedo.findAll({
      attributes: [
        "marca",
        [Sequelize.fn("COUNT", Sequelize.col("marca")), "count"],
      ],
      group: ["marca"],
    });
    res.status(200).json(brinquedosPorMarca);
  } catch (error) {
    res.status(400).send(error);
  }
}

export async function brinquedoStatistics(req, res) {
  try {
    const estatisticas = await Brinquedo.findOne({
      attributes: [
        [
          Sequelize.fn("ROUND", Sequelize.fn("AVG", Sequelize.col("preco")), 2),
          "preco_medio",
        ],
        [
          Sequelize.fn(
            "ROUND",
            Sequelize.fn("AVG", Sequelize.col("faixa_etaria")),
            0
          ),
          "faixa_etaria_media",
        ],
      ],
    });
    res.status(200).json(estatisticas);
  } catch (error) {
    res.status(400).send(error);
  }
}

export async function brinquedoAdjustPrice(req, res) {
    const { taxaReajuste } = req.body;
  
    if (!taxaReajuste) {
      res.status(400).json("Erro... Informe a taxa de reajuste.");
      return;
    }
    try {
      await Brinquedo.sequelize.query(`
        UPDATE brinquedos
        SET preco = preco * (1 + :taxaReajuste)
      `, {
        replacements: { taxaReajuste: parseFloat(taxaReajuste) },
        type: Brinquedo.sequelize.QueryTypes.UPDATE,
      });
      res.status(200).json({ msg: "Preços dos brinquedos foram atualizados com sucesso." });
    } catch (error) {
      res.status(400).send(error);
    }
  }
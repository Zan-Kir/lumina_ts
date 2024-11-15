import mongoose from "mongoose";

const EmpresaSchema = new mongoose.Schema({
  auth: {
    nomeEmpresa: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  telefoneEmpresa: { type: String },
  emailEmpresa: { type: String },
  siteEmpresa: { type: String },
  tipoEmpresa: [{ type: String }],
  CNPJ: { type: String },
  endereco: {
    cidade: { type: String },
    UF: { type: String },
    CEP: { type: String },
    logradouro: { type: String },
    numero: { type: String },
    bairro: { type: String },
    complemento: { type: String },
  },
  redesSociais: {
    facebook: { type: String },
    instagram: { type: String },
    linkedin: { type: String },
  },
  mensagens: [
    {
      idMsg: { type: Number },
      idEmpresaEnvia: { type: Number },
      idEmpresaRecebe: { type: Number },
      mensagem: { type: String },
      data: { type: Date },
    },
  ],
  servicos: [{ type: mongoose.Schema.Types.ObjectId, ref: "Servico" }],
  userImg: { type: String },
  local: {
    type: { type: String, default: "Point" },
    coordinates: [{ type: Number }],
  },
});

export const Empresa = mongoose.model("Empresa", EmpresaSchema);

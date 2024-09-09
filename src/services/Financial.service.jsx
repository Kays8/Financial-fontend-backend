import api from "./api";
const FINANCIAL_API = import.meta.env.VITE_FINANCIAL_API;

const getAllFinancial = async () => {
  return await api.get(FINANCIAL_API);
};

const getFinancialById = async (id) => {
  return await api.get(`${FINANCIAL_API}${id}`);
};

const getFinancialByUserId = async (userId) => {
  return await api.get(`${FINANCIAL_API}/user/${userId}`);
};

const editFinancial = async (id, financial) => {
  return await api.put(`${FINANCIAL_API}/${id}`, financial);
};

const deleteFinancial = async (id) => {
  return await api.delete(`${FINANCIAL_API}/${id}`);
};

const createFinancial = async (financial) => {
  return await api.post(`${FINANCIAL_API}`, financial);
};

const FinancialService = {
  getAllFinancial,
  getFinancialById,
  getFinancialByUserId,
  editFinancial,
  deleteFinancial,
  createFinancial,
};

export default FinancialService;

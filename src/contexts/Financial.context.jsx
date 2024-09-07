import { createContext, useContext, useEffect, useState } from "react";
import FinancialService from "../services/Financial.service";
import { useUser } from "@clerk/clerk-react";

export const FinancialContext = createContext();

// eslint-disable-next-line react/prop-types
export const FinancialProcider = ({ children }) => {
  const [records, setRecords] = useState([]);
  const { user } = useUser();

  const fetchRecords = async () => {
    if (!user) return;
    try {
      const response = await FinancialService.getFinancialByUserId(user.id);
      if (response.status === 200) {
        setRecords(response.date);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRecords();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const add_Financial = async (financial) => {
    console.log("Adding financial: ", financial);
    try {
      const response = await FinancialService.createFinancial(financial);
      console.log("Response from FinancialService: ", response);
      if (response.status === 200) {
        setRecords((prev) => [...prev, response.data]);
        return response;
      } else {
        console.error("Financail to add record:", response.statusText);
      }
    } catch (error) {
      console.error("Error in add_Financial:", error);
    }
  };

  const update_Financial = async (id, newFinancial) => {
    try {
      const response = await FinancialService.editFinancial(id, newFinancial);
      if (response.status === 200) {
        setRecords((prev) =>
          prev.map((record) => {
            if (record.id === id) {
              return newFinancial;
            } else return record;
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const delete_Financial = async (id) => {
    try {
      const response = FinancialService.deleteFinancial(id);
      if (response.status === 200) {
        setRecords((prev) => prev.filter((record) => record.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FinancialContext.Provider
      value={{ records, add_Financial, update_Financial, delete_Financial }}
    >
      {children}
    </FinancialContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFinancial = () => useContext(FinancialContext);

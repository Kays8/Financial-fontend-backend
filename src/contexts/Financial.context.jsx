import { createContext, useContext, useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import FinancialService from "./../services/Financial.service";

export const FinancialRecordContext = createContext();
// eslint-disable-next-line react/prop-types
export const FinancialRecordProvider = ({ children }) => {
  const [records, setRecords] = useState([]);
  const { user } = useUser();
  const fetchRecords = async () => {
    if (!user) return;
    try {
      const response = await FinancialService.getFinancialByUserId(user.id);
      if (response.status === 200) {
        setRecords(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchRecords();
  }, [user]);

  //Add Record to FinancialRecord
  const addRecord = async (record) => {
    try {
      const response = await FinancialService.createFinancial(record);
      if (response.status === 200) {
        setRecords((prev) => [...prev, response.data]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Edit Record in FinancialRecord
  const editRecord = async (id, newRecord) => {
    try {
      const response = await FinancialService.editFinancial(id, newRecord);
      if (response.status === 200) {
        setRecords((prev) => {
          prev.map((record) => {
            if (record.id === id) {
              return newRecord;
            } else {
              return record;
            }
          });
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  //Delete Record in FinancialRecord
  const deleteRecord = async (id) => {
    try {
      const response = await FinancialService.deleteFinancial(id);
      if (response.status === 200) {
        setRecords((prev) => prev.filter((record) => record.id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <FinancialRecordContext.Provider
      value={{ records, addRecord, editRecord, deleteRecord }}
    >
      {children}
    </FinancialRecordContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFinancialRecords = () => useContext(FinancialRecordContext);

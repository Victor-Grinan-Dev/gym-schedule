import { useEffect, useState } from "react";

const useSheetData = ({ sheetID, sheetName, query }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!sheetID || !sheetName || !query) return;
    
    const fetchData = async () => {
      const base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
      const url = `${base}&sheet=${encodeURIComponent(sheetName)}&tq=${encodeURIComponent(query)}`;
      
      try {
        const res = await fetch(url);
        const text = await res.text();
        setData(responseToObjects(text));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [sheetID, sheetName, query]);

  const responseToObjects = (res) => {
    const jsData = JSON.parse(res.substring(47).slice(0, -2));
    let data = [];
    const columns = jsData.table.cols;
    const rows = jsData.table.rows;
    for (let r = 0; r < rows.length; r++) {
      let rowObject = {};
      for (let c = 0; c < columns.length; c++) {
        const cellData = rows[r]?.c[c];
        const propName = columns[c]?.label;
        rowObject[propName] = cellData?.v ?? "";
      }
      data.push(rowObject);
    }
    return data;
  };

  return data;
};

export default useSheetData;

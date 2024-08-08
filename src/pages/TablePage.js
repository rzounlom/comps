import { config, tableData } from "../data/tableData";

import React from "react";
import SortableTable from "../components/SortableTable";
import Table from "../components/Table";

const TablePage = () => {
  const keyFn = (fruit) => fruit.name;
  return (
    <div>
      {/* <Table data={tableData} config={config} keyFn={keyFn} /> */}
      <SortableTable data={tableData} config={config} keyFn={keyFn} />
    </div>
  );
};

export default TablePage;

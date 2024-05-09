import React, { useState } from "react";

import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { DEFAULT_OPTIONS, getTheme } from "@table-library/react-table-library/mantine";
import './App.css';

// import { usePagination } from "@table-library/react-table-library/pagination"; // Importing pagination hook
// import { Pagination } from "@table-library/react-table-library"; // Importing Pagination component from the correct location
import Pagination from "./Pagination"
const key = "Fixed Column";
const nodes = [

    {
        id: "1",
        name: " List",
        deadline: new Date(2020, 1, 15),
        type: "TASK",
        isComplete: true,
        nodes: 3,
    },
    {
        id: "2",
        name: "Shopping List",
        deadline: new Date(2020, 1, 15),
        type: "TASK",
        isComplete: true,
        nodes: 3,
    },
    {
        id: "3",
        name: "qeret",
        deadline: new Date(2020, 1, 15),
        type: "TASK",
        isComplete: true,
        nodes: 3,
    },
    {
        id: "4",
        name: "erreet",
        deadline: new Date(2020, 1, 15),
        type: "TASK",
        isComplete: true,
        nodes: 3,
    },
    {
        id: "5",
        name: "hoppinSg List",
        deadline: new Date(2020, 1, 15),
        type: "TASK",
        isComplete: true,
        nodes: 3,
    },
    {
        id: "6",
        name: "rrtt",
        deadline: new Date(2020, 1, 15),
        type: "TASK",
        isComplete: true,
        nodes: 3,
    },
    {
        id: "7",
        name: "yyhn",
        deadline: new Date(2020, 1, 15),
        type: "TASK",
        isComplete: true,
        nodes: 3,
    },
];

function TableUser() {
    const data = { nodes };

    const mantineTheme = getTheme(DEFAULT_OPTIONS);
    const customTheme = {
        Table: `
        --data-table-library_grid-template-columns:  250px 150px 25% 25% 30%;
       
      `,
        BaseCell: `
        &:nth-of-type(1) {
          left: 0px;
       
        }
  
        &:nth-of-type(2) {
          left: 250px;
         
        }
      `,
        Cell: `
        text-align:center;
        color:blue;
        transition: background-color 0.3s ease; /* Adding transition effect */
        
        /* Hover effect */
        &:hover {
            background-color: lightblue;
        }

       `,
        HeaderCell: `
   
         text-align:center;
            background-color: red;
     
      `,

    };
    const theme = useTheme([mantineTheme, customTheme]);

    const COLUMNS = [
        { label: "Task", renderCell: (item) => item.name, pinLeft: true },
        {
            label: "Deadline",
            renderCell: (item) =>
                item.deadline.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                }),
            pinLeft: true,
        },
        { label: "Type", renderCell: (item) => item.type },
        {
            label: "Complete",
            renderCell: (item) => item.isComplete.toString(),
        },
        { label: "Tasks", renderCell: (item) => item.nodes?.length },
    ];

    const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const slicedNodes = nodes.slice(startIndex, endIndex);
    return (
        <>
            <CompactTable className="custom-table" columns={COLUMNS} data={{nodes: slicedNodes}} theme={theme}  layout={{ custom: true, horizontalScroll: true }} />
            <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(nodes.length / itemsPerPage)}
        onPageChange={setCurrentPage}
      />
        </>
    );
}

export default TableUser;
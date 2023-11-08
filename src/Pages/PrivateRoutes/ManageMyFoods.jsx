import { useContext, useEffect, useMemo, useState } from "react";
import { AuthProvider } from "../../Auth/Authenticate";
import axios from "axios";
import { Button, Heading, Image, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useTable } from "react-table";
import swal from "sweetalert";
import { Link } from "react-router-dom";




const ManageMyFoods = () => {
    const [manageFoods, setManageFoods] = useState([]);
    const { user } = useContext(AuthProvider);


    const tableColumn = [
      {
        Header: "Name",
        accessor: "foodName",
      },
      {
        Header: "Image",
        accessor: "foodImageURL",
        Cell: ({ row, i }) => (
          <Image key={i} src={row.values?.foodImageURL} h={100}></Image>
        ),
      },
      {
        Header: "Quantity",
        accessor: "foodQuantity",
      },
      {
        Header: "Location",
        accessor: "pickupLocation",
      },
      {
        Header: "Expired In",
        accessor: "expiredDate",
      },
      {
        Header: "Status",
        accessor: "foodStatus",
      },
      {
        Header: "Update",
        accessor: "update",
        Cell: ({ row }) => (
          <Link to={`/update/${row.original._id}`}>
            <Button>
              Update
            </Button>
          </Link>
        ),
      },
      {
        Header: "Delete",
        accessor: "delete",
        Cell: ({ row }) => (
          <button
            onClick={() => handleDelete(row.original._id)}
            className="btn btn-square btn-outline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        ),
      },
      {
        Header: "Manage",
        accessor: "manage",
        Cell: ({ row }) => <Button>Manage</Button>,
      },
    ];

    const columns = useMemo(()=>tableColumn ,[])
    const data = useMemo(() => manageFoods, [manageFoods]);

    const { getTableProps , getTableBodyProps, headerGroups , rows ,prepareRow } = useTable({
        columns,
        data, 
    })

    useEffect(() => {
        axios.get(`http://localhost:5000/api/availableFoods?donarEmail=${user.email}`)
        .then(res=>setManageFoods(res.data))
        .catch(err=>console.log(err.message))
    }, [user.email])
    
    const handleDelete = (id) => {
        swal({
          title: "Are you sure?",
          text: "It will delete permanently",
          icon: "warning",
          dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                axios.delete(`http://localhost:5000/api/availableFoods/${id}`)
                    .then(res => {
                        console.log(res);
                        if (res.data.deletedCount > 0) {
                            const remain = manageFoods.filter(food => food._id != id);
                            setManageFoods(remain)
                          swal(
                            "Deleted!",
                            "Your imaginary file has been deleted!",
                            "success"
                          );
                        }
                })
           
          }
        }).catch(err => console.log(err.message))
      
    
    }

  // console.log(manageFoods);
  
  

    return (
      <div className="w-[90%] mx-auto pb-10">
        <Heading className="text-center my-6 text-teal-700">
          Food Table : {manageFoods.length} Food Items
        </Heading>
        <Table {...getTableProps()} variant="striped" colorScheme="teal">
          <Thead>
            {headerGroups?.map((headerGroup, idx) => (
              <Tr key={idx} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers?.map((column, idx) => (
                  <Th key={idx} {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {rows?.map((row, idx) => {
              prepareRow(row);
              return (
                <Tr key={idx} {...row.getRowProps()}>
                  {row.cells?.map((cell, idx) => (
                    <Td key={idx} {...cell.getCellProps}>
                      {cell.render("Cell")}
                    </Td>
                  ))}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </div>
    );
};


export default ManageMyFoods;
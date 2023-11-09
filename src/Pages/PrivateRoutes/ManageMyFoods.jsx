import { useContext, useEffect, useMemo, useState } from "react";
import { AuthProvider } from "../../Auth/Authenticate";
import axios from "axios";
import { Button, Heading, Image, Spinner, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useTable } from "react-table";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";




const ManageMyFoods = () => {
    const [manageFoods, setManageFoods] = useState([]);
  const { user } = useContext(AuthProvider);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);


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
            <EditIcon className="text-2xl">Update</EditIcon>
          </Link>
        ),
      },
      {
        Header: "Delete",
        accessor: "delete",
        Cell: ({ row }) => (
          <DeleteIcon className="text-2xl" onClick={() => handleDelete(row.original._id)}></DeleteIcon>
        ),
      },
      {
        Header: "Manage Food",
        accessor: "manage",
        Cell: ({ row }) => (
          <Link to={`/manageFoods/${row.original._id}`}>
            <Button>Manage</Button>
          </Link>
        ),
      },
    ];

    const columns = useMemo(()=>tableColumn ,[])
    const data = useMemo(() => manageFoods, [manageFoods]);

    const { getTableProps , getTableBodyProps, headerGroups , rows ,prepareRow } = useTable({
        columns,
        data, 
    })

    useEffect(() => {
        axios.get(`https://reduce-waste-together-server.vercel.app/api/availableFoods?donarEmail=${user.email}` , {withCredentials:true})
          .then(res => {
            setManageFoods(res.data)
            setLoading(false);
          })
          .catch(err => {
            setErr(true);
            console.log(err.message)
          })
    }, [user.email])
    
    const handleDelete = (id) => {
        swal({
          title: "Are you sure?",
          text: "It will delete permanently",
          icon: "warning",
          dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                axios.delete(`https://reduce-waste-together-server.vercel.app/api/availableFoods/${id}`)
                    .then(res => {
                        console.log(res);
                        if (res.data.deletedCount > 0) {
                            const remain = manageFoods.filter(food => food._id != id);
                           
                          swal(
                            "Deleted!",
                            "Your imaginary file has been deleted!",
                            "success"
                          );
                           setManageFoods(remain);
                        }
                })
           
          }
        }).catch(err => console.log(err.message))
      
    
    }


    return (
      <div>
        {err ? (
          <h3 className="text-center font-bold py-10 text-3xl">
            Not Valid Token
          </h3>
        ) : (
          <div>
            {loading ? (
              <p className="text-center my-10">
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="xl"
                />
              </p>
            ) : (
              <div className="w-[90%] mx-auto pb-10">
                <Heading className="text-center my-6 text-teal-700">
                  Food Table : {manageFoods.length} Food Items
                </Heading>
                <Table
                  {...getTableProps()}
                  variant="striped"
                  colorScheme="teal"
                >
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
            )}
          </div>
        )}
      </div>
    );
};


export default ManageMyFoods;
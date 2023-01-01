import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import Header from "../../components/Header";


const Matches = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);


    const columns = [
        { field: "id", headerName: "Forma No"},
        { 
            field: "name", 
            headerName: "İsim Soyisim", 
            flex: 1, 
            cellClassName: "name-column--cell",
        },
        { 
            field: "age", 
            headerName: "Alınan Yard", 
            type: "number",
            headerAlign: "center",
            align: "center",
        },
        { 
            field: "phone", 
            headerName: "Phone Number", 
            flex: 1,
            align: "center",
        },
        { 
            field: "email", 
            headerName: "Email", 
            flex: 1, 
        },

    ]

    return (
        <Box m="20px">
            <Header title="MATCHES" subtitle="Oyunlar" />
            <Box
                m="40px 0 0 0"
                height="50vh"
            >
                <DataGrid 
                    rows={mockDataTeam}
                    columns={columns}
                />
            </Box>
        </Box>
    )
}


export default Matches;
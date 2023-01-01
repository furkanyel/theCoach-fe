import { Box } from "@mui/material";
import { useTheme } from "@nivo/core";
import Header from "../../components/Header";


const Dashboard = () => {

    return <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="SAKARYA TATANKALARI" subtitle="Dashboarda hoş geldin!" />
        </Box>
    </Box>;
};

export default Dashboard;
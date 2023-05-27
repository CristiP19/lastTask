import {styled} from "@mui/system";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import Tooltip from '@mui/material/Tooltip';
import {TableCell} from "@mui/material";

export const StyledBox = styled(Box)(() => ({
    width: '100%',
}));

export const StyledPaper = styled(Paper)(() => ({
    width: '100%',
    mb: 2,
    borderRadius: '20px',
    padding: '5px',
    marginTop: '100px',
    paddingTop: "30px",
    marginBottom: "5em"
}));

export const StyledTable = styled(Table)(() => ({
    minWidth: '750px'
}));

export const StyledTooltipRefresh = styled(Tooltip)(() => ({
    position: 'absolute',
    right: '60px',
    top: '130px'
}));

export const StyledTableCell = styled(TableCell)(() => ({
    fontWeight: 'bold',
    cursor: 'pointer'
}));

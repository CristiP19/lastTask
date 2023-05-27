import React, {useState} from "react";
import {Table, TableBody, TableCell, TableContainer, TableRow} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ConfirmModal from "components/common/confirmModal/ConfirmModal";
import EditIcon from "@mui/icons-material/Edit";
import {Link} from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import RefreshIcon from "@mui/icons-material/Refresh";
import {StyledBox, StyledPaper, StyledTooltipRefresh} from './styled';

const CombinedTable = ({ data, columns, handleDelete, handleRefresh, dataType }) => {

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleModalConfirm = () => {
    if (selectedId !== null) {
      handleDelete(selectedId);
      setSelectedId(null);
    }
  };

  return (
    <StyledBox>
      <StyledTooltipRefresh title="Refresh list">
        <IconButton onClick={handleRefresh}>
          <RefreshIcon />
        </IconButton>
      </StyledTooltipRefresh>
      <StyledPaper>
        <TableContainer>
          <Table>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Link to={`/${dataType}/${item.id}/edit`}>
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                    </Link>
                    <IconButton
                      onClick={() => {
                        setSelectedId(item.id);
                        setModalOpen(true);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <Link to={`/${dataType}/${item.id}/info`}>
                      <IconButton>
                        <InfoIcon />
                      </IconButton>
                    </Link>
                  </TableCell>
                  {columns.map(({ accessor }) => {
                    const tData = item[accessor] ? item[accessor] : "——";
                    return <TableCell key={accessor}>{tData}</TableCell>;
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </StyledPaper>
      <ConfirmModal
        open={modalOpen}
        handleClose={handleModalClose}
        onConfirm={handleModalConfirm}
        message="Are you sure?"
      />
    </StyledBox>
  );
};

export default CombinedTable;

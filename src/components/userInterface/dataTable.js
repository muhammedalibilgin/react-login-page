import * as React from "react";

import { useState } from "react";

import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import users from "../user.json";

function TablePaginationActions(props) {
      const theme = useTheme();
      const { count, page, rowsPerPage, onPageChange } = props;

      const handleFirstPageButtonClick = (event) => {
            onPageChange(event, 0);
      };

      const handleBackButtonClick = (event) => {
            onPageChange(event, page - 1);
      };

      const handleNextButtonClick = (event) => {
            onPageChange(event, page + 1);
      };

      const handleLastPageButtonClick = (event) => {
            onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
      };

      return (
            <Box sx={{ flexShrink: 0, ml: 2.5 }}>
                  <IconButton onClick={handleFirstPageButtonClick} disabled={page === 0} aria-label="first page">
                        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
                  </IconButton>
                  <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                        {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                  </IconButton>
                  <IconButton onClick={handleNextButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1} aria-label="next page">
                        {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                  </IconButton>
                  <IconButton onClick={handleLastPageButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1} aria-label="last page">
                        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
                  </IconButton>
            </Box>
      );
}

TablePaginationActions.propTypes = {
      count: PropTypes.number.isRequired,
      onPageChange: PropTypes.func.isRequired,
      page: PropTypes.number.isRequired,
      rowsPerPage: PropTypes.number.isRequired,
};

export default function CustomPaginationActionsTable() {
      const [page, setPage] = React.useState(0);
      const [rowsPerPage, setRowsPerPage] = React.useState(5);
      let [usersTable, setUsersTable] = useState(users);

      const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - users.length) : 0;

      const handleChangePage = (event, newPage) => {
            setPage(newPage);
      };

      const handleChangeRowsPerPage = (event) => {
            setRowsPerPage(parseInt(event.target.value, 10));
            setPage(0);
      };

      const deleteButton = (x) => {
            const newUsersList = usersTable.filter((cur) => cur.id !== x.id);

            usersTable = newUsersList;
            setUsersTable(newUsersList);
      };

      return (
            <TableContainer sx={{ backgroundColor: "#a8c0ff" }} component={Paper}>
                  <Table aria-label="custom pagination table">
                        <TableHead>
                              <TableRow>
                                    <TableCell sx={{ fontWeight: "bold" }}>İsim Soyisim</TableCell>
                                    <TableCell align="right">Kullanıcı Adı</TableCell>
                                    <TableCell align="right">ID</TableCell>
                                    <TableCell align="right">E-Mail</TableCell>
                                    <TableCell align="right">Delete</TableCell>
                              </TableRow>
                        </TableHead>
                        <TableBody>
                              {(rowsPerPage > 0 ? usersTable.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : usersTable).map((x) => (
                                    <TableRow key={x.id}>
                                          <TableCell component="th" scope="row">
                                                {x.name}
                                          </TableCell>
                                          <TableCell style={{ width: 160 }} align="right">
                                                {x.username}
                                          </TableCell>
                                          <TableCell style={{ width: 160 }} align="right">
                                                {x.id}
                                          </TableCell>
                                          <TableCell style={{ width: 160 }} align="right">
                                                {x.email}
                                          </TableCell>
                                          <TableCell style={{ width: 160 }} align="right">
                                                <DeleteForeverIcon
                                                      onClick={(e) => deleteButton(x)}
                                                      className="deletebuto"
                                                      style={{ maxHeight: "30px", color: "white", opacity: 0.5 }}
                                                />
                                          </TableCell>
                                    </TableRow>
                              ))}

                              {emptyRows > 0 && (
                                    <TableRow style={{ height: 53 * emptyRows }}>
                                          <TableCell colSpan={6} />
                                    </TableRow>
                              )}
                        </TableBody>

                        <TableFooter>
                              <TableRow>
                                    <TablePagination
                                          rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                                          colSpan={3}
                                          count={users.length}
                                          rowsPerPage={rowsPerPage}
                                          page={page}
                                          SelectProps={{
                                                inputProps: {
                                                      "aria-label": "rows per pager",
                                                },
                                                native: true,
                                          }}
                                          onPageChange={handleChangePage}
                                          onRowsPerPageChange={handleChangeRowsPerPage}
                                          ActionsComponent={TablePaginationActions}
                                    />
                              </TableRow>
                        </TableFooter>
                  </Table>
            </TableContainer>
      );
}

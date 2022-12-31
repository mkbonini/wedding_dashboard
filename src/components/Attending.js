import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Attending({dashboard}) {
  const guests = dashboard?.attending
  return (
    <React.Fragment>
      <Title>Guests Attending</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Arrival Date</TableCell>
            <TableCell align="center">Party Count</TableCell>
            <TableCell align="right">Breakfast?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {guests?.map((guest) => (
            <TableRow key={guest.id}>
              <TableCell align="center">{`${guest.first_name} ${guest.last_name}`}</TableCell>
              <TableCell align="center">{guest.email}</TableCell>
              <TableCell align="center">{guest.arrival_date}</TableCell>
              <TableCell align="center">{guest.party_count}</TableCell>
              <TableCell align="center">{guest.breakfast}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link> */}
    </React.Fragment>
  );
}

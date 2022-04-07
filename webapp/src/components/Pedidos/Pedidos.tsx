import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Pedido, Estado } from '../../shared/shareddtypes';


type PedidoProps = {
    pedidos: Pedido[];
    user: undefined | string
  }


export default function Pedidos(pedidos: PedidoProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell><b>Pedido</b></TableCell>
            <TableCell align="right"><b>Precio</b></TableCell>
            <TableCell align="right"><b>Estado</b></TableCell>
            <TableCell align="right"><b>Fecha</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pedidos.pedidos.filter((p) => p.id_usuario === pedidos.user).map((pedido) => (
            <TableRow
              key={pedido.numero_pedido}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{pedido.numero_pedido}</TableCell>
              <TableCell align="right">{pedido.precio_total}€</TableCell>
              <TableCell align="right">{pedido.estado}</TableCell>
              <TableCell align="right">{pedido.fecha}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

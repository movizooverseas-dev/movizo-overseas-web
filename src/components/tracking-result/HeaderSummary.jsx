'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

export default function HeaderSummary({ message, summary }) {
  const statusTone =
    String(summary.Status).toLowerCase().includes('deliver')
      ? 'bg-emerald-100 text-emerald-700'
      : String(summary.Status).toLowerCase().includes('out for delivery')
      ? 'bg-amber-100 text-amber-700'
      : 'bg-sky-100 text-sky-700';

  return (
    <div className="w-full">
      <div className="w-full mx-auto space-y-5">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-sky-300 via-sky-600 to-sky-800 bg-clip-text text-transparent">
            Tracking Details
          </h2>
          <Badge className={`${statusTone} border-0 shadow-md px-4 py-2 text-base`}>
            {summary.Status}
          </Badge>
        </div>
        {message ? (
          <p className="text-sm md:text-base text-slate-600">{message}</p>
        ) : null}

        <div className="w-full bg-white shadow-2xl rounded-2xl px-4 py-2 overflow-x-auto transition-all duration-300 hover:shadow-[0_8px_40px_rgba(30,64,175,0.18)]">
          <Table className="min-w-[780px]">
            <TableBody>
              <TableRow className="hover:bg-sky-50 transition">
                <TableCell className="font-bold bg-sky-50">Origin</TableCell>
                <TableCell>{summary.Origin}</TableCell>
                <TableCell className="font-bold bg-sky-50">Destination</TableCell>
                <TableCell>{summary.Destination}</TableCell>
              </TableRow>
              <TableRow className="hover:bg-sky-50 transition">
                <TableCell className="font-bold">Shipper</TableCell>
                <TableCell>{summary.ShipperName}</TableCell>
                <TableCell className="font-bold">Consignee</TableCell>
                <TableCell>{summary.ConsigneeName}</TableCell>
              </TableRow>
              <TableRow className="hover:bg-sky-50 transition">
                <TableCell className="font-bold bg-sky-50">Pieces</TableCell>
                <TableCell>{summary.Pieces}</TableCell>
                <TableCell className="font-bold bg-sky-50">Weight (kg)</TableCell>
                <TableCell>{summary.WeightKg}</TableCell>
              </TableRow>
              <TableRow className="hover:bg-sky-50 transition">
                <TableCell className="font-bold">Declared Value</TableCell>
                <TableCell>{summary.DeclaredValue}</TableCell>
                <TableCell className="font-bold">Organization</TableCell>
                <TableCell>{summary.Network}</TableCell>
              </TableRow>
              <TableRow className="hover:bg-sky-50 transition">
                <TableCell className="font-bold bg-sky-50">Service</TableCell>
                <TableCell>{summary.Services}</TableCell>
                <TableCell className="font-bold bg-sky-50">Status Date/Time</TableCell>
                <TableCell>{summary.StatusDate} {summary.StatusTime}</TableCell>
              </TableRow>
              {(summary.ReceivedBy !== '-' || summary.Remarks !== '-') && (
                <TableRow className="hover:bg-sky-50 transition">
                  <TableCell className="font-bold">Received By</TableCell>
                  <TableCell>{summary.ReceivedBy}</TableCell>
                  <TableCell className="font-bold">Remarks</TableCell>
                  <TableCell>{summary.Remarks}</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

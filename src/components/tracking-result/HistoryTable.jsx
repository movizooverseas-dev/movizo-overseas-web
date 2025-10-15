'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';

// Helper to parse and sort ascending
function parseDateTime(d, t) {
  const [dd, mm, yyyy] = String(d || '').split('/').map(Number);
  const [HH = 0, MM = 0] = String(t || '00:00').split(':').map(Number);
  const dt = new Date(yyyy, (mm || 1) - 1, dd, HH, MM);
  return isNaN(dt.getTime()) ? new Date(0) : dt;
}

export default function HistoryTable({ history = [], showFull, onToggle }) {
  // Sort history ascending: "Shipment Information Received" -> "Delivered"
  const asc = history;

  const preview = asc.slice(0,2); // Show last 5 for preview

  const rows = showFull ? asc : preview;

  return (
    <div className="space-y-4 w-full max-w-7xl mx-auto">
      {/* Header & toggle button */}
      <div className="flex items-center justify-between px-2">
        <h3 className=" text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-sky-600 via-sky-400 to-sky-800 bg-clip-text text-transparent">
          {showFull ? 'Full Tracking History' : 'Recent Tracking History'}
        </h3>
        <Button variant="outline" onClick={onToggle} className="border-slate-300">
          {showFull ? 'Hide History' : 'View Full History'}
        </Button>
      </div>

      {/* Scrollable table container */}
      <div className="overflow-x-auto rounded-2xl shadow-2xl bg-white">
        <Table className="min-w-[720px] sm:min-w-full">
          <TableHeader className="bg-blue-100">
            <TableRow>
              <TableHead className="w-40">Date</TableHead>
              <TableHead className="w-28">Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-56">Entered By</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} className="text-center text-slate-500 py-4">
                  No history available
                </TableCell>
              </TableRow>
            )}
            {rows.map((h, i) => (
              <TableRow
                key={`${h.Status_Date}-${h.ST_TIME}-${i}`}
                className="hover:bg-sky-50 transition"
              >
                <TableCell>{h.Status_Date || '-'}</TableCell>
                <TableCell>{h.ST_TIME || '-'}</TableCell>
                <TableCell className="font-medium">{h.Status || '-'}</TableCell>
                <TableCell className="text-slate-600">
                  Movizo Overseas - Sanjay Bhardwaj
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {!showFull && (
        <p className="text-xs text-slate-500 px-2">
          Showing latest updates, click “View Full History” to see all events in chronological order.
        </p>
      )}
    </div>
  );
}

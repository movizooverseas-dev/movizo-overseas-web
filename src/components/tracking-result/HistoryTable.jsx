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

function parseDateTime(d, t) {
  const [dd, mm, yyyy] = String(d || '').split('/').map(Number);
  const [HH = 0, MM = 0] = String(t || '00:00').split(':').map(Number);
  const dt = new Date(yyyy, (mm || 1) - 1, dd, HH, MM);
  return isNaN(dt.getTime()) ? new Date(0) : dt;
}

export default function HistoryTable({ history = [], showFull, onToggle }) {
  // Ascending order for chronological display
  const asc = history;

  // Show only last 2 items for preview for better UI (adjust if needed)
  const preview = asc.slice(0, 2);

  const rows = showFull ? asc : preview;

  return (
    <div className="space-y-4 w-full max-w-7xl mx-auto">
      {/* Header & Toggle */}
      <div className="flex items-center justify-between px-2">
        <h3 className="text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-sky-600 via-sky-400 to-sky-800 bg-clip-text text-transparent">
          {showFull ? 'Full Tracking History' : 'Recent Tracking History'}
        </h3>
        <Button
          variant="outline"
          onClick={onToggle}
          className="border-slate-300"
          size="sm"
        >
          {showFull ? 'Hide History' : 'View Full History'}
        </Button>
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto rounded-2xl shadow-2xl bg-white  mx-auto">
        <Table className="min-w-[740px] md:min-w-full">
          <TableHeader className="bg-blue-100">
            <TableRow>
              <TableHead className="w-44 px-3 py-2 text-left font-semibold tracking-wide">
                Date
              </TableHead>
              <TableHead className="w-36 px-3 py-2 text-left font-semibold tracking-wide">
                Time
              </TableHead>
              <TableHead className="px-3 py-2 text-left font-semibold tracking-wide">
                Status
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.length === 0 && (
              <TableRow>
                <TableCell colSpan={3} className="text-center text-slate-500 py-6">
                  No history available
                </TableCell>
              </TableRow>
            )}
            {rows.map((h, i) => (
              <TableRow
                key={`${h.Status_Date}-${h.ST_TIME}-${i}`}
                className={`hover:bg-sky-50 transition rounded-md`}
              >
                <TableCell className="font-mono px-3 py-1 truncate">{h.Status_Date || '-'}</TableCell>
                <TableCell className="font-mono px-3 py-1 truncate">{h.ST_TIME || '-'}</TableCell>
                <TableCell className="font-medium px-3 py-1">{h.Status || '-'}</TableCell>
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

'use client';

import { useMemo, useState } from 'react';
import HeaderSummary from './HeaderSummary';
import ProgressStepper from './ProgressStepper';
import HistoryTable from './HistoryTable';
import { Card } from '@/components/ui/card';

const STAGES = [
  'Order Booked',
  'Order Picked',
  'In Transit',
  'Order Departed',
  'At Destination',
  'Out for Delivery',
  'Delivered',
];

// Add more aliases as needed - always lower case
const statusMap = [
  { stage: 'Order Booked', match: ['information received', 'process further', 'softdata', 'booked'] },
  { stage: 'Order Picked', match: ['picked', 'pick up', 'picked up'] },
  // In Transit events include airline handover, customs
  { stage: 'In Transit', match: ['handover to airlines', 'custom clearance', 'in transit', 'customs', 'delay', 'progress'] },
  { stage: 'Order Departed', match: ['depart', 'dispatched', 'ready to connect', 'linehaul'] },
  { stage: 'At Destination', match: ['arrived', 'at destination', 'destination', 'warehouse', 'last mile', 'received at'] },
  { stage: 'Out for Delivery', match: ['out for delivery'] },
  { stage: 'Delivered', match: ['delivered'] },
];

function normalizeNetwork(net) {
  if (!net) return 'Movizo Overseas';
  return String(net).toLowerCase().includes('valuex') ? 'Movizo Overseas' : net;
}

function parseDateTime(d, t) {
  if (!d) return null;
  const [dd, mm, yyyy] = d.split('/').map(Number);
  const [HH = 0, MM = 0] = (t || '00:00').split(':').map(Number);
  const iso = new Date(yyyy, (mm || 1) - 1, dd, HH, MM);
  return isNaN(iso.getTime()) ? null : iso;
}

// This function maps any status string to its appropriate stage label
function mapStatusToStage(raw) {
  if (!raw) return null;
  const status = raw.toLowerCase();
  for (const row of statusMap) {
    for (const phrase of row.match) {
      if (status.includes(phrase)) return row.stage;
    }
  }
  // fallback:
  return null;
}

function buildStageTimeline(history = []) {
  const reachedAt = {}; // { [stage]: Date }
  for (const item of history) {
    const stage = mapStatusToStage(item.Status);
    const when = parseDateTime(item.Status_Date, item.ST_TIME);
    if (stage && when && (!reachedAt[stage] || when < reachedAt[stage])) {
      reachedAt[stage] = when;
    }
  }
  let maxIdx = -1;
  STAGES.forEach((stage, idx) => {
    if (reachedAt[stage]) maxIdx = Math.max(maxIdx, idx);
  });
  return { reachedAt, currentIndex: Math.max(maxIdx, 0) };
}

export default function TrackingResults({trackingData}) {
  if (!trackingData) return null;

//   const trackingData = {
//   "STATUS": 1,
//   "Header": [
//     {
//       "ORIGIN": "NEW DELHI",
//       "Destination": "UK",
//       "ShipperName": "YOGENDRA PRASAD",
//       "ConsigneeName": "JYOTI RANI LARD",
//       "PCS": 1,
//       "WT_KG": 28.500,
//       "DEC_VALUE": 0.00,
//       "ForwardNo": "",
//       "NETWORK": "MOVIZO",
//       "website": "",
//       "Services": "",
//       "Status": "Shipment Delivered",
//       "St_Date": "15/10/2025",
//       "St_Time": "11:20",
//       "REC_BY": "JYOTI RANI LARD",
//       "POD_REM": "Delivered successfully to recipient"
//     }
//   ],
//   "History": [
//     {
//       "Status_Date": "15/10/2025",
//       "ST_TIME": "11:20",
//       "Status": "Shipment Delivered",
//       "POD_REM": "Delivered successfully to recipient"
//     },
//     {
//       "Status_Date": "14/10/2025",
//       "ST_TIME": "16:45",
//       "Status": "Shipment Out for Delivery",
//       "POD_REM": ""
//     },
//     {
//       "Status_Date": "14/10/2025",
//       "ST_TIME": "09:00",
//       "Status": "Shipment Arrived at Destination",
//       "POD_REM": ""
//     },
//     {
//       "Status_Date": "13/10/2025",
//       "ST_TIME": "14:30",
//       "Status": "Shipment Depart From Origin",
//       "POD_REM": ""
//     },
//     {
//       "Status_Date": "13/10/2025",
//       "ST_TIME": "08:20",
//       "Status": "Custom Clearance in Progress",
//       "POD_REM": ""
//     },
//     {
//       "Status_Date": "12/10/2025",
//       "ST_TIME": "15:45",
//       "Status": "Shipment Handover to Airlines",
//       "POD_REM": ""
//     },
//     {
//       "Status_Date": "12/10/2025",
//       "ST_TIME": "10:15",
//       "Status": "Shipment picked up",
//       "POD_REM": ""
//     },
//     {
//       "Status_Date": "11/10/2025",
//       "ST_TIME": "18:30",
//       "Status": "Shipment Information Received",
//       "POD_REM": ""
//     }
//   ],
//   "Message": "Shipment Find Sucessfully."
// }


  const header = (trackingData.Header && trackingData.Header[0]) || {};
  const history = trackingData.History || [];
  const message = trackingData.Message || '';

  const normalizedHeader = useMemo(() => {
    return {
      Origin: header.ORIGIN || '-',
      Destination: header.Destination || '-',
      ShipperName: header.ShipperName || '-',
      ConsigneeName: header.ConsigneeName || '-',
      Pieces: header.PCS ?? '-',
      WeightKg: header.WT_KG ?? '-',
      DeclaredValue: header.DEC_VALUE ?? '-',
      Network: normalizeNetwork(header.NETWORK),
      Services: header.Services || '-',
      Status: header.Status || '-',
      StatusDate: header.St_Date || '-',
      StatusTime: header.St_Time || '-',
      ReceivedBy: header.REC_BY || '-',
      Remarks: header.POD_REM || '-',
    };
  }, [header]);

  const { reachedAt, currentIndex } = useMemo(
    () => buildStageTimeline(history),
    [history]
  );

  const [showFull, setShowFull] = useState(false);

  return (
    <div className="w-full space-y-6">
      <Card className="p-4 md:p-6 w-full">
        <HeaderSummary message={message} summary={normalizedHeader} />
      </Card>

      <Card className="p-4 md:p-6">
        <ProgressStepper
          stages={STAGES}
          currentIndex={currentIndex}
          reachedAt={reachedAt}
        />
      </Card>
      <Card className="p-4 md:p-6">
        <HistoryTable
          history={history}
          showFull={showFull}
          onToggle={() => setShowFull((s) => !s)}
        />
      </Card>
    </div>
  );
}

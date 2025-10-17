'use client';

import { useEffect, useRef, useState } from "react";
import { useTracking } from "@/hooks/useTracking";
import TrackingResults from "@/components/tracking-result/index";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card } from "@/components/ui/card";
import LoaderPortal from "@/components/LoaderPortal";

// Replace with your image path
const imagePath = "/track-order.png";

export default function TrackingPage() {
  const [trackBy, setTrackBy] = useState("awb");
  const [awbNo, setAwbNo] = useState("");
  const { data,loading, error, getTracking } = useTracking();
 const [showLoader, setShowLoader] = useState(false);
  const loaderTimer = useRef();

  function handleTrack(e) {
    e.preventDefault();
    if (!awbNo) return;

    setShowLoader(true);
    const t0 = Date.now();
    getTracking(awbNo)
      .finally(() => {
        const elapsed = Date.now() - t0;
        const minWait = 2000 - elapsed; // Show for 2s minimum
        loaderTimer.current = setTimeout(() => {
          setShowLoader(false);
        }, minWait > 0 ? minWait : 0);
      });
  }

  // Clear timer on unmount to avoid setting state on unmounted comp
  useEffect(() => () => clearTimeout(loaderTimer.current), []);


  return (
    
    <LoaderPortal forceLoading={showLoader}>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-50 via-sky-200 to-white p-4 mt-10">
        {/* Headings */}
        <div className="w-full max-w-5xl mx-auto mt-4">
          <h1 className="text-3xl md:text-5xl font-bold text-center ">
            Track your <span className="font-bold bg-gradient-to-r from-sky-300 via-sky-600 to-sky-800 bg-clip-text text-transparent">orders easily</span>
          </h1>
          <p className="mb-8 text-center text-gray-600 text-base md:text-lg">
            Enter your AWB tracking number or Order ID to track our Consignment.
          </p>
        </div>
        {/* Image + Card */}
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-start gap-10">
          {/* Left/Image (only visible on md+) */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <img
              src={imagePath}
              alt="Tracking visual"
              className="max-h-[320px] w-auto rounded-xl"
            />
          </div>
          {/* Right/Card */}
          {/* Right Input Card */}
          <Card className="flex-1 w-full p-8 rounded-xl shadow-2xl bg-white border border-transparent hover:border-sky-300 transition-colors duration-300">
            <RadioGroup value={trackBy} onValueChange={setTrackBy} className="flex gap-6 mb-6 justify-center">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="awb" id="radio-awb" />
                <label htmlFor="radio-awb" className="cursor-pointer select-none">AWB Tracking No</label>
              </div>
            </RadioGroup>

            <form onSubmit={handleTrack} className="flex flex-col space-y-6">
              <Input
                aria-label="Tracking input"
                className="text-xl p-4 rounded-md border border-gray-300 font-serif focus:border-sky-500 focus:ring-2 focus:ring-sky-300 transition"
                placeholder={
                  trackBy === "mobile"
                    ? "Enter Mobile Number"
                    : trackBy === "awb"
                    ? "Enter AWB Number"
                      : "Enter Order ID"
                }
                value={awbNo}
                type={trackBy === "mobile" ? "tel" : "text"} // Optional input type change
                pattern={trackBy === "mobile" ? "[0-9]*" : undefined}
                onChange={e => setAwbNo(e.target.value)}
                required
                autoFocus
                />
              <Button
                className="bg-gradient-to-r from-sky-400 via-sky-600 to-sky-800 font-semibold text-white py-4 rounded-md shadow-lg hover:brightness-110 transition"
                type="submit"
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Track Now'}
              </Button>
            </form>

            {error && (
              <p className="mt-4 text-center text-red-600 font-semibold">
                {error}
              </p>
            )}
          </Card>
        </div>
        {/* Results/Info */}
        {data && (
          <div className="w-full max-w-7xl mx-auto">
            <TrackingResults trackingData={data} awb_no={awbNo} />
          </div>
        )}
      </div>
    </LoaderPortal>
  );
}


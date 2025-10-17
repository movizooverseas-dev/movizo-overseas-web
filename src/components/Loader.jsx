'use client';

export default function Loader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-[9999] bg-white/90 backdrop-blur">
      <div className="relative flex items-center justify-center">
        {/* Animated Spinning Ring */}
        <span
          className="
            absolute
            inline-block
            w-40 h-40
            rounded-full
            border-8
            border-t-sky-500 border-r-sky-200 border-b-sky-300 border-l-sky-50
            animate-spin
            "
        />
        {/* Pulsing Movizo Logo */}
        <img
          src="/movizoLogo.png"
          alt="Movizo Loader"
          className="w-32 h-20 object-contain rounded-[2rem] shadow-xl animate-pulse"
          style={{ background: 'white' }}
        />
      </div>
      <p className="mt-8 text-lg font-bold tracking-wide text-sky-700 animate-bounce">
        MOVIZO Loading...
      </p>
    </div>
  );
}

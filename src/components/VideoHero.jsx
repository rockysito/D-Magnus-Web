function VideoHero() {
  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover">
        <source src="/video/fortan.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY GELAP TIPIS */}
      <div className="absolute inset-0 bg-black/50" />

      {/* OVERLAY GRADIENT (INI YANG SAYA MAKSUD) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />

      {/* TEXT CONTENT */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
        <div>
          <h1 className="brand-font text-[#D4AF37] text-4xl md:text-6xl tracking-[0.35em]">
            D’MAGNUS
          </h1>

          <p className="mt-6 text-zinc-300 text-base md:text-lg max-w-xl mx-auto">
            Rokok kretek rempah dengan racikan khas Nusantara, menghadirkan
            karakter kuat dan cita rasa autentik.
          </p>

          <div className="mt-8 text-xs text-zinc-500">
            21+ | Produk Tembakau
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoHero;

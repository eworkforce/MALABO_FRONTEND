import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              Elevate
            </span>{" "}
            Your Style
          </h1>{" "}
          with our exclusive{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Collections
            </span>{" "}
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Discover unique pieces that define your look. Hand-crafted with passion, designed for the modern individual.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Link href="/products" className="inline-block w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md text-center">
            Shop Now
          </Link>
        </div>
      </div>

      {/* Placeholder for a hero image or video */}
      <div className="shadow-black/10 shadow-lg rounded-lg">
         <div className="bg-muted w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-lg"></div>
      </div>
    </section>
  );
}

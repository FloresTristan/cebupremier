// import Image from "next/image";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="text-2xl font-bold text-center">
        Yo wassup chat
      </header>
      <main className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4 text-center">Your Dream Home Awaits</h1>
        <p className="text-lg text-center max-w-2xl">
          Discover the best properties in Cebu with us. Whether you&apos;re looking for a cozy apartment or a luxurious villa, we have something for everyone.
        </p>
      </main>
    </div>
  );
}

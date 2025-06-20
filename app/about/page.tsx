export default function About() {
    return (
        <div className="grid items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
            <header className="text-2xl font-bold text-center">
                About Us
            </header>
            <main className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-4 text-center">Who We Are</h1>
                <p className="text-lg text-center max-w-2xl">
                    We are a dedicated team of real estate professionals committed to helping you find your dream home in Cebu. With years of experience and a passion for real estate, we strive to provide the best service possible.
                </p>
            </main>
        </div>
    )
}
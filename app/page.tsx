import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ThinkFridge</title>
        <meta name="description" content="The fridge that learns what you love." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900 p-8 space-y-20">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <img
            src="/logo.png"
            alt="ThinkFridge Logo"
            className="mx-auto w-28 h-auto"
          />

          <h1 className="text-5xl font-bold">ThinkFridge</h1>
          <p className="text-xl max-w-2xl mx-auto">
            The fridge that learns what you love. Smart vending powered by AI, freshness, and customer feedback.
          </p>

       <a
  href="/partner"
  className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg shadow hover:bg-blue-700"
>
  Partner With Us
</a>
        </section>

        {/* How It Works Section */}
        <section className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg md:text-xl mb-8 text-gray-600">
            ThinkFridge is frictionless, intuitive, and smart. Grab what you love — no checkout needed.
          </p>

          <div className="flex justify-center mb-10">
            <img
              src="/tap-take-transact.png"
              alt="Tap. Take. Transact."
              className="rounded-xl shadow-xl w-full max-w-md"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-lg text-left px-4">
            <div>
              <h3 className="text-blue-600 font-semibold text-xl mb-1">1. Tap</h3>
              <p>Tap your phone or card to unlock the fridge instantly.</p>
            </div>
            <div>
              <h3 className="text-blue-600 font-semibold text-xl mb-1">2. Take</h3>
              <p>Grab a fresh meal, drink, or snack — no staff required.</p>
            </div>
            <div>
              <h3 className="text-blue-600 font-semibold text-xl mb-1">3. Transact</h3>
              <p>Your account is charged automatically, and your taste is remembered.</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">About ThinkFridge</h2>
          <p>
            ThinkFridge is reinventing food access with smart fridges that learn from customer preferences.
            Whether you’re in an office, a gym, or on a college campus, we deliver the best meals — hands-free.
          </p>
        </section>
      </main>
    </>
  );
}

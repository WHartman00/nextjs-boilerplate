export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-8 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-5xl font-bold">ThinkFridge</h1>
        <p className="text-xl max-w-2xl mx-auto">
          The fridge that learns what you love. Smart vending powered by AI, freshness, and customer feedback.
        </p>
        <a
          href="#"
          className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg shadow hover:bg-blue-700"
        >
          Join the Waitlist
        </a>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2">1. Tap to Unlock</h3>
            <p>Scan your card or phone to unlock a smart fridge near you.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">2. Grab & Go</h3>
            <p>Pick your favorite item. Everything is tracked with smart sensors.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">3. Get Charged Automatically</h3>
            <p>Walk away — your card is billed automatically. Rate your meal in the app.</p>
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
  );
}

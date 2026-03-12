import Link from "next/link";

const plans = [
  {
    name: "Basic",
    price: "₹199",
    period: "/month",
    description: "Perfect for casual readers who enjoy a few stories each month.",
    features: [
      "Access to eBooks",
      "5 Audiobooks / month",
      "Offline Reading",
      "Basic Recommendations",
    ],
    highlight: false,
  },
  {
    name: "Pro",
    price: "₹499",
    period: "/month",
    description: "Best for passionate readers who want more stories and audio.",
    features: [
      "Unlimited eBooks",
      "15 Audiobooks / month",
      "Offline Reading",
      "Cross-Device Sync",
      "Priority Recommendations",
    ],
    highlight: true,
  },
  {
    name: "Premium",
    price: "₹799",
    period: "/month",
    description: "Unlimited access to the entire library with premium features.",
    features: [
      "Unlimited eBooks",
      "Unlimited Audiobooks",
      "Offline Access",
      "AI Book Recommendations",
      "Early Access to New Titles",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section className="py-10 px-15">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
           {/* Heading */}
        <div className="text-center mb-12">
          <span className="w-fit mx-auto px-4 py-2 rounded-full text-[var(--primary)] bg-[var(--primary)]/20 uppercase tracking-wider block mb-3">
            Pricing
          </span>

          <h2
            className="relative inline-block pb-2
            after:content-['']
            after:absolute
            after:left-0
            after:bottom-0
            after:w-full
            after:h-1
            after:rounded-full
            after:bg-gradient-to-r
            after:from-[var(--primary)]
            after:to-transparent mb-4
            w-fit"
          >
           Flexible <span className="text-[var(--primary)]">Pricing Plans</span>
          </h2>

          <p className="max-w-2xl mx-auto">
            Choose a plan that fits your reading journey. Unlock a world of
            stories through eBooks and immersive audiobooks.
          </p>
        </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-2xl border transition-all duration-300 hover:scale-105 
              ${plan.highlight
                ? "border-[var(--primary)] bg-[var(--primary)]/10"
                : "border-[var(--primary)] bg-[var(--primary)]/5"
              }`}
            >

              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>

              <div className="flex items-end gap-1 mb-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-gray-400">{plan.period}</span>
              </div>

              <p className="text-gray-400 mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className="text-[var(--primary)]">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="/signup">
                <button
                  className={`w-full py-3 rounded-lg font-medium transition
                  ${plan.highlight
                    ? "primary-btn"
                    : "secondary-btn border border-[var(--primary)]"
                  }`}
                >
                  Get Started
                </button>
              </Link>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
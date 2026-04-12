import React, { useEffect, useState } from "react";

interface Stat {
  id: number;
  icon: string;
  title: string;
  value: string;
  description: string;
  color: string;
}

const stats: Stat[] = [
  {
    id: 1,
    icon: "🌌",
    title: "Observable Galaxies",
    value: "2 Trillion",
    description: "Estimated number of galaxies in the observable universe.",
    color: "from-purple-400 to-indigo-600",
  },
  {
    id: 2,
    icon: "⭐",
    title: "Estimated Stars",
    value: "1 Septillion",
    description: "Approximate number of stars in the known universe.",
    color: "from-yellow-400 to-orange-600",
  },
  {
    id: 3,
    icon: "🪐",
    title: "Discovered Exoplanets",
    value: "5000",
    description: "Planets outside our solar system that have been confirmed.",
    color: "from-blue-400 to-cyan-600",
  },
  {
    id: 4,
    icon: "💫",
    title: "Age of the Universe",
    value: "13.8 Billion",
    description: "Years since the Big Bang until today.",
    color: "from-pink-400 to-rose-600",
  },
  {
    id: 5,
    icon: "🌍",
    title: "Speed of Light",
    value: "299,792 km/s",
    description: "The maximum speed in the universe.",
    color: "from-green-400 to-emerald-600",
  },
  {
    id: 6,
    icon: "🔭",
    title: "Most Powerful Telescope",
    value: "James Webb",
    description: "Space observatory that studies the early universe.",
    color: "from-red-400 to-pink-600",
  },
];

export default function Statistics() {
  const [counters, setCounters] = useState<Record<number, number>>({});

  useEffect(() => {
    const targets: Record<number, number> = {
      1: 2000000000000,
      2: 1000000000000000000000000,
      3: 5000,
      4: 13800000000,
      5: 299792,
      6: 0,
    };

    const intervals: Record<number, ReturnType<typeof setInterval>> = {};

    Object.keys(targets).forEach((key) => {
      const id = parseInt(key);

      if (targets[id] === 0) return;

      intervals[id] = setInterval(() => {
        setCounters((prev) => {
          const current = prev[id] || 0;
          const target = targets[id];
          const increment = Math.ceil(target / 100);

          const next = Math.min(current + increment, target);

          if (next === target) clearInterval(intervals[id]);

          return {
            ...prev,
            [id]: next,
          };
        });
      }, 40);
    });

    return () => {
      Object.values(intervals).forEach((interval) => clearInterval(interval));
    };
  }, []);

  const formatNumber = (num: number, id: number): string => {
    if (id === 2) return (num / 1e24).toFixed(1);
    if (id === 4) return (num / 1e9).toFixed(1);
    if (id === 5) return num.toLocaleString();
    return num.toLocaleString();
  };

  return (
    <section
      id="stats"
      className="min-h-screen bg-gradient-to-b from-[#050014] via-[#0a0020] to-[#050014] py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-glow-pulse">
            Cosmic Facts
          </h2>

          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Fascinating data about the universe around us.
          </p>

          <div className="h-1 w-32 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="group relative"
              style={{
                animation: `float ${3 + index * 0.3}s ease-in-out infinite`,
              }}
            >

              {/* Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
              ></div>

              {/* Card */}
              <div className="relative bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-400/30 rounded-xl p-8 backdrop-blur-md hover:border-purple-400/60 transition-all duration-300 h-full transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">

                {/* Icon */}
                <div className="text-5xl mb-4">{stat.icon}</div>

                {/* Title */}
                <h3 className="text-white font-semibold text-lg mb-3">
                  {stat.title}
                </h3>

                {/* Counter */}
                <div
                  className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4`}
                >
                  {stat.id === 6
                    ? stat.value
                    : formatNumber(counters[stat.id] || 0, stat.id)}

                  {stat.id !== 6 &&
                    stat.id !== 2 &&
                    stat.id !== 4 &&
                    stat.id !== 5 &&
                    "+"}
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {stat.description}
                </p>

                {/* Decorative line */}
                <div
                  className={`mt-6 h-1 bg-gradient-to-r ${stat.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Curiosity */}
        <div className="mt-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-400/30 rounded-2xl p-8 backdrop-blur-md">

          <div className="flex items-center gap-4 mb-4">
            <span className="text-4xl">🔬</span>
            <h3 className="text-2xl font-bold text-white">Did You Know?</h3>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed">
            1. The light we see from distant stars may have traveled millions of
            years to reach us. That means when we look at the night sky, we are
            literally looking into the past.
          </p>
          <br />

          <p className="text-gray-300 text-lg leading-relaxed">
            2. <strong>Silent vacuum:</strong> Space is a vast vacuum with no air,
            which means sound cannot travel through it.
          </p>
          <br />

          <p className="text-gray-300 text-lg leading-relaxed">
            3. <strong>More stars than sand:</strong> There are more stars in the
            universe than grains of sand on all the beaches on Earth.
          </p>
          <br />

          <p className="text-gray-300 text-lg leading-relaxed">
            4. <strong>Light is from the past:</strong> Sunlight takes about 8
            minutes to reach Earth, so we see the Sun as it was 8 minutes ago.
          </p>
          <br />

          <p className="text-gray-300 text-lg leading-relaxed">
            5. <strong>The "smell" of the galaxy's center:</strong> At the center
            of the Milky Way there is a dust cloud called Sagittarius B2 that
            contains large amounts of alcohol and may smell like rum and taste
            like raspberries.
          </p>
          <br />

          <p className="text-gray-300 text-lg leading-relaxed">
            6. <strong>Crying in space:</strong> Because of microgravity, tears do
            not fall in space and instead form floating bubbles around the eyes.
          </p>
          <br />

          <p className="text-gray-300 text-lg leading-relaxed">
            7. <strong>Invisible universe:</strong> More than 95% of the universe
            is invisible and made of unknown dark matter and dark energy.
          </p>
          <br />

          <p className="text-gray-300 text-lg leading-relaxed">
            8. <strong>Cotton candy planets:</strong> Some exoplanets called
            "super-puffs" have extremely low density, similar to cotton candy.
          </p>

        </div>
      </div>

      <style>{`
        @keyframes float {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </section>
  );
}
import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import QuizOption from "../components/QuizQuestion";
import quizData from "../data/quizQuestions";

function Quiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState(null);

  const question = quizData[current];

  function selectOption(optionId) {
    setSelected(optionId);
  }

  function handleNext() {
    if (!selected) {
      toast.error("Please choose an option");
      return;
    }

    const newAnswers = { ...answers, [question.id]: selected };
    setAnswers(newAnswers);
    setSelected(null);

    if (current < quizData.length - 1) {
      setCurrent((c) => c + 1);
      return;
    }

    const counts = {};
    Object.values(newAnswers).forEach(
      (a) => (counts[a] = (counts[a] || 0) + 1)
    );

    const resultKey = Object.keys(counts).reduce((a, b) =>
      counts[a] >= counts[b] ? a : b
    );

    setResult(resultKey);
    toast.success(`Your skin type appears to be: ${resultKey}`);
  }

  const productMap = {
    oily: [
      {
        id: "o1",
        name: "Oil Control Cleanser",
        desc: "Controls sebum and reduces shine",
        image: "/oil-clean.jpeg",
      },
    ],
    dry: [
      {
        id: "d1",
        name: "Hydrating Cream",
        desc: "Deep hydration for dry skin",
        image: "/cream.jpeg",
      },
    ],
    normal: [
      {
        id: "n1",
        name: "Daily Balancer",
        desc: "Maintains healthy skin",
        image: "/normal.jpeg",
      },
    ],
    combination: [
      {
        id: "c1",
        name: "Balance Lotion",
        desc: "Hydrates dry areas, controls oily zones",
        image: "/combination.jpeg",
      },
    ],
  };

  function useProduct(product) {
    toast.success(`You can use: ${product.name}`);
  }

  function restart() {
    setCurrent(0);
    setAnswers({});
    setSelected(null);
    setResult(null);
  }

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat px-2 sm:px-6"
      style={{
        backgroundImage: "url('/bg-2.jpeg')",
        backgroundSize: "100% 100%",
      }}
    >
      <Toaster position="top-center" />

      <div className="w-full max-w-[500px] bg-white/35 backdrop-blur-lg rounded-2xl shadow-xl border border-pink-300 px-4 py-5">
        <h1 className="text-base sm:text-2xl font-semibold text-center mb-2">
          Know Your Skin Type
        </h1>

        {!result ? (
          <>
            <p className="text-xs sm:text-base text-center mb-3">
              {question.id}. {question.question}
            </p>

            <div className="space-y-2">
              {question.options.map((opt) => (
                <QuizOption
                  key={opt.id}
                  image={opt.image}
                  text={opt.label}
                  selected={selected === opt.id}
                  onClick={() => selectOption(opt.id)}
                />
              ))}
            </div>

            <div className="flex justify-end mt-4">
              <button
                onClick={handleNext}
                disabled={!selected}
                className={`px-6 py-2 rounded-xl text-sm font-semibold transition ${
                  selected
                    ? "bg-white/70 text-gray-800 active:scale-95"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                {current < quizData.length - 1 ? "Next" : "Finish"}
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="text-sm text-center mb-3">
              <strong>Result:</strong> {result}
            </p>

            <div className="space-y-2">
              {(productMap[result] || []).map((p) => (
                <div
                  key={p.id}
                  className="flex items-center gap-2 border rounded-xl px-3 py-2 bg-white/40"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />

                  <div className="flex-1">
                    <div className="text-sm font-medium">{p.name}</div>
                    <div className="text-xs text-gray-600">{p.desc}</div>
                  </div>

                  <button
                    onClick={() => useProduct(p)}
                    className="px-3 py-1 text-xs rounded-lg bg-indigo-600 text-white active:scale-95"
                  >
                    Use
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={restart}
              className="mt-4 w-full py-2 text-sm rounded-xl font-semibold bg-white/70 active:scale-95"
            >
              Retake Quiz
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Quiz;

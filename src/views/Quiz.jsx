import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
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
    localStorage.setItem("skinTypeResult", resultKey);
  }

  //PREVIOUS BUTTON FUNCTION
  function handlePrevious() {
    if (current === 0) return;

    const prevQuestionId = quizData[current - 1].id;
    setCurrent((c) => c - 1);
    setSelected(answers[prevQuestionId] || null);
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
    localStorage.setItem("skinTypeResult", resultKey);
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

      <div className="mt-20 w-full max-w-[500px] bg-white/35 backdrop-blur-lg rounded-2xl shadow-xl border border-[#2B2B2B] px-4 py-5">
        <h1 className="text-base text-[#2B2B2B] sm:text-2xl font-semibold text-center mb-2">
          Know Your Skin Type
        </h1>

        {!result ? (
          <>
            <p className="text-xs sm:text-base text-center mb-4 text-[#6b8f71]">
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
            <div className="flex justify-between mt-4 gap-2">
              <button
                onClick={handlePrevious}
                disabled={current === 0}
                className={`px-6 py-2 rounded-xl text-sm font-semibold transition ${current === 0
                  ? "bg-[#2f5d50] text- cursor-not-allowed"
                  : "bg-[#2f5d50] text-white active:scale-95"
                  }`}
              >
                Previous
              </button>

              <button
                onClick={handleNext}
                disabled={!selected}
                className={`px-6 py-2 rounded-xl text-sm font-semibold transition ${selected
                  ? "bg-[#2f5d50] text-white active:scale-95"
                  : "bg-[#2f5d50] text-white cursor-not-allowed"
                  }`}
              >
                {current < quizData.length - 1 ? "Next" : "Finish"}
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="text-lg text-center mb-3">
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
                    <div className="text-lg font-medium">{p.name}</div>  
                    <div className="text-md text-gray-600">{p.desc}</div>
                  </div>
                </div>

              ))}
            </div>
            <button
              onClick={() => {
                const url = `./../Products.jsx ?skinType=${result}`;
                window.open(url, "_blank");
              }}
              className="mt-4 w-full py-2 text-sm rounded-xl font-semibold bg-[#2f5d50] text-white active:scale-95"
            >
              Get Personalized Products
            </button>
            <button
              onClick={restart}
              className="mt-4 w-full py-2 text-sm rounded-xl font-semibold bg-[#2f5d50] text-white active:scale-95"
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

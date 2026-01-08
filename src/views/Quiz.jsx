import React from 'react'
import React, { useState } from "react";
import QuizOption from "../component/QuizQuestion";
import quizData from "../data/quizQuestions";
import toast, { Toaster } from "react-hot-toast";

function Quiz() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat px-2 sm:px-6"
      style={{
        backgroundImage: "url('/bg-2.jpeg')",
        backgroundSize: "100% 100%"
      }}
    >
      <Toaster position="top-center" />

      <div
        className="mt-25 w-full max-w-[500px] h-full max-h-[100vh] bg-white/35 backdrop-blur-lg rounded-2xl shadow-xl border border-pink-300  px-3 py-4 sm:px-6 sm:py-6"
      >

        <h1 className="text-base sm:text-2xl font-semibold text-center mb-2">
          Know Your Skin Type
        </h1>

        {!result ? (
          <>
            <p className="text-xs sm:text-base text-black-700 mb-3 text-center">
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
                className={`px-6 py-2 rounded-xl text-sm font-semibold transition
      ${selected
                    ? "bg-white/70 text-gray-800 active:scale-95"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }
    `}
              >
                {current < quizData.length - 1 ? "Next" : "Finish"}
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="text-xs sm:text-base text-center mb-3">
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
                    <div className="text-sm font-medium">
                      {p.name}
                    </div>
                    <div className="text-xs text-gray-600">
                      {p.desc}
                    </div>
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

export default Quiz
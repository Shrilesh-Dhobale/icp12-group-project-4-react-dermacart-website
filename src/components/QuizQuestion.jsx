import React from 'react'

 function QuizOption({ image, text, onClick, selected = false }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 border rounded-xl px-3 py-2 sm:px-4 sm:py-3 bg-white/40 backdrop-blur-sm cursor-pointer transition w-full ${
        selected ? "border-pink-400 bg-pink-50": "border-gray-300 hover:border-pink-300 hover:bg-pink-50/40"
      }`}
      role="button"
      tabIndex={0}
    >
      <img
        src={image}
        alt={text}
        className="w-7 h-7 sm:w-10 sm:h-10 rounded-full object-cover"
      />
      <span className="text-black-800 font-medium text-xs sm:text-sm">{text}</span>
    </div>
  );
}
export default QuizOption;
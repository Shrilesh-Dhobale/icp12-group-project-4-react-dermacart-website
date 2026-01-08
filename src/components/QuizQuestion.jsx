import React from 'react'

 function QuizOption({ image, text, onClick, selected = false }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 border rounded-xl px-3 py-2 sm:px-4 sm:py-3 bg-white/40 backdrop-blur-sm cursor-pointer transition w-full ${
        selected ? "border-[#2B2B2B] bg-[#2f5d50]/50": "border-gray-300 hover:border-[#2B2B2B] hover:bg-white/40"
      }`}
      role="button"
      tabIndex={0}
    >
      <img
        src={image}
        alt={text}
        className="w-7 h-7 sm:w-10 sm:h-10 rounded-full object-cover"
      />
      <span className="text-[#6b8f71] font-medium text-sm sm:text-base">
  {text}
</span>

    </div>
  );
}
export default QuizOption;
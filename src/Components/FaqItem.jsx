import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const FaqItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-start gap-10 text-left"
      >
        {isOpen ? (
          <AiOutlineMinus className="text-green-600 text-3xl border-[1px] border-solid border-[#E9E9E9] rounded-full p-1.5" />
        ) : (
          <AiOutlinePlus className="text-green-600 text-3xl border-[1px] border-solid border-[#E9E9E9] rounded-full p-1.5" />
        )}

        <span className="text-lg font-medium text-gray-800">{title}</span>
      </button>

      {isOpen && (
        <div className="mt-2 text-gray-600 text-sm transition-all duration-300 ease-in-out">
          {typeof content === "string" ? <p>{content}</p> : content}
        </div>
      )}
    </div>
  );
};

export default FaqItem;

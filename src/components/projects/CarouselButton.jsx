import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function CarouselButton({ onPrev, onNext }) {
  return (
    <div className="flex justify-end gap-3 mb-8">

      <button
        onClick={onPrev}
        className="
        w-12
        h-12
        rounded-full
        bg-slate-800
        border
        border-slate-700
        hover:bg-blue-600
        hover:border-blue-600
        transition
        flex
        items-center
        justify-center
        "
      >
        <FaChevronLeft className="text-white" />
      </button>

      <button
        onClick={onNext}
        className="
        w-12
        h-12
        rounded-full
        bg-slate-800
        border
        border-slate-700
        hover:bg-blue-600
        hover:border-blue-600
        transition
        flex
        items-center
        justify-center
        "
      >
        <FaChevronRight className="text-white" />
      </button>

    </div>
  );
}
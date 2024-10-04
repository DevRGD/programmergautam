import useGlobalState from "@/hooks/useGlobalState";

export default function Loading() {
  const { state } = useGlobalState();

  return (
    <div
      className={`absolute z-50 ${state.color["bg-light"]} min-h-screen min-w-full flex justify-center items-center`}
    >
      <div className="relative h-10 w-96 overflow-hidden">
        <div className="relative flex h-full">
          <span
            className={`absolute h-full ${state.color["bg-color"]} transition-transform duration-200`}
            style={{ width: `${state.loaded}%` }}
          ></span>
          <span className={`absolute inset-0 flex justify-center items-center secondary-font`}>
            <span
              className={`${state.color["text-color"]} absolute inset-0 flex justify-center items-center secondary-font`}
              style={{ zIndex: 1 }}
            >
              {state.loaded}%
            </span>
            <span
              className="absolute inset-0 text-white flex justify-center items-center secondary-font"
              style={{ zIndex: 2, clipPath: `inset(0 ${100 - state.loaded}% 0 0)` }}
            >
              {state.loaded}%
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

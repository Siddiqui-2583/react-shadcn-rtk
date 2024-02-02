import { useAppSelector } from "@/redux/hooks";
import { useDispatch } from "react-redux";
import { count, decrement, increment } from "./counter.slice";
import { Button } from "@/components/ui/button";

export default function Counter() {
  const countValue = useAppSelector(count);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center h-screen items-center">
      <div className="flex flex-col gap-4 items-center">
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <span className="font-bold text-green-600 text-8xl">{countValue}</span>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </div>
    </div>
  );
}

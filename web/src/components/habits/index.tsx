interface HabitProps {
  completed?: number;
}

export const Habits = ({ completed }: HabitProps) => {
  return (
    <>
      <p className="bg-zinc-900 w-10 h-10 text-white rounded m-2 flex text-center items-center justify-center">
        {completed}
      </p>
    </>
  );
};

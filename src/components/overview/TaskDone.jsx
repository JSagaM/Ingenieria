export function TaskDone({
  date,
  title,
  description = "Lorem ipsum dolor sit amet consectetur. Id feugiat aliquam sit euismod nisl. Nam fermentum lectus hac sagittis amet. Quis egestas.",
  category,
}) {
  //for bg-color based on category
  const categoryColors = {
    Homework: "bg-yellow-100",
    Meeting: "bg-blue-200",
    Project: "bg-green-200",
    Event: "bg-purple-200",
    Other: "bg-white",
  };

  const bgColor = categoryColors[category] || "bg-gray-100";

  return (
    <div
      className={`sm:w-72 rounded-lg p-4 ${bgColor} text-custom-dark border-solid border-custom-blue border-[0.5px] border-opacity-50`}
    >
      <div className="text-custom-blue font-semibold mb-2">{date}</div>
      <h2 className="text-2xl font-bold mb-2 font-secondary">{title}</h2>
      <p className="text-custom-dark text-opacity-75 mb-4">{description}</p>
      <p className="font-bold py-2 rounded-full w-fit">{category}</p>
    </div>
  );
}

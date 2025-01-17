import dbConnect from "./lib/db";
import Reason from "./models/Reason";

export default async function Home() {
  await dbConnect();

  const reasons = await Reason.find({});

  return (
    <div className="flex h-screen bg-neutral-900">
      <div className="m-auto">
        <div className="text-6xl font-bold mb-4 leading-header">
          <div className="animate-headerTop">Reasons why you </div>
          <div className="animate-headerBottom">
            should hire <span className="text-teal-500">Joe</span>
          </div>
        </div>
        {reasons.map((reason) => (
          <div
            key={reason._id}
            className="text-3xl font-semibold text-neutral-500 animate-reason"
          >
            {reason.reason}
          </div>
        ))}
      </div>
    </div>
  );
}

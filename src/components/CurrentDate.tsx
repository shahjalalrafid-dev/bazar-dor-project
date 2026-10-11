
import { connection } from "next/server";

export default async function CurrentDate() {
  await connection();

  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <h6 className="text-gray-600 text-[10px] sm:text-xs lg:text-sm whitespace-nowrap">
      {date}
    </h6>
  );
}

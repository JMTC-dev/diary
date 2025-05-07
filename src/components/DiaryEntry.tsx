import dayjs, { Dayjs } from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat.js";
import { useState, type FormEvent } from "react";

dayjs.extend(advancedFormat);

const DiaryEntry = () => {
  type Entry = {
    id: string;
    content: string;
    date: dayjs.Dayjs;
  };

  const [entries, setEntries] = useState<Entry[]>([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(dayjs());

    const newEntry: Entry = {
      id: crypto.randomUUID(),
      content: input,
      date: dayjs(),
    };
    setEntries((prevEntries) => [newEntry, ...prevEntries]);
    setInput("");
  };

  const date = dayjs();
  const formatted = date.format("dddd, Do [of] MMMM YYYY");

  return (
    <div className="min-h-screen flex flex-row items-center justify-center text-center">
      <div className=" flex items-center justify-content-center flex-col">
        <h1 className="text-4xl text-slate-600 mb-5 font-light">{`${formatted}`}</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              className="text-slate-500 text-xl mb-3 min-w-md font-light text-center"
              placeholder="What's on your mind?"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            ></input>
          </form>
          <hr className="text-slate-200 mb-3"></hr>
        </div>
        <div className="flex-1 w-full max-w-md overflow-y-auto space-y-2">
          {entries.map((entry) => {
            return (
              <p key={entry.id} className="text-slate-500 text-base font-light">
                <span>{entry.date.format("h:m A")} - </span>
                {entry.content}
              </p>
            );
          })}
          {/* <p className="text-slate-500 text-base font-light">
          <span className="text-slate-600">4:45 PM - </span>I am scared to
          complete a project.
        </p> */}
        </div>
      </div>
    </div>
  );
};

export default DiaryEntry;

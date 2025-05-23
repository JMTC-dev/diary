import dayjs, { Dayjs } from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat.js";
import { useState, type FormEvent } from "react";

dayjs.extend(advancedFormat);

type Entry = {
  id: string;
  content: string;
  date: string;
  timePosted: dayjs.Dayjs;
};

const date = dayjs();

const DiaryEntry = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [input, setInput] = useState("");
  const [datePicker, setDatePicker] = useState(date.format("YYYY-MM-DD"));
  const [formatted, setFormatted] = useState(
    dayjs(datePicker).format("dddd, Do [of] MMMM YYYY")
  );
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log(dayjs());

    const newEntry: Entry = {
      id: crypto.randomUUID(),
      content: input,
      date: datePicker,
      timePosted: dayjs(),
    };
    setEntries((prevEntries: Entry[]) => [newEntry, ...prevEntries]);
    setInput("");
  };

  const handleDatePicker = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDatePicker(e.target.value);
    setFormatted(dayjs(e.target.value).format("dddd, Do [of] MMMM YYYY"));
  };

  return (
    <div className="min-h-screen flex flex-row items-center justify-center text-center">
      <div className=" flex items-center justify-content-center flex-col">
        <input
          type="date"
          id="start"
          name="diary-start"
          className="mb-3 text-slate-600"
          max={date.format("YYYY-MM-DD")}
          value={datePicker}
          onChange={(e) => handleDatePicker(e)}
        />

        <h1 className="text-4xl text-slate-600 mb-5  ">{`${formatted}`}</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              className="text-slate-700 text-xl mb-3 min-w-md text-center"
              placeholder="What's on your mind?"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            ></input>
          </form>
          <hr className="text-slate-200 mb-3"></hr>
        </div>
        <div className="flex-1 w-full max-w-md overflow-y-auto space-y-2">
          {entries
            .filter((entry) => entry.date === datePicker)
            .map((entry) => {
              return (
                <p key={entry.id} className="text-slate-500 text-base ">
                  <span>{entry.timePosted.format("h:m A")} - </span>
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

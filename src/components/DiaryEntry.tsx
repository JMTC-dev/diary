import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat.js";

dayjs.extend(advancedFormat);

const DiaryEntry = () => {
  const date = dayjs();
  const formatted = date.format("dddd, Do [of] MMMM YYYY");

  return (
    <div className="min-h-screen flex flex-row items-center justify-center text-center">
      <div className="flex items-center justify-content-center flex-col">
        <h1 className="text-4xl text-slate-600 mb-5 font-light">{`${formatted}`}</h1>
        <div>
          <input
            className="text-slate-500 text-xl mb-3 min-w-md font-light text-center"
            placeholder="What's on your mind?"
          ></input>
          <hr className="text-slate-200 mb-3"></hr>
        </div>
        <p className="text-slate-500 text-base font-light">
          <span className="text-slate-600">4:45 PM - </span>I am scared to
          complete a project.
        </p>
      </div>
    </div>
  );
};

export default DiaryEntry;

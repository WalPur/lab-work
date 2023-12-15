function LotDataShared({ date, author }) {
  return (
    <div className="w-[292px] h-[17px] justify-between items-start inline-flex">
      <div className="text-black text-sm font-normal font-['Inter']">
        {new Date(date).toLocaleString("ru-Ru", { hour12: false })}
      </div>
      <div className="text-black text-sm font-normal font-['Inter']">
        {author.email}
      </div>
    </div>
  );
}
export default LotDataShared;

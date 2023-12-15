function CategoriesListShared({ list }) {
  return (
    <div className="text-gray-600 text-sm font-light font-['Inter']">
      {list.map((item) => item.name)}
    </div>
  );
}

export default CategoriesListShared;

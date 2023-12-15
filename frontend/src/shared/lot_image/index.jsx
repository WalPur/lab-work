function LotImageShared({ image_url }) {
  return (
    <img
      className="w-[340px] h-[200px] relative rounded-[20px]"
      src={image_url}
    />
  );
}
export default LotImageShared;

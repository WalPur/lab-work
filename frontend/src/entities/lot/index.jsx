import CategoriesListShared from "../../shared/categories_list";
import LotDataShared from "../../shared/log_data";
import LotTitleShared from "../../shared/log_title";
import LotDescriptionShared from "../../shared/lot_description";
import LotImageShared from "../../shared/lot_image";

function LotEntity({ data, toggle_modal }) {
  return (
    <div onClick={toggle_modal} className="w-fit">
      <div className="w-[340px] shadow flex-col justify-start items-start inline-flex">
        <LotImageShared image_url="https://via.placeholder.com/340x200" />
        <div className="self-stretch px-6 pt-3 pb-6 flex-col justify-start items-start gap-3 flex">
          <LotTitleShared text={data.name} />
          <LotDescriptionShared text={data.description} />
          <LotDataShared date={data.date_edited} author={data.author} />
          <CategoriesListShared list={data.categories_display} />
        </div>
      </div>
    </div>
  );
}

export default LotEntity;

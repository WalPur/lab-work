import { useEffect, useState } from "react";
import { loadLots } from "./api";
import LotEntity from "../../entities/lot";
import LotDataModal from "../lot_modal";

function LotsWidget() {
  const [lots, setLots] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await loadLots();
        setLots(response.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  const renderLots = () => {
    return (
      <>
        <LotDataModal showModal={showModal} toggleModal={toggleModal} />
        {lots.map((lot) => (
          <LotEntity key={lot.id} data={lot} toggle_modal={toggleModal} />
        ))}
      </>
    );
  };

  return (
    <div className="flex gap-5 flex-wrap justify-evenly">{renderLots()}</div>
  );
}

export default LotsWidget;

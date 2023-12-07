import { BsDoorOpenFill } from "react-icons/bs";
import { BsDoorOpen } from "react-icons/bs";
import { BsBuildingLock } from "react-icons/bs";
import { BsLightningChargeFill } from "react-icons/bs";
import { BsBatteryCharging } from "react-icons/bs";
import { BsConeStriped } from "react-icons/bs";
import { MdHeatPump } from "react-icons/md";
import { LiaTemperatureLowSolid } from "react-icons/lia";
import { FaTemperatureLow } from "react-icons/fa6";
import { LiaWaterSolid } from "react-icons/lia";
import { FaFaucet } from "react-icons/fa";

export const allItems = [
  {
    id: 1,
    text: "portone esterno",
    icon: <BsDoorOpen className='card__icon__logo' />,
  },
  {
    id: 2,
    text: "portone interno",
    icon: <BsDoorOpenFill className='card__icon__logo' />,
  },
  {
    id: 3,
    text: "apri ingresso",
    icon: <BsBuildingLock className='card__icon__logo' />,
  },
  {
    id: 3,
    text: "chiudi ingresso",
    icon: <BsBuildingLock className='card__icon__logo' />,
  },
  {
    id: 4,
    text: "ricarica serratura",
    icon: <BsBatteryCharging className='card__icon__logo' />,
  },
  {
    id: 5,
    text: "generale",
    icon: <BsLightningChargeFill className='card__icon__logo' />,
  },
  {
    id: 6,
    text: "pompa",
    icon: <FaFaucet className='card__icon__logo' />,
  },
  {
    id: 7,
    text: "fancoil",
    icon: <LiaTemperatureLowSolid className='card__icon__logo' />,
  },
  {
    id: 8,
    text: "condizionatore",
    icon: <MdHeatPump className='card__icon__logo' />,
  },
  {
    id: 9,
    text: "caldaia",
    icon: <LiaWaterSolid className='card__icon__logo' />,
  },
];

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrochip,
  faDesktop,
  faRobot,
} from "@fortawesome/free-solid-svg-icons";
import * as React from "react";

export interface IMacCompareSelectionButtonProps {
  title: string;
  price: number;
  cpuCores?: number;
  gpuCores?: number;
  neuralCores?: number;
}

export default function MacCompareSelectionButton(
  props: IMacCompareSelectionButtonProps
) {
  return (
    <button className="border rounded-sm text-left p-1 px-2 hover:bg-zinc-700 duration-100 flex flex-col gap-1 border-zinc-500">
      <div className="flex flex-row w-full">
        <h3 className="font-light">{props.title}</h3>
        <div className="grow"></div>
        <p className="">+ £{props.price}.00</p>
      </div>
      {props.cpuCores != undefined && (
        <div className="flex flex-row flex-wrap gap-4 font-light">
          <div className="flex flex-row gap-2 items-center">
            <FontAwesomeIcon icon={faMicrochip} className="h-3.5" />
            <p className="">{props.cpuCores}</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <FontAwesomeIcon icon={faDesktop} className="h-3.5" />
            <p className="">{props.gpuCores}</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <FontAwesomeIcon icon={faRobot} className="h-3.5" />
            <p className="">{props.neuralCores}</p>
          </div>
        </div>
      )}
    </button>
  );
}

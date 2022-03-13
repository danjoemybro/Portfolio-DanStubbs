import * as React from "react";
import MacCompareSelectionButton from "./MacCompareSelectionButton";
import MacSelectionDropDown from "./MacSelectionDropDown";

interface IMacCompareColumnProps {}

export default function MacCompareColumn(props: IMacCompareColumnProps) {
  return (
    <div className="flex flex-col gap-2">
      <h2>Price: £1000</h2>
      <MacSelectionDropDown />
      <p>Processor</p>
      <MacCompareSelectionButton
        title={"Apple M1 Pro"}
        cpuCores={8}
        gpuCores={14}
        neuralCores={16}
        price={0}
      />
      <MacCompareSelectionButton
        title={"Apple M1 Pro"}
        cpuCores={10}
        gpuCores={14}
        neuralCores={16}
        price={200}
      />
      <MacCompareSelectionButton
        title={"Apple M1 Pro"}
        cpuCores={10}
        gpuCores={16}
        neuralCores={16}
        price={300}
      />
      <MacCompareSelectionButton
        title={"Apple M1 Max"}
        cpuCores={10}
        gpuCores={24}
        neuralCores={16}
        price={500}
      />
      <MacCompareSelectionButton
        title={"Apple M1 Max"}
        cpuCores={10}
        gpuCores={32}
        neuralCores={16}
        price={700}
      />
      <p>Memory</p>
      <MacCompareSelectionButton title={"16GB unified memory"} price={0} />
      <MacCompareSelectionButton title={"32GB unified memory"} price={400} />
      <MacCompareSelectionButton title={"64GB unified memory"} price={800} />
      <p>Storage</p>
      <MacCompareSelectionButton title={"512GB SSD Storage"} price={0} />
      <MacCompareSelectionButton title={"1TB SSD Storage"} price={200} />
      <MacCompareSelectionButton title={"2TB SSD Storage"} price={600} />
      <MacCompareSelectionButton title={"4TB SSD Storage"} price={1200} />
      <MacCompareSelectionButton title={"8TB SSD Storage"} price={2400} />
    </div>
  );
}

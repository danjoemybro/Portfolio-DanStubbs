import * as React from "react";

interface IMacSelectionDropDownProps {}

export default function MacSelectionDropDown(
  props: IMacSelectionDropDownProps
) {
  return (
    <select id="selector-2" className="w-full p-2">
      <optgroup label="Notebooks">
        <option value="compare-4386153e-88a6-4ba9-a29c-bd22b2fba147">
          MacBook Pro 14-in. (2021)
        </option>
        <option value="compare-551c1c2e-a47f-4a9a-88b8-3c73da6a0635">
          MacBook Pro 16-in. (2021)
        </option>
        <option value="compare-6e92b158-ada2-4574-ba39-61681e928fa6">
          MacBook Air (M1, 2020)
        </option>
        <option value="compare-r0c2">MacBook Air (Retina, 2020)</option>
        <option value="compare-b5bbefa9-e78f-465f-a832-12d122dac0a8">
          MacBook Air (2017)
        </option>
        <option value="compare-r0c3">MacBook Pro 13-in. (M1, 2020)</option>
        <option value="compare-97d8b756-3514-4d70-969a-d44581767052">
          MacBook Pro 13-in. (Two Thunderbolt 3 ports, 2020)
        </option>
        <option value="compare-r0c5">
          MacBook Pro 13-in. (Two Thunderbolt 3 ports, 2016)
        </option>
        <option
          value="compare-52043c6c-4604-4f72-8038-08b3c7397114"
          aria-selected="true"
        >
          MacBook Pro 13-in. (Four Thunderbolt 3 ports, 2020)
        </option>
        <option value="compare-1570fbfc-45e1-43fa-81b7-9eec3492a386">
          MacBook Pro 16-in. (2019)
        </option>
      </optgroup>
      <optgroup label="Desktops">
        <option value="compare-r0c6">iMac 21.5-in.</option>
        <option value="compare-r0c7">iMac 21.5-in. (4K Retina)</option>
        <option value="compare-06d09938-2c67-471d-b659-f01f2c659baa">
          iMac 24-in. (M1, Two ports, 2021)
        </option>
        <option value="compare-1bad2960-05ff-4997-825b-8ef93699d709">
          iMac 24-in. (M1, Four ports, 2021)
        </option>
        <option value="compare-r0c8">iMac 27-in. (5K Retina)</option>
        <option value="compare-r0c9">iMac Pro</option>
        <option value="compare-658720b4-ab4d-444c-8df9-4ca3b720fe01">
          Mac mini (M1, 2020)
        </option>
        <option value="compare-r0c10">Mac mini (2018)</option>
        <option value="compare-98ab5ebd-8541-4221-91b2-5b64e654f298">
          Mac mini (Late 2014)
        </option>
        <option value="compare-c34adc21-caaf-478b-a2b3-5a5e1c60c288">
          Mac Studio (2022)
        </option>
        <option value="compare-r0c11">Mac Pro</option>
      </optgroup>
    </select>
  );
}

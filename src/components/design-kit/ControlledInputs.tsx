import { useEffect, useState } from "react";
import CustomTextField from "../common/CustomTextField/CustomTextField";
import { TEvent } from "@/types/global";
import CustomTabs from "../common/CustomTabs/CustomTabs";
import { useNavigate } from "react-router-dom";

export default function ControlledInputs() {
  const navigate = useNavigate();
  const [textField, setTextField] = useState<string>();
  const [selectedTab, setSelectedTab] = useState<string>();
  useEffect(() => {
    console.log({ textField,selectedTab });
  }, [textField,selectedTab]);
  return (
    <div className="flex flex-col gap-4 p-10">
      <h1 className="text-3xl font-bold underline">Controlled Inputs</h1>
      <CustomTextField
        label="Controlled Text"
        onChange={(event: TEvent) => setTextField(event.target.value)}
      />
      <CustomTabs
        defaultTab="abul"
        tabs={[
          { label: "Controlled Inputs", value: "controlled-inputs" },
          { label: "Sample Form", value: "sample-form" },
        ]}
        onValueChange={(value) => {
          setSelectedTab(value);
          navigate(`/design-kit/${value}`);
        }}
      />
    </div>
  );
}

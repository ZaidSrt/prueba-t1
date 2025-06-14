import Button from "@/components/button-component";
import MainLayout from "@/layouts/main-layout";
import { useState } from "react";

export default function ButtonPage() {

  const [view, setView] = useState("preview");

  return (
    <MainLayout>

      <div className="flex flex-col gap-6">
        <span className="font-semibold text-4xl">Button</span>


        <div className="flex flex-col gap-2">
          <div className="flex gap-4 items-center justify-between">
            <span className="font-semibold text-2xl text-gray-800">Variant</span>

            <div className="flex gap-4">
              <button className="bg-gray-200 px-4 py-1 rounded-md">Preview</button>
              <button className="bg-gray-200 px-4 py-1 rounded-md">Code</button>
            </div>
          </div>

          <div className="border border-gray-300 p-4 rounded-md flex gap-4">
            <Button variante="primary">Primary</Button>
            <Button variante="secondary">Secondary</Button>
            <Button variante="danger">Danger</Button>
          </div>
        </div>



        <div className="flex flex-col gap-2">
          <div className="flex gap-4 items-center justify-between">
            <span className="font-semibold text-2xl text-gray-800">Status</span>

            <div className="flex gap-4">
              <button className="bg-gray-200 px-4 py-1 rounded-md">Preview</button>
              <button className="bg-gray-200 px-4 py-1 rounded-md">Code</button>
            </div>
          </div>

          <div className="border border-gray-300 p-4 rounded-md flex gap-4">
            <Button variante="primary">Primary</Button>
            <Button variante="secondary">Secondary</Button>
            <Button variante="danger">Danger</Button>
          </div>
        </div>
      </div>

    </MainLayout >
  );
}
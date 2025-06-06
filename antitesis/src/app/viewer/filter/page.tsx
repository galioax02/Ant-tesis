import FilterClient from "@/components/Filter";
import { Suspense } from "react";

export default function FilterPage() {

  return (
  <Suspense fallback={<div>Loading...</div>}>
    <FilterClient />
  </Suspense>

  )
}
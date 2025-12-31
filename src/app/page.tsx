
import prisma from "@/lib/db";
import { getQueryClient, trpc } from "@/trpc/server";
import { ClientPageRoot } from "next/dist/client/components/client-page";
import { Client } from "./client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";


const Page=async()=>{
  

  const queryClient=getQueryClient()

  void queryClient.prefetchQuery(trpc.getUsers.queryOptions())

  return (
    <div className="flex items-center justify-center">
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<p>Loading..</p>}>
    <Client />
    </Suspense>
     </HydrationBoundary>
    </div>
  )
}

export default Page;
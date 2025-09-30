import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import React from "react";

export default function WeatherDashboard () {
    

  return (
    <div className="container mx-auto px-4 py-8">
    {/* Fav sities */}
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold tracking-tight">My location</h1>
            <Button variant={"outline"} size={"icon"} 
            // onClick={handleRefresh} 
            // disabled={}
            >
                <RefreshCw className="h-4 w-4"/>
            </Button>
        </div>
    {/* current and hourly weather */}
    </div>
  );
}
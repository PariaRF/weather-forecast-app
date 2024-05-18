import { useQuery } from "@tanstack/react-query";
import { getPointApi } from "../services/pointService";

export default function usePoint(){
    const {data, isLoading} = useQuery({
        queryKey: ["point"],
        queryFn: getPointApi,
        refetchOnWindowFocus: false,
        refetchInterval: false,
        retry: false,
    })
    if (!data) {
        return { data, isLoading, timezone: "", current: {}, hourly: {}, daily: []};
    }

    const timezone = data?.timezone.replace("/", ", ") || "";
    const current = data?.current || {};
    const hourly = data?.hourly || {};
    const {daily} = data || [];
  
    return {data, isLoading, timezone, current, hourly, daily}
}
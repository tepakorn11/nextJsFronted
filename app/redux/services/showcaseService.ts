import { IShowCase } from "@/interface/showcase";
import ax from "@/utility/axios"

export const getShowCase = async (): Promise<IShowCase[]> => {
    const res = await ax.get<IShowCase[]>('/show-case')
    return res.data;
}
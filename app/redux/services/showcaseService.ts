import { IShowCase } from "@/interface/showcase";

export const getShowCase = async (): Promise<IShowCase[]>=>{
    const data = await import('@/mock/mock-showcase')
    return data.default
}
import { IOption } from "@/types/form.t"

export const toSelArr = (arr: any[], titleKey: string): IOption[] =>
  arr.map((item) => ({
    id: item.id,
    title: item[titleKey],
  }))

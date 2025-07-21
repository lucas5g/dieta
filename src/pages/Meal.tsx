import { FoodCard } from "@/components/FoodCard";
import { api } from "@/utils/api";
import { Card, SkeletonText, Stack, Table } from "@chakra-ui/react";
import { use, useEffect, useState } from "react";

export interface MealInterface {
  row_number: number
  Refeição: string
  Quantidade: number
  Alimento: string
  Proteínas: number
  Gorduras: number
  Carboidratos: number
  Calorias: number
}


export function Meal() {

  const { data, isLoading }: {
    data: MealInterface[],
    isLoading: boolean
  } = api('refeicoes')

  if (isLoading) {
    return <SkeletonText noOfLines={3} gap="4" />
  }

  return (
    <Stack
      gap={5}
      width={'100%'}
    >
      <FoodCard
        name={'café da manhã'}
        meals={data}

      />
      <FoodCard
        name={'almoço'}
        meals={data}
      />

      <FoodCard
        name={'lanche'}
        meals={data}
      />

      <FoodCard
        name={'jantar'}
        meals={data}
      />

    </Stack>

  )
}
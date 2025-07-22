import { MealCard } from "@/components/MealCard";
import { MealForm } from "@/components/MealForm";
import { api } from "@/utils/api";
import { Card, Float, SkeletonText, Stack, Table } from "@chakra-ui/react";
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
      <MealCard
        name={'café da manhã'}
        meals={data}

      />
      <MealCard
        name={'almoço'}
        meals={data}
      />

      <MealCard
        name={'lanche'}
        meals={data}
      />

      <MealCard
        name={'jantar'}
        meals={data}
      />
    
      <Float 
        
        offsetX={14}
        offsetY={800}        
        >
        <MealForm />
      </Float>
    </Stack>

  )
}
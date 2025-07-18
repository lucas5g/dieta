import { FoodCard } from "@/components/FoodCard";
import { Card, Stack, Table } from "@chakra-ui/react";
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

  const [meals, setMeals] = useState<MealInterface[]>()

  useEffect(() => {
    fetch('https://n8n.dizelequefez.com.br/webhook/refeicoes')
      .then((response) => response.json())
      .then((data) => setMeals(data))
  }, [])

  return (
    <Stack
      gap={5}
      width={'100%'}
      >
      <FoodCard
        name={'café da manhã'}
        meals={meals}

      />
      <FoodCard
        name={'almoço'}
        meals={meals}
      />

      <FoodCard
        name={'lanche'}
        meals={meals}
      />

      <FoodCard
        name={'jantar'}
        meals={meals}
      />

    </Stack>

  )
}
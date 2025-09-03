import type { FoodInterface } from "@/pages/Food";
import { api } from "@/utils/api";
import {
  Button,
  Card,
  Field,
  Flex,
  NativeSelect,
  Separator, SkeletonText, Stack,

} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Input } from "./Input";
import type { MealInterface } from "@/pages/Meal";

interface MealFormInterface extends Omit<MealInterface, 'row_number'> {

}
export function MealForm() {

  const [food, setFood] = useState<FoodInterface>()
  const [meal, setMeal] = useState<string>()
  const [quantity, setQuantity] = useState<number>(0)
  const [calorie, setCalorie] = useState<number>(0)
  const [protein, setProtein] = useState<number>(0)
  const [fat, setFat] = useState<number>(0)
  const [carbo, setCarbo] = useState<number>(0)

  useEffect(() => {

    const proteinUpdate = (quantity * (food?.protein || 0))
    const fatUpdate = quantity * (food?.fat || 0)
    const carboUpdate = quantity * (food?.carbo || 0)
    const calorieUpdate = quantity * (food?.calorie || 0)

    setProtein(proteinUpdate.toFixed(2))
    setFat((quantity * (food?.fat || 0)).toFixed(2))
    setCarbo(quantity * (food?.carbo || 0))
    setCalorie(quantity * (food?.calorie || 0))
  }, [food, quantity])

  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>Adicionar refeição</Card.Title>
      </Card.Header>
      <Card.Body>
        <Stack gap={4}>
          <SelectMeal
            meal={meal || ''}
            setMeal={setMeal}
          />
          <SelectFood
            food={food}
            setFood={setFood}
          />
          <Input
            placeholder="Quantidade"
            type="number"
            max={100}
            onChange={(e) => setQuantity(Number(e.target.value))}
            value={quantity}
          />
          <Separator />
          <Input

            placeholder='Proteínas'
            disabled
            type="number"
            value={protein}
          />
          <Input
            placeholder='Carboidratos'
            disabled
            type="number"
            value={carbo}
          />
          <Input
            placeholder='Gorduras'
            disabled
            type="number"
            value={fat}
          />
          <Input
            placeholder='Calorias'
            disabled
            type="number"
            value={calorie}
          />
          {/*
            
          <Flex
            justifyContent={'end'}
            gap={4}
          >
            <Button variant={'solid'}>
              Cancelar
            </Button>
            <Button variant={'outline'}>
              Salvar
            </Button>
          </Flex>
          {/* <pre>
            {JSON.stringify({
              Alimento,
              Refeição,
              Quantidade,
              Calorias,
              Proteínas,
              Gorduras,
              Carboidratos
            }, null, 2)}
          </pre> */}
        </Stack>

      </Card.Body>
    </Card.Root>
  )
}
function SelectFood(props: Readonly<{
  food: FoodInterface | undefined,
  setFood: (FoodInterface: any) => void
}>) {

  const { data, isLoading } = api('foods')
  

  if (isLoading) {
    return <SkeletonText noOfLines={2} />
  }

  return (
    <Field.Root>
      <Field.Label>
        Alimento
      </Field.Label>
      <NativeSelect.Root>
        <NativeSelect.Field
          value={props.food?.name|| ''}
          onChange={(e) => {
            const foodFind = data?.find((food: FoodInterface) => food.name === e.target.value)
            props.setFood(foodFind)
          }}
          placeholder="Selecione um alimento"
        >
          {
            data?.map((food: FoodInterface) => (
              <option
                key={food.row_number}
                value={food.name}>
                {food.name}
              </option>
            ))
          }
        </NativeSelect.Field>
      </NativeSelect.Root>
    </Field.Root>
  )
}

function SelectMeal(props: Readonly<{
  meal: string,
  setMeal: (value: string) => void
}>) {
  const meals = [
    {
      value: 'café da manhã',
      label: 'Café da Manhã'
    },
    {
      value: 'almoço',
      label: 'Almoço'
    },
    {
      value: 'lanche',
      label: 'Lanche'
    },
    {
      value: 'jantar',
      label: 'Jantar'
    }
  ]

  return (
    <Field.Root>
      <Field.Label>Refeição</Field.Label>
      <NativeSelect.Root>
        <NativeSelect.Field
          value={props.meal}
          onChange={(e) => props.setMeal(e.target?.value || '')}
          cursor={'pointer'}
        >
          {meals.map((meal) => (
            <option
              key={meal.value}
              value={meal.label}
              style={{ cursor: 'pointer' }}
            >
              {meal.label}
            </option>
          ))}
        </NativeSelect.Field>
        <NativeSelect.Indicator />
      </NativeSelect.Root>
    </Field.Root>
  )
}
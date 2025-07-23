import type { FoodInterface } from "@/pages/Food";
import { api } from "@/utils/api";
import {
  Button,
  Card,
  createListCollection,
  Dialog, Field,
  Flex,
  NativeSelect,
  Portal, Select, Separator, SkeletonText, Stack,

} from "@chakra-ui/react";
import { Plus } from "lucide-react";
import { use, useEffect, useState } from "react";
import { Input } from "./Input";
import type { Meal, MealInterface } from "@/pages/Meal";

interface MealFormInterface extends Omit<MealInterface, 'row_number'> {

}
export function MealForm() {

  const [Alimento, setAlimento] = useState<FoodInterface>()
  const [Refeição, setRefeição] = useState<string>()
  const [Quantidade, setQuantidade] = useState<number>(0)
  const [Calorias, setCalorias] = useState<number>(0)
  const [Proteínas, setProteínas] = useState<number>(0)
  const [Gorduras, setGorduras] = useState<number>(0)
  const [Carboidratos, setCarboidratos] = useState<number>(0)

  useEffect(() => {

    console.log('alimento => ', Alimento)
    setProteínas((Quantidade * (Alimento?.Proteínas || 0)).toFixed(2))
    setGorduras(Quantidade * (Alimento?.Gorduras || 0))
    setCarboidratos(Quantidade * (Alimento?.Carboidratos || 0))

    setCalorias(Quantidade * (Alimento?.Calorias || 0))
  }, [Alimento, Quantidade])

  return (
    <Card.Root>
      <Card.Header>
        <Card.Title>Adicionar refeição</Card.Title>
      </Card.Header>
      <Card.Body>
        <Stack gap={4}>
          <SelectMeal
            Refeição={Refeição || ''}
            setRefeição={setRefeição}
          />
          <SelectFood
            Alimento={Alimento}
            setAlimento={setAlimento}
          />
          <Input
            placeholder="Quantidade"
            type="number"
            max={100}
            onChange={(e) => setQuantidade(Number(e.target.value))}
            value={Quantidade}
          />
          <Separator />
          <Input

            placeholder='Proteínas'
            disabled
            type="number"
            value={Proteínas}
          />
          <Input

            placeholder='Carboidratos'
            disabled
            type="number"
            value={Carboidratos}
          />
          <Input

            placeholder='Gorduras'
            disabled
            type="number"
            value={Gorduras}
          />
          <Input

            placeholder='Calorias'
            disabled
            type="number"
            value={Calorias}
          />

          <Flex
            justifyContent={'end'}
            gap={4}
          >
            <Button variant={'outline'}>
              Cancelar
            </Button>
            <Button variant={'solid'}>
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
  Alimento: FoodInterface | undefined,
  setAlimento: (value: FoodInterface) => void
}>) {

  const { data, isLoading } = api('alimentos')
  const [foods, setFoods] = useState<FoodInterface[]>()

  useEffect(() => {
    setFoods(data)
  }, [data])

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
          value={props.Alimento?.Nome}
          onChange={(e) => props.setAlimento(foods?.find(food => food.Nome === e.target.value) || {})}
          placeholder="Selecione um alimento"
        >
          {
            foods?.map(food => (
              <option
                key={food['Nº']}
                value={food.Nome}>
                {food.Nome}
              </option>
            ))
          }
        </NativeSelect.Field>
      </NativeSelect.Root>
    </Field.Root>
  )
}

function SelectMeal(props: Readonly<{
  Refeição: string,
  setRefeição: (value: string) => void
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
          value={props.Refeição}
          onChange={(e) => props.setRefeição(e.target?.value || '')}
        >
          {meals.map((meal) => (
            <option
              key={meal.value}
              value={meal.label}
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
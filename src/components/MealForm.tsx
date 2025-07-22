import { api } from "@/utils/api";
import { Button, createListCollection, Dialog, Field, Flex, Input, NativeSelect, Portal, Select, Stack } from "@chakra-ui/react";
import { Plus } from "lucide-react";



export function MealForm() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button
          rounded={'full'}
          width={'2'}
          title="Adicionar refeição"
          variant={'outline'}
        >
          <Plus />
        </Button>

      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>
                Adicionar Refeição
              </Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <Stack>
                <SelectMeal />
                <SelectFood />
                <Field.Root>
                  <Field.Label>
                    Quantidade
                  </Field.Label>
                  <Input placeholder="Quantidade" />
                </ Field.Root>


              </Stack>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline">Cancelar</Button>
              </Dialog.ActionTrigger>
              <Button>Salvar</Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>

  )
}

function SelectFood() {

  const { data, isLoading } = api('alimentos')

  if(isLoading) {
    return <></>
  }

  console.log(data)

  return (
   <Field.Root>
      <Field.Label>
        Alimento
      </Field.Label>
      <NativeSelect.Field>
        {data?.map((food:any) => (
          <option
            key={food.row_number}
            value={food.Nome}>
            {food.Nome}
          </option>
        ))}
      </NativeSelect.Field>
    </Field.Root>
  )
}

function SelectMeal() {
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
        <NativeSelect.Field>
          {meals.map((meal) => (
            <option
              key={meal.value}
              value={meal.value}>
              {meal.label}
            </option>
          ))}
        </NativeSelect.Field>
        <NativeSelect.Indicator />
      </NativeSelect.Root>
    </Field.Root>
  )
}
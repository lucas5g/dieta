import { Button, createListCollection, Dialog, Field, Input, NativeSelect, Portal, Select } from "@chakra-ui/react";
import { Plus } from "lucide-react";



export function FoodForm() {
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
              <SelectMeal />
              <Input placeholder="Quantidade" />
              <Input placeholder="Alimento" />
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
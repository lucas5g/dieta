import type { MealInterface } from "@/pages/Meal";
import { Button, Card, Flex, Stack, Table, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Plus } from 'lucide-react'
import { FoodForm } from "@/components/FoodForm";
interface Props {
  name: 'café da manhã' | 'almoço' | 'lanche' | 'jantar',
  meals: MealInterface[] | undefined
}

export function FoodCard({ name, meals }: Readonly<Props>) {

  const [list, setList] = useState<MealInterface[]>([])

  useEffect(() => {
    setList(meals?.filter((meal) => meal.Refeição === name) || [])
    // console.log("rodouuuu")
  }, [name, meals])



  function upperFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // console.log(list)

  return (
    <Card.Root width={'100%'}>
      <Card.Header>
        <Card.Title>
          {upperFirstLetter(name)}

        </Card.Title>

      </Card.Header>
      <Card.Body overflowX={"auto"} gap={2}>

        {list.length > 0 &&

          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>N°</Table.ColumnHeader>
                <Table.ColumnHeader>QTD</Table.ColumnHeader>
                <Table.ColumnHeader>Alimento</Table.ColumnHeader>
                <Table.ColumnHeader>Proteínas</Table.ColumnHeader>
                <Table.ColumnHeader>Gorduras</Table.ColumnHeader>
                <Table.ColumnHeader>Carboidratos</Table.ColumnHeader>
                <Table.ColumnHeader>Calorias</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {list.map((meal) => (
                <Table.Row key={meal.row_number}>
                  <Table.Cell>{meal.row_number - 1}</Table.Cell>
                  <Table.Cell>{meal.Quantidade}</Table.Cell>
                  <Table.Cell>{meal.Alimento}</Table.Cell>
                  <Table.Cell>{meal.Proteínas}</Table.Cell>
                  <Table.Cell>{meal.Gorduras}</Table.Cell>
                  <Table.Cell>{meal.Carboidratos}</Table.Cell>
                  <Table.Cell>{meal.Calorias}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        }
        <Flex
          gap={2}
          justifyContent={'space-between'}
          alignItems={'center'}
        >

          {list.length === 0
            ? <Text color={'fg.muted'}>Sem refeição</Text>
            : <span></span>
          }

          <FoodForm />
        </Flex>
      </Card.Body>
    </Card.Root >
  )
}
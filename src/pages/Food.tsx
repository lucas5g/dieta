import { api } from "@/utils/api"
import { Card, Flex, HStack, Skeleton, SkeletonCircle, SkeletonText, Stack, Table, TableCon } from "@chakra-ui/react"
import { useEffect, useState } from "react"

export interface FoodInterface {
  row_number: number
  name: string
  protein: number
  fat: number
  carbo: number
  fiber: number
  calorie: number

}
export function Food() {

  const { data, isLoading } = api('foods')

  if (isLoading) {
    return <SkeletonText noOfLines={3} gap="4" />
  }

  return (

    <Card.Root width={'100%'}>
      <Card.Header>
        <Card.Title>Alimentos</Card.Title>
      </Card.Header>
      <Card.Body>

        <Table.ScrollArea>
          <Table.Root >
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>N°</Table.ColumnHeader>
                <Table.ColumnHeader>Nome</Table.ColumnHeader>
                <Table.ColumnHeader>Proteínas</Table.ColumnHeader>
                <Table.ColumnHeader>Gorduras</Table.ColumnHeader>
                <Table.ColumnHeader>Carboidratos</Table.ColumnHeader>
                <Table.ColumnHeader>Fibras</Table.ColumnHeader>
                <Table.ColumnHeader>Calorias</Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {data?.map((food: FoodInterface) => (
                <Table.Row key={food.row_number}>
                  <Table.Cell>{food.row_number - 1}</Table.Cell>
                  <Table.Cell>{food.name}</Table.Cell>
                  <Table.Cell>{food.protein} </Table.Cell>
                  <Table.Cell>{food.fat}</Table.Cell>
                  <Table.Cell>{food.carbo}</Table.Cell>
                  <Table.Cell>{food.fiber}</Table.Cell>
                  <Table.Cell>{food.calorie}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root >
        </Table.ScrollArea>
      </Card.Body>
    </Card.Root>
  )
}
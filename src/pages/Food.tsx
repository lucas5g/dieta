import { Card, Flex, Table } from "@chakra-ui/react"
import { useEffect, useState } from "react"

export function Food() {
  const [foods, setFoods] = useState<[{
    row_number: number
    Nome: string
    Proteínas: number
    Gorduras: number
    Carboidratos: number
    Fibras: number
    Calorias: number

  }]>()

  useEffect(() => {
    fetch('https://n8n.dizelequefez.com.br/webhook/alimentos')
      .then((response) => response.json())
      .then((data) => setFoods(data))
  }, [])

  return (

    <Card.Root width={'100%'}>
      <Card.Header>
        <Card.Title>Alimentos</Card.Title>
      </Card.Header>
      <Card.Body>

        <Table.Root>
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
            {foods?.map(food => (
              <Table.Row key={food.row_number}>
                <Table.Cell>{food.row_number - 1}</Table.Cell>
                <Table.Cell>{food.Nome}</Table.Cell>
                <Table.Cell>{food['Proteínas'] || 0} </Table.Cell>
                <Table.Cell>{food['Gorduras'] || 0}</Table.Cell>
                <Table.Cell>{food['Carboidratos'] || 0}</Table.Cell>
                <Table.Cell>{food['Fibras'] || 0}</Table.Cell>
                <Table.Cell>{food['Calorias']}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root >
      </Card.Body>
    </Card.Root>
  )
}
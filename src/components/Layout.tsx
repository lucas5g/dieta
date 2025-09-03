import { Flex, Stack } from "@chakra-ui/react";
import { Link, Outlet } from "react-router";

export function Layout() {
  return (
    <Flex
      flexDirection={'column'}
      gap={5}
    // justifyContent={'center'}
    // padding={10}
    // alignItems={'center'}
    // height={'90vh'}
    // background={'gray.900'}
    >
      <Navbar />
      <Flex
        padding={5}
        >
        <Outlet />
      </Flex>
    </Flex>
  )
}

function Navbar() {
  return (
    <Flex
      gap={5}
      padding={5}
      justifyContent={'end'}
      background={'gray.900'}
    >

      <Link to="/refeicoes">Refeições</Link>
      <Link to="/alimentos">Alimentos</Link>

    </Flex>
  )
}
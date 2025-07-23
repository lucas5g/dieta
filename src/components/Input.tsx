import { Field, Input as ChakraInput, type InputProps } from "@chakra-ui/react";

interface Props extends InputProps {}

export function Input(props: Props) {
  return (
    <Field.Root>
      <Field.Label>
        {props.placeholder}
      </Field.Label>
      <ChakraInput {...props} />
    </Field.Root>
  )
}
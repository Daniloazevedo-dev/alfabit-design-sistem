import { Meta, StoryObj } from "@storybook/react"

import TextBlock, { TextBlockProps } from "./TextBlock"

const meta: Meta = {
  title: "Molecules/TextBlock",
  component: TextBlock,
  argTypes: {
    className: {
      type: "string"
    }
  }
}

export default meta

export const Primary: StoryObj<TextBlockProps> = {
  args: {
    title: "Título",
    textBlock: "Essa passagem é um texto fictício usado tradicionalmente em design gráfico para preencher espaços de texto. Ela geralmente não tem um significado específico em português ou em qualquer outra língua. Se precisar de mais alguma coisa, estou à disposição!"
  }
}
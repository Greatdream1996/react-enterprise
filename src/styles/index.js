import styled from 'styled-components'

export const ViewStyle = styled.div.attrs((props) => {
  return {
    $tcolor: props.color || '#eeeeee'
  }
})`
  background-color: ${(props) => props.$tcolor};
  .font-color {
    color: red;
  }
`

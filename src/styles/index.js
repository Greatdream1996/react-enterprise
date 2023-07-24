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
  .headerStyle {
    text-align: center;
    color: #fff;
    height: 64;
    padding-inline: 50;
    line-height: 64px;
    background-color: #7dbcea;
  }
  .contentStyle {
    text-align: center;
    min-height: 120;
    line-height: 120px;
    color: #fff;
    background-color: #108ee9;
  }
  .siderStyle {
    text-align: center;
    line-height: 120px;
    color: #fff;
    background-color: #3ba0e9;
  }
  .footerStyle {
    text-align: center;
    color: #fff;
    background-color: #7dbcea;
  }
  .layout {
    height: 100vh;
  }
`

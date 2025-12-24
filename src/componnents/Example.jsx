import styled from 'styled-components'

const MyButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`

export default function Example() {
    return (
        <MyButton onClick={() => alert('클릭')}>
            클릭해보세요
        </MyButton>
    )
}

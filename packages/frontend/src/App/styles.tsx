import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #7159c1;
`

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 300px;

  input {
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 10px;
    font-size: 16px;
    width: 100%;
  }
`

export const SubmitButton = styled.button.attrs({
  type: 'submit'
})`
  background: #63f5b8;
  border: 0;
  padding: 0 15px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 15px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background: #52d89f;
  }
`

export const Code = styled.pre`
  font-family: 'Fira Code', monospace;
  background-color: #24292e;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  margin-top: 45px;
  width: 300px;
  overflow-x: hidden;
  overflow-y: hidden;
  text-overflow: ellipsis;
`

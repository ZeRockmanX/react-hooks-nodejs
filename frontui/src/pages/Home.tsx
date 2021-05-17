import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import styled from 'styled-components';

type Props = RouteComponentProps<{ id: string }>;

const Wrapper = styled.div`
  height: auto;
`;

export default withRouter((props: Props) => {
  const [id, SetId] = React.useState('Init Data');

  const replaceFunc = () => {
    SetId("Replace Data: " + new Date)
  }

  console.log(props)

  return (
    <Wrapper>
      Hello World - {id}
      <br />
      <a onClick={replaceFunc}>Test Click</a>
    </Wrapper>
  )
});

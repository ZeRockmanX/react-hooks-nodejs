import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

type Props = RouteComponentProps<{ id: string }>;

export default withRouter((props: Props) => {

  const [id, SetId] = React.useState('Init Data');

  const abc = () => {
    SetId("aabbcc")
  }
  return (
    <div>
      Hello World {id}
      <br />
      <a onClick={abc}>123</a>
    </div>
  )
});

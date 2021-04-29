import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

type Props = RouteComponentProps<{ id: string }>;

export default withRouter((props: Props) => {
  return (
    <div>
      Url: {props.match.params.id} is open
    </div>
  )
});

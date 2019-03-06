import { compose, pure } from 'recompose'
import { graphql } from 'react-apollo'
import { adminQuery } from '../../api'
import { default as Loading } from './_loading'

const connectionData = graphql(adminQuery, {
  options: { fetchPolicy: 'network-only' },
});
const ConnectionResult = ({ data, children }) => data._checkAdmin ? children : "";

export default compose(connectionData, Loading, pure)(ConnectionResult);
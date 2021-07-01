/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the UI Kitten TypeScript explorer42
 * https://github.com/akveo/react-native-ui-kitten
 *
 * Documentation: https://akveo.github.io/react-native-ui-kitten/docs
 *
 * @format
 */

import React, {ReactPropTypes} from 'react';
import {ImageProps, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Button, Icon, Text} from '@ui-kitten/components';
import axios from 'axios';

import {getUsers} from './redux/actions';

const config = {
  client: {
    id: '2d7be3399475a899fc03b75a387cc6a254acab9003e3fa407d9bf75dc1837f03',
    secret: '1a79d2e6a3bdfaa8e0c5f8834d7f99b04cfbc2097a6c1ad03ed3d5b1d0bf8f52',
  },
  auth: {
    tokenHost: 'https://api.intra.42.fr',
  },
};

export interface UserInfos {
  created_at: string;
  id: number;
  login: string;
  updated_at: string;
  url: string;
}

/**
 * Use any valid `name` property from eva icons (e.g `github`, or `heart-outline`)
 * https://akveo.github.io/eva-icons
 */
const HeartIcon = (
  props?: Partial<ImageProps>,
): React.ReactElement<ImageProps> => <Icon {...props} name="search-outline" />;

async function run() {
  let res = await axios.post('https://api.intra.42.fr/oauth/token', {
    grant_type: 'client_credentials',
    client_id:
      '2d7be3399475a899fc03b75a387cc6a254acab9003e3fa407d9bf75dc1837f03',
    client_secret:
      '1a79d2e6a3bdfaa8e0c5f8834d7f99b04cfbc2097a6c1ad03ed3d5b1d0bf8f52',
  });

  console.log(res.data.access_token);
  const token = res.data.access_token;

  res = await axios.get('https://api.intra.42.fr/v2/cursus/42/users', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log(res.data);
}

// type RequestOauthProps {
//   dispatch: f
// }

const RequestOauth = (props: any) => {
  const runGetUsers = () => {
    props.dispatch(getUsers());
  };

  return (
    <>
      <Button
        style={styles.likeButton}
        accessoryLeft={HeartIcon}
        onPress={() => runGetUsers()}>
        request
      </Button>
    </>
  );
};

const styles = StyleSheet.create({
  likeButton: {
    marginVertical: 16,
  },
});

export default connect()(RequestOauth);

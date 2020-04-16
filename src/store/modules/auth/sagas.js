import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';
import { parseISO, format } from 'date-fns';

import { signInSuccess, signFailure } from './actions';
import api from '~/services/api';

export function* singIn({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `deliverymen/${id}`);
    yield put(
      signInSuccess(id, {
        name: response.data.name,
        email: response.data.email,
        created_at: format(parseISO(response.data.created_at), 'dd/MM/yyyy'),
        avatar: response.data.avatar,
      })
    );
  } catch (err) {
    Alert.alert(
      'Falha na autenticação',
      'Houve um erro ao efetuar o login, verifique seus dados'
    );
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', singIn)]);

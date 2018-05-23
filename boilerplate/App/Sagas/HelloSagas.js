import { call, put } from "redux-saga/effects";
import { path } from "ramda";
import HelloActions from "../Redux/HelloRedux";
import * as Queries from "../GraphQL/queries";

export function* getHello({ payload }) {
  const { client } = payload;

  const query = Queries.getHello();
  const { data } = yield call(client().query, query);
  console.tron.plog("getHello data", { data });

  if (data.hello) {
    yield put(HelloActions.gotHello(data.hello));
  } else {
    yield put(HelloActions.helloFailure());
  }
}

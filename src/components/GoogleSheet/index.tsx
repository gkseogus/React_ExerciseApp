import React, { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

declare const window: Window & {
    gapi: any;
  };
 

var CLIENT_ID = '468304921430-6juo28nrclm5l6jtieca5koopgkt01r6.apps.googleusercontent.com';
var API_KEY = 'AIzaSyAZgIPp58hO1P6Fps43ADOHuYrHwS9GITg';

var DISCOVERY_DOCS = ['https://sheets.googleapis.com/$discovery/rest?version=v4'];

var SCOPES = 'https://www.googleapis.com/auth/spreadsheets.readonly';

export const AuthController = ({ fetchRequest }: any) => {
  const dispatch = useDispatch();

  const updateSigninStatus = useCallback((isSignedIn: boolean) => {

      // 로그인 성공시 스프레트 시트를 불러옴
      window.gapi.client.sheets.spreadsheets.values
        .get({
          spreadsheetId: '1IRgIFpdzgBnPbWOKDQyTYndhRsxQMKYdfH989n6fRQQ',
          range: 'A2:E6',
        })
        .then((response: any) => {
          dispatch(fetchRequest(
            response.result.values.map((row: string[]) => ({
              name: row[0],
              price: parseInt(row[1]),
              flatness: row[2],
              brand: row[3],
              image: row[4]
            }))
          ));
        });
  }, [dispatch, fetchRequest]);

  useEffect(() => {
    // 구글 auth 모듈 초기 내용 설정
    window.gapi.load('client:auth2', async () => {
      try {
        await window.gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS, 
          scope: SCOPES
        });
      } catch (error) {
        alert(error);
      }
    });
  }, [updateSigninStatus]);

  return (
    <>
    </>
  );
}
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchRequest } from "../../store/inventory/action";

const LoginBtn = styled.button`
  background-color:transparent;
  outline: 0;
  color: white;
  &:hover{
    background: linear-gradient(to right top, #000000, #BCFF66);
    color: #BCFF66;
    -webkit-background-clip: text;
  }
`

declare const window: Window & {
    gapi: any;
  };
 

var CLIENT_ID = '315488453608-u11q14rfsiksqap2qikabjad8rlrl7tv.apps.googleusercontent.com';
var API_KEY = 'AIzaSyBJVmcqT9BpI-GsriTumqHiykRNgZ2HGOU';

var DISCOVERY_DOCS = ['https://sheets.googleapis.com/$discovery/rest?version=v4'];

var SCOPES = 'https://www.googleapis.com/auth/spreadsheets.readonly';

export const AuthController = () => {
  const dispatch = useDispatch();
  const [isSignedIn, setIsSignedIn] = useState(false);

  const updateSigninStatus = useCallback((isSignedIn: boolean) => {
    setIsSignedIn(isSignedIn);
    
    if (isSignedIn){
      window.gapi.client.sheets.spreadsheets.values
        .get({
          spreadsheetId: '1IRgIFpdzgBnPbWOKDQyTYndhRsxQMKYdfH989n6fRQQ',
          range: 'A2:E100',
        })
        .then((response: any) => {
          dispatch(fetchRequest(
            response.result.values.map((row: string[]) => ({
              name: row[0],
              price: row[1],
              flatness: row[2],
              brand: row[3],
              image: row[4]
            }))
          ));
        });
      } else{
        fetchRequest([]);
      }
  }, [dispatch]);

  // 버튼 클릭 시 사용자를 로그인
  const handleAuthClick = () => {
    window.gapi.auth2.getAuthInstance().signIn();
  };

  // 버튼 클릭 시 사용자를 로그아웃
  const handleSignoutClick = () => {
    window.gapi.auth2.getAuthInstance().signOut();
  }; 
  
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
        // 로그인 상태 변경을 위한 listen(연결 요청 대기 메소드)
        window.gapi.auth2
        .getAuthInstance()
        .isSignedIn.listen(updateSigninStatus);

        // 초기 로그인 상태를 처리
        updateSigninStatus(
          window.gapi.auth2.getAuthInstance().isSignedIn.get()
        );
      } catch (error) {
        alert(error);
      }
    });
  }, [updateSigninStatus]);

  return (
    <>
      {isSignedIn ? (
        <LoginBtn id="signout_Button"  onClick={handleSignoutClick}>
          Sign Out
        </LoginBtn>
      ) : (
        <LoginBtn id="authorize_Button" onClick={handleAuthClick}>
          Sign in
        </LoginBtn>
      )}
    </>
  );
}

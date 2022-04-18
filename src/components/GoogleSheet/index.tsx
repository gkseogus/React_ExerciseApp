import { useDispatch } from "react-redux";
import { fetchRequest } from "../../store/inventory/action";

declare const window: Window & {
    gapi: any;
  };
 
const dispatch = useDispatch();  

export const loadTodaySheet = async () => {

    window.gapi.client.sheets.spreadsheets.values
    .get({
      spreadsheetId: '1IRgIFpdzgBnPbWOKDQyTYndhRsxQMKYdfH989n6fRQQ',
      range: 'A2:E6',
    })
    .then((res: any) => {
      if(res.status === 200){
        res.json().then((data: any) => {
          const apiData = data
          dispatch(fetchRequest(
            apiData.map((row: string[]) => ({
              name: row[0],
              price: parseInt(row[1]),
              flatness: row[2],
              brand: row[3],
              image: row[4]
            }))
          ));
        })
      }
      console.log('test')
    });
}
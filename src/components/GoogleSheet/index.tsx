import { fetchRequest } from "../../store/inventory/action";

declare const window: Window & {
    gapi: any;
  };
 
  
export const loadTodaySheet = async () => {
    window.gapi.client.sheets.spreadsheets.values
    .get({
      spreadsheetId: '1IRgIFpdzgBnPbWOKDQyTYndhRsxQMKYdfH989n6fRQQ',
      range: 'A1:E6',
    })
    .then((response: any) => {
      fetchRequest(
        response.result.values.map((row: string[]) => ({
          name: row[0],
          price: parseInt(row[1]),
          flatness: row[2],
          brand: row[3]
        }))
      );
      console.log('test')
    });
}
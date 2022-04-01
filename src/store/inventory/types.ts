export interface Inventory {
  team: string;
  user: string;
  checkIn: number;
  checkOut: number;
  workTime: string;
  workState: string;
  homeWork: string;
  key: number;
};

// 전송 가능한 액션 유형
export const FETCH_SUCCESS = '@@inventory/FETCH_SUCCESS'; // 성공적인 응답
export const FETCH_UPDATE = '@@inventory/FETCH_UPDATE'; // 업데이트
export const FETCH_ERROR = '@@inventory/FETCH_ERROR'; // 에러

export interface InventoryState {
  readonly loading: boolean;
  readonly data: Inventory[];
  readonly update: Inventory[];
  readonly errors?: string;
};

export interface Inventory {
  name: string;
  price: string;
  flatness: string;
  shop: string;
};

// 전송 가능한 액션 유형
export const FETCH_SUCCESS = '@@inventory/FETCH_SUCCESS'; // 성공적인 응답
export const FETCH_ERROR = '@@inventory/FETCH_ERROR'; // 에러

export interface InventoryState {
  readonly loading: boolean;
  readonly data: Inventory[];
  readonly errors?: string;
};

// 초기 상태 정의
const initialState = {
  value: 0
}

// 리듀서 함수 정의
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        value: state.value + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        value: state.value - 1
      }
    default:
      return state
  }
}

export default counterReducer

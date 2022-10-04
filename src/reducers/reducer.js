export const initialValue = {
  fullname: "",
  displayname: "",
  WorkspaceName: "",
  url: "",
  toggle: true,
};
// To save all form values

export const reducer = (state = initialValue, { type, payload }) => {
  switch (type) {
    
    case "page1":
      return {
        ...state,
        fullname: payload.fName,
        displayname: payload.dName,
      };
      
    case "page2":
      return {
        ...state,
        WorkspaceName: payload.WorkspaceName,
        url: payload.url,
      };
      
    case "page3":
      return {
        ...state,
        toggle: payload.toggle,
      };
      

    default:
      break;
  }
};

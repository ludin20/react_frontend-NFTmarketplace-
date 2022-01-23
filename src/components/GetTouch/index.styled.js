import styled from "styled-components";
export const CardContainer = styled.div`
  width: 700px;
  height: 238px;
  background-color: rgba(153, 153, 153,0.4);
  border-radius: 50px;
  margin: 20px;
  margin-left:250px;
`;
export const SelectButton = styled.div`
  width: 100%;
`;
// export const CardImage = styled.img`
//   border-top-left-radius: 20px;
//   border-top-right-radius: 20px;
//   object-fit: cover;
//   width: 100%;
//   height: 350px;
//`;
export const CardContent = styled.div`
  
  margin-top: 38px;
  margin-left:30px;
  width:1500px;
  font-border:200px;
  flex-direction:row;  
  color:white;
  font-size:30px;  
`;
export const CardDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: white;
  font-size: 10px;
  padding: 10px;
  img{
    border-radius:50%;
  }
`;
export const CardButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

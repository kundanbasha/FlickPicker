import styled from "styled-components";

const Rect = styled.div`
  height: ${props => (props.height ? props.height + "px" : "0")};
  width: ${props => (props.width ? props.width + "px" : "0")};
  background-color:${props => (props.color ? props.color : "#999")}
  margin-top: ${props => (props.mt ? props.mt + "rem" : "0rem")};
  margin-right: ${props => (props.mr ? props.mr + "rem" : "0rem")};
  margin-bottom: ${props => (props.mb ? props.mb + "rem" : "0rem")};
  margin-left: ${props => (props.ml ? props.ml + "rem" : "0rem")};
  padding-top: ${props => (props.pt ? props.pt + "rem" : "0rem")};
  padding-right: ${props => (props.pr ? props.pr + "rem" : "0rem")};
  padding-bottom: ${props => (props.pb ? props.pb + "rem" : "0rem")};
  padding-left: ${props => (props.pl ? props.pl + "rem" : "0rem")};
`;

export default Rect;

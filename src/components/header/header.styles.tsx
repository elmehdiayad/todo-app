import styled from "styled-components";
import { COLORS } from "../../assets/styles";

export default {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 80px;
    height: 65px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.07);
    position: sticky;
    top: 0px;
    background-color: ${COLORS.WHITE};
    z-index: 1;
  `,
  Logo: styled.img`
    width: 53px;
    height: 53px;
  `,
};

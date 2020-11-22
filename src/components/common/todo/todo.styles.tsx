import styled from "styled-components";
import { COLORS, containerStyle, FONTS } from "../../../assets/styles";

export default {
  Container: styled.div`
    ${containerStyle}
    padding: 16px;
    margin-bottom: 11px;
  `,
  Title: styled.div`
    font-family: ${FONTS.SEGOE_UI};
    font-size: 16px;
    line-height: 21px;
    color: ${COLORS.DARK_BLUE};
    margin-bottom: 12px;
  `,
  Description: styled.div`
    font-family: ${FONTS.SEGOE_UI};
    font-weight: 350;
    font-size: 14px;
    line-height: 19px;
    color: ${COLORS.GREY};
  `,
};

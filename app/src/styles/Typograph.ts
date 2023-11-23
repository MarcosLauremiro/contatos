import styled, { css } from "styled-components";

type ITypograph = {
    color: 'black' | 'white'
    fontSize: 'xxl' | "xl" | "l" | "m" | "p";
    fontWeight: "regular" | "medium" | "bold"
}

export const Typograph = css<ITypograph>`
    line-height: 1.5;

    ${({color}) => {
        switch (color) {
            case 'black':
                return css`
                    color: ${(props) => props.theme.colors.black};
                `
            case 'white':
                return css`
                    color: ${(props) => props.theme.colors.white}
                `
        }
    }}

    ${({fontSize}) => {
        switch (fontSize){
            case 'xxl':
                return css`
                    font-size: 2.5rem;
                `
            case 'xl':
                return css`
                    font-size: 2rem;
                `
            case 'l':
                return css`
                    font-size: 1.5rem;
                `
            case 'm':
                return css`
                    font-size: 1rem;
                `
            case 'p':
                return css`
                    font-size: 0.75rem;
                `
        }
    }}

    ${({fontWeight}) => {
        switch (fontWeight){
            case 'bold':
                return css`
                    font-weight: 700;
                `
            case 'medium':
                return css`
                    font-weight: 500;
                `
            case 'regular':
                return css`
                    font-weight: 400;
                `
        }
    }}
`

export const TitlesStyled = styled.h1<ITypograph>`
    ${Typograph}
`
export const ParagraphStyled = styled.p<ITypograph>`
    ${Typograph}
`
export const SpanStyled = styled.span<ITypograph>`
    ${Typograph}
`
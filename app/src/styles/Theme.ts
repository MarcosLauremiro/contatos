interface Theme {
    colors: {
        primary: string;
        secondary: string;
        background: string;

        black: string;
        gray_90: string;
        gray_80: string;
        gray_70: string;
        gray_60: string;
        gray_50: string;
        gray_40: string;
        gray_30: string;
        gray_20: string;
        gray_10: string;
        gray_00: string;
        white: string;
    },
    font: {
        size: {
            s: string;
            m: string;
            l: string;
            xl: string;
            xxl: string;
            xxxl: string;
        },
        weight: {
            light: number;
            regular: number;
            medium: number;
            bold: number;
        },
    }
}

export const theme: Theme = {
    colors: {
        primary: '#BDA523',
        secondary: '#E3C75F',
        background: '#16232E',

        black: '#000000',
        gray_90: '#212529',
        gray_80: '#343a40',
        gray_70: '#495057',
        gray_60: '#868e96',
        gray_50: '#adb5bd',
        gray_40: '#ced4da',
        gray_30: '#dee2e6',
        gray_20: '#e9ecef',
        gray_10: '#f1f3f5',
        gray_00: '#f8f9fa',
        white: '#FFFFFF',
    },
    font: {
        size: {
            s: '0.75rem',
            m: '1rem',
            l: '1.25rem',
            xl: '1.5rem',
            xxl: '1.75rem',
            xxxl: '2.25rem',
        },
        weight: {
            light: 300,
            regular: 400,
            medium: 500,
            bold: 700,
        },

    }
}
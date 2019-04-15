import { DefaultTheme } from 'react-native-paper';
const colors = {
    primary: '#0477BF',
    secondary: '',
    light: '#CCC',
    dark: '',
    danger: '#B00020'
}
export default {
    padded: {
        padding: 8
    },
    flRow: {
        flexDirection: 'row',
    },
    flColumn: {
        flexDirection: 'column',
    },
    txtInput: {
        backgroundColor: DefaultTheme.colors.surface
    },
    button: {
        width: '40%',
        borderColor: colors.primary,
    },
    fabLong: {
        margin: 16,
        right: 0,
        bottom: 0,
    },
    txtLarge: {
        fontSize: 24,
    },
    backgroundColor: {
        flex: 1,
        backgroundColor: '#f5f5f6'
    },
    bold: {
        fontWeight: 'bold'
    },
    boldWithColor: {
        fontWeight: 'bold',
        color: colors.primary
    },
    repProParent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignContent: 'flex-start',
        flexWrap: 'wrap',
        flex: 1,
    },
    error: {
        color: colors.danger
    }
};
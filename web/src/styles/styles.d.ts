import 'styled-components'

declare module 'styled-components'{
    export interface DefaultTheme {
        title: string;
        orange: Record<string,string>;
        gray: Record<string,string>;
        blue: Record<string,string>;

    }
}
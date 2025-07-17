/*This file is created with the purpose of overwrite default antd theme*/
import 'antd/es/theme/interface';

declare module 'antd/es/theme/interface' {
  interface GlobalToken {
    colorPrimary2?: string;
    colorPrimary3?: string;
    colorSecondary?: string;
    // Add any other custom tokens here
  }
}

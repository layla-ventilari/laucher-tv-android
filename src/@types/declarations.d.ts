declare module '@env' {
    export const API_URL: string;
  }
  
  declare module "*.png" {
    const value: any;
    export default value;
  }
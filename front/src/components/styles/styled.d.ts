import "styled-components";
import { templates, fonts } from "./theme";

declare module "styled-comonents" {
  export interface DefaultTheme {
    templates: typeof templates;
    fonts: typeof fonts;
  }
}

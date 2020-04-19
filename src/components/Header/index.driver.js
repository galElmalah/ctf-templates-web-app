import { Header } from '.'
 
const defaultProps = {}

export class HeaderDriver extends BaseUiDriver{
  constructor() {
    super({component: Header, defaultProps})
  }
}
import {DefaultOptionType} from 'antd/lib/select';
import {LabelInValueType, RawValueType} from 'rc-select/lib/Select';

export interface SearchBoxProps {
  getStockDetails: (
    value: RawValueType | LabelInValueType,
    option: DefaultOptionType,
  ) => void;
}

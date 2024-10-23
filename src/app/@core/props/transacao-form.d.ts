/* eslint-disable @typescript-eslint/no-explicit-any */

export interface TransacaoFormProps {
  isView?: boolean;
  isEdit?: boolean;
  formValues?: any;
  onSubmitAction?: (event?: any, values?: any) => void | any;
}

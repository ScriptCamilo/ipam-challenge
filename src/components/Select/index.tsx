import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import * as RadixSelect from '@radix-ui/react-select';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';

// import type { FederationUnityTypes } from 'services/useFederationUnity';

interface DataTypes {
  id: number;
  nome: string;
}

interface SelectProps {
  placeholder: string;
  data: DataTypes[] | undefined;
  onChange: ActionCreatorWithPayload<string, string>;
  isDisabled?: boolean;
  isLoading?: boolean;
}

export default function Select(props: SelectProps) {
  const { data, placeholder, onChange, isDisabled } = props;
  const dispatch = useDispatch();

  return (
    <RadixSelect.Root disabled={isDisabled} onValueChange={(value) => dispatch(onChange(value))}>
      <RadixSelect.Trigger className="SelectTrigger" aria-label={placeholder}>
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon>
          <ChevronDownIcon />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content className="SelectContent">
          <RadixSelect.ScrollUpButton className="SelectScrollButton">
            <ChevronUpIcon />
          </RadixSelect.ScrollUpButton>

          <RadixSelect.Viewport className="SelectViewport">

            {data && data.map((item) => (
              <Fragment key={item.id}>
                <RadixSelect.Item value={String(item.id)} className="SelectItem">
                  <RadixSelect.ItemText>
                    {item.nome}
                  </RadixSelect.ItemText>
                  <RadixSelect.ItemIndicator className="SelectItemIndicator">
                    <CheckIcon />
                  </RadixSelect.ItemIndicator>
                </RadixSelect.Item>
                <RadixSelect.Separator className="SelectSeparator" />
              </Fragment>
            ))}

          </RadixSelect.Viewport>
          <RadixSelect.ScrollDownButton className="SelectScrollButton">
            <ChevronDownIcon />
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
}

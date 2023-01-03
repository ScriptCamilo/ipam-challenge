import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import * as RadixSelect from '@radix-ui/react-select';
import Loading from 'components/Loading';
import { Fragment } from 'react';

import { Content, Icon, Item, ItemIndicator, scrollButton, Separator, Trigger, Viewport } from './styles';

interface DataTypes {
  id: number;
  nome: string;
}

interface SelectProps {
  placeholder: string;
  data: DataTypes[];
  onChange: (value: string) => void;
  isLoading?: boolean;
  value?: string;
}

export default function Select(props: SelectProps) {
  const { data, placeholder, isLoading, onChange } = props;
  const isDisabled = data?.length === 0;

  return (
    <RadixSelect.Root disabled={isDisabled} onValueChange={(value) => onChange(value)}>
      <Trigger aria-label={placeholder}>
        {isLoading ? <Loading /> : (
          <>
            <RadixSelect.Value placeholder={placeholder} />
            <Icon>
              <ChevronDownIcon />
            </Icon>
          </>
        )}
      </Trigger>

      <RadixSelect.Portal>
        <Content>
          <RadixSelect.ScrollUpButton className={scrollButton()}>
            <ChevronUpIcon />
          </RadixSelect.ScrollUpButton>

          <Viewport>
            {data.map((item, index, items) => (
              <Fragment key={item.id}>
                <Item value={String(item.id)}>
                  <RadixSelect.ItemText>
                    {item.nome}
                  </RadixSelect.ItemText>
                  <ItemIndicator>
                    <CheckIcon />
                  </ItemIndicator>
                </Item>

                {index !== items.length - 1 && <Separator />}
              </Fragment>
            ))}
          </Viewport>

          <RadixSelect.ScrollDownButton className={scrollButton()}>
            <ChevronDownIcon />
          </RadixSelect.ScrollDownButton>
        </Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
}

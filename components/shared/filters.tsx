import { Input } from "../ui";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <Title size="sm" text="Фильтрация" className="font-bold mb-4 mt-4"></Title>
            <div className="flex flex-col gap-4">
                <FilterCheckbox value="1" text="Можно собирать"/>
                <FilterCheckbox value="2" text="Новинки"/>
            </div>

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Цена от и до:</p>
                <div className="flex flex-col gap-3">
                    <Input type="number" placeholder="0" min={0} max={5000} defaultValue={0}/>
                    <Input type="number" min={0} max={5000} placeholder="5000"/>
                </div>
            </div>
            <CheckboxFiltersGroup
                className="mt-5"
                title="Ингридиенты"
                limit={6}
                defaultItems={[
                    {
                        text: 'Сырный соус',
                        value: '1',
                    },
                    {
                        text: 'Моцарелла',
                        value: '2',
                    },
                    {
                        text: 'Чеснок',
                        value: '3',
                    },
                    {
                        text: 'Солённые огурчики',
                        value: '4',
                    },
                    {
                        text: 'Красный лук',
                        value: '5',
                    },
                    {
                        text: 'Томаты',
                        value: '6',
                    },
                ]}
                items={[
                    {
                        text: 'Сырный соус',
                        value: '1',
                    },
                    {
                        text: 'Моцарелла',
                        value: '2',
                    },
                    {
                        text: 'Чеснок',
                        value: '3',
                    },
                    {
                        text: 'Солённые огурчики',
                        value: '4',
                    },
                    {
                        text: 'Красный лук',
                        value: '5',
                    },
                    {
                        text: 'Томаты',
                        value: '6',
                    },
                ]}
            />
        </div>
    );
}
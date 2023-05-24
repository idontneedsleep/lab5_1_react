import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import React from "react";

const schema = yup.object().shape({
    amount: yup.number().required().positive(),
    price: yup.number().required().positive(),
    weight: yup.number().required().positive(),
    length: yup.number().required().positive(),
    width: yup.number().required().positive(),
    height: yup.number().positive().required(),
    floorAmount: yup.number().positive(),
});

export function Form2() {

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
        /*mode: 'onChange',*/
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    const onError = (errors) => {
        console.log(errors);
    };

    const cities = [
        {
            id: 1,
            text: 'Житомир',
        },
        {
            id: 2,
            text: 'Київ',
        },
        {
            id: 3,
            text: 'Вінниця',
        },
        {
            id: 4,
            text: 'Біла Церква',
        },
        {
            id: 5,
            text: 'Хмельницький',
        },
        {
            id: 6,
            text: 'Миколаїв',
        },
        {
            id: 1,
            text: 'Львів',
        },
    ];
    const packages = [
        {
            id: 1,
            text: 'Вантажі',
        },
        {
            id: 2,
            text: 'Палети',
        },
    ];

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div className="container">
                <div className="label_main">Маршрут</div>
                <div className="container1">
                    <div><label>Місто-відправник</label></div>
                    <div><select name="citySender" {...register("citySender")} className="city_input" required>
                        {cities.map(
                            (item, index) =>
                                <option key={index} value={item.id.toString()}>{item.text}</option>
                        )}
                    </select></div>
                </div>
                <div className="container1">
                    <div><label>Місто-одержувач</label></div>
                    <div><select name="cityReceiver" {...register("cityReceiver")} className="city_input" required>
                        {cities.map(
                            (it, index) =>
                                <option key={index} value={it.id.toString()}>{it.text}</option>
                        )}
                    </select></div>
                </div>
            </div>
            <hr/>
            <div className="container">
                <div className="label_main">Вид відправлення</div>
                <select name="package" {...register("package")} required>
                    {packages.map(
                        (item, index) =>
                            <option key={index} value={item.id.toString()}>{item.text}</option>
                    )}
                </select>
            </div>
            <hr/>
            <div>
                Характеристика місць
                <div className="container">
                    <div className="container1">
                        <div><label>Кількість</label></div>
                        <div>
                            <input {...register("amount")} type="number" className="places" name="amount" required/>
                            <p>{errors.amount?.message}</p>
                        </div>
                    </div>
                    <div className="container1">
                        <div className="places1"><label>Оголошена вартість</label></div>
                        <div>
                            <input {...register("price")} type="text" className="places" name="price" required/>
                            <p>{errors.price?.message}</p>
                        </div>
                    </div>
                    <div className="places">ГРН</div>
                    <div className="container1">
                        <div><label>Вага</label></div>
                        <div>
                            <input {...register("weight")} type="text" className="places" name="weight" required/>
                            <p>{errors.weight?.message}</p>
                        </div>
                    </div>
                    <div className="places">КГ</div>
                    <div className="container1">
                        <div><label>Довжина</label></div>
                        <div>
                            <input {...register("length")} type="text" className="places" name="length" required/>
                            <p>{errors.length?.message}</p>
                        </div>
                    </div>
                    <div className="container1">
                        <div><label>Ширина</label></div>
                        <div>
                            <input {...register("width")} type="text" className="places" name="width" required/>
                            <p>{errors.width?.message}</p>
                        </div>
                    </div>
                    <div className="container1">
                        <div><label>Висота</label></div>
                        <div>
                            <input {...register("height")} type="text" className="places" name="height" required/>
                            <p>{errors.height?.message}</p>
                        </div>
                    </div>
                    <div>СМ</div>
                </div>
                <div>Додати місце</div>
            </div>
            <hr/>
            <div className="container">
                <div className="label_main">Послуга "Пакування"</div>
                <input type="checkbox" name="checkPack"/>
                <a href="https://novaposhta.ua/uploads/misc/doc/Dodatkovi_poslygi.pdf">Тарифи пакування</a>
            </div>
            <div className="container">
                <div className="label_main">Послуга "Підйом на поверх"</div>
                <input {...register("floorAmount")} type="text" name="floorAmount" className="input_floor"/>
                <div>кількість поверхів</div>
                <div>Ліфт</div>
                <input type="checkbox" name="checkLift"/>
            </div>
            <div className="container">
                <div className="label_main">Послуга "Зворотна доставка"</div>
                <input type="checkbox" name="checkBack"/>
            </div>
            <div className="buttons">
                <input type="submit" value="Розрахувати вартість"/>
                <input type="reset" value="Очистити"/>
            </div>
        </form>
    );
}